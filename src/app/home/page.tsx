"use client";

import { TrendingDown, IndianRupee } from "lucide-react";
import type { GoldRateCards } from "@/js/types/gold-rate";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/cards";
import { Button } from "@/components/button";
import LayoutWrapper from "@/components/LayoutWrapper";
import Header from "@/components/header";

const goldratedatav: GoldRateCards[] = [
  {
    id: 1,
    gram: "1 Gram",
    price: 5000,
  },
  {
    id: 2,
    gram: "8 Gram",
    price: 10000,
  },
  {
    id: 3,
    gram: "18k Gold",
    price: 15000,
  },
];

export default function Index() {
  const [dateandtime, setDateandtime] = useState("");
  const router = useRouter();

  useEffect(() => {
    setDateandtime(new Date().toLocaleString());
  }, []);

  return (
    <LayoutWrapper title="Gold Rate Dashboard">
      {({ toggleSidebar, title }) => (
        <div className="flex justify-center">
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-screen bg-[#093D39] flex flex-col">
            <Header
              onMenuClick={toggleSidebar}
              title={title}
              showBackground={false}
            />

            <div className="flex-1 overflow-y-auto p-4 sm:p-6 justify-center">
              <h4 className="text-center text-white text-xl sm:text-2xl lg:text-3xl font-bold mt-5 tracking-wider">
                Today&apos;s Gold Rate
              </h4>
              <p className="text-center text-amber-400 tracking-wider text-base sm:text-lg font-medium">
                {dateandtime}
              </p>

              <div className="space-y-4 grid grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-10">
                {goldratedatav.map((goldItem) => (
                  <Card
                    key={goldItem.id}
                    className="border-[#D4A540] border-1 text-center bg-[#ECFDF5] h-max"
                  >
                    <CardHeader>
                      <CardTitle className="text-[#00786F] text-xs sm:text-sm font-light">
                        {goldItem.gram}
                      </CardTitle>
                      <CardDescription className="text-white/80 text-[#004F3B] text-lg sm:text-xl font-bold">
                        ₹{goldItem.price.toLocaleString()}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 mb-6">
                <h5 className="flex items-center bg-[#FFE2E2] p-4 sm:p-5 w-full rounded-4xl text-[#C10007] text-sm sm:text-base font-bold justify-center">
                  <TrendingDown className="text-[#C10007] w-5 h-5 sm:w-6 sm:h-6" />{" "}
                  &nbsp;
                  <IndianRupee className="text-[#C10007] w-5 h-5 sm:w-6 sm:h-6 font-bold" />
                  &nbsp;90 per gram
                </h5>
              </div>

              <div className="space-y-3 sm:space-y-4 mt-20">
                <Button
                  className="w-full !bg-gradient-to-r from-[#FB9600] to-[#E27300] !text-white p-5 sm:p-7 rounded-xl text-base sm:text-lg font-bold"
                  onClick={() => router.push("/chooseTemplate")}
                >
                  Choose Your Template
                </Button>

                <Button className="w-full !bg-transparent border-1 !border-[#FB9600] !text-white p-5 sm:p-7 rounded-xl text-base sm:text-lg font-bold" 
                  onClick={() => router.push("/chooseTemplate")}
                >
                  Create Your Own Template
                </Button>
              </div>
            </div>

            <footer className="p-4 sm:p-6 text-center text-white text-xs sm:text-sm">
              <p className="text-chart-4 mt-3 sm:mt-4">
                Gold rates update twice daily.
              </p>
            </footer>
          </div>
        </div>
      )}
    </LayoutWrapper>
  );
}
