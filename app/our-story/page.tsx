"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/components/LanguageContext";
import { Sparkles, ArrowRight, ShieldCheck, Heart } from "lucide-react";
import { OrderDrawer } from "@/components/OrderDrawer";

export default function StoryPage() {
  const { t } = useLanguage();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const timelineSteps = [
    {
      year: "2004",
      title: "The Beginning at Central Park",
      description: "Mahesh Kumar Gupta started a small handcart near Central Park with a simple philosophy: 100% pure mineral water, hand-ground secret spices, and fresh crispy puris fried in clean oil.",
    },
    {
      year: "2010",
      title: "The Iconic Teekha Pudina Paani Craze",
      description: "Word spread across the city about Mahesh Ji's secret recipe pudina paani. Lines of foodies began forming every single afternoon at 3:00 PM.",
    },
    {
      year: "2018",
      title: "Introducing Event & Wedding Live Stalls",
      description: "Expanded to offer live Golgappa stalls for weddings, birthdays & corporate functions, serving thousands of guests across the region.",
    },
    {
      year: "2026",
      title: "20+ Years Legacy & Modern Booking",
      description: "Celebrating over two decades at the exact same location! Introducing online booking & order tracking while preserving the 100% authentic street taste.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#fffdf7] text-gray-900 flex flex-col font-sans">
      <Navbar onOpenOrderModal={() => setDrawerOpen(true)} cartCount={0} />

      <main className="flex-1 w-full px-4 sm:px-8 lg:px-12 py-16 space-y-16">
        
        {/* Story Hero */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="text-emerald-800 font-extrabold uppercase text-xs bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-300">
            HERITAGE DOCUMENTARY
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-[#0f382c] font-serif leading-tight">
            20+ YEARS. SAME PLACE. SAME LOVE.
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            Founded in 2004 by Mahesh Kumar Gupta, THE GOLGAPPA CO. is built on tradition, pure mineral water, and genuine local love.
          </p>
        </div>

        {/* Story Timeline */}
        <div className="max-w-4xl mx-auto space-y-12">
          {timelineSteps.map((step, idx) => (
            <div key={step.year} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-b border-gray-200 pb-10">
              <div className="md:col-span-3">
                <span className="text-5xl font-black font-serif text-amber-600 block">{step.year}</span>
                <span className="text-xs font-bold text-gray-400 uppercase">CHAPTER 0{idx + 1}</span>
              </div>
              <div className="md:col-span-9 space-y-2">
                <h3 className="text-2xl font-black text-[#0f382c] font-serif">{step.title}</h3>
                <p className="text-base text-gray-700 leading-relaxed font-medium">{step.description}</p>
              </div>
            </div>
          ))}
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
