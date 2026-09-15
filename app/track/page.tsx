"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { Search, PackageCheck, Clock, ShieldCheck, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function TrackOrderPage() {
  const { t } = useLanguage();
  const [orderNumber, setOrderNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setOrder(null);

    try {
      const res = await fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderNumber, phone }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Order not found");
      }

      setOrder(data.order);
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to find order");
    } finally {
      setLoading(false);
    }
  };

  const statusSteps = ["NEW", "ACCEPTED", "PREPARING", "READY", "COMPLETED"];
  const currentStepIndex = order ? statusSteps.indexOf(order.orderStatus) : -1;

  return (
    <div className="min-h-screen bg-[#fffdf7] text-gray-900 flex flex-col font-sans">
      
      {/* Header */}
      <header className="bg-[#0f382c] text-white py-6 border-b border-emerald-800">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-amber-300 font-bold hover:underline">
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </Link>
          <span className="font-black text-[#fffdf7] text-xl tracking-tight">THE GOLGAPPA CO.</span>
        </div>
      </header>

      {/* Main Track Section */}
      <main className="flex-1 max-w-2xl mx-auto px-4 py-12 w-full space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-black text-[#0f382c]">{t.trackTitle}</h1>
          <p className="text-sm text-gray-600 font-medium">{t.trackSub}</p>
        </div>

        {/* Search Form */}
        <form onSubmit={handleTrack} className="bg-white p-6 rounded-3xl shadow-xl border border-gray-200 space-y-4">
          {errorMsg && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-xl text-xs font-semibold">
              ⚠️ {errorMsg}
            </div>
          )}

          <div>
            <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Order ID *</label>
            <input
              type="text"
              placeholder="e.g. GP-20260915-001"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              className="w-full p-3.5 rounded-xl border border-gray-300 text-sm font-bold uppercase focus:ring-2 focus:ring-emerald-600 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Registered Phone Number *</label>
            <input
              type="tel"
              placeholder="10-digit mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3.5 rounded-xl border border-gray-300 text-sm font-bold focus:ring-2 focus:ring-emerald-600 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0f382c] hover:bg-emerald-900 text-amber-300 font-black py-4 rounded-xl shadow-lg transition flex items-center justify-center gap-2"
          >
            <Search className="w-5 h-5" />
            <span>{loading ? "Searching..." : t.searchOrder}</span>
          </button>
        </form>

        {/* Order Status Timeline Result */}
        {order && (
          <div className="bg-white p-8 rounded-3xl shadow-2xl border border-emerald-900/10 space-y-6">
            <div className="flex justify-between items-center border-b border-gray-100 pb-4">
              <div>
                <span className="text-xs font-bold text-gray-500">ORDER NUMBER</span>
                <h3 className="text-2xl font-black font-mono text-[#0f382c]">{order.orderNumber}</h3>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-gray-500">STATUS</span>
                <p className="text-sm font-black text-emerald-800 uppercase px-3 py-1 bg-emerald-100 rounded-full border border-emerald-300">
                  {order.orderStatus}
                </p>
              </div>
            </div>

            {/* Timeline Progress */}
            <div className="space-y-4 pt-2">
              <p className="font-bold text-xs uppercase text-gray-500">Order Progress</p>
              <div className="grid grid-cols-5 gap-1 text-center">
                {statusSteps.map((st, idx) => {
                  const isDone = idx <= currentStepIndex;
                  return (
                    <div key={st} className="flex flex-col items-center gap-1">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                        isDone ? "bg-emerald-700 text-white" : "bg-gray-200 text-gray-400"
                      }`}>
                        {idx + 1}
                      </div>
                      <span className={`text-[10px] font-extrabold uppercase ${isDone ? "text-emerald-900" : "text-gray-400"}`}>
                        {st}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Order Item Summary */}
            <div className="bg-gray-50 p-4 rounded-2xl space-y-2 text-xs">
              <p className="font-bold text-gray-700">Customer Details:</p>
              <p>Name: <strong>{order.customerName}</strong></p>
              <p>Pickup Time: <strong>{order.pickupTime}</strong></p>
              <p className="pt-2 font-bold text-gray-700 border-t border-gray-200">Payment:</p>
              <p className="text-emerald-800 font-bold">💳 Pay at Stall (UNPAID) - Total: ₹{order.total}</p>
            </div>
          </div>
        )}
      </main>

    </div>
  );
}
