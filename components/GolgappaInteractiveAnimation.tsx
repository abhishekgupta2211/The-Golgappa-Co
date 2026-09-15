"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export function GolgappaInteractiveAnimation() {
  const craftingSteps = [
    {
      num: "01",
      title: "PURI CRACK",
      sub: "Golden Crispy Shell",
      desc: "Fried fresh daily in clean oil. Watch the top shell crack open effortlessly to create the hollow pocket.",
      img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
      icon: "🧆",
      accent: "border-amber-400/50",
    },
    {
      num: "02",
      title: "ALOO MASALA",
      sub: "Warm Potato & Chana",
      desc: "Stuffed with warm boiled potatoes, black chickpeas, roasted cumin, and rock salt powder.",
      img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      icon: "🥔",
      accent: "border-yellow-400/50",
    },
    {
      num: "03",
      title: "MINERAL PAANI",
      sub: "Chilled Mint Immersion",
      desc: "Filled to the brim with 100% pure mineral water flavored with mint leaves, hing, and spicy green chillies.",
      img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
      icon: "🌿",
      accent: "border-emerald-400/50",
    },
    {
      num: "04",
      title: "THE EXPLOSIVE BITE",
      sub: "Instant Flavor Burst",
      desc: "Pop the entire Golgappa in 1 bite. Experience the crunch, warm filling, and icy spicy paani exploding together!",
      img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
      icon: "💥",
      accent: "border-red-400/50",
    },
  ];

  return (
    <section className="py-24 sm:py-32 w-full bg-[#f9f6ef] text-[#071d17] relative overflow-hidden border-t border-b border-emerald-900/10">
      <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-emerald-900 font-black uppercase text-xs tracking-widest bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-300 inline-block">
            CRAFTING ART & SEQUENCE
          </span>
          <h2 className="text-4xl sm:text-6xl font-black font-serif uppercase tracking-tight text-[#071d17]">
            How The Perfect Golgappa Is Born
          </h2>
          <p className="text-gray-600 font-medium text-base sm:text-lg">
            A 4-step culinary ritual perfected by Mahesh Kumar Gupta over 20+ years.
          </p>
        </div>

        {/* 4 Cards Grid with Hover & Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {craftingSteps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -10 }}
              className={`bg-white rounded-3xl p-6 shadow-xl border-2 ${step.accent} space-y-6 flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl`}
            >
              <div className="space-y-4">
                
                {/* Image Box */}
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Step Number Badge */}
                  <div className="absolute top-3 left-3 bg-emerald-950 text-amber-300 font-mono font-black text-xs px-3 py-1 rounded-full shadow-lg border border-amber-400/40">
                    STAGE {step.num}
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-3 right-3 text-3xl">
                    {step.icon}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
                    {step.sub}
                  </span>
                  <h3 className="text-xl font-black font-serif uppercase text-[#071d17]">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed pt-1">
                    {step.desc}
                  </p>
                </div>

              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-extrabold uppercase text-emerald-900">
                <span>Mahesh Ji Spec</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-6">
          <Link
            href="/menu"
            className="inline-flex items-center gap-3 bg-[#071d17] hover:bg-emerald-900 text-amber-300 font-black px-9 py-4 rounded-full shadow-2xl transition transform hover:-translate-y-1 text-sm uppercase tracking-wider"
          >
            <span>EXPLORE FULL GOLGAPPA MENU</span>
            <ArrowRight className="w-5 h-5 text-amber-400" />
          </Link>
        </div>

      </div>
    </section>
  );
}
