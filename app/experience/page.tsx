"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/components/LanguageContext";
import { OrderDrawer } from "@/components/OrderDrawer";

export default function ExperiencePage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const stages = [
    {
      num: "01",
      name: "THE CRISPY PURI",
      desc: "Golden crispy puris freshly fried in clean oil. Crunchy texture that holds the rich filling without getting soggy.",
      color: "bg-[#071d17] text-white",
    },
    {
      num: "02",
      name: "THE SECRET MASALA",
      desc: "Boiled chickpea and potato mash seasoned with Mahesh Ji's roasted cumin, black salt & secret spice mix.",
      color: "bg-[#f9f6ef] text-[#0f382c]",
    },
    {
      num: "03",
      name: "THE MINERAL PAANI",
      desc: "Chilled 100% RO mineral water infused with fresh pudina (mint), tamarind, lemon & royal Hing.",
      color: "bg-[#0f382c] text-amber-300",
    },
    {
      num: "04",
      name: "THE TEEKHA BALANCE",
      desc: "Adjusted to your exact spice preference from Mild sweet tamarind to Fiery Volcano green chillies.",
      color: "bg-[#f9f6ef] text-[#0f382c]",
    },
    {
      num: "05",
      name: "THE PERFECT BITE",
      desc: "The explosion of crunch, chilled tangy paani, and spicy masala all in one unforgettable bite!",
      color: "bg-[#071d17] text-amber-400",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#fffdf7] text-gray-900 flex flex-col font-sans">
      <Navbar onOpenOrderModal={() => setDrawerOpen(true)} cartCount={0} />

      <main className="flex-1 w-full space-y-0">
        
        <div className="py-16 text-center max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-emerald-800 font-extrabold uppercase text-xs bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-300">
            THE 5-STAGE GOLGAPPA ART
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-[#0f382c] font-serif">
            THE PERFECT GOLGAPPA.
          </h1>
          <p className="text-base text-gray-600 font-medium">
            Explore the editorial craftsmanship behind every single plate served by Mahesh Kumar Gupta.
          </p>
        </div>

        {/* 5 Storytelling Sections */}
        {stages.map((st) => (
          <div key={st.num} className={`py-20 w-full px-4 sm:px-8 lg:px-12 ${st.color} border-t border-emerald-900/10`}>
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-3">
                <span className="text-7xl font-black font-serif opacity-40">{st.num}</span>
              </div>
              <div className="lg:col-span-9 space-y-3">
                <h2 className="text-3xl font-black font-serif uppercase tracking-tight">{st.name}</h2>
                <p className="text-base sm:text-lg font-medium opacity-90 leading-relaxed">{st.desc}</p>
              </div>
            </div>
          </div>
        ))}

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
