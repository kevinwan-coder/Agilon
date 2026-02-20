interface TemplateCardProps {
  name: string;
  description: string;
  sidebar: string;
  topbar: string;
  accent: string;
  bg: string;
  cardBg: string;
  textLight: string;
  selected: boolean;
  onClick: () => void;
}

export function TemplateCard({ name, description, sidebar, topbar, accent, bg, cardBg, textLight, selected, onClick }: TemplateCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border-2 rounded-xl overflow-hidden cursor-pointer transition-all text-left ${
        selected ? 'border-[#7ee8a8] shadow-[0_0_0_2px_rgba(126,232,168,0.2)]' : 'border-border hover:border-[#7ee8a8]'
      }`}
    >
      {/* Dashboard preview */}
      <div className="h-[120px] flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-[28%] flex flex-col items-center pt-3 gap-2" style={{ backgroundColor: sidebar }}>
          <div className="w-5 h-5 rounded" style={{ backgroundColor: accent }} />
          <div className="w-[60%] space-y-1.5">
            <div className="h-1.5 rounded-full" style={{ backgroundColor: accent, opacity: 0.8 }} />
            <div className="h-1 rounded-full" style={{ backgroundColor: textLight, opacity: 0.3 }} />
            <div className="h-1 rounded-full" style={{ backgroundColor: textLight, opacity: 0.3 }} />
            <div className="h-1 rounded-full" style={{ backgroundColor: textLight, opacity: 0.3 }} />
          </div>
        </div>

        {/* Main area */}
        <div className="flex-1 flex flex-col" style={{ backgroundColor: bg }}>
          {/* Top bar */}
          <div className="h-6 flex items-center px-2" style={{ backgroundColor: topbar, borderBottom: `1px solid ${textLight}25` }}>
            <div className="h-1.5 w-[50%] rounded-full" style={{ backgroundColor: textLight, opacity: 0.2 }} />
          </div>

          {/* Content */}
          <div className="flex-1 p-2 flex flex-col gap-1.5">
            {/* 3 stat cards */}
            <div className="flex gap-1.5">
              {[0.7, 0.5, 0.6].map((_, i) => (
                <div
                  key={i}
                  className="flex-1 h-5 rounded"
                  style={{
                    backgroundColor: i === 0 ? accent : cardBg,
                    opacity: i === 0 ? 0.15 : 1,
                    border: i === 0 ? `1.5px solid ${accent}` : `1px solid ${textLight}25`,
                  }}
                />
              ))}
            </div>
            {/* Chart area */}
            <div
              className="flex-1 rounded"
              style={{ backgroundColor: cardBg, border: `1px solid ${textLight}25` }}
            />
          </div>
        </div>
      </div>

      {/* Label */}
      <div className="px-2.5 py-2 border-t border-border">
        <div className="font-semibold text-sm text-dark">{name}</div>
        <div className="text-xs text-gray">{description}</div>
      </div>
    </button>
  );
}
