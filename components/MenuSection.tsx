"use client";

import React from "react";
import { motion } from "framer-motion";
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
  const [selectedCategory, setSelectedCategory] = React.useState<string>("ALL");
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  const categories = ["ALL", "CLASSIC", "PREMIUM", "SWEET", "SPICY"];

  const filteredProducts = products.filter((prod) => {
    const matchesCategory =
      selectedCategory === "ALL" ||
      (selectedCategory === "CLASSIC" && prod.name.toLowerCase().includes("classic")) ||
      (selectedCategory === "PREMIUM" && (prod.name.toLowerCase().includes("cheese") || prod.name.toLowerCase().includes("dahi"))) ||
      (selectedCategory === "SWEET" && prod.name.toLowerCase().includes("meetha")) ||
      (selectedCategory === "SPICY" && (prod.spiceLevel.toLowerCase().includes("high") || prod.name.toLowerCase().includes("teekha")));

    const matchesSearch =
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-24 w-full bg-[#faf7f2] text-gray-900 border-t border-emerald-900/10 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-emerald-900 text-amber-300 border border-emerald-800 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>SIGNATURE STREET FOOD MENU</span>
          </motion.div>

          <h2 className="text-4xl sm:text-6xl font-black font-serif uppercase tracking-tight text-[#0f382c]">
            {t.menuTitle}
          </h2>
          <p className="text-gray-600 font-medium text-base sm:text-lg">
            {t.menuSub}
          </p>
        </div>

        {/* Filter Pills & Search Bar (New Feature) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-3xl shadow-lg border border-emerald-900/10">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-2xl text-xs font-black uppercase tracking-wider transition ${
                  selectedCategory === cat
                    ? "bg-[#0f382c] text-amber-300 shadow-md"
                    : "bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-bold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72 relative">
            <input
              type="text"
              placeholder="Search flavours..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-emerald-50/60 border border-emerald-200 text-gray-900 text-xs font-bold rounded-2xl px-4 py-2.5 outline-none focus:border-emerald-600 transition placeholder-gray-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2.5 text-xs text-gray-400 hover:text-gray-600 font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Light Theme Equal Height Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProducts.map((prod, idx) => {
            const countInCart = cart[prod.id] || 0;

            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white border-2 border-emerald-900/10 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between h-full group hover:shadow-2xl hover:border-emerald-800 transition-all duration-300"
              >
                <div className="flex flex-col flex-1">
                  {/* Product Image & Badges */}
                  <div className="relative h-64 overflow-hidden shrink-0">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    
                    {/* Price Tag */}
                    <div className="absolute top-4 right-4 bg-[#0f382c] text-amber-300 font-black text-sm px-4 py-1.5 rounded-full shadow-lg border border-amber-400/40">
                      ₹{prod.price}
                    </div>

                    {/* Spice Level */}
                    <div className="absolute bottom-4 left-4 bg-white/95 text-emerald-950 font-bold text-xs px-3.5 py-1.5 rounded-full border border-emerald-900/20 flex items-center gap-1.5 backdrop-blur-md">
                      <Flame className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
                      <span>{prod.spiceLevel}</span>
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-black font-serif text-[#0f382c]">
                        {prod.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed mt-2">
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
                        ? "bg-emerald-900 text-amber-300 shadow-emerald-900/20"
                        : "bg-amber-400 hover:bg-amber-300 text-emerald-950"
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
