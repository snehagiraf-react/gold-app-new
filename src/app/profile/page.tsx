"use client";

import { useRouter, usePathname } from "next/navigation";
import { useRef, useState } from "react";
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
import Image from "next/image";

const userProfile = {
  id: "1",
  name: "jacob smith",
  image: "/template.png",
  email: "user@example.com",
  phoneNumber: "123-456-7890",
  address: "123 Main St, City, Country",
  logoUrl: "/logo.png",
  password: "password123",
};

export default function Profile() {
  const router = useRouter();
  const pathname = usePathname();

  const isEdit = pathname.includes("edit-profile");

  const profileInputRef = useRef(null);
  const logoInputRef = useRef(null);

  const [profileImage, setProfileImage] = useState(userProfile.image);
  const [logoPreview, setLogoPreview] = useState(userProfile.logoUrl);

  const handleEditProfile = () => {
    router.push("/profile/edit-profile");
  };

  const handleProfileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  return (
    <LayoutWrapper title="Profile">
      {({ toggleSidebar, title }) => (
        <div className="flex justify-center">
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-screen bg-[#093D39] flex flex-col relative">

            {/* Header */}
            <Header
              onMenuClick={toggleSidebar}
              title={isEdit ? "Edit Profile" : title}
              showBackground={false}
              showBackButton={true}
              onBackClick={() => router.back()}
              rightAction={
                !isEdit && (
                  <Button
                    onClick={handleEditProfile}
                    className="text-chart-7 hover:bg-white/10 transition-colors !border-none !bg-transparent"
                  >
                    <SquarePen size={30} />
                  </Button>
                )
              }
            />

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 pb-10">

              {/* Profile Image */}
              <div className="flex justify-center mt-6">
                <div className="relative">
                  <Image
                    src={profileImage}
                    alt="User"
                    width={100}
                    height={100}
                    className="rounded-full w-24 h-24 object-cover border-2 border-[#FB9600]"
                  />

                  {isEdit && (
                    <>
                      <Button
                        type="button"
                        onClick={() => profileInputRef.current.click()}
                        className="absolute bottom-[-5px] right-[-5px] bg-[#FB9600] p-2 rounded-full shadow-md"
                      >
                        <Camera size={16} className="text-white" />
                      </Button>

                      <input
                        ref={profileInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleProfileUpload}
                      />
                    </>
                  )}
                </div>
              </div>

              {/* Form */}
              <form className="mt-10">
                <div className="space-y-4 text-chart-7 font-light">

                  {/* Name */}
                  <label className="text-sm flex">
                    <UserRound size={20} className="mr-2" /> Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue={userProfile.name}
                    disabled={!isEdit}
                    className="w-full px-4 py-2 rounded-sm bg-white/10 text-white border border-white/20 disabled:opacity-70"
                  />

                  {/* Email */}
                  <label className="text-sm flex">
                    <Mail size={20} className="mr-2" /> Email
                  </label>
                  <input
                    type="email"
                    defaultValue={userProfile.email}
                    disabled={!isEdit}
                    className="w-full px-4 py-2 rounded-sm bg-white/10 text-white border border-white/20 disabled:opacity-70"
                  />

                  {/* Phone */}
                  <label className="text-sm flex">
                    <Phone size={20} className="mr-2" /> Phone Number
                  </label>
                  <input
                    type="text"
                    defaultValue={userProfile.phoneNumber}
                    disabled={!isEdit}
                    className="w-full px-4 py-2 rounded-sm bg-white/10 text-white border border-white/20 disabled:opacity-70"
                  />

                  {/* Address */}
                  <label className="text-sm flex">
                    <MapPin size={20} className="mr-2" /> Address
                  </label>
                  <textarea
                    rows={3}
                    defaultValue={userProfile.address}
                    disabled={!isEdit}
                    className="w-full px-4 py-2 rounded-sm bg-white/10 text-white border border-white/20 disabled:opacity-70"
                  />

                  {/* Logo Field (Single Field Editable) */}
                  <label className="text-sm flex">
                    <HardDriveUpload size={20} className="mr-2" /> Upload Logo
                  </label>

                  <div
                    className={`w-full px-4 py-3 rounded-sm bg-white/10 text-white border border-white/20 flex items-center gap-3 ${
                      isEdit ? "cursor-pointer" : ""
                    }`}
                    onClick={() => isEdit && logoInputRef.current.click()}
                  >
                    {/* <Image
                      src={logoPreview}
                      alt="Logo"
                      width={40}
                      height={40}
                      className="rounded object-cover"
                    /> */}

                    <span className="text-sm text-white/70">
                      {isEdit ? "Click to change logo" : "Company Logo"}
                    </span>
                  </div>

                  <input
                    ref={logoInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleLogoUpload}
                  />

                  {/* Password */}
                  <label className="text-sm flex">
                    <Lock size={20} className="mr-2" /> Password
                  </label>
                  <input
                    type="password"
                    defaultValue={userProfile.password}
                    disabled={!isEdit}
                    className="w-full px-4 py-2 rounded-sm bg-white/10 text-white border border-white/20 disabled:opacity-70"
                  />

                  {/* Save Button */}
                  {isEdit && (
                    <Button
                      className="w-full !bg-gradient-to-r from-[#FB9600] to-[#E27300] !text-white p-5 sm:p-7 rounded-xl text-base sm:text-lg font-bold"
                      onClick={() => router.push("/chooseTemplate")}
                    >
                      Save Changes
                    </Button>
                  )}

                </div>
              </form>

            </div>
          </div>
        </div>
      )}
    </LayoutWrapper>
  );
}