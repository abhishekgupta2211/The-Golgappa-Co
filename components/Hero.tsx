"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import { Award, Sparkles, MapPin, ArrowRight } from "lucide-react";

export function Hero({ onBookNow }: { onBookNow: () => void }) {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#0f382c] via-[#144738] to-[#0a271f] text-white py-16 lg:py-24">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-900/80 border border-emerald-700/60 px-4 py-2 rounded-full text-amber-300 text-xs sm:text-sm font-bold shadow-md">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{t.heroBadge}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight uppercase font-serif text-amber-300 drop-shadow-md">
              "{t.heroTitle}"
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-emerald-100 italic">
              {t.heroSub}
            </p>

            <p className="text-sm sm:text-base text-emerald-200/90 max-w-xl leading-relaxed">
              {t.since} • Managed with love by <strong className="text-amber-300">{t.ownerName}</strong>. Taste the legendary secret recipe that has delighted thousands for over two decades!
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onBookNow}
                className="w-full sm:w-auto bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-emerald-950 font-black text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-amber-500/30 transform hover:-translate-y-1 transition duration-200 flex items-center justify-center gap-3"
              >
                <span>{t.btnBook}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="https://maps.app.goo.gl/jm4LXsy1NSKZ38P17?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-emerald-950/80 border border-emerald-600/50 hover:bg-emerald-900 text-amber-200 font-bold px-6 py-4 rounded-2xl transition flex items-center justify-center gap-2 text-base"
              >
                <MapPin className="w-5 h-5 text-red-400" />
                <span>{t.btnVisit}</span>
              </a>
            </div>

            {/* Highlights Bar */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-emerald-800/60 text-center">
              <div>
                <p className="text-2xl font-black text-amber-300">20+ Yrs</p>
                <p className="text-xs text-emerald-300 font-medium uppercase">Legacy</p>
              </div>
              <div>
                <p className="text-2xl font-black text-amber-300">100%</p>
                <p className="text-xs text-emerald-300 font-medium uppercase">Mineral Water</p>
              </div>
              <div>
                <p className="text-2xl font-black text-amber-300">50,000+</p>
                <p className="text-xs text-emerald-300 font-medium uppercase">Happy Foodies</p>
              </div>
            </div>

          </div>

          {/* Right Image Feature */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-400/30 transform hover:scale-[1.02] transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80"
                alt="Crispy Golgappa Plate"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f382c] via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-[#0f382c]/90 backdrop-blur-md p-4 rounded-2xl border border-emerald-700/60 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-xl">🌶️</div>
                  <div>
                    <h4 className="font-bold text-amber-300 text-sm">Authentic Secret Masala</h4>
                    <p className="text-xs text-emerald-200">Prepared fresh every single afternoon by Mahesh Ji.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
