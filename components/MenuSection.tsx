"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";
import { Plus, Flame, Sparkles, CheckCircle2, ShoppingBag } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  spiceLevel: string;
  available: boolean;
}

export function MenuSection({
  products,
  onAddToCart,
  cart,
}: {
  products: Product[];
  onAddToCart: (p: Product) => void;
  cart: { [id: string]: number };
}) {
  const { t } = useLanguage();

  return (
    <section id="menu" className="py-24 w-full bg-[#030907] text-white border-t border-emerald-900/40 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#091f18] border border-amber-400/40 px-4 py-1.5 rounded-full text-amber-300 text-xs font-black uppercase tracking-wider"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>2026 SIGNATURE STREET FOOD MENU</span>
          </motion.div>

          <h2 className="text-4xl sm:text-6xl font-black font-serif uppercase tracking-tight text-[#fffdf7]">
            {t.menuTitle}
          </h2>
          <p className="text-emerald-200/80 font-medium text-base sm:text-lg">
            {t.menuSub}
          </p>
        </div>

        {/* 2026 Ultra-Modern Product Grid with Equal Card Heights & Strict Alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {products.map((prod, idx) => {
            const countInCart = cart[prod.id] || 0;

            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-[#091f18]/90 border border-emerald-700/60 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl flex flex-col justify-between h-full group hover:border-amber-400/80 transition-all duration-300"
              >
                <div className="flex flex-col flex-1">
                  {/* Product Image & Badges */}
                  <div className="relative h-64 overflow-hidden shrink-0">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#091f18] via-transparent to-transparent opacity-90" />
                    
                    {/* Price Tag */}
                    <div className="absolute top-4 right-4 bg-amber-400 text-emerald-950 font-black text-sm px-4 py-1.5 rounded-full shadow-lg border border-white/40">
                      ₹{prod.price}
                    </div>

                    {/* Spice Level */}
                    <div className="absolute bottom-4 left-4 bg-[#030907]/90 text-amber-300 font-bold text-xs px-3.5 py-1.5 rounded-full border border-amber-400/40 flex items-center gap-1.5 backdrop-blur-md">
                      <Flame className="w-3.5 h-3.5 text-red-400 fill-red-400" />
                      <span>{prod.spiceLevel}</span>
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-black font-serif text-amber-300 group-hover:text-amber-200 transition">
                        {prod.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-emerald-100/80 font-medium leading-relaxed mt-2">
                        {prod.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="p-6 pt-0 mt-auto">
                  <button
                    onClick={() => onAddToCart(prod)}
                    className={`w-full py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-lg ${
                      countInCart > 0
                        ? "bg-gradient-to-r from-emerald-500 to-teal-400 text-emerald-950 shadow-emerald-500/20"
                        : "bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 text-emerald-950"
                    }`}
                  >
                    {countInCart > 0 ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>ADDED TO PLATE ({countInCart})</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>ADD TO PLATE</span>
                      </>
                    )}
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
