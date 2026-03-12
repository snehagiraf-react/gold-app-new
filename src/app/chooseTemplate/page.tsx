"use client";

import { Button } from "@/components/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TemplateChoosen() {
    const router = useRouter();

    const templates = [
        {
            id: 1,
            image: "/gold.png",
            name: "Classic Gold Rate"
        },
        {
            id: 2,
            image: "/gold.png",
            name: "Modern Gold Rate"
        },
        {
            id: 3,
            image: "/gold.png",
            name: "Premium Gold Rate"
        }
    ]
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl min-h-screen">
          
          {/* Header Section with Dark Background */}
          <div className="bg-[#093D39] px-4 sm:px-6 pt-12 pb-8 rounded-b-2xl">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search templates..."
                className="w-full px-4 py-3 pl-10 rounded-4xl text-sm focus:outline-none focus:ring-2 focus:ring-white/20 bg-white"
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

          {/* Main Content Area with White Background */}
          <div className="bg-white min-h-screen px-4 sm:px-6 py-6">
            <h2 className="text-2xl font-bold text-gray-900">Create Your Own Template</h2>
            <p className="text-gray-600 text-sm mt-1">Select a design for your daily gold rate poster</p>
            
            <div className="grid grid-cols-1 gap-6 mt-6">
                {templates.map(template => (
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
                    <h3 className="text-lg font-semibold text-gray-900 mt-4">
                      {template.name}
                    </h3>
                    
                    {/* Use Template Button */}
                    <Button 
                      className="w-full mt-3 bg-[#10B981] hover:bg-[#059669] text-white py-3 rounded-xl font-semibold"
                      onClick={() => router.push(`/chooseTemplate/${template.id}`)}
                    >
                      Use Template
                    </Button>
                  </div>
                ))}
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}
