import { useState } from "react";

const R_DATA = 72;  // data hex radius
const R_BG = 42;    // background hex radius

const W_DATA = R_DATA * Math.sqrt(3);
const H_DATA = R_DATA * 2;

// Pointy-top hex center for data grid (axial coords)
function dataHexCenter(q: number, r: number): [number, number] {
  const x = W_DATA * q + (W_DATA / 2) * r;
  const y = (H_DATA * 3) / 4 * r;
  return [x, y];
}

function hexPoints(cx: number, cy: number, r: number) {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
  }).join(" ");
}

const SEGMENTS = [
  { key: "presale",    label: "Presale + Airdrops", pct: 45, q:  0, r:  0, fill: "#8fa670", stroke: "#6b8250", textColor: "#fff" },
  { key: "liquidity",  label: "Liquidity",           pct: 20, q:  1, r: -1, fill: "#a8bf88", stroke: "#8fa670", textColor: "#2a2d1f" },
  { key: "treasury",   label: "Treasury",            pct: 15, q:  1, r:  0, fill: "#f5f0e8", stroke: "#c8b98a", textColor: "#2a2d1f" },
  { key: "developers", label: "Developers",          pct: 12, q:  0, r:  1, fill: "#c8b98a", stroke: "#a89060", textColor: "#2a2d1f" },
  { key: "marketing",  label: "Marketing",           pct:  8, q: -1, r:  1, fill: "#e8e0d0", stroke: "#c8b98a", textColor: "#5a5d4a" },
];

const dataKeys = new Set(SEGMENTS.map((s) => `${s.q},${s.r}`));

// Sparse background grid — just a ring around the data hexagons
const BG_COORDS: [number, number][] = [];
for (let q = -3; q <= 4; q++) {
  for (let r = -2; r <= 3; r++) {
    if (!dataKeys.has(`${q},${r}`)) {
      BG_COORDS.push([q, r]);
    }
  }
}

export function TokenomicsHexagon() {
  const [hovered, setHovered] = useState<string | null>(null);

  // Place bg hexes in the gaps between data hexes using the same grid spacing
  // but scaled to bg size — we just position them at data-grid coords
  // and they'll sit in the visual gaps since they're smaller
  const W_BG = R_BG * Math.sqrt(3);
  const H_BG = R_BG * 2;

  function bgHexCenter(q: number, r: number): [number, number] {
    const x = W_DATA * q + (W_DATA / 2) * r;
    const y = (H_DATA * 3) / 4 * r;
    return [x, y];
  }

  const allDataCenters = SEGMENTS.map((s) => dataHexCenter(s.q, s.r));
  const allBgCenters = BG_COORDS.map(([q, r]) => bgHexCenter(q, r));
  const allX = [...allDataCenters, ...allBgCenters].map(([x]) => x);
  const allY = [...allDataCenters, ...allBgCenters].map(([, y]) => y);

  const pad = R_DATA + 12;
  const minX = Math.min(...allX) - pad;
  const minY = Math.min(...allY) - pad;
  const maxX = Math.max(...allX) + pad;
  const maxY = Math.max(...allY) + pad;

  return (
    <div className="w-full overflow-hidden">
      <svg viewBox={`${minX} ${minY} ${maxX - minX} ${maxY - minY}`} className="w-full h-auto">

        {/* Background hexagons — same grid positions, smaller size */}
        {BG_COORDS.map(([q, r]) => {
          const [cx, cy] = bgHexCenter(q, r);
          return (
            <polygon
              key={`bg-${q}-${r}`}
              points={hexPoints(cx, cy, R_BG - 2)}
              fill="white"
              stroke="#e8e4da"
              strokeWidth="1.5"
            />
          );
        })}

        {/* Data hexagons */}
        {SEGMENTS.map((s) => {
          const [cx, cy] = dataHexCenter(s.q, s.r);
          const isHov = hovered === s.key;
          const words = s.label.split(" ");
          const mid = Math.ceil(words.length / 2);
          const line1 = words.slice(0, mid).join(" ");
          const line2 = words.slice(mid).join(" ");

          return (
            <g
              key={s.key}
              onMouseEnter={() => setHovered(s.key)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: "default" }}
            >
              <polygon
                points={hexPoints(cx, cy, R_DATA - 2)}
                fill={s.fill}
                stroke={s.stroke}
                strokeWidth={isHov ? "3" : "2"}
                style={{
                  transition: "all 0.2s ease",
                  filter: isHov ? `drop-shadow(0 3px 10px ${s.stroke}99)` : "none",
                }}
              />

              <text x={cx} y={cy - 10} textAnchor="middle" fontSize="22" fontWeight="700" fill={s.textColor} fontFamily="system-ui, sans-serif">
                {s.pct}%
              </text>

              {line2 ? (
                <>
                  <text x={cx} y={cy + 10} textAnchor="middle" fontSize="11" fill={s.textColor} fontFamily="system-ui, sans-serif" opacity="0.85">{line1}</text>
                  <text x={cx} y={cy + 24} textAnchor="middle" fontSize="11" fill={s.textColor} fontFamily="system-ui, sans-serif" opacity="0.85">{line2}</text>
                </>
              ) : (
                <text x={cx} y={cy + 14} textAnchor="middle" fontSize="11" fill={s.textColor} fontFamily="system-ui, sans-serif" opacity="0.85">{line1}</text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
