"use client";

import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MenuSection, Product } from "@/components/MenuSection";
import { OrderDrawer } from "@/components/OrderDrawer";
import { AboutVisitSection } from "@/components/AboutVisitSection";
import { useLanguage } from "@/components/LanguageContext";
import { Phone, MapPin, Heart } from "lucide-react";

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
      
      {/* Sticky Header */}
      <Navbar
        onOpenOrderModal={() => setDrawerOpen(true)}
        cartCount={totalCartCount}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero onBookNow={() => setDrawerOpen(true)} />
        
        <MenuSection
          products={products}
          onAddToCart={handleAddToCart}
          cart={cart}
        />

        <AboutVisitSection />
      </main>

      {/* Slide-over Order Drawer */}
      <OrderDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        products={products}
        addOnsList={addOns}
        cart={cart}
        setCart={setCart}
      />

      {/* Footer */}
      <footer className="bg-[#071d17] text-emerald-300 py-12 border-t border-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl font-black text-amber-300">{t.brandName}</span>
          </div>
          <p className="text-xs text-emerald-400 font-semibold">{t.tagline} • {t.since}</p>
          <p className="text-xs text-emerald-300">{t.ownerName}</p>
          <div className="flex justify-center gap-6 text-xs font-semibold">
            <a href="https://maps.app.goo.gl/jm4LXsy1NSKZ38P17?g_st=aw" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-red-400" /> Location
            </a>
            <a href="/track" className="hover:text-amber-300 transition">Track Order</a>
            <a href="/admin/login" className="hover:text-amber-300 transition">Owner Admin</a>
          </div>
          <p className="text-[11px] text-emerald-500 pt-4 border-t border-emerald-900/60">
            © 2026 THE GOLGAPPA CO. All Rights Reserved. Crafted with <Heart className="w-3 h-3 text-red-500 inline mx-0.5 fill-red-500" /> for Indian Street Food Lovers.
          </p>
        </div>
      </footer>

    </div>
  );
}
