"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { Language } from "@/lib/i18n";
import { ShoppingBag, Globe, Menu, X, Search, ShieldCheck, PhoneCall, PartyPopper } from "lucide-react";

export function Navbar({ onOpenOrderModal, cartCount }: { onOpenOrderModal: () => void; cartCount: number }) {
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-[#071d17]/95 backdrop-blur-md border-b border-emerald-800/60 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-400 via-amber-300 to-yellow-200 text-emerald-950 flex items-center justify-center font-black text-2xl shadow-lg transform group-hover:scale-110 transition duration-300 border-2 border-amber-300">
              🧆
            </div>
            <div>
              <span className="font-black text-xl tracking-tight bg-gradient-to-r from-amber-300 via-yellow-200 to-emerald-200 bg-clip-text text-transparent block font-serif">
                {t.brandName}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-extrabold block">
                {t.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Pages */}
          <div className="hidden lg:flex items-center gap-6 font-bold text-xs uppercase tracking-wider text-emerald-100">
            <Link href="/" className="hover:text-amber-300 transition py-2">{t.navHome}</Link>
            <Link href="/menu" className="hover:text-amber-300 transition py-2">{t.navMenu}</Link>
            <Link href="/paani" className="hover:text-amber-300 transition py-2">{t.navPaani}</Link>
            <Link href="/catering" className="text-amber-300 hover:text-amber-200 transition py-2 flex items-center gap-1 font-black bg-emerald-900/60 px-3 py-1 rounded-full border border-amber-400/40">
              <PartyPopper className="w-3.5 h-3.5" /> {t.navCatering}
            </Link>
            <Link href="/about" className="hover:text-amber-300 transition py-2">{t.navAbout}</Link>
            <Link href="/visit" className="hover:text-amber-300 transition py-2">{t.navVisit}</Link>
            <Link href="/track" className="hover:text-amber-300 transition flex items-center gap-1 py-2 text-emerald-300">
              <Search className="w-3.5 h-3.5" /> {t.navTrack}
            </Link>
          </div>

          {/* Right Controls: 3 Languages & Order CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center bg-emerald-950/80 p-1 rounded-full border border-emerald-700/50 text-xs">
              <Globe className="w-3.5 h-3.5 ml-2 text-emerald-400" />
              {(['en', 'hi', 'bn'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 rounded-full uppercase font-black text-[11px] transition ${
                    lang === l ? "bg-amber-400 text-emerald-950 shadow-md" : "text-emerald-200 hover:text-white"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <button
              onClick={onOpenOrderModal}
              className="relative group bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-emerald-950 font-black px-6 py-2.5 rounded-full shadow-lg hover:shadow-amber-500/30 transition flex items-center gap-2 transform active:scale-95 text-xs uppercase tracking-wider"
            >
              <ShoppingBag className="w-4 h-4 text-emerald-950" />
              <span>{t.orderNow}</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white font-black text-xs w-6 h-6 rounded-full flex items-center justify-center border-2 border-[#071d17]">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={onOpenOrderModal}
              className="relative bg-amber-400 text-emerald-950 px-4 py-2 rounded-full font-black text-xs flex items-center gap-1.5"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>ORDER</span>
              {cartCount > 0 && <span className="bg-red-600 text-white px-1.5 py-0.5 rounded-full text-[10px]">{cartCount}</span>}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-900/50"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071d17] border-b border-emerald-800 px-4 pt-2 pb-6 space-y-4">
          <div className="flex justify-center gap-2 py-2 border-b border-emerald-800/60">
            {(['en', 'hi', 'bn'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-full text-xs uppercase font-bold ${
                  lang === l ? "bg-amber-400 text-emerald-950" : "bg-emerald-900 text-emerald-200"
                }`}
              >
                {l === 'en' ? 'English' : l === 'hi' ? 'हिंदी' : 'বাংলা'}
              </button>
            ))}
          </div>

          <div className="flex flex-col space-y-3 font-bold text-emerald-100 text-sm uppercase">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>{t.navHome}</Link>
            <Link href="/menu" onClick={() => setMobileMenuOpen(false)}>{t.navMenu}</Link>
            <Link href="/paani" onClick={() => setMobileMenuOpen(false)}>{t.navPaani}</Link>
            <Link href="/catering" onClick={() => setMobileMenuOpen(false)} className="text-amber-300 flex items-center gap-2">
              <PartyPopper className="w-4 h-4" /> {t.navCatering}
            </Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)}>{t.navAbout}</Link>
            <Link href="/visit" onClick={() => setMobileMenuOpen(false)}>{t.navVisit}</Link>
            <Link href="/track" onClick={() => setMobileMenuOpen(false)} className="text-emerald-300 flex items-center gap-2">
              <Search className="w-4 h-4" /> {t.navTrack}
            </Link>
            <Link href="/admin/login" onClick={() => setMobileMenuOpen(false)} className="text-emerald-400 text-xs flex items-center gap-2 pt-2 border-t border-emerald-800/60">
              <ShieldCheck className="w-4 h-4" /> {t.navAdmin}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
