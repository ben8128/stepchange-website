interface TimelineItem {
  year: string;
  company: string;
  role: string;
  description?: string;
}

interface TimelineProps {
  name: string;
  items: TimelineItem[];
}

export default function Timeline({ name, items }: TimelineProps) {
  return (
    <div className="mb-12">
      <h3 className="text-xl font-semibold mb-6 text-slate-900">{name}&apos;s Journey</h3>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-300"></div>
        
        {items.map((item, index) => (
          <div key={index} className="relative flex items-start mb-8 last:mb-0">
            {/* Timeline dot */}
            <div className="relative z-10 w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center shadow-md">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            
            {/* Content */}
            <div className="ml-6 flex-1">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-sm font-medium text-sky-600 bg-sky-50 px-2 py-1 rounded">
                  {item.year}
                </span>
                <h4 className="font-semibold text-slate-900">{item.company}</h4>
              </div>
              <p className="text-slate-700 font-medium mb-1">{item.role}</p>
              {item.description && (
                <p className="text-sm text-slate-600">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}