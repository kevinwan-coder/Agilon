import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export function Input({ label, error, required, className = '', ...props }: InputProps) {
  return (
    <div className="mb-5">
      <label className="block font-semibold text-sm text-dark mb-1.5">
        {label}
        {required && <span className="text-red ml-1">*</span>}
      </label>
      <input
        className={`w-full px-3.5 py-2.5 border-[1.5px] rounded-lg text-[0.95rem] text-dark bg-white transition-colors focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(26,86,219,0.1)] ${
          error ? 'border-red shadow-[0_0_0_3px_rgba(220,38,38,0.1)]' : 'border-border'
        } ${className}`}
        {...props}
      />
      {error && <p className="text-red text-xs mt-1">{error}</p>}
    </div>
  );
}
