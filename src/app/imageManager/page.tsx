"use client";

import { MoveLeft, HardDriveUpload } from "lucide-react";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import LayoutWrapper from "@/components/LayoutWrapper";
import { Button } from "@/components/button";

export default function ImageManager() {
  const [image, setImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const handleUpload = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image");
      return;
    }

    console.log("Selected Image:", image);
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  return (
    <LayoutWrapper title="Image Manager">
      <div className="flex flex-col items-center min-h-screen">
        {/* Back Button */}
        <div className="flex items-center gap-3 mt-10">
          <MoveLeft
            className="text-white w-5 h-5 cursor-pointer"
            onClick={() => router.back()}
          />
        </div>

        <form
          onSubmit={handleUpload}
          className="flex flex-col items-center mt-10 gap-4"
        >
          {/* Upload Icon */}
          <div className="text-sm font-bold text-gray-700 shadow-xl p-4 bg-white">
            Upload an Image
          
          <div className="border-2 border-dashed border-gray-400 rounded-lg px-22 py-10 mt-5 flex flex-col items-center gap-4">
            
          
          <HardDriveUpload
            className="cursor-pointer w-12 h-12 text-gray-600 hover:text-black"
            onClick={openFilePicker}
          ></HardDriveUpload>
          <div className="text-sm font-bold text-gray-700">
            Click to upload Images
            <p className="text-gray-500">Support for multiple images</p>
          </div>
          </div>
          </div>

          {/* Hidden File Input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            placeholder="Select an image"
            className="hidden"
            onChange={(e) =>
              setImage(e.target.files ? e.target.files[0] : null)
            }
          />
        </form>
        {/* <Button
            type="submit"
            className="px-4 py-2 bg-[#093D39] text-white rounded-lg hover:bg-[#07514C] w-full max-w-xs"
          >
            Upload Image
          </Button> */}
      </div>
    </LayoutWrapper>
  );
}
