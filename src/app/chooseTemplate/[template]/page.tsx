"use client";

import {
  IndianRupee,
  ChevronUp,
  Phone,
  MapPin,
  Share2,
  Download,
  Menu,
} from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { GoldRateCards } from "@/js/types/gold-rate";
import LayoutWrapper from "@/components/LayoutWrapper";
import { Button } from "@/components/button";

const gramTableData: GoldRateCards[] = [
  { id: 1, gram: "1 GRAM", price: 16440 },
  { id: 2, gram: "8 GRAM", price: 116440 },
  { id: 3, gram: "10 GRAM", price: 164400 },
  { id: 4, gram: "18 K", price: 11234 },
  { id: 5, gram: "22 K", price: 14523 },
  { id: 6, gram: "24 K", price: 16440 },
];

export default function TemplateDetail() {
  const params = useParams();
  const templateId = params.template;
  const dateandtime = new Date();

  // Template data
  const templates: {
    [key: string]: { id: string; image: string; logo?: string };
  } = {
    "1": { id: "1", image: "/template.png", logo: "/bheema.png" },
    "2": { id: "2", image: "/template.png", logo: "/bheema.png" },
    "3": { id: "3", image: "/template.png", logo: "/bheema.png" },
  };

  const template = templates[templateId as string] || templates["1"];

  const footerdata = [
    {
      id: 1,
      footerlogo: "/bjs.png",
      Phone: "7608349274",
      location: "Railway Station Road, Kozhikode",
    },
  ];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Gold Rate",
          text: "Check today's gold rate",
          url: window.location.href,
        });
      } catch {
        console.log("Share cancelled");
      }
    } else {
      alert("Sharing not supported on this device");
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = template.image;
    link.download = "gold-rate-template.png";
    link.click();
  };
  return (
    <LayoutWrapper showBackground={false} showHeaderBg={false}>
      {({ toggleSidebar, title }) => (
        <div className="flex justify-center">
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-screen flex flex-col">
            {/* Header with Menu, Title, and Action Buttons */}
            <div className="flex items-center justify-between sticky top-0 z-30 mt-10 px-2">
              {/* Menu Button */}
              <button
                onClick={toggleSidebar}
                className="p-2 text-white hover:bg-white/10 transition-colors shrink-0 "
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>

              {/* Title */}
              {title && (
                <h4 className="text-white text-lg sm:text-xl font-medium flex-1 text-center">
                  {title}
                </h4>
              )}

              {/* Action Buttons */}
              <div className="flex gap-2 shrink-0">
                <Button
                  onClick={handleDownload}
                  className=" text-white hover:bg-white/10 transition-colors !border-none !bg-transparent text-4xl font-extrabold !px-0 !py-0"
                  aria-label="Download template"
                >
                  <Download size={30} />
                </Button>
                <Button
                  onClick={handleShare}
                  className="text-white hover:bg-white/10 transition-colors !border-none !bg-transparent text-4xl font-extrabold "
                  aria-label="Share template"
                >
                  <Share2 size={30} />
                </Button>
              </div>
            </div>

            {/* Background Template Image - Full Screen */}
            <div className="fixed inset-0 w-full h-full -z-10">
              <Image
                src={template.image}
                alt="Template Preview"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="relative flex justify-center items-center min-h-screen">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl min-h-screen">
                {/* Logo Overlay - Centered */}
                {template.logo && (
                  <div className="absolute top-20 left-1/2 -translate-x-1/2 z-20 ">
                    <Image
                      src={template.logo}
                      alt="Logo"
                      width={145}
                      height={33}
                      className="object-cover"
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
                    className="w-full h-auto opacity-0.3"
                  />
                </div>

                {/* Text content over mask */}
                <div className="absolute bottom-25 left-0 right-0 z-20 px-6 ">
                  <div className="rounded-3xl max-w-sm mx-auto">
                    {/* GOLD RATE Heading */}
                    <h2 className="text-gray-900 font-extrabold text-xl text-center mb-3">
                      GOLD RATE
                    </h2>

                    {/* Date Badge */}
                    <div className="flex justify-center relative z-10 -mb-3.5">
                      <span
                        className="inline-block px-7 py-1
                        bg-[#DEB07C] text-sidebar-primary font-bold text-sm
                        [clip-path:polygon(6%_0,94%_0,100%_50%,94%_100%,6%_100%,0_50%)]"
                      >
                        {dateandtime
                          .toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })
                          .toUpperCase()}{" "}
                        |{" "}
                        {dateandtime.toLocaleTimeString("en-US", {
                          hour: "numeric",
                          minute: "2-digit",
                          hour12: true,
                        })}
                      </span>
                    </div>

                    {/* Table Layout */}
                    <div className="mb-4 overflow-hidden rounded-lg">
                      <table className="w-full border-separate border-spacing-0 border border-[#DEB07C]  rounded-lg">
                        <thead>
                          <tr>
                            {gramTableData.slice(0, 3).map((item, index) => (
                              <th
                                key={item.id}
                                className={`py-3 px-2 text-center border-r border-b border-[#DEB07C]  ${index === 0 ? "rounded-tl-lg" : ""} ${index === 2 ? "rounded-tr-lg" : ""}`}
                              >
                                <span className="text-chart-7 font-bold text-lg">
                                  {item.gram}
                                </span>
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            {gramTableData.slice(0, 3).map((item, index) => (
                              <td
                                key={item.id}
                                className={`py-3 px-2 text-center border-r border-[#DEB07C]  ${index === 0 ? "rounded-bl-lg" : ""} ${index === 2 ? "rounded-br-lg border-r-0" : ""}`}
                              >
                                <span className="text-sidebar-primary font-bold text-md flex items-center justify-center gap-1">
                                  <IndianRupee className="w-4 h-4" />
                                  {item.price.toLocaleString("en-IN")}
                                </span>
                              </td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Per Gram Rate */}
                    <div className="flex justify-center mb-2">
                      <div className="flex items-center gap-2 px-4 py-1 rounded-lg border-2 border-muted">
                        <ChevronUp className="w-4 h-4 text-green-600" />
                        <span className="text-sidebar-primary font-bold text-md flex items-center gap-1 ">
                          <IndianRupee className="w-4 h-4" />
                          90 - PER GRAM
                        </span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-dashed border-gray-300 my-2"></div>

                    {/* Contact Info */}
                    <footer className="flex flex-row items-center gap-4 mb-3">
                      <Image
                        src={footerdata[0].footerlogo}
                        alt="Footer Logo"
                        width={65}
                        height={36}
                        className="object-contain"
                      />
                      <div className="flex items-center gap-5">
                        <div className="flex items-center gap-1 text-sidebar-primary text-md font-bold">
                          <Phone className="w-5 h-5" />
                          <span className="text-sm">{footerdata[0].Phone}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sidebar-primary text-md font-bold">
                          <MapPin className="w-7 h-7" />
                          <span className="text-sm">
                            {footerdata[0].location}
                          </span>
                        </div>
                      </div>
                    </footer>
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
