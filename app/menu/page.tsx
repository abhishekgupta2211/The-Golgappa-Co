"use client";

import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/components/LanguageContext";
import { Product } from "@/components/MenuSection";
import { OrderDrawer } from "@/components/OrderDrawer";
import { Flame, CheckCircle2, ArrowRight, ShieldCheck, ShoppingBag, Plus, Sparkles, Utensils } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MenuPage() {
  const { t } = useLanguage();
  const [products, setProducts] = useState<Product[]>([]);
  const [addOns, setAddOns] = useState<any[]>([]);
  const [cart, setCart] = useState<{ [id: string]: number }>({});
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    fetch("/api/menu")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProducts(data.products || []);
          setAddOns(data.addOns || []);
        }
      });
  }, []);

  const totalCartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  const handleAddToCart = (prod: Product) => {
    setCart((prev) => ({
      ...prev,
      [prod.id]: (prev[prod.id] || 0) + 1,
    }));
    setDrawerOpen(true);
  };

  const getPcsCount = (name: string) => {
    if (name.includes("6 Pcs")) return "6 Crunchy Puris / Plate";
    if (name.includes("8 Pcs")) return "8 Crunchy Puris / Plate";
    if (name.includes("50+")) return "50+ Party Plates Catering";
    return "6 Puris / Plate";
  };

  return (
    <div className="min-h-screen w-full bg-[#fffdf7] text-gray-900 flex flex-col font-sans">
      <Navbar onOpenOrderModal={() => setDrawerOpen(true)} cartCount={totalCartCount} />
      
      <main className="flex-1 w-full space-y-16 py-12">
        
        {/* Section 1: Menu Editorial Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full px-4 sm:px-8 lg:px-12 text-center max-w-4xl mx-auto space-y-4"
        >
          <span className="text-emerald-800 font-extrabold uppercase text-xs bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-300 tracking-widest">
            AUTHENTIC MENU & PRICE LIST
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-[#0f382c] font-serif leading-tight">
            OUR GOLGAPPA SELECTION
          </h1>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            Every plate is freshly assembled with crispy golden puris, secret chickpea-potato mash, and 100% RO mineral water.
          </p>
        </motion.div>

        {/* Section 2: Product List Grid with Exact Pcs & Price Breakdown */}
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((prod) => {
            const countInCart = cart[prod.id] || 0;
            const pcsInfo = getPcsCount(prod.name);

            return (
              <motion.div
                key={prod.id}
                whileHover={{ y: -4 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-emerald-900/10 flex flex-col justify-between"
              >
                <div>
                  {/* Product Image & Badges */}
                  <div className="relative h-64 overflow-hidden group">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-emerald-950/90 backdrop-blur-md text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                      <Flame className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                      <span>{prod.spiceLevel}</span>
                    </div>

                    {/* Exact Pcs Badge */}
                    <div className="absolute bottom-4 left-4 bg-amber-400 text-emerald-950 text-xs font-black px-3 py-1 rounded-full shadow-md">
                      {pcsInfo}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-[#0f382c] font-serif">{prod.name}</h3>
                      <span className="text-2xl font-black text-emerald-800 font-mono">
                        ₹{prod.price}
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                      {prod.description}
                    </p>

                    {/* Plate Breakdown Specifications */}
                    <div className="p-4 bg-emerald-50/80 rounded-2xl border border-emerald-200 space-y-2 text-xs text-[#0f382c] font-semibold">
                      <div className="flex items-center justify-between border-b border-emerald-200/60 pb-1.5">
                        <span>Puri Quantity:</span>
                        <strong className="text-amber-800">{pcsInfo}</strong>
                      </div>
                      <div className="flex items-center justify-between border-b border-emerald-200/60 pb-1.5">
                        <span>Price per Plate:</span>
                        <strong className="font-mono text-emerald-900">₹{prod.price}</strong>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Water Hygiene:</span>
                        <strong className="text-emerald-800">100% RO Mineral Water</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="px-6 pb-6 pt-2 space-y-2">
                  <button
                    onClick={() => handleAddToCart(prod)}
                    className="w-full py-4 px-6 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 bg-[#0f382c] hover:bg-emerald-900 text-amber-300 shadow-lg transition"
                  >
                    <Plus className="w-4 h-4 text-amber-400" />
                    <span>ADD TO BOOKING (₹{prod.price})</span>
                  </button>

                  <Link
                    href={`/golgappe/${prod.id}`}
                    className="block text-center text-xs font-bold text-gray-500 hover:text-emerald-800 py-1"
                  >
                    View Full Editorial Details →
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section 3: Add-Ons & Extra Extras List */}
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-5xl mx-auto bg-gradient-to-b from-[#071d17] to-[#0f382c] text-white p-8 sm:p-12 rounded-3xl shadow-2xl space-y-6 border border-emerald-800">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-amber-300 font-black text-xs uppercase tracking-widest">EXTRA ADD-ONS & BOTTLES</span>
            <h2 className="text-3xl font-black font-serif text-amber-300">Customize Your Order</h2>
            <p className="text-xs text-emerald-200">Add extra paani bottles or crisp puris to your booking.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {addOns.map((addon) => (
              <div key={addon.id} className="p-4 bg-emerald-950/80 rounded-2xl border border-emerald-700/60 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-white">{addon.name}</p>
                  <p className="text-[11px] text-emerald-300">{addon.description}</p>
                </div>
                <span className="font-mono font-black text-amber-300 text-sm pl-2">₹{addon.price}</span>
              </div>
            ))}
          </div>
        </div>

      </main>

      <OrderDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        products={products}
        addOnsList={addOns}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
}
