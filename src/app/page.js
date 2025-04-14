"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
 

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({ username: "", password: "" });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setButtonDisabled(!(user.username && user.password));
  }, [user]);

  const onLogin = async () => {
    setLoading(true);
    try {
     
      const loginRes = await axios.post(
        "https://fakestoreapi.com/auth/login",
        user
      );

      const token = loginRes.data.token;
      if (!token) throw new Error("Invalid credentials");

    
      const usersRes = await axios.get("https://fakestoreapi.com/users");
      const users = usersRes.data;

      const loggedInUser = users.find(
        (u) => u.username === user.username
      );

      if (!loggedInUser) {
        toast.error("User not found after login");
        return;
      }

      
      localStorage.setItem("authToken", token);
      localStorage.setItem("currentUser", JSON.stringify(loggedInUser));

      toast.success("Login successful");
      router.push("/product");
    } catch (error) {
      console.error(error);
      toast.error("Login failed. Check credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-lg transition-all duration-500 ease-in-out hover:scale-[1.01]">
        <h1 className="text-3xl font-bold text-white text-center mb-6 transition-all duration-300">
          {loading ? "Logging in..." : "Login"}
        </h1>

        <div className="space-y-5">
          {/* Username */}
          <div>
            <label htmlFor="username" className="text-sm text-white block mb-1">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="w-full p-3 bg-white/90 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="text-sm text-white block mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full p-3 bg-white/90 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            />
          </div>

          {/* Login Button */}
          <button
            onClick={onLogin}
            disabled={buttonDisabled || loading}
            className={`w-full p-3 rounded-lg font-semibold text-white transition duration-300 ease-in-out transform ${
              buttonDisabled || loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 active:scale-95"
            }`}
          >
            {loading ? "Please wait..." : "Login"}
          </button>

          {/* Link to signup */}
          <div className="text-center text-sm mt-2 text-white">
            Don’t have an account?{" "}
            <Link
              href="/signup"
              className="text-indigo-400 hover:underline hover:text-indigo-300 transition duration-200"
            >
              Sign up here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
