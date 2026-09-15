"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/components/LanguageContext";
import { Sparkles, CheckCircle2, Droplets } from "lucide-react";
import { OrderDrawer } from "@/components/OrderDrawer";

export default function PaaniPage() {
  const { t } = useLanguage();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const paaniVariants = [
    {
      name: "Teekha Pudina Special Paani 🌶️",
      color: "from-emerald-800 to-green-600",
      description: "Infused with hand-crushed fresh mint leaves, green chillies, black salt, and Hing (asafoetida) in chilled RO mineral water.",
      benefits: "Refreshing, digestive, and bold spicy street flavor!",
    },
    {
      name: "Khatta-Meetha Imli Khajoor Paani 🍯",
      color: "from-amber-700 to-amber-900",
      description: "Authentic tamarind pulp simmered with organic date syrup, black pepper, and roasted cumin powder.",
      benefits: "Perfect sweet-sour balance beloved by all ages.",
    },
    {
      name: "Hing & Jeera Digestive Paani 🌾",
      color: "from-yellow-700 to-yellow-900",
      description: "Roasted cumin seeds steeped with royal quality asafoetida and Himalayan pink salt.",
      benefits: "Extremely good for stomach digestion and appetite.",
    },
    {
      name: "Garlic Chili Fusion Paani 🧄",
      color: "from-red-800 to-rose-900",
      description: "Crushed garlic cloves roasted with dry red chillies and lemon juice.",
      benefits: "Fiery kick for true spicy street food thrill seekers!",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fffdf7] text-gray-900 flex flex-col font-sans">
      <Navbar onOpenOrderModal={() => setDrawerOpen(true)} cartCount={0} />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-emerald-800 font-extrabold uppercase text-xs bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-300">
            OUR 4 SIGNATURE WATERS
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0f382c]">
            Pure Mineral Water • Secret Recipe
          </h1>
          <p className="text-gray-600 font-medium text-base">
            Every drop of our paani is prepared daily by Mahesh Kumar Gupta using 100% RO mineral water and hand-picked natural herbs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {paaniVariants.map((item) => (
            <div
              key={item.name}
              className={`p-8 rounded-3xl bg-gradient-to-br ${item.color} text-white shadow-xl flex flex-col justify-between space-y-6 transform hover:-translate-y-1 transition duration-300`}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl">
                  <Droplets className="w-6 h-6 text-amber-300" />
                </div>
                <h3 className="text-2xl font-black text-amber-300">{item.name}</h3>
                <p className="text-sm font-medium text-white/90 leading-relaxed">{item.description}</p>
              </div>

              <div className="pt-4 border-t border-white/20 flex items-center gap-2 text-xs font-bold text-amber-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>{item.benefits}</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <OrderDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        products={[]}
        addOnsList={[]}
        cart={{}}
        setCart={() => {}}
      />
    </div>
  );
}
