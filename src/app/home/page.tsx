"use client";

import { Menu, TrendingDown, IndianRupee } from "lucide-react";
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
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl min-h-screen bg-[#093D39] overflow-hidden relative p-4 sm:p-6 pb-48 sm:pb-56">
          <div className="flex items-center gap-2 sm:gap-4 mt-12 sm:mt-18 ml-2 sm:ml-3">
            <Menu className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            <h4 className="text-white text-left text-lg sm:text-xl font-medium">
              Gold Rate Dashboard
            </h4>
          </div>

          <h4 className="text-center text-white text-xl sm:text-2xl lg:text-3xl font-bold mt-10 sm:mt-15 tracking-wider">
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

          <div className="mt-6 sm:mt-8">
            <h5 className="flex items-center bg-[#FFE2E2] p-4 sm:p-5 w-full rounded-4xl text-[#C10007] text-sm sm:text-base font-bold justify-center">
              <TrendingDown className="text-[#C10007] w-5 h-5 sm:w-6 sm:h-6" />{" "}
              &nbsp;
              <IndianRupee className="text-[#C10007] w-5 h-5 sm:w-6 sm:h-6 font-bold" />
              &nbsp;90 per gram
            </h5>
          </div>

          <footer className="absolute bottom-20 left-0 w-full p-4 sm:p-6 bg-[#093D39] text-center text-white text-xs sm:text-sm">
            <div className="space-y-3 sm:space-y-4">
              <Button
                className="w-full !bg-gradient-to-r from-[#FB9600] to-[#E27300] !text-white p-5 sm:p-7 rounded-xl text-base sm:text-lg font-bold"
                onClick={() => router.push("/chooseTemplate")}
              >
                Choose Your Template
              </Button>

              <Button className="w-full !bg-transparent border-1 !border-[#FB9600] !text-white p-5 sm:p-7 rounded-xl text-base sm:text-lg font-bold">
                Create Your Own Template
              </Button>
            </div>
            <p className="text-chart-4 mt-3 sm:mt-4">
              Gold rates update twice daily.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
