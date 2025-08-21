import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline';
};

export const Button: React.FC<ButtonProps> = ({ variant = 'default', className = '', ...props }) => {
  const base = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none px-4 py-2';
  const variants: Record<string, string> = {
    default: 'bg-black text-white hover:bg-gray-800',
    outline: 'border border-gray-300 text-gray-800 hover:bg-gray-100',
  };
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
};

export default Button;


