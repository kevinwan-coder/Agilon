import { BRAND_COLORS } from '../../constants/colors';

interface ColorPickerProps {
  selected: string;
  onSelect: (color: string) => void;
  error?: string;
}

export function ColorPicker({ selected, onSelect, error }: ColorPickerProps) {
  return (
    <div className="mb-5">
      <label className="block font-semibold text-sm text-dark mb-1.5">
        Brand Color <span className="text-red">*</span>
      </label>
      <p className="text-xs text-gray-light mb-2">Choose a primary color for your workspace</p>
      <div className={`flex gap-2.5 flex-wrap ${error ? 'border-2 border-red rounded-lg p-1' : ''}`}>
        {BRAND_COLORS.map((color) => (
          <button
            key={color}
            type="button"
            onClick={() => onSelect(color)}
            className={`w-11 h-11 rounded-full cursor-pointer border-3 transition-all hover:scale-110 ${
              selected === color
                ? 'border-dark shadow-[0_0_0_2px_white,0_0_0_4px_#1e293b]'
                : 'border-transparent'
            }`}
            style={{ backgroundColor: color }}
            aria-label={`Select color ${color}`}
          />
        ))}
      </div>
      {error && <p className="text-red text-xs mt-1">{error}</p>}
    </div>
  );
}
