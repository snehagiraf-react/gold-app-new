"use client";
import { Button } from "@/components/button";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    // you can add login validation or API call here
    router.push("/home"); // navigate to subscription plan page
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md min-h-screen bg-[#093D39] overflow-hidden relative flex flex-col justify-center items-center p-6">
        <h1 className="text-white font-serif text-center">Aurevia</h1>
            <p className="text-[#ffffffa9] text-center">Welcome Back</p>

        <div className="w-full animate-fade-in mt-8">
          <div className="space-y-6">

            <div className="space-y-4">
              <label htmlFor="email" className="text-white text-sm">
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-sm bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:border-white/40"
              />

              <label htmlFor="password" className="text-white text-sm">
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 rounded-sm bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:border-white/40"
              />

              {/* Login Button */}
              <Button
                onClick={handleLogin}
                className="w-full py-3 rounded-sm bg-white text-[#275152] font-semibold hover:bg-white/90 transition-colors text-sm mt-4"
              >
                Login
              </Button>

              <div className="text-center">
                <Link
                  href="/register"
                  className="text-white text-sm hover:underline"
                >
                  Don&apos;t have an account? Sign up
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
      </div>
    </div>
  );
}