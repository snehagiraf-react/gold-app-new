"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { MoveLeft, Check } from "lucide-react";
import type { SubscriptionPlanCards } from "@/js/types/gold-rate";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/cards";
import { Button } from "@/components/button";

const subscriptionplanCard: SubscriptionPlanCards[] = [
  {
    id: 1,
    plan: "1 Month",
    price: "15,000",
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

export default function SubscriptionPlan() {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#093D39]">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl min-h-screen p-4 sm:p-6 pb-40">

        {/* Header */}
        <div className="flex items-center gap-3 mt-10">
          <MoveLeft className="text-white w-5 h-5" />
          <h4 className="text-white text-lg font-medium">
            <Link href="/subscription-plan">Choose Your Subscription</Link>
          </h4>
        </div>

        {/* Title */}
        <h2 className="text-center text-white text-xl font-bold mt-10 tracking-wide">
          Unlock Premium Gold Rates
        </h2>

        <p className="text-center text-white/70 text-sm mt-2">
          Get real-time updates and exclusive market insights
        </p>

        {/* Cards */}
        <div className="grid gap-5 mt-10">

          {subscriptionplanCard.map((plan, index) => (

            <Card
              key={plan.id}
              className={`relative rounded-xl p-5 transition-all duration-300
              
              ${
                index === 1
                  ? "border-2 border-yellow-400 bg-[#4b6348]"
                  : "border border-white/20 bg-[#1a4b45]"
              }`}
            >

              {/* Recommended Badge */}
              {index === 1 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs px-4 py-1 rounded-full font-medium">
                  Recommended
                </div>
              )}

              <CardHeader className="p-0">

                {/* Plan */}
                <CardTitle className="text-yellow-400 text-xl font-semibold">
                  {plan.plan}
                </CardTitle>

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
                    <span className="text-white/50 line-through">
                      ₹43,500
                    </span>
                  )}
                </div>

                {/* Save */}
                <p className="text-green-400 text-sm mt-1">
                  {plan.save}
                </p>

                {/* Features */}
                <CardDescription className="mt-4 text-white/80">

                  <ul className="space-y-2">

                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="text-yellow-400 w-4 h-4" />
                        {feature}
                      </li>
                    ))}

                  </ul>

                </CardDescription>

                {/* Subscribe Button */}
                <Button 
                  className={`w-full mt-6 text-black py-3 rounded-md font-semibold transition ${
                    index === 1
                      ? "bg-yellow-500 hover:bg-yellow-400"
                      : "bg-white hover:bg-gray-100"
                  }`}
                  onClick={() => router.push("/home")}
                >
                  Subscribe Now
                </Button>

              </CardHeader>

            </Card>

          ))}

        </div>

        <footer className="text-center text-white/70 text-xs mt-6">          
            <p>Subscription auto-renews.Cancel anytime.</p>
            <p>Secure payment . No hidden charges</p>

        </footer>

      </div>
    </div>
  );
}