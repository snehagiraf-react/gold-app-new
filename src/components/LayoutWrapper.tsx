"use client";

import { useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";

interface LayoutWrapperProps {
  children: React.ReactNode | ((props: { toggleSidebar: () => void; title?: string }) => React.ReactNode);
  title?: string;
  showBackground?: boolean;
  showHeader?: boolean;
  showHeaderBg?: boolean;
}

export default function LayoutWrapper({ children, title, showBackground = true, showHeader = true, showHeaderBg = true }: LayoutWrapperProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className={`relative min-h-screen ${showBackground ? 'bg-white' : ''}`}>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <div className={`transition-transform duration-300 ${isSidebarOpen ? 'translate-x-64' : 'translate-x-0'}`}>
        <main>
          {typeof children === 'function' ? children({ toggleSidebar, title }) : children}
        </main>
      </div>
    </div>
  );
}
