"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck, Lock, User } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Login failed");
      }

      router.push("/admin/dashboard");
    } catch (err: any) {
      setErrorMsg(err.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071d17] to-[#0f382c] flex items-center justify-center p-4 font-sans text-white">
      <div className="w-full max-w-md bg-white text-gray-900 rounded-3xl p-8 shadow-2xl space-y-6">
        
        <div className="text-center space-y-2">
          <div className="w-16 h-16 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center mx-auto text-3xl font-black shadow-md">
            🧆
          </div>
          <h1 className="text-2xl font-black text-[#0f382c]">Owner Admin Portal</h1>
          <p className="text-xs text-gray-500 font-semibold">THE GOLGAPPA CO. • Mahesh Kumar Gupta</p>
        </div>

        {errorMsg && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-xl text-xs font-semibold text-center">
            ⚠️ {errorMsg}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Username</label>
            <div className="relative">
              <User className="w-5 h-5 absolute left-3 top-3.5 text-gray-400" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Admin username"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 text-sm font-semibold focus:ring-2 focus:ring-emerald-600 outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Password</label>
            <div className="relative">
              <Lock className="w-5 h-5 absolute left-3 top-3.5 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 text-sm font-semibold focus:ring-2 focus:ring-emerald-600 outline-none"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0f382c] hover:bg-emerald-900 text-amber-300 font-black py-4 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-base"
          >
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <span>{loading ? "Logging in..." : "SECURE LOGIN"}</span>
          </button>
        </form>

        <p className="text-[11px] text-gray-400 text-center font-medium">
          Demo Username: <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-700 font-bold">admin</code> • Password: <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-700 font-bold">admin123</code>
        </p>
      </div>
    </div>
  );
}
