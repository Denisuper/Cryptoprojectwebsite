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
    const radius = isHovered ? 105 : 95;
    const innerRadius = isHovered ? 65 : 60;
    const startRad = (startAngle - 90) * (Math.PI / 180);
    const endRad = (endAngle - 90) * (Math.PI / 180);
    
    const x1 = 100 + radius * Math.cos(startRad);
    const y1 = 100 + radius * Math.sin(startRad);
    const x2 = 100 + radius * Math.cos(endRad);
    const y2 = 100 + radius * Math.sin(endRad);
    
    const ix1 = 100 + innerRadius * Math.cos(startRad);
    const iy1 = 100 + innerRadius * Math.sin(startRad);
    const ix2 = 100 + innerRadius * Math.cos(endRad);
    const iy2 = 100 + innerRadius * Math.sin(endRad);
    
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    
    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} L ${ix2} ${iy2} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${ix1} ${iy1} Z`;
  };
  
  return (
    <div className="flex flex-col items-center gap-8">
      {/* Main Chart */}
      <div className="relative w-full max-w-xs mx-auto">
        {/* Background circle for depth */}
        <svg viewBox="0 0 200 200" className="w-full h-auto drop-shadow-lg">
          {/* Subtle background circle */}
          <circle cx="100" cy="100" r="95" fill="none" stroke="#e5e5dc" strokeWidth="0.5" opacity="0.3" />
          
          {/* Pie segments */}
          {segments.map((segment, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <g key={index}>
                <motion.path
                  d={createArcPath(segment.startAngle, segment.endAngle, isHovered)}
                  fill={segment.color}
                  stroke="white"
                  strokeWidth="2.5"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{ cursor: 'pointer' }}
                  animate={{
                    filter: isHovered ? "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))" : "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.05))",
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                
                {/* Percentage labels on segments */}
                {segment.percentage >= 10 && (
                  <motion.text
                    x={(() => {
                      const labelRadius = isHovered ? 80 : 75;
                      const labelAngle = (segment.middleAngle - 90) * (Math.PI / 180);
                      return 100 + labelRadius * Math.cos(labelAngle);
                    })()}
                    y={(() => {
                      const labelRadius = isHovered ? 80 : 75;
                      const labelAngle = (segment.middleAngle - 90) * (Math.PI / 180);
                      return 100 + labelRadius * Math.sin(labelAngle);
                    })()}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-xs font-bold pointer-events-none select-none"
                    fill="white"
                    animate={{
                      opacity: isHovered ? 1 : 0.9,
                      fontSize: isHovered ? "13px" : "11px",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {segment.percentage}%
                  </motion.text>
                )}
              </g>
            );
          })}
          
          {/* Center circle for donut effect */}
          <circle cx="100" cy="100" r="60" fill="white" stroke="none" />
        </svg>
        
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="text-3xl font-bold text-[#2a2d1f]">100M</div>
          <div className="text-xs text-[#5a5d4a]">Total Supply</div>
        </div>
      </div>
      
      {/* Enhanced Hover Tooltip */}
      {hoveredIndex !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="bg-gradient-to-br from-white to-[#f9f9f5] border-2 border-[#8fa670] rounded-2xl px-8 py-6 shadow-xl max-w-sm"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div
                className="w-5 h-5 rounded-full shadow-md"
                style={{ backgroundColor: segments[hoveredIndex].color }}
              ></div>
              <div className="text-xl font-bold text-[#2a2d1f]">
                {segments[hoveredIndex].label}
              </div>
            </div>
            <div className="text-3xl font-bold text-[#8fa670]">
              {segments[hoveredIndex].percentage}%
            </div>
            <div className="text-sm text-[#5a5d4a] pt-1">
              {Math.round((segments[hoveredIndex].percentage / 100) * 100000000).toLocaleString()} tokens
            </div>
          </div>
        </motion.div>
      )}
      
      {/* Legend */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-3 p-3 rounded-lg bg-[#f5f5ef] border border-[#e5e5dc] hover:border-[#8fa670] transition-colors cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.02, backgroundColor: "#fafaf8" }}
          >
            <div
              className="w-4 h-4 rounded-full flex-shrink-0 shadow-sm"
              style={{ backgroundColor: item.color }}
            ></div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-[#2a2d1f] truncate">
                {item.label}
              </div>
              <div className="text-xs text-[#5a5d4a]">
                {item.percentage}% • {Math.round((item.percentage / 100) * 100000000).toLocaleString()} tokens
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
