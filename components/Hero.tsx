"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, Flame, Star, ShoppingBag, MapPin, Zap } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export function Hero({ onBookNow }: { onBookNow: () => void }) {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#030907] text-white pt-12 pb-20">
      
      {/* 2026 Ultra-Modern Mesh Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,_var(--tw-gradient-stops))] from-emerald-900/30 via-[#030907] to-[#010403] pointer-events-none" />

      {/* Floating Glowing Neon Rings */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[55rem] h-[55rem] bg-gradient-to-tr from-emerald-500/10 via-amber-500/10 to-transparent rounded-full blur-[120px] pointer-events-none"
      />

      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10 max-w-7xl mx-auto space-y-16">
        
        {/* Top Floating Pill Badge */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#091f18] border border-amber-400/40 px-5 py-2.5 rounded-full text-amber-300 text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-2xl backdrop-blur-2xl"
          >
            <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
            <span>THE GOLGAPPA CO. • 2004 - 2026 LEGACY</span>
          </motion.div>
        </div>

        {/* 2026 Hero Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bold Typography & Action Buttons */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.98] font-serif"
            >
              CRISPY. <br />
              <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-emerald-300 bg-clip-text text-transparent">
                CHATPATA.
              </span> <br />
              ADDICTIVE.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-2xl text-emerald-100/90 font-medium max-w-2xl leading-relaxed"
            >
              India's finest Golgappa prepared with <strong className="text-amber-300">100% Pure RO Mineral Water</strong> by Master <span className="text-amber-300 font-bold">Mahesh Kumar Gupta</span> (+91 9369610213).
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={onBookNow}
                className="w-full sm:w-auto bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-emerald-950 font-black text-lg px-9 py-4.5 rounded-2xl shadow-2xl hover:shadow-amber-500/30 transform hover:-translate-y-1 transition duration-200 flex items-center justify-center gap-3 uppercase tracking-wider"
              >
                <ShoppingBag className="w-5 h-5 text-emerald-950" />
                <span>BOOK YOUR PLATE NOW</span>
                <ArrowRight className="w-5 h-5 text-emerald-950" />
              </button>

              <Link
                href="/catering"
                className="w-full sm:w-auto bg-[#091f18] border-2 border-amber-400/50 hover:bg-[#0e2d23] text-amber-300 font-extrabold text-base px-8 py-4.5 rounded-2xl transition flex items-center justify-center gap-2 shadow-xl"
              >
                <Zap className="w-5 h-5 text-amber-400" />
                <span>LIVE WEDDING STALLS</span>
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-emerald-200 font-bold uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Mineral RO Water
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> 4.9 Star Rating (520+ Reviews)
              </span>
            </div>

          </div>

          {/* Right Column: 2026 Interactive Glassmorphism Food Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Showcase Image Card */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-amber-400/50 shadow-2xl bg-[#091f18] group">
              <img
                src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80"
                alt="Authentic Golgappa Showcase"
                className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030907] via-transparent to-transparent opacity-80" />

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 bg-[#030907]/90 border border-amber-400/60 text-amber-300 font-black text-xs px-4 py-1.5 rounded-full flex items-center gap-2 shadow-xl backdrop-blur-md">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>HOT & FRESH DAILY</span>
              </div>

              {/* Bottom Glass Card Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#091f18]/90 border border-emerald-700/60 p-5 rounded-2xl backdrop-blur-xl space-y-2">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-amber-400">
                  <span>MAHESH KUMAR GUPTA</span>
                  <span>EST. 2004</span>
                </div>
                <h4 className="text-xl font-black font-serif text-white">
                  Signature Teekha Pudina Golgappa
                </h4>
                <p className="text-xs text-emerald-200/90 font-medium">
                  Crispy gold puris filled with spiced potato mash and dipped in ice-chilled mint paani.
                </p>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
