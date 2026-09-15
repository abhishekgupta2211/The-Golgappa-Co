"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, PartyPopper, Play, Pause, ShieldCheck, Star, Volume2, VolumeX, Flame } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export function Hero({ onBookNow }: { onBookNow: () => void }) {
  const { t } = useLanguage();

  const [isPlaying, setIsPlaying] = useState(true);
  const [activeIngredient, setActiveIngredient] = useState(0);

  const interactiveCrafts = [
    {
      id: "puri",
      title: "Ultra Crispy Puri",
      icon: "🧆",
      desc: "Fried fresh daily in pure groundnut oil. Ultra crunchy gold shell that holds fillings without soggying.",
      badge: "Stage 01 • Puri Crack",
      highlight: "Golden Crack Sound",
    },
    {
      id: "masala",
      title: "Warm Aloo-Chana Mash",
      icon: "🥔",
      desc: "Hand-mashed warm potatoes blended with black chickpeas, roasted cumin powder & rock salt.",
      badge: "Stage 02 • Potato Masala",
      highlight: "Authentic Street Blend",
    },
    {
      id: "paani",
      title: "Teekha Pudina Paani",
      icon: "🌿",
      desc: "100% Mineral RO water infused with fresh mint leaves, green chili paste, hing, tamarind & lemon.",
      badge: "Stage 03 • Mineral Paani",
      highlight: "100% Hygienic RO Water",
    },
    {
      id: "bite",
      title: "The 1-Bite Blast",
      icon: "💥",
      desc: "Pop the entire Golgappa inside your mouth for an explosion of crispiness, warm aloo, and icy spicy paani!",
      badge: "Stage 04 • Ultimate Flavor",
      highlight: "Chatpata Explosion",
    },
  ];

  return (
    <section id="home" className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden bg-black text-white">
      
      {/* Background Video Stream Simulation */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <img
          src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1920&q=80"
          alt="Golgappa Background"
          className="w-full h-full object-cover scale-105 filter brightness-50 contrast-125 transform hover:scale-110 transition duration-1000"
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/50 to-black" />
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10 max-w-7xl mx-auto py-20 space-y-12">
        
        {/* Top Badges & Announcement */}
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#071d17]/90 border-2 border-amber-400/60 px-5 py-2 rounded-full text-amber-300 text-xs sm:text-sm font-black uppercase tracking-widest shadow-2xl backdrop-blur-xl"
          >
            <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
            <span>THE GOLGAPPA CO. • EST. 2004 (20+ YRS)</span>
          </motion.div>
        </div>

        {/* Hero Headline & Subtitle */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black font-serif uppercase tracking-tight leading-[1.05] drop-shadow-2xl"
          >
            CRISPY. CHATPATA. <br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              UNMATCHED.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-2xl text-emerald-100 font-medium max-w-3xl mx-auto drop-shadow"
          >
            Crafted with 100% Pure RO Mineral Water by Owner <span className="text-amber-300 font-black">Mahesh Kumar Gupta</span> (+91 9369610213).
          </motion.p>
        </div>

        {/* Interactive Floating Ingredient Selector Component */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-4xl mx-auto bg-[#071d17]/90 border-2 border-amber-400/50 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-2xl space-y-6"
        >
          <div className="flex items-center justify-between border-b border-emerald-800/80 pb-4">
            <span className="text-xs font-black uppercase tracking-widest text-amber-400 flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-400" /> Interactive Ingredient Crafting Experience
            </span>
            <span className="text-xs text-emerald-300 font-bold hidden sm:block">
              Click tabs to explore preparation
            </span>
          </div>

          {/* Tab Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {interactiveCrafts.map((craft, idx) => (
              <button
                key={craft.id}
                onClick={() => setActiveIngredient(idx)}
                className={`p-3 rounded-2xl border text-left transition-all duration-300 flex items-center gap-3 ${
                  activeIngredient === idx
                    ? "bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-emerald-950 border-amber-300 font-black shadow-lg scale-105"
                    : "bg-emerald-950/80 border-emerald-800 text-emerald-200 hover:bg-emerald-900"
                }`}
              >
                <span className="text-2xl">{craft.icon}</span>
                <div className="overflow-hidden">
                  <p className="text-xs font-black truncate">{craft.title}</p>
                  <p className="text-[10px] opacity-80 uppercase tracking-tighter truncate font-bold">Stage 0{idx + 1}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Active Tab Detail Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={interactiveCrafts[activeIngredient].id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-emerald-950/90 border border-emerald-700/60 p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <span className="text-amber-400 font-mono font-bold text-xs uppercase tracking-wider block">
                  {interactiveCrafts[activeIngredient].badge}
                </span>
                <h4 className="text-xl font-black font-serif text-amber-300 flex items-center gap-2">
                  <span>{interactiveCrafts[activeIngredient].title}</span>
                  <span className="text-2xl">{interactiveCrafts[activeIngredient].icon}</span>
                </h4>
                <p className="text-xs sm:text-sm text-emerald-100 font-medium">
                  {interactiveCrafts[activeIngredient].desc}
                </p>
              </div>

              <div className="shrink-0 bg-amber-400 text-emerald-950 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider shadow-md">
                {interactiveCrafts[activeIngredient].highlight}
              </div>
            </motion.div>
          </AnimatePresence>

        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          <button
            onClick={onBookNow}
            className="w-full sm:w-auto bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-emerald-950 font-black text-lg px-10 py-4.5 rounded-full shadow-2xl hover:shadow-amber-500/40 transform hover:-translate-y-1 transition duration-200 flex items-center justify-center gap-3 uppercase tracking-wider"
          >
            <span>BOOK YOUR PLATE ONLINE</span>
            <ArrowRight className="w-5 h-5 text-emerald-950" />
          </button>

          <Link
            href="/catering"
            className="w-full sm:w-auto bg-[#071d17]/90 border-2 border-amber-400/60 hover:bg-emerald-900 text-amber-300 font-extrabold text-base px-8 py-4.5 rounded-full transition flex items-center justify-center gap-2 shadow-xl"
          >
            <PartyPopper className="w-5 h-5 text-amber-400" />
            <span>BOOK LIVE WEDDING STALL</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
