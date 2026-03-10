"use client";

import { useEffect, useState } from "react";
import Login from "@/app/login/page";

export default function Home() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);

    // Start animation after 1 second
    const animationTimer = setTimeout(() => {
      setIsAnimated(true);
    }, 1000);

    // Show login form after animation completes
    const formTimer = setTimeout(() => {
      setShowLoginForm(true);
    }, 1200);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(formTimer);
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-md min-h-screen bg-[#093D39] overflow-hidden relative">
        <div
          className={`absolute w-full transition-all duration-1000 ease-in-out ${
            isAnimated ? "top-16" : "top-1/2 -translate-y-1/2"
          }`}
        >
          <h1 className="text-white font-serif text-center">
            Aurevia
          </h1>
        </div>

        {showLoginForm && <Login />}
      </div>
    </div>
  );
}
