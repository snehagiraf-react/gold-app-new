"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  X,
  Home,
  LogIn,
  UserPlus,
  CreditCard,
  FileText,
  LogOut,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const menuItems = [
    { href: "/home", label: "Home", icon: Home },
    { href: "/profile", label: "Profile", icon: UserPlus },
    { href: "/chooseTemplate", label: "Choose Template", icon: FileText },
    {
      href: "/my-subscription",
      label: "Subscription Plan",
      icon: CreditCard,
    },
    {
      href: "/imageManager",
      label: "Image Manager",
      icon: FileText,
    }

  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="absolute inset-0 ck bg-opacity-1 z-40 "
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`absolute top-0 left-0 h-screen text-white z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-7 border-b border-white/10 bg-[#093D39] h-40 w-75 flex-shrink-0">
          <h2 className="text-xl font-semibold">Account</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close sidebar"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4 bg-white flex-1 overflow-y-auto">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-colors text-[#093D39] ${
                      isActive
                        ? "text-[#093D39] font-semibold"
                        : "hover:bg-white/10"
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        

        {/* Footer Info */}
        <div className="p-4 border-t border-white/10 flex-shrink-0">
          <p className=" text-[#093D39]">
            <Link href="/login" className="flex items-center gap-3 text-md font-bold">
              <LogOut size={20} />
              LogOut
            </Link>
          </p>
        </div>
        </nav>
      </div>
    </>
  );
}
