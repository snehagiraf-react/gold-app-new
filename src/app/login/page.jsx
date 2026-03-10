"use client";
import Link from "next/link";

export default function Login() {

  return (
    <div className="absolute top-48 w-full px-8 animate-fade-in">
      <div className="space-y-6">
        <p className="text-[#ffffffa9] text-center mb-8">Welcome Back</p>

        <div className="space-y-4">
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
          <label htmlFor="password" className="text-white text-sm">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-sm
               bg-white/10 text-white
                placeholder-white/60 border
                 border-white/20 focus:outline-none
                  focus:border-white/40"
          />
          <button
            className="w-full py-3 rounded-sm bg-white text-[#275152] font-semibold hover:bg-white/90 transition-colors text-sm"
          >
            Login
          </button>

          <div className="text-center">
            <Link
              href="/register"
              className="text-white text-sm hover:underline"
            >
              Dont have an account? Sign up
            </Link>
            <p>
              <Link
                href="/subscription-plan"
                className="text-sm hover:underline text-[#D4A540] font-bold"
              >
                Subscription Plans
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
