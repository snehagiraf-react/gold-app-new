"use client";

import { Button } from "@/components/button";
import Header from "@/components/header";
import LayoutWrapper from "@/components/LayoutWrapper";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CreateTemplates() {
    
  const templates = [
    { id: 1, image: "/gold.png", name: "Classic Gold Rate" },
    { id: 2, image: "/gold.png", name: "Modern Gold Rate" },
    { id: 3, image: "/gold.png", name: "Premium Gold Rate" },
  ];

  const router = useRouter();
  return (
    <LayoutWrapper title="">
      {({ toggleSidebar }) => (
        <div className="flex justify-center">
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-screen bg-[#093D39] flex flex-col">
            {/* Header with Full Width Search */}
            <Header
              onMenuClick={toggleSidebar}
              title=""
              showBackground={false}
              showBackButton={true}
              onBackClick={() => router.back()}
              rightAction={
                <div className="flex-1 px-2">
                  <div className="relative w-full">
                    <input
                      type="text"
                      placeholder="Search templates..."
                      className="w-full px-4 py-2 pl-10 rounded-full text-sm focus:outline-none bg-white text-black"
                    />

                    <svg
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              }
            />

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-white">
              <h2 className="text-xl font-bold text-[#093D39]">
                Create Your Own Template
              </h2>

              <p className="text-gray-500 text-sm mt-1 mb-6">
                Select a design for your daily gold rate poster
              </p>

              <div className="grid grid-cols-1 gap-6">
                {templates.map((template) => (
                  <div key={template.id} className="w-full">
                    <div className="w-full h-[450px] overflow-hidden rounded-xl">
                      <Image
                        src={template.image}
                        alt={template.name}
                        width={430}
                        height={932}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h3 className="text-lg font-semibold text-[#093D39] mt-4">
                      {template.name}
                    </h3>

                    <Button
                      className="w-full mt-3 !bg-gradient-to-r from-[#34A76D] to-[#1F7A4C] !text-white py-3 rounded-xl font-semibold"
                      onClick={() =>
                        router.push("/image-upload")
                      }
                    >
                      Use Template
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </LayoutWrapper>
  );
}
