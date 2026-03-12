"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isAnimated, setIsAnimated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);

    // Start animation after 1 second
    const animationTimer = setTimeout(() => {
      setIsAnimated(true);
    }, 1000);

    // Redirect to login page after animation completes
    const redirectTimer = setTimeout(() => {
      router.push("/login");
    }, 1200);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-md min-h-screen bg-[#093D39] overflow-hidden relative flex flex-col justify-center items-center">
        <div
          className={`transition-all duration-1000 ease-in-out w-full ${
            isAnimated ? "-mt-32" : "mb-0"
          }`}
        >
          <h1 className="text-white font-serif text-center">
            Aurevia
          </h1>
        </div>
      </div>
    </div>
  );
}
