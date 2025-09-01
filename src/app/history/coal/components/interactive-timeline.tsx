"use client"

import { useState, useEffect } from "react"
import { cn } from "../lib/utils"

// Coal usage data over time with corresponding section IDs
const data = [
  { year: 1800, usage: 10, global: 15, sectionId: "section-origins" },
  { year: 1825, usage: 25, global: 30, sectionId: "section-early-use" },
  { year: 1850, usage: 50, global: 60, sectionId: "section-britain" },
  { year: 1875, usage: 100, global: 120, sectionId: "section-coke" },
  { year: 1900, usage: 200, global: 250, sectionId: "section-steam" },
  { year: 1925, usage: 350, global: 400, sectionId: "section-watt" },
  { year: 1950, usage: 500, global: 600, sectionId: "section-factory" },
  { year: 1975, usage: 650, global: 800, sectionId: "section-transport" },
  { year: 2000, usage: 800, global: 1000, sectionId: "section-eastern-ascent" },
  { year: 2025, usage: 700, global: 1200, sectionId: "section-disruption" },
]

// Custom Card components
const Card = ({ 
  className, 
  children, 
  style,
  onMouseEnter,
  onMouseLeave,
  ...props 
}: { 
  className?: string; 
  children: React.ReactNode;
  style?: React.CSSProperties;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}) => (
  <div 
    className={cn("rounded-lg border border-amber-400/40 bg-orange-50 shadow-sm", className)} 
    style={style}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    {...props}
  >
    {children}
  </div>
)

const CardContent = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={cn("p-6", className)}>
    {children}
  </div>
)

// Custom Slider component
const Slider = ({ 
  defaultValue, 
  max, 
  step, 
  onValueChange, 
  className 
}: {
  defaultValue: number[]
  max: number
  step: number
  onValueChange: (value: number[]) => void
  className?: string
}) => {
  const [values, setValues] = useState(defaultValue)
  
  const handleStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStart = parseInt(e.target.value)
    const newValues = [newStart, Math.max(newStart, values[1])]
    setValues(newValues)
    onValueChange(newValues)
  }
  
  const handleEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEnd = parseInt(e.target.value)
    const newValues = [Math.min(values[0], newEnd), newEnd]
    setValues(newValues)
    onValueChange(newValues)
  }

  return (
    <div className={cn("relative", className)}>
      <input
        type="range"
        min={0}
        max={max}
        step={step}
        value={values[0]}
        onChange={handleStartChange}
        className="absolute w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer slider"
      />
      <input
        type="range"
        min={0}
        max={max}
        step={step}
        value={values[1]}
        onChange={handleEndChange}
        className="absolute w-full h-2 bg-transparent rounded-lg appearance-none cursor-pointer slider"
      />
    </div>
  )
}

// Simple SVG Chart Component
const SimpleChart = ({ 
  data, 
  width = 300, 
  height = 200, 
  hoveredData, 
  onHover, 
  onClick
}: {
  data: Array<{ year: number; usage: number; global: number }>;
  width?: number;
  height?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  hoveredData: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onHover: (data: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (data: any, index: any) => void;
}) => {
  const maxUsage = Math.max(...data.map(d => d.usage))
  const maxGlobal = Math.max(...data.map(d => d.global))
  const maxValue = Math.max(maxUsage, maxGlobal)
  
  const padding = 40
  const chartWidth = width - padding * 2
  const chartHeight = height - padding * 2
  
  const getX = (index: number) => padding + (index / (data.length - 1)) * chartWidth
  const getY = (value: number) => height - padding - (value / maxValue) * chartHeight

  return (
    <svg width={width} height={height} className="overflow-visible">
      {/* Grid lines */}
      {[0, 0.25, 0.5, 0.75, 1].map(ratio => (
        <line
          key={ratio}
          x1={padding}
          y1={getY(maxValue * ratio)}
          x2={width - padding}
          y2={getY(maxValue * ratio)}
          stroke="#fed7aa"
          strokeWidth={1}
          strokeDasharray="2,2"
        />
      ))}
      
      {/* Usage area */}
      <defs>
        <linearGradient id="usageGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#fb923c" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#fb923c" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="globalGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#a3621a" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#a3621a" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      
      {/* Usage path */}
      <path
        d={`M ${getX(0)} ${getY(0)} ${data.map((d, i) => `L ${getX(i)} ${getY(d.usage)}`).join(' ')} L ${getX(data.length - 1)} ${height - padding} L ${getX(0)} ${height - padding} Z`}
        fill="url(#usageGradient)"
        stroke="#fb923c"
        strokeWidth={2}
      />
      
      {/* Global path */}
      <path
        d={`M ${getX(0)} ${getY(0)} ${data.map((d, i) => `L ${getX(i)} ${getY(d.global)}`).join(' ')} L ${getX(data.length - 1)} ${height - padding} L ${getX(0)} ${height - padding} Z`}
        fill="url(#globalGradient)"
        stroke="#a3621a"
        strokeWidth={2}
        fillOpacity={0.6}
      />
      
      {/* Data points */}
      {data.map((d, i) => (
        <g key={i}>
          <circle
            cx={getX(i)}
            cy={getY(d.usage)}
            r={hoveredData?.year === d.year ? 6 : 4}
            fill="#fb923c"
            stroke="#422006"
            strokeWidth={1}
            className="cursor-pointer"
            onMouseEnter={() => onHover(d)}
            onClick={() => onClick(d, i)}
          />
          <circle
            cx={getX(i)}
            cy={getY(d.global)}
            r={hoveredData?.year === d.year ? 6 : 4}
            fill="#a3621a"
            stroke="#422006"
            strokeWidth={1}
            className="cursor-pointer"
            onMouseEnter={() => onHover(d)}
            onClick={() => onClick(d, i)}
          />
        </g>
      ))}
      
      {/* Y-axis labels */}
      {[0, 0.25, 0.5, 0.75, 1].map(ratio => (
        <text
          key={ratio}
          x={padding - 10}
          y={getY(maxValue * ratio) + 4}
          textAnchor="end"
          className="text-xs fill-amber-700"
        >
          {Math.round(maxValue * ratio)}
        </text>
      ))}
      
      {/* X-axis labels */}
      {data.map((d, i) => (
        <text
          key={i}
          x={getX(i)}
          y={height - padding + 20}
          textAnchor="middle"
          className="text-xs fill-amber-700"
        >
          {d.year}
        </text>
      ))}
    </svg>
  )
}

interface InteractiveTimelineProps {
  className?: string
}

export default function InteractiveTimeline({ className }: InteractiveTimelineProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [timeRange, setTimeRange] = useState([0, 9])
  const [hoveredData, setHoveredData] = useState<null | {
    year: number
    usage: number
    global: number
    sectionId: string
  }>(null)
  const [windowWidth, setWindowWidth] = useState(0)

  const visibleData = data.slice(timeRange[0], timeRange[1] + 1)

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Set initial width
    setWindowWidth(window.innerWidth)

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Determine if we should show the timeline based on screen width and class
  const isMobileOnly = className?.includes("mobile-only")
  const isDesktopOnly = className?.includes("desktop-only")
  const showTimeline = isDesktopOnly || (windowWidth > 768 && !isDesktopOnly) // Hide on medium and smaller screens

  // Handle hover visibility
  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (!isVisible && showTimeline) {
      timeout = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [isVisible, showTimeline])

  // Function to navigate to a section when clicking on the chart
  const navigateToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleChartClick = (dataPoint: typeof data[0]) => {
    navigateToSection(dataPoint.sectionId)
  }

  if (isMobileOnly && windowWidth > 768) return null
  if (isDesktopOnly && windowWidth <= 768) return null
  if (!showTimeline) return null

  return (
    <Card
      className={cn(
        "shadow-lg border-amber-400/40 transition-all duration-500 ease-in-out",
        isVisible ? "opacity-100" : "opacity-0",
        className
      )}
      style={{
        height: isExpanded ? "320px" : "120px",
      }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <CardContent className="p-4 h-full">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-medium text-amber-900">Coal Usage Timeline</h3>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs text-amber-700 hover:text-amber-900 transition-colors"
          >
            {isExpanded ? "Minimize" : "Expand"}
          </button>
        </div>

        <div className="h-full overflow-hidden">
          {isExpanded ? (
            <div className="h-full flex flex-col">
              <div className="flex-1 min-h-0 flex justify-center">
                <SimpleChart
                  data={visibleData}
                  width={280}
                  height={180}
                  hoveredData={hoveredData}
                  onHover={setHoveredData}
                  onClick={handleChartClick}
                />
              </div>

              {hoveredData && (
                <div className="mt-1 mb-2 text-xs text-center">
                  <span
                    className="inline-block px-2 py-1 bg-orange-100 rounded-md cursor-pointer hover:bg-orange-200 transition-colors"
                    onClick={() => navigateToSection(hoveredData.sectionId)}
                  >
                    <span className="font-semibold text-amber-900">{hoveredData.year}:</span>{" "}
                    <span className="text-amber-800">UK: {hoveredData.usage}M tons, Global: {hoveredData.global}M tons</span>{" "}
                    <span className="text-amber-600">(Click to navigate)</span>
                  </span>
                </div>
              )}

              <div className="mt-1 px-2">
                <Slider
                  defaultValue={[0, 9]}
                  max={data.length - 1}
                  step={1}
                  onValueChange={(value) => setTimeRange(value as [number, number])}
                  className="text-amber-400"
                />
                <div className="flex justify-between text-xs text-amber-700 mt-1">
                  <span>1800</span>
                  <span>2025</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex justify-center items-center">
              <SimpleChart
                data={data}
                width={240}
                height={60}
                hoveredData={hoveredData}
                onHover={setHoveredData}
                onClick={handleChartClick}
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}