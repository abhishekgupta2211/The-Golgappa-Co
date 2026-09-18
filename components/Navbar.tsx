"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { Language } from "@/lib/i18n";
import { ShoppingBag, Globe, Menu, X, ShieldCheck, PartyPopper, Star, ChevronDown } from "lucide-react";

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
          <div className="hidden lg:flex items-center gap-7 font-bold text-xs uppercase tracking-wider text-emerald-100">
            <Link href="/" className="hover:text-amber-300 transition py-1">HOME</Link>
            <Link href="/about" className="hover:text-amber-300 transition py-1 text-amber-300 font-extrabold">ABOUT</Link>
            <Link href="/menu" className="hover:text-amber-300 transition py-1">MENU</Link>
            <Link href="/paani" className="hover:text-amber-300 transition py-1 text-amber-300 font-extrabold flex items-center gap-1">
              <span>FLAVOURS</span>
            </Link>
            <Link href="/visit" className="hover:text-amber-300 transition py-1">VISIT US</Link>
            <Link href="/track" className="hover:text-amber-300 transition py-1 text-emerald-300">TRACK ORDER</Link>
          </div>

          {/* Right Controls: Dropdown Language + Admin Login + Order CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            
            {/* Language Dropdown Selector */}
            <div className="relative flex items-center bg-emerald-950/80 px-2.5 py-1.5 rounded-full border border-emerald-700/60 text-xs">
              <Globe className="w-4 h-4 mr-1.5 text-amber-400" />
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as Language)}
                aria-label="Select Language"
                className="bg-transparent text-white font-black text-xs uppercase outline-none cursor-pointer pr-1"
              >
                <option value="en" className="bg-[#071d17] text-white">English (EN)</option>
                <option value="hi" className="bg-[#071d17] text-white">हिंदी (HI)</option>
                <option value="bn" className="bg-[#071d17] text-white">বাংলা (BN)</option>
              </select>
            </div>

            {/* Admin Login Button (Last in Controls) */}
            <Link
              href="/admin/login"
              className="px-3.5 py-2 rounded-full border border-emerald-700/60 bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 hover:text-amber-300 text-xs font-bold flex items-center gap-1.5 transition"
            >
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>LOGIN</span>
            </Link>

            {/* Order CTA */}
            <button
              onClick={onOpenOrderModal}
              className="relative group bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-emerald-950 font-black px-5 py-2.5 rounded-full shadow-md hover:shadow-amber-500/20 transition flex items-center gap-2 transform active:scale-95 text-xs uppercase tracking-wider"
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071d17] border-b border-emerald-800 px-4 pt-2 pb-5 space-y-3">
          <div className="flex justify-center gap-2 py-1.5 border-b border-emerald-800/60">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Language)}
              className="bg-emerald-900 text-amber-300 font-black px-4 py-1.5 rounded-full text-xs uppercase outline-none"
            >
              <option value="en">English (EN)</option>
              <option value="hi">हिंदी (HI)</option>
              <option value="bn">বাংলা (BN)</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-2 font-bold text-emerald-100 text-xs uppercase pt-1">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="p-2 bg-emerald-950 rounded-xl">HOME</Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="p-2 bg-emerald-950 rounded-xl">ABOUT</Link>
            <Link href="/menu" onClick={() => setMobileMenuOpen(false)} className="p-2 bg-emerald-950 rounded-xl">MENU</Link>
            <Link href="/paani" onClick={() => setMobileMenuOpen(false)} className="p-2 bg-emerald-950 text-amber-300 font-bold rounded-xl">FLAVOURS</Link>
            <Link href="/visit" onClick={() => setMobileMenuOpen(false)} className="p-2 bg-emerald-950 rounded-xl">VISIT US</Link>
            <Link href="/track" onClick={() => setMobileMenuOpen(false)} className="p-2 bg-emerald-950 text-emerald-300 rounded-xl">TRACK ORDER</Link>
            <Link href="/admin/login" onClick={() => setMobileMenuOpen(false)} className="p-2 bg-emerald-900 text-amber-300 rounded-xl flex items-center gap-1 font-black">
              <ShieldCheck className="w-3.5 h-3.5" /> LOGIN
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
