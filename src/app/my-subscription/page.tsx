"use client";

import { useRouter } from "next/navigation";
import { MoveLeft, Check, Menu } from "lucide-react";
import type { SubscriptionPlanCards } from "@/js/types/gold-rate";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/cards";
import { Button } from "@/components/button";
import LayoutWrapper from "@/components/LayoutWrapper";
import Header from "@/components/header";

const subscriptionplanCard: SubscriptionPlanCards[] = [
  {
    id: 1,
    plan: "1 Month",
    price: "15,000",
    expiry: "Expires on 31 Dec 2024",
    offer: "48,000",
    save: "Save 10%",
    features: [
      "Real-time gold rate updates",
      "Market analysis & insights",
      "Price alerts & notifications",
    ],
  },
  {
    id: 2,
    plan: "6 Month",
    price: "30,000",
    expiry: "Expires on 31 Dec 2024",
    offer: "90,000",
    save: "Save 45%",
    features: [
      "Real-time gold rate updates",
      "Market analysis & insights",
      "Price alerts & notifications",
    ],
  },
  {
    id: 3,
    plan: "1 Year",
    expiry: "Expires on 31 Dec 2024",
    price: "50,000",
    offer: "1,20,000",
    save: "Save 60%",
    features: [
      "Real-time gold rate updates",
      "Market analysis & insights",
      "Price alerts & notifications",
    ],
  },
];

export default function MySubscription() {
  const router = useRouter();

  return (
    <LayoutWrapper title="My Subscription">
      {({ toggleSidebar, title }) => (
        <div className="flex justify-center">
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-screen bg-[#093D39] flex flex-col">
            <Header
              onMenuClick={toggleSidebar}
              title={title}
              showBackground={false}
              showBackButton={true}
              onBackClick={() => router.back()}
            />
            
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              {/* Title */}
              <h2 className="text-center text-white text-xl font-bold mt-5 tracking-wide">
                Active Plan
              </h2>

              <p className="text-center text-white/70 text-sm mt-2">
                Your current subscription plan and benefits
              </p>

              {/* Cards */}
              <div className="grid gap-5 mt-10">
                {subscriptionplanCard.map((plan, index) => (
                  <div key={plan.id}>
                    {index === 1 && (
                      <div className="mb-6">
                        <h2 className="text-white text-xl font-bold text-center">Other Plans</h2>
                        <p className="text-white/70 text-sm text-center">
                          Explore other subscription options
                        </p>
                      </div>
                    )}
                    <Card
                      className={`relative rounded-xl p-5 transition-all duration-300
              
              ${
                index === 1
                  ? "border-2 border-yellow-400 bg-[#3a6d66]"
                  : "border border-white/20 bg-[#3a6d66]"
              }`}
                  >
                    {/* Active + Recommended Badges */}
                    {index === 0 && (
                      <div className="absolute -top-3 right-3 bg-emerald-500 text-white text-xs px-4 py-1 rounded-full font-medium shadow-md">
                        Active
                      </div>
                      
                    )}
                
                    {index === 1 && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs px-4 py-1 rounded-full font-medium">
                        Recommended
                      </div>
                    )}

                    <CardHeader className="p-0">
                      {/* Plan */}
                      <CardTitle className="text-chart-4 text-xl font-semibold">
                        {plan.plan}
                      </CardTitle>
                      {index === 0 && (
                        <h5 className="text-chart-4 text-sm mt-1">{plan.expiry}</h5>
                      )}

                      {/* Price */}
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-white text-3xl font-bold">
                          ₹{plan.price}
                          {index !== 1 && (
                            <span className="text-white/50 line-through text-sm ml-2">
                              ₹{plan.offer}
                            </span>
                          )}
                        </span>

                        {index === 1 && (
                          <span className="text-white/50 line-through">₹43,500</span>
                        )}
                      </div>

                      {/* Save */}
                      <p className="text-green-400 text-sm mt-1">{plan.save}</p>

                      {/* Features */}
                      <CardDescription className="mt-4 text-white/80">
                        <ul className="space-y-2">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <Check className="text-chart-4 w-4 h-4" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardDescription>

                      {/* Subscribe Button */}
                      {index !== 0 && (
                        <Button
                          className={`w-full mt-6 text-black py-3 rounded-sm font-semibold transition ${
                            index !== 0
                              ? " border-1 !border-chart-4 !bg-transparent hover:bg-yellow-400 text-chart-4"
                              : "bg-white hover:bg-gray-100"
                          }`}
                          onClick={() => router.push("/home")}
                        >
                          Upgrade to this plan
                        </Button>
                      )}
                    </CardHeader>
                  </Card>                  
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
