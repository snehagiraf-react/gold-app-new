"use client";

import { Menu } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
  title?: string;
  showBackground?: boolean;
}

export default function Header({ onMenuClick, title, showBackground = true }: HeaderProps) {
  return (
    <>
      <div className={`flex items-center sticky top-0 z-30 ${showBackground ? 'bg-[#093D39]' : ''}`}>
        <button
          onClick={onMenuClick}
          className="p-4 text-white hover:bg-white/10 transition-colors flex-shrink-0"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
        
        {title && (
          <h4 className="text-white text-lg sm:text-xl font-medium flex-1 pr-4">
            {title}
          </h4>
        )}
      </div>
    </>
  );
}
