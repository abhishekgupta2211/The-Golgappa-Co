"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, Flame, Star, ShoppingBag, Zap } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export function Hero({ onBookNow }: { onBookNow: () => void }) {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#faf7f2] text-gray-900 pt-10 pb-20 border-b border-gray-200">
      
      {/* Warm Premium Soft Light Mesh Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_var(--tw-gradient-stops))] from-amber-100/60 via-[#faf7f2] to-[#f4efe6] pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10 max-w-7xl mx-auto space-y-12">
        
        {/* Hero Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Premium Editorial Typography */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.98] font-serif text-[#0f382c]"
            >
              CRISPY. <br />
              <span className="text-amber-600">CHATPATA.</span> <br />
              ADDICTIVE.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-2xl text-gray-700 font-medium max-w-2xl leading-relaxed"
            >
              India's finest Golgappa prepared with <strong className="text-emerald-900 font-extrabold">100% Pure RO Mineral Water</strong> by Master <span className="text-amber-700 font-bold">Mahesh Kumar Gupta</span> (+91 9369610213).
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
                className="w-full sm:w-auto bg-[#0f382c] hover:bg-emerald-900 text-amber-300 font-black text-lg px-9 py-4.5 rounded-2xl shadow-xl transform hover:-translate-y-1 transition duration-200 flex items-center justify-center gap-3 uppercase tracking-wider"
              >
                <ShoppingBag className="w-5 h-5 text-amber-300" />
                <span>BOOK YOUR PLATE NOW</span>
                <ArrowRight className="w-5 h-5 text-amber-300" />
              </button>

              <Link
                href="/catering"
                className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-emerald-950 font-extrabold text-base px-8 py-4.5 rounded-2xl transition flex items-center justify-center gap-2 shadow-md"
              >
                <Zap className="w-5 h-5 text-emerald-950" />
                <span>LIVE WEDDING STALLS</span>
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-gray-700 font-extrabold uppercase tracking-wider">
              <span className="flex items-center gap-1.5 text-emerald-800">
                <ShieldCheck className="w-4 h-4 text-emerald-700" /> 100% Mineral RO Water
              </span>
              <span className="flex items-center gap-1.5 text-amber-700">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" /> 4.9 Star Rating (520+ Reviews)
              </span>
            </div>

          </div>

          {/* Right Column: Light Theme Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border-4 border-emerald-900/15 shadow-2xl bg-white group">
              <img
                src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80"
                alt="Authentic Golgappa Showcase"
                className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f382c] via-transparent to-transparent opacity-85" />

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 bg-white/90 border border-emerald-900/20 text-[#0f382c] font-black text-xs px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg backdrop-blur-md">
                <Flame className="w-4 h-4 text-amber-600 fill-amber-600" />
                <span>HOT & FRESH DAILY</span>
              </div>

              {/* Bottom Card Content Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 border border-emerald-900/10 p-5 rounded-2xl shadow-xl backdrop-blur-md space-y-1.5 text-gray-900">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-emerald-800">
                  <span>MAHESH KUMAR GUPTA</span>
                  <span>EST. 2004</span>
                </div>
                <h4 className="text-xl font-black font-serif text-[#0f382c]">
                  Signature Teekha Pudina Golgappa
                </h4>
                <p className="text-xs text-gray-600 font-medium">
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
