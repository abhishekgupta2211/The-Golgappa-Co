"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, CheckCircle2, ChevronRight, Droplets, Flame, Cookie, Utensils } from "lucide-react";

export function GolgappaInteractiveAnimation() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "puri",
      num: "01",
      title: "Golden Crispy Puri Crack",
      sub: "Fried Fresh Daily",
      desc: "Fried in clean oil until ultra crunchy. The top crust cracks with a crisp sound to open the perfect hollow pocket.",
      icon: "🧆",
      badge: "Pure Golden Gold",
      img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
      accent: "from-amber-500 to-yellow-400",
    },
    {
      id: "masala",
      num: "02",
      title: "Warm Aloo-Chana Spiced Mash",
      sub: "Hand-Mashed Potato Filling",
      desc: "Stuffed with warm boiled potato mash, black chickpeas, roasted cumin powder, and fine rock salt.",
      icon: "🥔",
      badge: "Authentic Street Spices",
      img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      accent: "from-yellow-500 to-amber-600",
    },
    {
      id: "paani",
      num: "03",
      title: "100% Mineral RO Paani Dip",
      sub: "Chilled Mint & Hing Water",
      desc: "Immersed in icy cold RO mineral water blended with fresh mint leaves, hing, green chili, and tangy tamarind.",
      icon: "🌿",
      badge: "Teekha Pudina Burst",
      img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
      accent: "from-emerald-500 to-teal-400",
    },
    {
      id: "bite",
      num: "04",
      title: "The 1-Bite Chatpata Blast",
      sub: "Instant Flavor Explosion",
      desc: "Pop the entire Golgappa inside your mouth. Experience the crispiness, warm mash, and icy spicy paani exploding together!",
      icon: "💥",
      badge: "Pure Foodie Bliss",
      img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
      accent: "from-red-500 to-amber-500",
    },
  ];

  return (
    <section className="py-24 sm:py-32 w-full bg-[#020705] text-white relative overflow-hidden border-t border-b border-emerald-900/40">
      
      {/* Background Glowing Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#091f18] border border-amber-400/40 px-4 py-1.5 rounded-full text-amber-300 text-xs font-black uppercase tracking-wider"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>2026 INTERACTIVE GOLGAPPA CRAFTING RITUAL</span>
          </motion.div>

          <h2 className="text-4xl sm:text-6xl font-black font-serif uppercase tracking-tight text-[#fffdf7]">
            How The Perfect Bite Is Born
          </h2>
          <p className="text-emerald-200/90 font-medium text-base sm:text-lg">
            Click through the 4 stages below to experience the preparation art of Mahesh Kumar Gupta!
          </p>
        </div>

        {/* 2026 Interactive Interactive Tab Container */}
        <div className="w-full max-w-5xl mx-auto bg-[#091f18]/90 border-2 border-amber-400/40 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-2xl space-y-8">
          
          {/* Step Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {steps.map((st, idx) => (
              <button
                key={st.id}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden ${
                  activeStep === idx
                    ? "bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-emerald-950 border-amber-300 font-black shadow-xl scale-105"
                    : "bg-[#040f0c] border-emerald-800 text-emerald-200 hover:bg-[#071713]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold opacity-80">STAGE 0{idx + 1}</span>
                  <span className="text-2xl">{st.icon}</span>
                </div>
                <p className="text-xs font-black truncate mt-2 leading-tight uppercase">{st.title}</p>
              </button>
            ))}
          </div>

          {/* Active Step Showcase Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={steps[activeStep].id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#040f0c] p-6 sm:p-8 rounded-2xl border border-emerald-700/60"
            >
              
              {/* Image Box */}
              <div className="md:col-span-5 relative h-64 sm:h-72 rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-xl group">
                <img
                  src={steps[activeStep].img}
                  alt={steps[activeStep].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3 bg-[#091f18]/90 text-amber-300 font-black text-xs px-3.5 py-1 rounded-full border border-amber-400/50 shadow-md">
                  {steps[activeStep].badge}
                </div>
              </div>

              {/* Text Description */}
              <div className="md:col-span-7 space-y-4 text-left">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block">
                  STAGE 0{activeStep + 1} OF 04 • {steps[activeStep].sub}
                </span>

                <h3 className="text-2xl sm:text-4xl font-black font-serif uppercase text-amber-300">
                  {steps[activeStep].title}
                </h3>

                <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-medium">
                  {steps[activeStep].desc}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-emerald-900 text-xs">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" /> 100% Authentic Preparation
                  </span>

                  <button
                    onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                    className="text-amber-300 hover:text-white font-extrabold flex items-center gap-1 transition uppercase"
                  >
                    <span>NEXT STAGE</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
