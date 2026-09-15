"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Utensils, CheckCircle2, ChevronRight } from "lucide-react";

export function GolgappaInteractiveAnimation() {
  const ingredients = [
    {
      step: "01",
      name: "CRUNCHY PURI",
      desc: "Fried fresh in golden oil until ultra crisp & hollow.",
      icon: "🧆",
      color: "bg-amber-500",
      textColor: "text-amber-400",
    },
    {
      step: "02",
      name: "CRACK THE TOP",
      desc: "Thumb cracks the top crust open with a clean crispy sound.",
      icon: "💥",
      color: "bg-yellow-500",
      textColor: "text-yellow-400",
    },
    {
      step: "03",
      name: "SPICED ALOO filling",
      desc: "Warm boiled potatoes, black chickpeas, & roasted cumin masala.",
      icon: "🥔",
      color: "bg-amber-600",
      textColor: "text-amber-300",
    },
    {
      step: "04",
      name: "TEEKHA PUDINA PAANI",
      desc: "100% Mineral Water loaded with mint, hing & spicy green chillies.",
      icon: "🌿",
      color: "bg-emerald-600",
      textColor: "text-emerald-400",
    },
    {
      step: "05",
      name: "THE EXPLOSIVE BITE",
      desc: "Whole puri inside mouth — an explosion of chatpata flavors!",
      icon: "🤤",
      color: "bg-red-600",
      textColor: "text-red-400",
    },
  ];

  return (
    <section className="py-24 w-full bg-[#04120e] text-white relative overflow-hidden border-t border-b border-emerald-900/60">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-emerald-900/90 border border-amber-400/40 px-4 py-1.5 rounded-full text-amber-300 text-xs font-black uppercase tracking-wider"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>INTERACTIVE SCROLL & CRAFTING ART</span>
          </motion.div>

          <h2 className="text-3xl sm:text-5xl font-black font-serif text-amber-300 uppercase tracking-tight">
            How The Perfect Golgappa Is Born
          </h2>
          <p className="text-emerald-200/90 text-sm sm:text-base font-medium max-w-2xl mx-auto">
            From golden crispy puri crack to warm potato masala filling and mineral mint paani immersion!
          </p>
        </div>

        {/* Step-by-Step Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {ingredients.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-emerald-950/80 border border-emerald-700/60 p-6 rounded-3xl shadow-xl space-y-4 flex flex-col justify-between relative group hover:border-amber-400 transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-black text-amber-400 bg-emerald-900 px-2.5 py-1 rounded-full border border-emerald-700">
                    STEP {item.step}
                  </span>
                  <span className="text-3xl transform group-hover:scale-125 transition duration-300">
                    {item.icon}
                  </span>
                </div>

                <h3 className={`text-base font-black uppercase font-serif ${item.textColor}`}>
                  {item.name}
                </h3>

                <p className="text-xs text-emerald-100/80 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-emerald-900 flex items-center justify-between text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                <span>Mahesh Ji Spec</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
