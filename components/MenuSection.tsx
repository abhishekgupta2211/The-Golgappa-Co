"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import { Plus, Flame, Sparkles, CheckCircle2 } from "lucide-react";

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
    <section id="menu" className="py-20 bg-[#fffdf7] text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-emerald-800 font-extrabold uppercase tracking-widest text-xs bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-300">
            {t.navMenu}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0f382c] tracking-tight">
            {t.menuTitle}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium">
            {t.menuSub}
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((prod) => {
            const countInCart = cart[prod.id] || 0;

            return (
              <div
                key={prod.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-emerald-900/10 hover:shadow-2xl hover:-translate-y-1 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Product Image & Badges */}
                  <div className="relative h-64 overflow-hidden group">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-emerald-950/80 backdrop-blur-md text-amber-300 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                      <span>{prod.spiceLevel}</span>
                    </div>
                    {!prod.available && (
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center text-white font-black text-xl uppercase tracking-widest">
                        {t.outOfStock}
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div className="p-6 space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-[#0f382c]">{prod.name}</h3>
                      <span className="text-2xl font-black text-emerald-800 font-mono">
                        ₹{prod.price}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed font-normal">
                      {prod.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer / Add CTA */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    disabled={!prod.available}
                    onClick={() => onAddToCart(prod)}
                    className={`w-full py-3.5 px-6 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition ${
                      countInCart > 0
                        ? "bg-emerald-800 text-white shadow-md hover:bg-emerald-900"
                        : "bg-[#0f382c] hover:bg-emerald-900 text-amber-300 shadow-md"
                    } ${!prod.available ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {countInCart > 0 ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-amber-400" />
                        <span>ADDED ({countInCart})</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-5 h-5 text-amber-400" />
                        <span>{t.add}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
