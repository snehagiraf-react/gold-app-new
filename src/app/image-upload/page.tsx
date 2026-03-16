"use client";

import LayoutWrapper from "@/components/LayoutWrapper";
import Header from "@/components/header";
import { HardDriveUpload } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";

export default function ImageUpload() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  return (
    <LayoutWrapper title="My Subscription">
      {({ toggleSidebar, title }) => (
        <div className="flex justify-center">
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-screen bg-[#093D39] flex flex-col p-6">
            <Header
              onMenuClick={toggleSidebar}
              title={title}
              showBackground={false}
              showBackButton={true}
              onBackClick={() => router.back()}
            />
            <div className="flex flex-col items-center mt-10 gap-4 ">
              <div className="text-sm font-bold text-gray-700 w-full">
                Upload an Image
                <div className="border-2 border-dashed border-gray-400 rounded-lg px-2 py-10 mt-5 flex flex-col items-center gap-4 bg-[#2b595b19]">
                  <HardDriveUpload
                    className="cursor-pointer w-12 h-12 text-gray-600 hover:text-black"
                    onClick={openFilePicker}
                  />
                  <div className="text-sm font-bold text-gray-700">
                    Click to upload Images
                    <p className="text-gray-500">Support for multiple images</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </LayoutWrapper>
  );
}
