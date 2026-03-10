import Link from "next/link";
import { MoveLeft } from "lucide-react";


export default function SubscriptionPlan() {
return(
    <>
     <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-md min-h-screen bg-[#093D39] overflow-hidden relative">
        <div
          className="flex items-center gap-4 mt-8 ml-3"
        >
            <MoveLeft className="text-white "/>
        <h4 className="text-white text-left"><Link href="/subscription-plan">Choose Your Subscription</Link></h4>
            </div>
        </div>
      </div>
    
    </>
)
}