"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function LegacySection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 w-full bg-[#f9f6ef] text-[#071d17] border-b border-emerald-900/10 overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Large Oversized Number */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-emerald-800 font-extrabold uppercase tracking-widest text-xs bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-300 shadow-xs">
              HERITAGE & TRADITION
            </span>
            
            <div className="leading-none">
              <span className="text-8xl sm:text-[140px] font-black font-serif text-[#0f382c] tracking-tight block">
                {t.legacyTitle}
              </span>
              <span className="text-4xl sm:text-6xl font-black font-serif text-amber-600 block uppercase -mt-4">
                {t.legacyYears}
              </span>
            </div>

            <div className="space-y-1 font-extrabold text-xl sm:text-2xl text-[#0f382c] uppercase font-serif tracking-tight">
              <p>{t.legacySub1}</p>
              <p className="text-amber-700">{t.legacySub2}</p>
            </div>
          </div>

          {/* Right Editorial Story Column */}
          <div className="lg:col-span-7 space-y-6 lg:pl-8">
            <p className="text-lg sm:text-xl text-gray-700 font-medium leading-relaxed">
              {t.legacyDesc}
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Every afternoon, Mahesh Kumar Gupta personally selects the finest chickpeas, boils fresh potatoes, grinds aromatic roasted spices, and prepares 100% RO mineral water infused with fresh mint and tamarind. No artificial flavors, no compromises.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link
                href="/our-story"
                className="inline-flex items-center gap-3 bg-[#0f382c] hover:bg-emerald-900 text-amber-300 font-black px-8 py-4 rounded-2xl shadow-xl transition transform hover:-translate-y-0.5 text-sm uppercase tracking-wider"
              >
                <span>{t.discoverStory}</span>
              </Link>

              <div className="flex items-center gap-3 border-l-2 border-emerald-800/30 pl-4 text-xs font-bold text-gray-600">
                <span className="text-amber-600 text-lg">★</span>
                <span>{t.estYear} • Trusted for Generations</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
