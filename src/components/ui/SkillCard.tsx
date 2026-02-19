interface SkillCardProps {
  icon: string;
  name: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}

export function SkillCard({ icon, name, description, selected, onClick }: SkillCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border-2 rounded-xl p-4 cursor-pointer transition-all flex items-start gap-3.5 text-left ${
        selected ? 'border-primary bg-primary-light' : 'border-border bg-white hover:border-primary'
      }`}
    >
      <div
        className={`w-[22px] h-[22px] rounded-md border-2 flex-shrink-0 flex items-center justify-center mt-0.5 text-xs transition-all ${
          selected ? 'bg-primary border-primary text-white' : 'border-border'
        }`}
      >
        {selected && '\u2713'}
      </div>
      <div className="text-[1.4rem] flex-shrink-0">{icon}</div>
      <div className="flex-1">
        <div className="font-semibold text-[0.95rem] text-dark">{name}</div>
        <div className="text-xs text-gray mt-0.5">{description}</div>
      </div>
    </button>
  );
}
