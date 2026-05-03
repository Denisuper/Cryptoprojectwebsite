import { useState } from "react";
import { motion } from "motion/react";

interface PieChartProps {
  data: Array<{
    label: string;
    percentage: number;
    color: string;
  }>;
}

export function InteractivePieChart({ data }: PieChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Calculate cumulative percentages for positioning
  let cumulativePercentage = 0;
  
  const segments = data.map((item, index) => {
    const startPercentage = cumulativePercentage;
    cumulativePercentage += item.percentage;
    
    const startAngle = (startPercentage / 100) * 360;
    const endAngle = (cumulativePercentage / 100) * 360;
    const middleAngle = (startAngle + endAngle) / 2;
    
    return {
      ...item,
      startAngle,
      endAngle,
      middleAngle,
    };
  });
  
  const createArcPath = (startAngle: number, endAngle: number, isHovered: boolean) => {
    const radius = isHovered ? 95 : 90;
    const startRad = (startAngle - 90) * (Math.PI / 180);
    const endRad = (endAngle - 90) * (Math.PI / 180);
    
    const x1 = 100 + radius * Math.cos(startRad);
    const y1 = 100 + radius * Math.sin(startRad);
    const x2 = 100 + radius * Math.cos(endRad);
    const y2 = 100 + radius * Math.sin(endRad);
    
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    
    return `M 100 100 L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;
  };
  
  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg viewBox="0 0 200 200" className="w-full h-auto">
        {segments.map((segment, index) => {
          const isHovered = hoveredIndex === index;
          
          return (
            <g key={index}>
              <motion.path
                d={createArcPath(segment.startAngle, segment.endAngle, isHovered)}
                fill={segment.color}
                stroke="white"
                strokeWidth="2"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ cursor: 'pointer' }}
                animate={{
                  scale: isHovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.2 }}
              />
            </g>
          );
        })}
      </svg>
      
      {/* Hover tooltip */}
      {hoveredIndex !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-[#8fa670] rounded-xl px-6 py-4 shadow-lg pointer-events-none"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-[#2a2d1f]">
              {segments[hoveredIndex].percentage}%
            </div>
            <div className="text-sm text-[#5a5d4a] whitespace-nowrap">
              {segments[hoveredIndex].label}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
