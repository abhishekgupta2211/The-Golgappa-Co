"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/components/LanguageContext";
import { Droplets, Flame, Sparkles, CheckCircle2, Heart, ShieldCheck, ArrowRight, Star } from "lucide-react";
import { OrderDrawer } from "@/components/OrderDrawer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PaaniPage() {
  const { t } = useLanguage();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const paaniDetails = [
    {
      id: "pudina",
      name: "Teekha Pudina Special Paani 🌶️",
      tagline: "The Legendary Chilled Mint & Green Chili Infusion",
      color: "from-emerald-900 via-[#071d17] to-[#040d0a]",
      accent: "text-emerald-400",
      description: "Hand-crushed fresh mint leaves, organic green chillies, black Himalayan salt, and royal Hing (asafoetida) blended in 100% RO mineral water.",
      ingredients: ["Fresh Pudina Leaves", "Hand-crushed Green Chillies", "Himalayan Black Salt", "Roasted Cumin Powder", "Royal Hing", "Lemon Juice"],
      benefits: "Acts as a powerful digestive booster, cools body temperature, and delivers the authentic Indian street food punch.",
      spiceRating: "🔥 Hot & Spicy",
    },
    {
      id: "imli",
      name: "Khatta-Meetha Imli Khajoor Paani 🍯",
      tagline: "Tangy Organic Tamarind & Date Syrup",
      color: "from-amber-950 via-[#0f382c] to-[#040d0a]",
      accent: "text-amber-300",
      description: "Authentic tamarind pulp slow-simmered with premium date syrup, crushed black pepper, and ground roasted cumin.",
      ingredients: ["Organic Tamarind Pulp", "Date Syrup (Khajoor)", "Black Pepper", "Roasted Cumin", "Dry Ginger (Saunth)", "Jaggery"],
      benefits: "Soothing sweet-and-sour harmony beloved by children, families, and sweet lovers.",
      spiceRating: "🌱 Mild & Sweet",
    },
    {
      id: "hing",
      name: "Hing & Jeera Digestive Paani 🌾",
      tagline: "Aromatic Roasted Cumin & Royal Asafoetida",
      color: "from-yellow-950 via-[#071d17] to-[#040d0a]",
      accent: "text-yellow-300",
      description: "Slow-roasted whole cumin seeds crushed with premium grade Hing and rock salt.",
      ingredients: ["Roasted Jeera", "Royal Asafoetida (Hing)", "Rock Salt", "Mint Extracts", "Lemon Zest"],
      benefits: "Extremely beneficial for stomach digestion and appetite enhancement after meals.",
      spiceRating: "⚡ Digestive Medium",
    },
    {
      id: "garlic",
      name: "Garlic Chili Fusion Paani 🧄",
      tagline: "Fiery Roasted Garlic & Dry Chili Kick",
      color: "from-red-950 via-[#071d17] to-[#040d0a]",
      accent: "text-red-400",
      description: "Roasted garlic cloves crushed with dried Kashmiri red chillies and lemon juice.",
      ingredients: ["Roasted Garlic", "Kashmiri Red Chili", "Lemon Juice", "Black Salt", "Coriander Seeds"],
      benefits: "Bold garlic aroma and intense spicy finish for true street food thrill seekers.",
      spiceRating: "💥 Extra Fiery",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#fffdf7] text-gray-900 flex flex-col font-sans">
      <Navbar onOpenOrderModal={() => setDrawerOpen(true)} cartCount={0} />

      <main className="flex-1 w-full space-y-16 py-12">
        
        {/* Section 1: Hero Editorial Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full px-4 sm:px-8 lg:px-12 text-center max-w-4xl mx-auto space-y-4"
        >
          <span className="text-emerald-800 font-extrabold uppercase text-xs bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-300 tracking-widest">
            SECRET RECIPE • 100% RO MINERAL WATER
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-[#0f382c] font-serif leading-tight">
            THE PAANI MAKES THE MEMORY.
          </h1>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            Discover the 4 signature mineral water infusions prepared daily by Mahesh Kumar Gupta using fresh herbs and royal spices.
          </p>
        </motion.div>

        {/* Section 2: Interactive Paani Tabs */}
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto space-y-8">
          <div className="flex flex-wrap justify-center gap-3">
            {paaniDetails.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-wider transition transform ${
                  activeTab === idx
                    ? "bg-[#0f382c] text-amber-300 shadow-xl scale-105"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* Active Paani Deep Dive Showcase */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className={`p-8 sm:p-12 rounded-3xl bg-gradient-to-br ${paaniDetails[activeTab].color} text-white shadow-2xl border-2 border-amber-400/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`}
          >
            <div className="lg:col-span-7 space-y-6">
              <span className={`text-xs font-black uppercase tracking-widest bg-white/10 px-3.5 py-1 rounded-full border border-white/20 ${paaniDetails[activeTab].accent}`}>
                {paaniDetails[activeTab].spiceRating}
              </span>

              <h2 className="text-3xl sm:text-4xl font-black font-serif text-amber-300">
                {paaniDetails[activeTab].name}
              </h2>

              <p className="text-xs font-bold text-emerald-200 uppercase tracking-wider">
                {paaniDetails[activeTab].tagline}
              </p>

              <p className="text-base text-white/90 leading-relaxed font-medium">
                {paaniDetails[activeTab].description}
              </p>

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-black uppercase text-amber-400 tracking-wider">Natural Ingredients Used:</h4>
                <div className="flex flex-wrap gap-2 text-xs font-bold text-white">
                  {paaniDetails[activeTab].ingredients.map((ing) => (
                    <span key={ing} className="bg-white/10 px-3 py-1 rounded-xl border border-white/15">
                      ✓ {ing}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-white/10 rounded-2xl border border-white/15 text-xs text-amber-200 font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{paaniDetails[activeTab].benefits}</span>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full aspect-square max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-400/30">
                <img
                  src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80"
                  alt="Mineral Paani Pour"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section 3: 100% Mineral Water Quality Process */}
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-black text-[#0f382c] font-serif">4 Steps of Pure Hygiene</h2>
            <p className="text-gray-600 text-sm font-medium">How we ensure 100% health & pure street taste every day.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-md space-y-2">
              <span className="text-3xl font-black text-amber-600 font-serif">01</span>
              <h4 className="font-bold text-[#0f382c] text-base">RO Water Filter</h4>
              <p className="text-xs text-gray-600">Only 100% RO purified mineral water is used for paani and mash.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-md space-y-2">
              <span className="text-3xl font-black text-amber-600 font-serif">02</span>
              <h4 className="font-bold text-[#0f382c] text-base">Daily Fresh Pudina</h4>
              <p className="text-xs text-gray-600">Fresh mint leaves sourced every morning from local farms.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-md space-y-2">
              <span className="text-3xl font-black text-amber-600 font-serif">03</span>
              <h4 className="font-bold text-[#0f382c] text-base">Roasted Cumin</h4>
              <p className="text-xs text-gray-600">Whole cumin seeds roasted on slow flame for aromatic digestiveness.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-md space-y-2">
              <span className="text-3xl font-black text-amber-600 font-serif">04</span>
              <h4 className="font-bold text-[#0f382c] text-base">Chilled Serving</h4>
              <p className="text-xs text-gray-600">Kept ice-chilled in food-grade steel containers for crisp refreshment.</p>
            </div>
          </div>
        </div>

        {/* Section 4: Booking CTA */}
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-4xl mx-auto text-center pt-8">
          <button
            onClick={() => setDrawerOpen(true)}
            className="w-full sm:w-auto bg-[#0f382c] hover:bg-emerald-900 text-amber-300 font-black px-10 py-5 rounded-2xl shadow-xl transition uppercase text-base"
          >
            ORDER YOUR GOLGAPPA PLATE NOW →
          </button>
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
