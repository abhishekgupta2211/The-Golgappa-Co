"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { Flame, Sparkles, Check, ArrowRight } from "lucide-react";

export function TeekhaSlider() {
  const { t } = useLanguage();
  const [level, setLevel] = useState<number>(2); // 1: Mild, 2: Medium, 3: Spicy, 4: Extra Spicy

  const getSpiceData = () => {
    switch (level) {
      case 1:
        return {
          title: t.spiceMildTitle || "Mild & Mellow (Sweet Pudina)",
          desc: t.spiceMildDesc || "Crafted for gentle palates. Infused with sweet dates, fresh mint, and mild roasted cumin.",
          bg: "bg-[#faf7f2]",
          flameCount: 1,
          badgeColor: "bg-amber-500 text-white shadow-amber-500/20",
          image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
        };
      case 2:
        return {
          title: t.spiceMedTitle || "Balanced Classic (Desi Pudina)",
          desc: t.spiceMedDesc || "The quintessential Indian street flavour. Equal harmony of zesty lemon, black salt, and green chilli.",
          bg: "bg-[#faf7f2]",
          flameCount: 2,
          badgeColor: "bg-emerald-600 text-white shadow-emerald-600/20",
          image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
        };
      case 3:
        return {
          title: t.spiceSpicyTitle || "Fiery Teekha (Hing & Mirch)",
          desc: t.spiceSpicyDesc || "For true spice enthusiasts. Packed with crushed Mathania red chillies and strong asafoetida.",
          bg: "bg-[#faf7f2]",
          flameCount: 3,
          badgeColor: "bg-orange-600 text-white shadow-orange-600/20",
          image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
        };
      case 4:
      default:
        return {
          title: t.spiceExtraTitle || "Extreme Fire (Ghost Mirch Special)",
          desc: t.spiceExtraDesc || "Our signature challenge level. Extreme heat balanced with authentic Indian spice extracts.",
          bg: "bg-[#faf7f2]",
          flameCount: 4,
          badgeColor: "bg-red-600 text-white animate-pulse shadow-red-600/30",
          image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
        };
    }
  };

  const currentData = getSpiceData();

  return (
    <section className="py-24 w-full bg-[#faf7f2] text-gray-900 border-y border-emerald-900/10">
      <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="bg-emerald-900 text-amber-300 font-extrabold uppercase text-xs px-4 py-1.5 rounded-full border border-emerald-800">
            INTERACTIVE TEEKHA METER
          </span>
          <h2 className="text-4xl sm:text-6xl font-black font-serif uppercase tracking-tight text-[#0f382c]">
            {t.teekhaHeading}
          </h2>
          <p className="text-gray-600 font-medium text-base sm:text-lg">
            {t.teekhaSub}
          </p>
        </div>

        {/* Interactive Meter Box - Full Width max-w-7xl */}
        <div className="bg-white border-2 border-emerald-900/10 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
          
          {/* Slider Controls */}
          <div className="space-y-6">
            <div className="grid grid-cols-4 gap-2 text-center text-xs font-black uppercase tracking-wider text-emerald-900">
              <span className={level === 1 ? "text-amber-600 underline font-black text-sm" : ""}>1. Mild</span>
              <span className={level === 2 ? "text-emerald-700 underline font-black text-sm" : ""}>2. Medium</span>
              <span className={level === 3 ? "text-orange-600 underline font-black text-sm" : ""}>3. Spicy</span>
              <span className={level === 4 ? "text-red-600 underline font-black text-sm" : ""}>4. Extra Spicy</span>
            </div>

            <input
              type="range"
              min="1"
              max="4"
              step="1"
              value={level}
              onChange={(e) => setLevel(parseInt(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0f382c]"
            />
          </div>

          {/* Dynamic Result Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#faf7f2] p-6 sm:p-8 rounded-2xl border border-gray-200">
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#0f382c] text-amber-300">
                <Flame className="w-4 h-4 fill-amber-400" />
                <span>LEVEL {level} OF 4</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black font-serif text-[#0f382c]">
                {currentData.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
                {currentData.desc}
              </p>
            </div>

            <div className="lg:col-span-5 relative h-64 rounded-2xl overflow-hidden border-2 border-emerald-900/10 shadow-lg">
              <img
                src={currentData.image}
                alt={currentData.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
