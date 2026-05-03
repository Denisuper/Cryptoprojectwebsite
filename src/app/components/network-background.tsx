import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
}

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check if device is mobile (screen width < 768px)
    const isMobile = () => window.innerWidth < 768;

    // Don't initialize animation on mobile
    if (isMobile()) {
      return;
    }

    const resizeCanvas = () => {
      // Stop animation if screen becomes mobile
      if (isMobile()) {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Reinitialize nodes on resize
      initNodes();
    };

    const initNodes = () => {
      const nodeCount = 70;
      const centerWidth = 900;
      const centerX = canvas.width / 2;

      nodesRef.current = Array.from({ length: nodeCount }, () => {
        // 45% chance for left side, 55% chance for right side
        const isLeftSide = Math.random() < 0.45;
        let x: number;

        if (isLeftSide) {
          x = Math.random() * (centerX - centerWidth / 2);
        } else {
          x = (centerX + centerWidth / 2) + Math.random() * (canvas.width - (centerX + centerWidth / 2));
        }

        return {
          x,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          baseX: 0,
          baseY: 0,
        };
      });

      nodesRef.current.forEach((node) => {
        node.baseX = node.x;
        node.baseY = node.y;
      });
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const nodes = nodesRef.current;
      const mouse = mouseRef.current;

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Calculate distance to mouse
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 200;

        if (dist < maxDist) {
          // Push node away from mouse
          const force = (maxDist - dist) / maxDist;
          node.vx -= (dx / dist) * force * 0.5;
          node.vy -= (dy / dist) * force * 0.5;
        }

        // Add slight random movement
        node.vx += (Math.random() - 0.5) * 0.1;
        node.vy += (Math.random() - 0.5) * 0.1;

        // Return to base position
        const returnForce = 0.02;
        node.vx += (node.baseX - node.x) * returnForce;
        node.vy += (node.baseY - node.y) * returnForce;

        // Apply velocity with damping
        node.vx *= 0.92;
        node.vy *= 0.92;

        node.x += node.vx;
        node.y += node.vy;

        // Keep nodes constrained to their side
        const centerWidth = 900;
        const centerX = canvas.width / 2;
        const leftBoundary = centerX - centerWidth / 2;
        const rightBoundary = centerX + centerWidth / 2;

        // If node is on left side, keep it there
        if (node.baseX < leftBoundary && node.x > leftBoundary) {
          node.x = leftBoundary;
          node.vx *= -0.5;
        }
        // If node is on right side, keep it there
        if (node.baseX > rightBoundary && node.x < rightBoundary) {
          node.x = rightBoundary;
          node.vx *= -0.5;
        }

        // Keep within vertical bounds
        if (node.y < 0 || node.y > canvas.height) {
          node.y = Math.max(0, Math.min(canvas.height, node.y));
          node.vy *= -0.5;
        }
        // Keep within horizontal bounds
        if (node.x < 0 || node.x > canvas.width) {
          node.x = Math.max(0, Math.min(canvas.width, node.x));
          node.vx *= -0.5;
        }

        // Draw connections to nearby nodes
        nodes.forEach((otherNode, j) => {
          if (i >= j) return;

          const dx = otherNode.x - node.x;
          const dy = otherNode.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Main visible connections
          if (dist < 160) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.strokeStyle = `rgba(143, 166, 112, ${0.6 * (1 - dist / 160)})`;
            ctx.lineWidth = 2;
            ctx.stroke();
          }
          // Barely visible longer connections
          else if (dist < 280) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.strokeStyle = `rgba(143, 166, 112, ${0.08 * (1 - dist / 280)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = "#8fa670";
        ctx.fill();

        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#8fa670";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "auto" }}
    />
  );
}