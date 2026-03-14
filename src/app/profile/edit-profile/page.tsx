"use client";

import { useRouter } from "next/navigation";
import {
  SquarePen,
  UserRound,
  Mail,
  Phone,
  MapPin,
  HardDriveUpload,
  Lock,
  Camera,
} from "lucide-react";
import { Button } from "@/components/button";
import LayoutWrapper from "@/components/LayoutWrapper";
import Header from "@/components/header";
import { UserProfile } from "@/js/types/profile";
import Image from "next/image";

const userProfile: UserProfile[] = [
  {
    id: "1",
    name: "jacob smith",
    image: "/template.png",
    email: "user@example.com",
    phoneNumber: "123-456-7890",
    address: "123 Main St, City, Country",
    logoUrl: "/logo.png",
    password: "password123",
  },
];

export default function EditProfile() {
  const router = useRouter();

  const handleEditProfile = () => {
    router.push("/profile/edit-profile");
  };

  return (
    <LayoutWrapper title="Profile">
      {({ toggleSidebar, title }) => (
        <div className="flex justify-center">
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-screen bg-[#093D39] flex flex-col relative">
            {/* Header */}
            <Header
              onMenuClick={toggleSidebar}
              title={title}
              showBackground={false}
              showBackButton={true}
              onBackClick={() => router.back()}
              rightAction={
                <Button
                  onClick={handleEditProfile}
                  className="text-chart-7 hover:bg-white/10 transition-colors !border-none !bg-transparent text-4xl"
                  aria-label="Edit profile"
                >
                  <SquarePen size={30} />
                </Button>
              }
            />

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 pb-10">
              <div className="flex justify-center mt-6 relative">
                <Image
                  src={userProfile[0].image}
                  alt="User Logo"
                  width={100}
                  height={100}
                  className="rounded-full w-24 h-24 object-cover"
                />

                <label className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-xl border border-gray-200 cursor-pointer hover:bg-gray-50 hover:scale-110 transition-all">
              <Camera className="w-4 h-4 text-gray-600" />
              <input
                type="file"
                className="hidden"
                accept="image/png, image/jpeg, image/jpg"
              />
            </label>
              </div>

              

              <form className="mt-10">
                <div className="space-y-4 text-chart-7 font-light">
                  <label className="text-sm flex mt-0">
                    <UserRound size={20} className="text-chart-7 mr-2" /> Full
                    Name
                  </label>
                  <input
                    type="text"
                    value={userProfile[0].name}
                    className="w-full px-4 py-2 rounded-sm bg-white/10 text-white border border-white/20 focus:outline-none focus:border-white/40"
                  />

                  <label className="text-sm flex">
                    <Mail size={20} className="text-chart-7 mr-2" /> Email
                  </label>
                  <input
                    type="email"
                    value={userProfile[0].email}
                    className="w-full px-4 py-2 rounded-sm bg-white/10 text-white border border-white/20 focus:outline-none focus:border-white/40"
                  />

                  <label className="text-sm flex">
                    <Phone size={20} className="text-chart-7 mr-2" /> Phone
                    Number
                  </label>
                  <input
                    type="text"
                    value={userProfile[0].phoneNumber}
                    className="w-full px-4 py-2 rounded-sm bg-white/10 text-white border border-white/20 focus:outline-none focus:border-white/40"
                  />

                  <label className="text-sm flex">
                    <MapPin size={20} className="text-chart-7 mr-2" /> Address
                  </label>
                  <textarea
                    rows={3}
                    value={userProfile[0].address}
                    className="w-full px-4 py-2 rounded-sm bg-white/10 text-white border border-white/20 focus:outline-none focus:border-white/40"
                  />

                  <label className="text-sm flex">
                    <HardDriveUpload size={20} className="text-chart-7 mr-2" />{" "}
                    Upload Logo
                  </label>
                  <input
                    type="file"
                    className="w-full px-4 py-2 rounded-sm bg-white/10 text-white border border-white/20"
                  />

                  <label className="text-sm flex">
                    <Lock size={20} className="text-chart-7 mr-2" /> Password
                  </label>
                  <input
                    type="password"
                    value={userProfile[0].password}
                    className="w-full px-4 py-2 rounded-sm bg-white/10 text-white border border-white/20 focus:outline-none focus:border-white/40"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </LayoutWrapper>
  );
}
