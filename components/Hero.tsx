"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, PartyPopper, Flame, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export function Hero({ onBookNow }: { onBookNow: () => void }) {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden bg-[#051611] text-white py-20 lg:py-32 w-full min-h-[92vh] flex items-center justify-center">
      
      {/* Background Animated Gradient Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/30 via-[#051611] to-[#020b08] pointer-events-none" />
      
      {/* Animated Subtle Floating Orbs */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[45rem] h-[45rem] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10 max-w-6xl mx-auto text-center space-y-8">
        
        {/* Top Minimal Capsule Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-emerald-950/90 border border-amber-400/40 px-5 py-2 rounded-full text-amber-300 text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-2xl backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>HERITAGE IN EVERY BITE • EST. 2004</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-black font-serif uppercase tracking-tight leading-[1.05] text-[#fffdf7]"
        >
          THE GOLGAPPA <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
            EXPERIENCE.
          </span>
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-2xl text-emerald-100/90 font-medium max-w-3xl mx-auto leading-relaxed"
        >
          Crispy. Chatpata. Addictive. Crafted with 100% Mineral RO Paani by Owner <span className="text-amber-300 font-bold">Mahesh Kumar Gupta</span>.
        </motion.p>

        {/* Hero CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button
            onClick={onBookNow}
            className="w-full sm:w-auto bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-emerald-950 font-black text-base sm:text-lg px-9 py-4 rounded-full shadow-2xl hover:shadow-amber-500/30 transform hover:-translate-y-1 transition duration-200 flex items-center justify-center gap-3 uppercase tracking-wider"
          >
            <span>BOOK YOUR PLATE</span>
            <ArrowRight className="w-5 h-5 text-emerald-950" />
          </button>

          <Link
            href="/catering"
            className="w-full sm:w-auto bg-emerald-950/80 border-2 border-amber-400/50 hover:bg-emerald-900 text-amber-300 font-extrabold text-base px-8 py-4 rounded-full transition flex items-center justify-center gap-2 shadow-xl"
          >
            <PartyPopper className="w-5 h-5 text-amber-400" />
            <span>WEDDING & EVENT STALLS</span>
          </Link>
        </motion.div>

        {/* Floating Minimal Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto text-left"
        >
          <div className="bg-emerald-950/70 border border-emerald-800/80 p-5 rounded-2xl backdrop-blur-md flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center text-xl shrink-0 font-bold">🧆</div>
            <div>
              <h4 className="font-extrabold text-amber-300 text-sm uppercase">100% Mineral Water</h4>
              <p className="text-xs text-emerald-200/80 mt-0.5">Ultra-hygienic RO water used for all 4 paani flavors.</p>
            </div>
          </div>

          <div className="bg-emerald-950/70 border border-emerald-800/80 p-5 rounded-2xl backdrop-blur-md flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center text-xl shrink-0 font-bold">🥔</div>
            <div>
              <h4 className="font-extrabold text-amber-300 text-sm uppercase">Daily Fresh Masala</h4>
              <p className="text-xs text-emerald-200/80 mt-0.5">Warm boiled potato mash blended with roasted spices.</p>
            </div>
          </div>

          <div className="bg-emerald-950/70 border border-emerald-800/80 p-5 rounded-2xl backdrop-blur-md flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center text-xl shrink-0 font-bold">⭐</div>
            <div>
              <h4 className="font-extrabold text-amber-300 text-sm uppercase">4.9 Star Ratings</h4>
              <p className="text-xs text-emerald-200/80 mt-0.5">Loved by 10,000+ local street food enthusiasts.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
