"use client";

import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/components/LanguageContext";
import { Product } from "@/components/MenuSection";
import { OrderDrawer } from "@/components/OrderDrawer";
import { Flame, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { t } = useLanguage();
  const [product, setProduct] = useState<Product | null>(null);
  const [addOns, setAddOns] = useState<any[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cart, setCart] = useState<{ [id: string]: number }>({});

  useEffect(() => {
    fetch("/api/menu")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.products) {
          const found = data.products.find((p: any) => p.id === params.id);
          if (found) setProduct(found);
          setAddOns(data.addOns || []);
        }
      });
  }, [params.id]);

  const handleBookThisItem = () => {
    if (product) {
      setCart({ [product.id]: 1 });
      setDrawerOpen(true);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-[#fffdf7] flex items-center justify-center text-gray-500 font-bold">
        Loading product details...
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#fffdf7] text-gray-900 flex flex-col font-sans">
      <Navbar onOpenOrderModal={() => setDrawerOpen(true)} cartCount={Object.keys(cart).length} />

      <main className="flex-1 w-full px-4 sm:px-8 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Large Hero Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-400/30 aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
              />
              <div className="absolute top-4 left-4 bg-emerald-950/80 backdrop-blur-md text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-red-500 fill-red-500" />
                <span>Spice: {product.spiceLevel}</span>
              </div>
            </div>
          </div>

          {/* Product Editorial Details */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-emerald-800 font-extrabold uppercase text-xs bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-300">
              EDITORIAL GOLGAPPA SELECTION
            </span>

            <h1 className="text-4xl sm:text-5xl font-black text-[#0f382c] font-serif tracking-tight">
              {product.name}
            </h1>

            <p className="text-3xl font-black font-mono text-emerald-800">
              ₹{product.price}
            </p>

            <p className="text-base text-gray-700 font-medium leading-relaxed">
              {product.description}
            </p>

            {/* Recipe Highlights */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-black uppercase text-gray-500 tracking-wider">Product Highlights</h4>
              <div className="grid grid-cols-2 gap-2 text-xs font-bold text-[#0f382c]">
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                  🌱 100% Pure RO Mineral Water
                </div>
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                  🔥 Custom Spice Adjustment
                </div>
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                  👨‍🍳 Mahesh Ji's Secret Masala
                </div>
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                  ✨ Fresh Crunchy Fried Puris
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={handleBookThisItem}
                className="w-full bg-[#0f382c] hover:bg-emerald-900 text-amber-300 font-black py-4 rounded-2xl shadow-xl transition flex items-center justify-center gap-3 text-base uppercase tracking-wider"
              >
                <span>BOOK THIS GOLGAPPA PLATE</span>
                <ArrowRight className="w-5 h-5 text-amber-400" />
              </button>
            </div>

          </div>

        </div>
      </main>

      <OrderDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        products={product ? [product] : []}
        addOnsList={addOns}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
}
