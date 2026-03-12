"use client";

import { Button } from "@/components/button";
import { MoveLeft, Download, Share2, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function TemplateDetail() {
  const params = useParams();
  const templateId = params.template;

  // Template data
  const templates: {
    [key: string]: { id: string; image: string; logo?: string };
  } = {
    "1": { id: "1", image: "/template.png", logo: "/bheema.png" },
    "2": { id: "2", image: "/template.png", logo: "/bheema.png" },
    "3": { id: "3", image: "/template.png", logo: "/bheema.png" },
  };

  const template = templates[templateId as string] || templates["1"];

  return (
    <>
      <div className="relative flex justify-center items-center min-h-screen">
        <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl min-h-screen">

          {/* Header Menu - Overlaid on top */}
          <div className="relative z-20 px-4 sm:px-6 pt-12 pb-6">
            <div className="flex items-center gap-3">
              <Link href="/chooseTemplate">
                <Menu className="text-white w-6 h-6 cursor-pointer drop-shadow-lg" />
              </Link>
            </div>
          </div>

          {/* Background Template Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={template.image}
              alt="Template Preview"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Logo Overlay - Centered */}
          {template.logo && (
            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 ">
              <Image
                src={template.logo}
                alt="Logo"
                width={145}
                height={33}
                className="object-contain"
              />
            </div>
          )}
          
          {/* Mask overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 w-full z-10">
            <Image
              src="/mask.png"
              alt="Overlay"
              width={430}
              height={100}
              className="w-full h-auto"
            />
          </div>

        </div>
      </div>
    </>
  );
}
