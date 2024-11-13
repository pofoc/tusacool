'use client';

import { ReactNode } from 'react';

interface TelegramButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function TelegramButton({ children, onClick, className = '' }: TelegramButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`tg-button ${className}`}
    >
      {children}
    </button>
  );
}