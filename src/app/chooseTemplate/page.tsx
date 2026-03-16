"use client";

import { Button } from "@/components/button";
import Header from "@/components/header";
import LayoutWrapper from "@/components/LayoutWrapper";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TemplateChoosen() {
  const router = useRouter();

  const templates = [
    {
      id: 1,
      image: "/gold.png",
      name: "Classic Gold Rate",
    },
    {
      id: 2,
      image: "/gold.png",
      name: "Modern Gold Rate",
    },
    {
      id: 3,
      image: "/gold.png",
      name: "Premium Gold Rate",
    },
  ];
  return (
    <LayoutWrapper title="">
      {({ toggleSidebar, title }) => (
        <div className="flex justify-center">
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-screen bg-[#093D39] flex flex-col">
            <Header
              onMenuClick={toggleSidebar}
              title={title}
              showBackground={false}
              showBackButton={true}
              onBackClick={() => router.back()}
            >
              
            </Header>
            <div className="relative mr-5 ml-5">
              <input
                type="text"
                placeholder="Search templates..."
                className="w-full px-4 py-3 pl-10 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white/20 bg-white"
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

            <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-white rounded-lg">
              {/* Search Bar */}

              <h2 className="text-xl font-bold text-white">
                Create Your Own Template
              </h2>
              <p className="text-white/70 text-sm mt-1 mb-6">
                Select a design for your daily gold rate poster
              </p>

              <div className="grid grid-cols-1 gap-6">
                {templates.map((template) => (
                  <div key={template.id} className="w-full">
                    {/* Template Image */}
                    <div className="w-full h-[450px] overflow-hidden rounded-xl">
                      <Image
                        src={template.image}
                        alt={template.name}
                        width={430}
                        height={932}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Template Name */}
                    <h3 className="text-lg font-semibold text-white mt-4">
                      {template.name}
                    </h3>

                    {/* Use Template Button */}
                    <Button
                      className="w-full mt-3 !bg-gradient-to-r from-[#34A76D] to-[#1F7A4C] !text-white py-3 rounded-xl font-semibold"
                      onClick={() =>
                        router.push(`/chooseTemplate/${template.id}`)
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
