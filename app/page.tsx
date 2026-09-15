"use client";

import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MenuSection, Product } from "@/components/MenuSection";
import { OrderDrawer } from "@/components/OrderDrawer";
import { AboutVisitSection } from "@/components/AboutVisitSection";
import { useLanguage } from "@/components/LanguageContext";
import { Phone, MapPin, Heart, PartyPopper } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
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
      })
      .catch((err) => console.error("Error loading menu:", err));
  }, []);

  const totalCartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  const handleAddToCart = (prod: Product) => {
    setCart((prev) => ({
      ...prev,
      [prod.id]: (prev[prod.id] || 0) + 1,
    }));
    setDrawerOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fffdf7] flex flex-col font-sans selection:bg-amber-300 selection:text-emerald-950">
      
      <Navbar
        onOpenOrderModal={() => setDrawerOpen(true)}
        cartCount={totalCartCount}
      />

      <main className="flex-1">
        <Hero onBookNow={() => setDrawerOpen(true)} />
        
        {/* Shubh Avsar Event Catering Highlight Section */}
        <section className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 py-10 text-emerald-950 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-full bg-emerald-950 text-amber-300 flex items-center justify-center text-3xl shrink-0">
                🎉
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black font-serif">
                  {t.eventHeading}
                </h3>
                <p className="text-xs sm:text-sm font-bold opacity-90">
                  {t.eventSub}
                </p>
              </div>
            </div>

            <Link
              href="/catering"
              className="bg-emerald-950 hover:bg-emerald-900 text-amber-300 font-black px-6 py-3.5 rounded-2xl shadow-lg transition flex items-center gap-2 whitespace-nowrap text-sm"
            >
              <PartyPopper className="w-4 h-4 text-amber-400" />
              <span>BOOK FOR EVENT</span>
            </Link>
          </div>
        </section>

        <MenuSection
          products={products}
          onAddToCart={handleAddToCart}
          cart={cart}
        />

        <AboutVisitSection />
      </main>

      <OrderDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        products={products}
        addOnsList={addOns}
        cart={cart}
        setCart={setCart}
      />

      {/* Enhanced Footer */}
      <footer className="bg-[#071d17] text-emerald-300 py-12 border-t border-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl font-black text-amber-300">{t.brandName}</span>
          </div>
          <p className="text-xs text-emerald-400 font-semibold">{t.tagline} • {t.since}</p>
          <p className="text-xs text-emerald-300 font-bold">{t.ownerName} • Phone: 9369610213</p>
          
          <div className="flex flex-wrap justify-center gap-6 text-xs font-bold uppercase tracking-wider text-emerald-200">
            <Link href="/" className="hover:text-amber-300">Home</Link>
            <Link href="/menu" className="hover:text-amber-300">Menu</Link>
            <Link href="/paani" className="hover:text-amber-300">Our Paani</Link>
            <Link href="/catering" className="hover:text-amber-300 text-amber-300">Event Catering</Link>
            <Link href="/about" className="hover:text-amber-300">About</Link>
            <Link href="/visit" className="hover:text-amber-300">Visit Stall</Link>
            <Link href="/track" className="hover:text-amber-300">Track Order</Link>
          </div>

          <p className="text-[11px] text-emerald-500 pt-4 border-t border-emerald-900/60">
            © 2026 THE GOLGAPPA CO. All Rights Reserved. Crafted with <Heart className="w-3 h-3 text-red-500 inline mx-0.5 fill-red-500" /> for Indian Street Food Lovers.
          </p>
        </div>
      </footer>

    </div>
  );
}
