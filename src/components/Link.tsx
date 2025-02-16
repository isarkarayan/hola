import React from 'react';

type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function Link({ href, children, className = '' }: LinkProps) {
  return (
    <a
      href={href}
      className={`text-gray-500 hover:text-gray-700 hover:underline transition-colors ${className}`}
    >
      {children}
    </a>
  );
}