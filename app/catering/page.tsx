"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/components/LanguageContext";
import { PartyPopper, PhoneCall, Check, Calendar, Users, Award, Heart, ShieldCheck, ArrowRight } from "lucide-react";
import { OrderDrawer } from "@/components/OrderDrawer";
import { motion } from "framer-motion";

export default function CateringPage() {
  const { t } = useLanguage();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const eventPackages = [
    {
      title: "Silver Wedding Stall Package",
      plates: "100 - 250 Guests",
      features: ["Live Uniformed Chef Counter", "2 Paani Variants (Pudina & Imli)", "Classic Potato-Chana Mash", "Nylon Sev & Boondi Toppings", "Sealed Mineral Water Setup"],
      price: "Best Rate on Call",
    },
    {
      title: "Gold Grand Reception Package",
      plates: "250 - 500 Guests",
      features: ["2 Live Steel Counters", "All 4 Paani Special Variants", "Special Dahi Puri & Fusion Golgappe", "Custom Spice Meter Controls", "Unlimited Puris & Mineral Water"],
      price: "Best Rate on Call",
    },
    {
      title: "Royal Shubh Avsar Package",
      plates: "500+ Large Weddings",
      features: ["3+ Signature Counters", "All Golgappa Variants + Dahi Puri", "Customized Logo Banner", "Dedicated Hygienic Staff", "Exclusive Mahesh Ji Secret Recipe"],
      price: "Custom Quote",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#fffdf7] text-gray-900 flex flex-col font-sans">
      <Navbar onOpenOrderModal={() => setDrawerOpen(true)} cartCount={0} />

      <main className="flex-1 w-full space-y-16 py-12">
        
        {/* Section 1: Hero Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto"
        >
          <div className="bg-gradient-to-r from-[#071d17] via-[#0f382c] to-[#071d17] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border-2 border-amber-400/40 text-center space-y-6">
            <span className="bg-amber-400/20 text-amber-300 text-xs font-black px-4 py-1.5 rounded-full border border-amber-400/40 uppercase tracking-widest">
              SHUBH AVSAR LIVE GOLGAPPA STALLS
            </span>

            <h1 className="text-4xl sm:text-6xl font-black text-amber-300 font-serif leading-tight">
              {t.eventHeading}
            </h1>

            <p className="text-base sm:text-xl text-emerald-100 max-w-3xl mx-auto font-medium">
              {t.eventSub}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:9369610213"
                className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-emerald-950 font-black text-xl px-8 py-4 rounded-2xl shadow-xl transition flex items-center justify-center gap-3"
              >
                <PhoneCall className="w-6 h-6 text-emerald-950" />
                <span>Call Mahesh Kumar Gupta: 9369610213</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Section 2: Catering Packages Grid */}
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-black text-[#0f382c] font-serif">Event Packages & Pricing</h2>
            <p className="text-gray-600 text-sm font-medium">Choose the perfect live counter setup for your guests.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventPackages.map((pkg) => (
              <div key={pkg.title} className="bg-white p-8 rounded-3xl border border-gray-200 shadow-lg flex flex-col justify-between space-y-6 hover:shadow-2xl transition">
                <div className="space-y-4">
                  <span className="bg-emerald-100 text-emerald-900 font-black text-xs px-3 py-1 rounded-full uppercase">
                    {pkg.plates}
                  </span>
                  <h3 className="text-2xl font-black text-[#0f382c] font-serif">{pkg.title}</h3>
                  
                  <div className="space-y-2 pt-2 text-xs font-semibold text-gray-700">
                    {pkg.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="tel:9369610213"
                  className="w-full bg-[#0f382c] hover:bg-emerald-900 text-amber-300 font-black py-3 rounded-2xl text-center text-xs uppercase tracking-wider"
                >
                  Book Package: 9369610213
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Why Choose Us for Events */}
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto bg-gradient-to-b from-[#0a271f] to-[#0f382c] text-white p-8 sm:p-12 rounded-3xl shadow-xl space-y-8 border border-emerald-800">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-amber-300 font-black text-xs uppercase tracking-widest">THE HYGIENE GUARANTEE</span>
            <h2 className="text-3xl font-black font-serif text-amber-300">Why Event Organizers Love Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-emerald-950/80 rounded-2xl border border-emerald-700/60 space-y-2">
              <p className="text-3xl font-black text-amber-400">100%</p>
              <h4 className="font-bold text-white text-sm">RO Mineral Water</h4>
              <p className="text-xs text-emerald-200">No municipal water used anywhere.</p>
            </div>
            <div className="p-6 bg-emerald-950/80 rounded-2xl border border-emerald-700/60 space-y-2">
              <p className="text-3xl font-black text-amber-400">500+</p>
              <h4 className="font-bold text-white text-sm">Events Served</h4>
              <p className="text-xs text-emerald-200">Weddings, Sangeet & Corporate Parties.</p>
            </div>
            <div className="p-6 bg-emerald-950/80 rounded-2xl border border-emerald-700/60 space-y-2">
              <p className="text-3xl font-black text-amber-400">20+ Yrs</p>
              <h4 className="font-bold text-white text-sm">Authentic Recipe</h4>
              <p className="text-xs text-emerald-200">Prepared by Mahesh Kumar Gupta.</p>
            </div>
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
