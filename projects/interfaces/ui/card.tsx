import React from 'react';

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card: React.FC<CardProps> = ({ className = '', ...props }) => {
  const base = 'rounded-lg border border-gray-200 bg-white shadow-sm';
  return <div className={`${base} ${className}`} {...props} />;
};

export default Card;


