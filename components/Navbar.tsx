"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { Language } from "@/lib/i18n";
import { ShoppingBag, Globe, Menu, X, ShieldCheck, PartyPopper } from "lucide-react";

export function Navbar({ onOpenOrderModal, cartCount }: { onOpenOrderModal: () => void; cartCount: number }) {
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-[#071d17]/95 backdrop-blur-md border-b border-emerald-800/60 text-white shadow-xl w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Brand Name */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 via-amber-300 to-yellow-200 text-emerald-950 flex items-center justify-center font-black text-xl shadow-md transform group-hover:scale-105 transition duration-200 border-2 border-amber-300">
              🧆
            </div>
            <div>
              <span className="font-black text-base sm:text-lg tracking-tight bg-gradient-to-r from-amber-300 via-yellow-200 to-emerald-200 bg-clip-text text-transparent block font-serif leading-none">
                {t.brandName}
              </span>
              <span className="text-[9px] uppercase tracking-widest text-emerald-400 font-extrabold block mt-0.5">
                {t.tagline}
              </span>
            </div>
          </Link>

          {/* Clean Short Navbar Links */}
          <div className="hidden lg:flex items-center gap-8 font-bold text-xs uppercase tracking-wider text-emerald-100">
            <Link href="/" className="hover:text-amber-300 transition py-1">{t.navHome}</Link>
            <Link href="/menu" className="hover:text-amber-300 transition py-1">{t.navMenu}</Link>
            <Link href="/paani" className="hover:text-amber-300 transition py-1">{t.navPaani}</Link>
            <Link href="/catering" className="text-amber-300 hover:text-amber-200 transition py-1 flex items-center gap-1 font-black px-3 py-1 rounded-full bg-emerald-900/80 border border-amber-400/40">
              <PartyPopper className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.navCatering}</span>
            </Link>
            <Link href="/about" className="hover:text-amber-300 transition py-1">{t.navAbout}</Link>
            <Link href="/visit" className="hover:text-amber-300 transition py-1">{t.navVisit}</Link>
            <Link href="/track" className="hover:text-amber-300 transition py-1 text-emerald-300">{t.navTrack}</Link>
          </div>

          {/* Right Controls */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <div className="flex items-center bg-emerald-950/80 p-1 rounded-full border border-emerald-700/50 text-xs">
              <Globe className="w-3.5 h-3.5 ml-2 text-emerald-400" />
              {(['en', 'hi', 'bn'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-0.5 rounded-full uppercase font-black text-[10px] transition ${
                    lang === l ? "bg-amber-400 text-emerald-950 shadow-sm" : "text-emerald-200 hover:text-white"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <button
              onClick={onOpenOrderModal}
              className="relative group bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-emerald-950 font-black px-6 py-2.5 rounded-full shadow-md hover:shadow-amber-500/20 transition flex items-center gap-2 transform active:scale-95 text-xs uppercase tracking-wider"
            >
              <ShoppingBag className="w-4 h-4 text-emerald-950" />
              <span>{t.orderNow}</span>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white font-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center border border-[#071d17]">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Hamburgers */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenOrderModal}
              className="relative bg-amber-400 text-emerald-950 px-3.5 py-1.5 rounded-full font-black text-xs flex items-center gap-1"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>ORDER</span>
              {cartCount > 0 && <span className="bg-red-600 text-white px-1.5 py-0.2 rounded-full text-[10px]">{cartCount}</span>}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-emerald-200 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
