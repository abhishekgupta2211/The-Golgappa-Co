"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/components/LanguageContext";
import { PartyPopper, PhoneCall, Check, Calendar, Users, Award } from "lucide-react";
import { OrderDrawer } from "@/components/OrderDrawer";

export default function CateringPage() {
  const { t } = useLanguage();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fffdf7] text-gray-900 flex flex-col font-sans">
      <Navbar onOpenOrderModal={() => setDrawerOpen(true)} cartCount={0} />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-[#071d17] via-[#0f382c] to-[#071d17] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border-2 border-amber-400/40 text-center space-y-6">
          <span className="bg-amber-400/20 text-amber-300 text-xs font-black px-4 py-1.5 rounded-full border border-amber-400/40 uppercase">
            SHUBH AVSAR SPECIAL CATERING
          </span>

          <h1 className="text-4xl sm:text-6xl font-black text-amber-300 font-serif leading-tight">
            {t.eventHeading}
          </h1>

          <p className="text-lg sm:text-xl text-emerald-100 max-w-3xl mx-auto font-medium">
            {t.eventSub}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:9369610213"
              className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-emerald-950 font-black text-xl px-8 py-4 rounded-2xl shadow-xl transition flex items-center justify-center gap-3"
            >
              <PhoneCall className="w-6 h-6 text-emerald-950" />
              <span>Call: 9369610213</span>
            </a>
          </div>
        </div>

        {/* Catering Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-lg space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center text-2xl font-black">
              💍
            </div>
            <h3 className="text-xl font-bold text-[#0f382c]">Weddings & Sangeet</h3>
            <p className="text-sm text-gray-600">
              Live Golgappa counters with uniformed chefs, hygienic setup & 4 varieties of fresh paani for your guests!
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-lg space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center text-2xl font-black">
              🎂
            </div>
            <h3 className="text-xl font-bold text-[#0f382c]">Birthdays & Anniversaries</h3>
            <p className="text-sm text-gray-600">
              Custom spice levels from kid-friendly mild to extra spicy teekha to delight every single attendee.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-lg space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-900 flex items-center justify-center text-2xl font-black">
              🏢
            </div>
            <h3 className="text-xl font-bold text-[#0f382c]">Corporate & Bulk Orders</h3>
            <p className="text-sm text-gray-600">
              Bulk sealed packing of fresh crispy puris, fresh chickpea mash and 500ml mineral paani bottles.
            </p>
          </div>
        </div>

      </main>

      <OrderDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        products={[]}
        addOnsList={[]}
        cart={{}}
        setCart={() => {}}
      />
    </div>
  );
}
