"use client";

import LayoutWrapper from "@/components/LayoutWrapper";
import Header from "@/components/header";
import { HardDriveUpload, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { Button } from "@/components/button";
import Image from "next/image";

export default function ImageUpload() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };
  const pickedImages = [
    {
      image: "/template.png",
    },
    {
      image: "/template.png",
    },
    {
      image: "/template.png",
    },
    {
      image: "/template.png",
    },
    {
      image: "/template.png",
    },
    {
      image: "/template.png",
    },
  ];

  return (
    <>
 
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

            <div className="flex flex-col items-center mt-10 gap-4 w-full">
              <form className="w-full space-y-4">
                {/* Add Text */}
                <div className="border-1 border-dashed p-4 bg-[#3a6d6689] rounded-xl">
                  <label className="text-white text-sm">Add Text</label>
                  <input
                    type="text"
                    placeholder="Enter Text To Your Poster"
                    className="w-full px-4 py-2 rounded-xl bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:border-white/40"
                  />
                </div>

                {/* Hidden File Input */}
                <input
                  type="file"
                  multiple
                  ref={fileInputRef}
                  className="hidden"
                />

                {/* Upload Box */}
                <div className="border-1 border-dashed rounded-xl px-2 py-10 mt-5 flex flex-col items-center gap-4 bg-[#3a6d6689]">
                  <HardDriveUpload
                    className="cursor-pointer w-12 h-12 text-chart-5 hover:text-white"
                    onClick={openFilePicker}
                  />

                  <div className="text-sm font-bold text-gray-200 text-center">
                    Click to upload Images
                    <p className="text-gray-400">Support for multiple images</p>
                  </div>

                  <Button className="!bg-chart-5 font-bold">
                    Choose Files
                  </Button>
                </div>
              </form>

              {/* picked images */}
              <div className="w-full mt-6">
                <h2 className="text-white text-lg font-bold mb-4">
                  Picked Images
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {pickedImages.map((img, index) => (
                    <div
                      key={index}
                      className="relative border rounded-lg overflow-hidden flex items-center"
                    >
                      {/* Checkbox */}
                      <input
                        type="checkbox"
                        className="absolute top-2 left-2 w-5 h-5 border rounded-full checked:accent-amber-500 focus:outline-none focus:ring-2 "
                      />
                      <Trash2 className="absolute top-2 right-2 w-6 h-6 text-red-500 hover:text-red-700 bg-white rounded-full p-1" />
                      {/* Image */}
                      <Image
                        src={img.image}
                        alt={`Picked ${index}`}
                        width={150}
                        height={50}
                        className="object-cover w-full h-32 rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <footer className="w-full mt-10 ">
              <Button className="!bg-gradient-to-r from-[#FB9600] to-[#E27300] text-white font-semibold w-full text-lg !py-3 w-full"
              onClick={() => router.push(`/chooseTemplate/1`)}>
                Generate
              </Button>
            </footer>
          </div>
        </div>
      )}
    </LayoutWrapper>
       </>
  );
}
