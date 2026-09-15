"use client";

import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LegacySection } from "@/components/LegacySection";
import { TeekhaSlider } from "@/components/TeekhaSlider";
import { MenuSection, Product } from "@/components/MenuSection";
import { OrderDrawer } from "@/components/OrderDrawer";
import { AboutVisitSection } from "@/components/AboutVisitSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { useLanguage } from "@/components/LanguageContext";
import { Heart, PartyPopper } from "lucide-react";
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
    <div className="min-h-screen w-full bg-[#fffdf7] flex flex-col font-sans selection:bg-amber-300 selection:text-emerald-950 overflow-x-hidden">
      
      <Navbar
        onOpenOrderModal={() => setDrawerOpen(true)}
        cartCount={totalCartCount}
      />

      <main className="flex-1 w-full">
        {/* 1. Cinematic Hero */}
        <Hero onBookNow={() => setDrawerOpen(true)} />
        
        {/* 2. Editorial Legacy Section (20+ YEARS) */}
        <LegacySection />

        {/* 3. Event & Wedding Catering Banner */}
        <section className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 py-10 text-emerald-950 shadow-md w-full">
          <div className="w-full px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
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

        {/* 4. Golgappa Showcase Menu */}
        <MenuSection
          products={products}
          onAddToCart={handleAddToCart}
          cart={cart}
        />

        {/* 5. Interactive Teekha Spice Slider */}
        <TeekhaSlider />

        {/* 6. Google Verified Customer Reviews Section */}
        <ReviewsSection />

        {/* 7. About & Stall Location */}
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

      {/* Editorial Statement Footer */}
      <footer className="bg-[#040d0a] text-emerald-300 py-16 border-t border-emerald-900/60 w-full">
        <div className="w-full px-4 sm:px-8 lg:px-12 space-y-12">
          
          {/* Got A Craving Banner Statement */}
          <div className="border-b border-emerald-900/60 pb-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-5xl font-black font-serif text-amber-300 uppercase tracking-tight">
                GOT A CRAVING?
              </h2>
              <p className="text-emerald-200 text-sm font-medium mt-1">
                Book your plate online now. Pay when you collect at Mahesh Ji's stall!
              </p>
            </div>
            <button
              onClick={() => setDrawerOpen(true)}
              className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 text-emerald-950 font-black px-8 py-4 rounded-2xl shadow-xl transition text-base uppercase tracking-wider whitespace-nowrap"
            >
              BOOK YOUR PLATE NOW →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs font-bold uppercase tracking-wider text-emerald-200">
            <div>
              <h4 className="text-amber-300 font-serif font-black text-lg mb-3">{t.brandName}</h4>
              <p className="text-emerald-400 font-semibold normal-case">{t.since}</p>
              <p className="text-emerald-300 font-bold normal-case mt-1">{t.ownerName}</p>
              <p className="text-amber-400 font-mono mt-1">+91 9369610213</p>
            </div>

            <div className="space-y-2 flex flex-col">
              <span className="text-amber-400 font-black">EXPLORE</span>
              <Link href="/" className="hover:text-amber-300">Home</Link>
              <Link href="/menu" className="hover:text-amber-300">Golgappe</Link>
              <Link href="/paani" className="hover:text-amber-300">Our Paani</Link>
              <Link href="/our-story" className="hover:text-amber-300">Our Story</Link>
            </div>

            <div className="space-y-2 flex flex-col">
              <span className="text-amber-400 font-black">EXPERIENCE</span>
              <Link href="/experience" className="hover:text-amber-300">5-Stage Art</Link>
              <Link href="/catering" className="hover:text-amber-300 text-amber-300">Wedding Catering</Link>
              <Link href="/reviews" className="hover:text-amber-300">Google Reviews</Link>
              <Link href="/faq" className="hover:text-amber-300">FAQ</Link>
            </div>

            <div className="space-y-2 flex flex-col">
              <span className="text-amber-400 font-black">STALL LOCATION</span>
              <p className="normal-case font-normal text-emerald-300">Near Central Park, Main Market Street</p>
              <a href="https://maps.app.goo.gl/jm4LXsy1NSKZ38P17?g_st=aw" target="_blank" rel="noopener noreferrer" className="text-amber-300 underline font-bold mt-2">
                Open in Google Maps
              </a>
            </div>
          </div>

          <p className="text-[11px] text-emerald-600 text-center pt-8 border-t border-emerald-900/60 font-semibold">
            © 2026 THE GOLGAPPA CO. All Rights Reserved. Crafted with <Heart className="w-3 h-3 text-red-500 inline mx-0.5 fill-red-500" /> for Indian Street Food Lovers.
          </p>

        </div>
      </footer>

    </div>
  );
}
