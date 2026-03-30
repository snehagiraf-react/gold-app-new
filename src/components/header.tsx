"use client";

import { Menu, MoveLeft, Download, Share2,SquarePen  } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
  title?: string;
  showBackground?: boolean;
  showBackButton?: boolean;
  showMenuButton?: boolean;
  onBackClick?: () => void;
  iconType?: "menu" | "download" | "share" | "edit";
  titleColor?: string;
  iconColor?: string;
  rightAction?: React.ReactNode;
}

export default function Header({
  onMenuClick,
  title,
  showBackground = true,
  showBackButton = false,
  showMenuButton = true,
  onBackClick,
  iconType = "menu",
  titleColor = "text-white",
  iconColor = "text-white",
  rightAction,
}: HeaderProps) {

  const renderIcon = () => {
    if (showBackButton) return <MoveLeft size={24} />;

    switch (iconType) {
      case "download":
        return <Download size={24} />;
      case "share":
        return <Share2 size={30} />;
      case "share":
        return <SquarePen  size={30} />;
      default:
        return <Menu size={30} />;
    }
  };

  return (
    <div className={`flex items-center top-0 z-30 mt-10 ${showBackground ? "bg-[#093D39]" : ""}`} >
      
      <button
        onClick={showBackButton && onBackClick ? onBackClick : onMenuClick}
        className={`p-4 ${iconColor} hover:bg-white/10 transition-colors shrink-0`}
        aria-label={showBackButton ? "Go back" : "Open menu"}
      >
        {renderIcon()}
      </button>

      {title && (
        <h4 className={`${titleColor} text-lg sm:text-xl font-medium flex-1 pr-4`}>
          {title}
        </h4>
      )}
  {rightAction && (
        <div className="shrink-0 pr-4">
          {rightAction}
        </div>
      )}

    
    </div>
  );
}