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
          title: t.spiceMildTitle,
          desc: t.spiceMildDesc,
          bg: "from-amber-950/90 via-[#071d17] to-[#040d0a]",
          flameCount: 1,
          badgeColor: "bg-amber-500 text-[#071d17]",
          image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
        };
      case 2:
        return {
          title: t.spiceMedTitle,
          desc: t.spiceMedDesc,
          bg: "from-emerald-950/90 via-[#071d17] to-[#040d0a]",
          flameCount: 2,
          badgeColor: "bg-emerald-500 text-white",
          image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
        };
      case 3:
        return {
          title: t.spiceSpicyTitle,
          desc: t.spiceSpicyDesc,
          bg: "from-orange-950/90 via-[#071d17] to-[#040d0a]",
          flameCount: 3,
          badgeColor: "bg-orange-500 text-white",
          image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
        };
      case 4:
      default:
        return {
          title: t.spiceExtraTitle,
          desc: t.spiceExtraDesc,
          bg: "from-red-950/90 via-[#071d17] to-[#040d0a]",
          flameCount: 4,
          badgeColor: "bg-red-600 text-white animate-pulse",
          image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
        };
    }
  };

  const currentData = getSpiceData();

  return (
    <section className={`py-24 w-full bg-gradient-to-b ${currentData.bg} text-white transition-colors duration-500 border-y border-emerald-900/60`}>
      <div className="w-full px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="bg-amber-400/20 text-amber-300 font-extrabold text-xs px-4 py-1.5 rounded-full border border-amber-400/40 tracking-widest uppercase">
            INTERACTIVE TEKHA METER
          </span>
          <h2 className="text-4xl sm:text-6xl font-black font-serif text-amber-300 tracking-tight">
            {t.spiceHeading}
          </h2>
          <p className="text-emerald-200 text-sm sm:text-base font-medium max-w-xl mx-auto">
            Slide to adjust the chili meter and preview our secret spice blends.
          </p>
        </div>

        {/* Interactive Slider Controller */}
        <div className="bg-emerald-950/80 p-8 rounded-3xl border border-emerald-800/80 shadow-2xl space-y-8">
          
          <div className="flex justify-between items-center px-2">
            {[
              { num: 1, label: "MILD" },
              { num: 2, label: "MEDIUM" },
              { num: 3, label: "SPICY" },
              { num: 4, label: "EXTRA SPICY" },
            ].map((step) => (
              <button
                key={step.num}
                onClick={() => setLevel(step.num)}
                className={`flex flex-col items-center gap-1.5 transition transform ${
                  level === step.num ? "scale-110" : "opacity-60 hover:opacity-100"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm border-2 ${
                    level === step.num
                      ? "bg-amber-400 text-emerald-950 border-amber-300 shadow-lg"
                      : "bg-emerald-900 text-emerald-200 border-emerald-700"
                  }`}
                >
                  {step.num}
                </div>
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider">{step.label}</span>
              </button>
            ))}
          </div>

          <input
            type="range"
            min="1"
            max="4"
            step="1"
            value={level}
            onChange={(e) => setLevel(parseInt(e.target.value))}
            className="w-full accent-amber-400 h-3 bg-emerald-900 rounded-lg cursor-pointer"
          />

          {/* Result Card Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4 border-t border-emerald-900">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${currentData.badgeColor}`}>
                  LEVEL {level} OF 4
                </span>
                <div className="flex text-amber-400 gap-1">
                  {[...Array(currentData.flameCount)].map((_, i) => (
                    <Flame key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-amber-300 font-serif">
                {currentData.title}
              </h3>

              <p className="text-sm text-emerald-100/90 leading-relaxed font-medium">
                {currentData.desc}
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-400/30 aspect-video">
              <img
                src={currentData.image}
                alt="Teekha Golgappa"
                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040d0a] via-transparent to-transparent opacity-60" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
