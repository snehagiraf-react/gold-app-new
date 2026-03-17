"use client";

import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/button";
import { useRouter } from "next/navigation";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/subscription-plan");
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-screen ">
        <div className="w-full max-w-md min-h-screen bg-[#093D39] overflow-hidden relative p-6">
          <h1 className="text-white !text-7xl font-serif text-center mt-15">
            Aurevia
          </h1>
          <p className="text-[#ffffffa9] text-center mb-8">
            Create your account
          </p>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <label htmlFor="email" className="text-white text-sm">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 rounded-sm
                   bg-white/10 text-white
                    placeholder-white/60 border
                     border-white/20 focus:outline-none
                      focus:border-white/40"
              />
              <label htmlFor="email" className="text-white text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-sm
                   bg-white/10 text-white
                    placeholder-white/60 border
                     border-white/20 focus:outline-none
                      focus:border-white/40"
              />

              <label htmlFor="phoneNumber" className="text-white text-sm">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="text"
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 rounded-sm
                   bg-white/10 text-white
                    placeholder-white/60 border
                     border-white/20 focus:outline-none
                      focus:border-white/40"
              />

              <label htmlFor="address" className="text-white text-sm">
                Address
              </label>
              <textarea
                cols={2}
                rows={3}
                id="address"
                type="text"
                placeholder="Enter your address"
                className="w-full px-4 py-2 rounded-sm
                   bg-white/10 text-white
                    placeholder-white/60 border
                     border-white/20 focus:outline-none
                      focus:border-white/40"
              />

              <label htmlFor="email" className="text-white text-sm">
                Upload Logo
              </label>
              <input
                id="file"
                type="file"
                placeholder="Choose file to upload"
                className="w-full px-4 py-2 rounded-sm
                   bg-white/10 text-white
                    placeholder-white/60 border
                     border-white/20 focus:outline-none
                      focus:border-white/40"
              />
              <label htmlFor="password" className="text-white text-sm">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  className="w-full px-4 py-2 pr-10 rounded-sm
                     bg-white/10 text-white
                      placeholder-white/60 border
                       border-white/20 focus:outline-none
                        focus:border-white/40 [&::-ms-reveal]:hidden"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <label htmlFor="confirmPassword" className="text-white text-sm">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  className="w-full px-4 py-2 pr-10 rounded-sm
                     bg-white/10 text-white
                      placeholder-white/60 border
                       border-white/20 focus:outline-none
                        focus:border-white/40 [&::-ms-reveal]:hidden"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
              <Button className="w-full py-3 rounded-sm bg-white text-[#275152] font-semibold hover:bg-white/90 transition-colors text-sm">
                Sign Up
              </Button>

              <div className="text-center mb-5">
                <Link href="/" className="text-white text-sm hover:underline">
                  Already have an account? Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
