import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success';
  children: ReactNode;
}

const variants = {
  primary:
    'bg-primary text-white hover:bg-primary-hover',
  secondary:
    'bg-white text-gray border border-border hover:border-gray-light hover:text-dark',
  success:
    'bg-green text-white hover:bg-green-700 text-lg px-9 py-3.5',
};

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`px-7 py-3 rounded-lg text-[0.95rem] font-semibold cursor-pointer border-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
