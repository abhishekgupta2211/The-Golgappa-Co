"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import { Award, Sparkles, MapPin, ArrowRight, PartyPopper } from "lucide-react";
import Link from "next/link";

export function Hero({ onBookNow }: { onBookNow: () => void }) {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#071d17] via-[#0f382c] to-[#0a271f] text-white py-16 lg:py-24 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text */}
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-900/90 border border-amber-400/40 px-4 py-2 rounded-full text-amber-300 text-xs sm:text-sm font-bold shadow-md">
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
              {t.since} • Owner <strong className="text-amber-300">Mahesh Kumar Gupta</strong> (+91 9369610213). Authentic crispy puris with 100% pure mineral water!
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

              <Link
                href="/catering"
                className="w-full sm:w-auto bg-emerald-900 border-2 border-amber-400/60 hover:bg-emerald-800 text-amber-300 font-extrabold px-6 py-4 rounded-2xl transition flex items-center justify-center gap-2 text-base shadow-lg"
              >
                <PartyPopper className="w-5 h-5 text-amber-400" />
                <span>{t.btnEvent}</span>
              </Link>
            </div>

            {/* Event Announcement Badge */}
            <div className="p-4 rounded-2xl bg-emerald-950/90 border border-emerald-700/60 flex items-center gap-3 text-xs">
              <div className="w-10 h-10 rounded-full bg-amber-400 text-emerald-950 flex items-center justify-center font-black text-xl shrink-0">🎉</div>
              <div>
                <p className="font-bold text-amber-300">Shubh Avsar & Wedding Booking Open!</p>
                <p className="text-emerald-200">We set up live Golgappa stalls for weddings & all events. Call: <strong>9369610213</strong></p>
              </div>
            </div>

          </div>

          {/* Right Image Feature */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-xl aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-400/40 transform hover:scale-[1.02] transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80"
                alt="100% Authentic Golgappa Plate"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071d17] via-transparent to-transparent opacity-60" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
