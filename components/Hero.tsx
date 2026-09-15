"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, PartyPopper, Flame, CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export function Hero({ onBookNow }: { onBookNow: () => void }) {
  const { t } = useLanguage();

  // Interactive 5-Step Crafting Journey State
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "puri",
      stepNumber: "01",
      title: "Crispy Puri Crack",
      subtitle: "Golden & Ultra Crunchy",
      desc: "Fried in fresh oil daily. Watch the top shell crack open perfectly to hold the rich fillings!",
      badge: "Pure Crispy Gold",
      icon: "🧆",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
      accent: "from-amber-500 to-yellow-400",
    },
    {
      id: "masala",
      stepNumber: "02",
      title: "Boiled Aloo-Chana Mash",
      subtitle: "Spiced Potato Filling",
      desc: "Hand-mashed warm potatoes blended with black chickpeas, roasted cumin powder & rock salt.",
      badge: "Classic Street Spice",
      icon: "🥔",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      accent: "from-yellow-500 to-amber-600",
    },
    {
      id: "paani",
      stepNumber: "03",
      title: "Chilled Mineral Paani",
      subtitle: "100% Pure & Hygienic",
      desc: "Flavored with fresh mint leaves, green chili paste, hing, tamarind & tangy lemon juice.",
      badge: "Teekha Pudina Burst",
      icon: "🌿",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
      accent: "from-emerald-500 to-teal-400",
    },
    {
      id: "bite",
      stepNumber: "04",
      title: "The Explosive Bite",
      subtitle: "1-Bite Chatpata Blast",
      desc: "Pop the whole Golgappa into your mouth for an instant explosion of teekha, khatta & sweet flavors!",
      badge: "Pure Bliss",
      icon: "💥",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
      accent: "from-red-500 to-amber-500",
    },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#04120e] via-[#071d17] to-[#0b2920] text-white py-16 lg:py-24 w-full min-h-[90vh] flex items-center">
      
      {/* Animated Glowing Background Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-10 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-amber-500/15 rounded-full blur-3xl pointer-events-none"
      />

      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Statement & Quick Journey Step Selection */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-emerald-900/90 border border-amber-400/40 px-4 py-2 rounded-full text-amber-300 text-xs sm:text-sm font-bold shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>EST. 2004 • 20+ YEARS LEGACY</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black tracking-tight leading-tight uppercase font-serif text-amber-300 drop-shadow-lg"
            >
              THE ULTIMATE <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-emerald-300 bg-clip-text text-transparent">GOLGAPPA</span> EXPERIENCE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl font-medium text-emerald-100/90 leading-relaxed"
            >
              Crispy. Chatpata. Addictive. Crafted with 100% Mineral Water by Owner <strong className="text-amber-300">Mahesh Kumar Gupta</strong>.
            </motion.p>

            {/* Step Selection Tabs */}
            <div className="pt-2">
              <p className="text-xs font-black uppercase tracking-widest text-emerald-400 mb-3 text-center lg:text-left">
                Interactive Golgappa Crafting Steps (Click to see animation):
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {steps.map((st, idx) => (
                  <button
                    key={st.id}
                    onClick={() => setActiveStep(idx)}
                    className={`p-2.5 rounded-xl border text-left transition-all duration-300 relative overflow-hidden ${
                      activeStep === idx
                        ? "bg-gradient-to-br from-amber-400 to-yellow-500 text-emerald-950 border-amber-300 font-black shadow-lg scale-105"
                        : "bg-emerald-950/80 border-emerald-700/60 text-emerald-200 hover:bg-emerald-900"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold opacity-80">{st.stepNumber}</span>
                      <span className="text-base">{st.icon}</span>
                    </div>
                    <p className="text-[11px] font-bold truncate mt-1 leading-tight">{st.title}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <button
                onClick={onBookNow}
                className="w-full sm:w-auto bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-emerald-950 font-black text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-amber-500/30 transform hover:-translate-y-1 transition duration-200 flex items-center justify-center gap-3 uppercase tracking-wider"
              >
                <span>{t.btnBook}</span>
                <ArrowRight className="w-5 h-5 text-emerald-950" />
              </button>

              <Link
                href="/catering"
                className="w-full sm:w-auto bg-emerald-900/90 border-2 border-amber-400/60 hover:bg-emerald-800 text-amber-300 font-extrabold px-6 py-4 rounded-2xl transition flex items-center justify-center gap-2 text-base shadow-lg"
              >
                <PartyPopper className="w-5 h-5 text-amber-400" />
                <span>BOOK LIVE STALL</span>
              </Link>
            </motion.div>

          </div>

          {/* Right Column: Interactive Animated Showcase Box */}
          <div className="lg:col-span-6 relative flex justify-center">
            
            {/* Outer Glowing Frame */}
            <div className="relative w-full max-w-lg bg-emerald-950/90 rounded-3xl p-6 sm:p-8 border-2 border-amber-400/40 shadow-2xl overflow-hidden backdrop-blur-xl">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={steps[activeStep].id}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.05, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="space-y-6"
                >
                  {/* Step Image with Floating Animated Badge */}
                  <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border-2 border-amber-300/30 shadow-inner group">
                    <motion.img
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6 }}
                      src={steps[activeStep].image}
                      alt={steps[activeStep].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#04120e] via-transparent to-transparent opacity-80" />
                    
                    {/* Top Floating Badge */}
                    <div className="absolute top-3 left-3 bg-emerald-950/90 border border-amber-400/60 text-amber-300 font-black text-xs px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                      <Flame className="w-3.5 h-3.5 text-amber-400" />
                      <span>{steps[activeStep].badge}</span>
                    </div>

                    {/* Step Icon Large Overlay */}
                    <div className="absolute bottom-3 right-3 w-12 h-12 rounded-full bg-amber-400/90 text-emerald-950 flex items-center justify-center text-2xl shadow-lg border border-white/50">
                      {steps[activeStep].icon}
                    </div>
                  </div>

                  {/* Step Descriptions */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-amber-400 font-mono font-bold text-xs uppercase tracking-widest">
                        STAGE {steps[activeStep].stepNumber} / 04
                      </span>
                      <span className="text-emerald-300 font-semibold text-xs">
                        {steps[activeStep].subtitle}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black font-serif text-amber-300">
                      {steps[activeStep].title}
                    </h3>

                    <p className="text-sm text-emerald-100/90 leading-relaxed font-medium">
                      {steps[activeStep].desc}
                    </p>
                  </div>

                  {/* Auto-Next Progress Indicator */}
                  <div className="pt-2 flex items-center justify-between border-t border-emerald-800/80 text-xs">
                    <span className="text-emerald-300 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4 text-amber-400" /> 100% Authentic Preparation
                    </span>
                    
                    <button
                      onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                      className="text-amber-300 hover:text-white font-extrabold flex items-center gap-1 transition"
                    >
                      <span>NEXT STEP</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
