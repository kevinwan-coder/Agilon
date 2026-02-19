interface RadioCardProps {
  icon: string;
  label: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}

export function RadioCard({ icon, label, description, selected, onClick }: RadioCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border-2 rounded-xl p-4 text-center cursor-pointer transition-all bg-white ${
        selected ? 'border-primary bg-primary-light' : 'border-border hover:border-primary hover:bg-primary-light'
      }`}
    >
      <div className="text-[1.6rem] mb-1.5">{icon}</div>
      <div className="font-semibold text-sm text-dark">{label}</div>
      <div className="text-xs text-gray mt-0.5">{description}</div>
    </button>
  );
}
