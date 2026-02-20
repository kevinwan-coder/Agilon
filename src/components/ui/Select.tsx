import type { SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  required?: boolean;
  options: readonly string[];
  placeholder?: string;
}

export function Select({ label, error, required, options, placeholder, className = '', ...props }: SelectProps) {
  return (
    <div className="mb-5">
      <label className="block font-semibold text-sm text-dark mb-1.5">
        {label}
        {required && <span className="text-red ml-1">*</span>}
      </label>
      <select
        className={`w-full px-3.5 py-2.5 border-[1.5px] rounded-lg text-[0.95rem] text-dark bg-[#252525] transition-colors focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(26,86,219,0.15)] ${
          error ? 'border-red shadow-[0_0_0_3px_rgba(220,38,38,0.1)]' : 'border-border'
        } ${className}`}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <p className="text-red text-xs mt-1">{error}</p>}
    </div>
  );
}
