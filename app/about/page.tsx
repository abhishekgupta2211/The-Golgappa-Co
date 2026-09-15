"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/components/LanguageContext";
import { OrderDrawer } from "@/components/OrderDrawer";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  Heart,
  ChevronDown,
  Navigation,
  Utensils,
  Star,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const { t } = useLanguage();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Timeline Step Data
  const timelineEvents = [
    {
      year: "2004",
      label: "THE BEGINNING",
      title: "The First Handcart & Pure Water Promise",
      desc: "Shri Mahesh Kumar Gupta started the journey near Central Park with a sacred promise: serving handcrafted Golgappe made strictly with 100% RO Mineral Water and pure oils.",
    },
    {
      year: "2010",
      label: "YEARS OF TRUST",
      title: "Secret Spice Recipe Perfection",
      desc: "Perfected the iconic 4-paani blends (Teekha Pudina, Khatta-Meetha Imli, Royal Hing, and Garlic Chili) using roasted ground spices.",
    },
    {
      year: "2018",
      label: "FAVORITE DESTINATION",
      title: "Generations of Loyal Customers",
      desc: "Families, college students, and street food lovers made visiting Mahesh Ji's stall an evening ritual.",
    },
    {
      year: "2026",
      label: "TRADITION MEETS DIGITAL",
      title: "Online Booking & Modern Experience",
      desc: "Preserving the exact same 20+ year authentic street taste while enabling instant online order booking & WhatsApp notifications.",
    },
  ];

  // Brand Values Data
  const brandValues = [
    {
      num: "01",
      title: "FRESHNESS",
      subtitle: "Daily Handcrafted Preparation",
      desc: "Boiled potato-chana mash, freshly fried crisp puris, and freshly ground mint paani prepared every single afternoon.",
      icon: "🌱",
    },
    {
      num: "02",
      title: "CONSISTENCY",
      subtitle: "The Unchanged Taste",
      desc: "The exact same recipe, spice ratio, and iconic taste that customers have trusted for over two decades.",
      icon: "⭐",
    },
    {
      num: "03",
      title: "CLEANLINESS",
      subtitle: "100% RO Mineral Water",
      desc: "Pure RO mineral water and strict hygiene protocols for all preparations. Health and safety come first.",
      icon: "💧",
    },
    {
      num: "04",
      title: "HONESTY",
      subtitle: "Simple Food, Pure Love",
      desc: "No artificial colors, no cheap additives. Honest street food served with genuine warmth and respect.",
      icon: "🤝",
    },
    {
      num: "05",
      title: "PEOPLE",
      subtitle: "Customers Are Family",
      desc: "Every visitor is part of our 20+ year story. Serving happiness one Golgappa at a time.",
      icon: "❤️",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#faf7f2] text-gray-900 flex flex-col font-sans selection:bg-amber-300 selection:text-emerald-950 overflow-x-hidden">
      
      <Navbar onOpenOrderModal={() => setDrawerOpen(true)} cartCount={0} />

      <main className="flex-1 w-full space-y-0">
        
        {/* =========================================================================
            SECTION 1 — CINEMATIC HERO (Full Viewport Editorial)
        ========================================================================= */}
        <section className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#030907] text-white pt-10 pb-20">
          
          {/* Background Cinematic Image Overlay */}
          <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
            <img
              src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1920&q=80"
              alt="Crispy Golgappa Macro Photography"
              className="w-full h-full object-cover filter brightness-[0.35] contrast-125 scale-105 transform transition duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030907] via-black/40 to-[#030907]/90" />
          </div>

          <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10 max-w-7xl mx-auto space-y-10 text-center">
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-[#091f18]/90 border border-amber-400/50 px-5 py-2 rounded-full text-amber-300 text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-2xl backdrop-blur-xl"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{t.aboutEyebrow || "OUR STORY"}</span>
            </motion.div>

            <div className="space-y-4 max-w-5xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl sm:text-7xl lg:text-9xl font-black font-serif uppercase tracking-tight leading-[0.95] text-amber-300 drop-shadow-2xl"
              >
                {t.aboutHeroTitle1 || "20+ YEARS."} <br />
                <span className="text-white">{t.aboutHeroTitle2 || "ONE PLACE."}</span> <br />
                <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-emerald-300 bg-clip-text text-transparent">
                  {t.aboutHeroTitle3 || "ONE TASTE."}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg sm:text-2xl text-emerald-100/90 font-medium max-w-3xl mx-auto leading-relaxed pt-2"
              >
                "{t.aboutHeroSub1 || "Some flavours come and go. Some become a part of people's lives."}"
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-sm sm:text-base text-emerald-200/80 font-normal max-w-2xl mx-auto leading-relaxed"
              >
                {t.aboutHeroSub2 || "For more than two decades, our Golgappe have been served from the same place, with the same passion for that perfect crispy bite."}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <a
                href="#legacy"
                className="w-full sm:w-auto bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 text-emerald-950 font-black text-sm sm:text-base px-8 py-4 rounded-full shadow-2xl transition flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <span>{t.aboutBtnDiscover || "DISCOVER OUR STORY ↓"}</span>
              </a>

              <button
                onClick={() => setDrawerOpen(true)}
                className="w-full sm:w-auto bg-[#091f18] border-2 border-amber-400/50 hover:bg-[#0e2d23] text-amber-300 font-extrabold text-sm sm:text-base px-8 py-4 rounded-full transition flex items-center justify-center gap-2 shadow-xl uppercase tracking-wider"
              >
                <Zap className="w-4 h-4 text-amber-400" />
                <span>BOOK YOUR PLATE</span>
              </button>
            </motion.div>

          </div>
        </section>


        {/* =========================================================================
            SECTION 2 — 20+ YEARS LEGACY (Big Editorial Typography)
        ========================================================================= */}
        <section id="legacy" className="py-24 sm:py-32 w-full bg-[#faf7f2] text-gray-900 border-b border-gray-200">
          <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Oversized 20+ Number */}
              <div className="lg:col-span-5 space-y-2">
                <span className="text-emerald-900 font-extrabold uppercase text-xs tracking-widest bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-300 inline-block">
                  HERITAGE & TRADITION
                </span>

                <div className="leading-none pt-4">
                  <span className="text-9xl sm:text-[160px] font-black font-serif text-[#0f382c] tracking-tight block leading-none">
                    20+
                  </span>
                  <span className="text-3xl sm:text-5xl font-black font-serif text-amber-600 uppercase block tracking-tight -mt-2">
                    {t.aboutLegacyHeadline || "YEARS OF TASTE & TRUST"}
                  </span>
                </div>
              </div>

              {/* Right Story Copy */}
              <div className="lg:col-span-7 space-y-6 lg:pl-8">
                <h3 className="text-xs font-mono font-black text-amber-700 uppercase tracking-widest">
                  {t.aboutLegacySub || "ONE LOCATION • COUNTLESS MEMORIES"}
                </h3>

                <p className="text-xl sm:text-2xl text-[#0f382c] font-black font-serif leading-snug">
                  “We started with a single handcart and a refusal to compromise on health or taste.”
                </p>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                  While most street stalls used municipal tap water, Shri Mahesh Kumar Gupta introduced 100% RO mineral water for preparing the paani and fried fresh puris in clean oil every afternoon. That commitment turned a small stall into a city landmark.
                </p>

                <div className="pt-2 flex items-center gap-4 text-xs font-bold text-gray-600">
                  <span className="bg-[#0f382c] text-amber-300 px-3 py-1 rounded-full font-mono">EST. 2004</span>
                  <span>Near Central Park, Main Market Street</span>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* =========================================================================
            SECTION 3 — THE STORY (It Started With A Simple Idea)
        ========================================================================= */}
        <section className="py-24 w-full bg-[#0f382c] text-white border-b border-emerald-800">
          <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="bg-amber-400 text-emerald-950 font-black text-xs px-4 py-1.5 rounded-full uppercase tracking-widest">
                THE PHILOSOPHY
              </span>
              <h2 className="text-4xl sm:text-6xl font-black font-serif uppercase tracking-tight text-amber-300">
                {t.aboutStartedTitle1 || "IT STARTED WITH"} <br />
                <span className="text-white">{t.aboutStartedTitle2 || "A SIMPLE IDEA."}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden border-4 border-amber-400/40 shadow-2xl bg-[#091f18]">
                  <img
                    src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80"
                    alt="Authentic Golgappa Masala Preparation"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f382c] via-transparent to-transparent opacity-80" />
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <p className="text-lg sm:text-xl text-emerald-100 font-medium leading-relaxed">
                  {t.aboutStartedText1 || "A Golgappa does not need to be complicated. It needs to be crispy. The masala needs to be right. The pani needs to have that unforgettable balance. And every plate needs to feel just as good as the last one."}
                </p>

                <p className="text-base sm:text-lg text-amber-300 font-semibold leading-relaxed">
                  {t.aboutStartedText2 || "That simple belief has stayed with us for more than 20 years at our iconic stall location."}
                </p>

                <div className="p-5 bg-emerald-950/80 rounded-2xl border border-emerald-700/60 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-400 text-emerald-950 flex items-center justify-center font-black text-xl shrink-0">🧆</div>
                  <p className="text-xs text-emerald-200 font-bold">
                    Zero Artificial Colors • Zero Chemical Flavors • 100% RO Mineral Water
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* =========================================================================
            SECTION 4 — SAME PLACE. SAME TASTE. (Full Width Parallax Image Overlay)
        ========================================================================= */}
        <section className="relative w-full py-32 bg-black text-white overflow-hidden flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1920&q=80"
            alt="Mineral Paani Immersion"
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.25] scale-105"
          />
          <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto text-center space-y-6">
            <h2 className="text-5xl sm:text-8xl font-black font-serif uppercase tracking-tight text-amber-300 leading-none drop-shadow-2xl">
              {t.aboutSamePlaceTitle1 || "SAME PLACE."} <br />
              <span className="text-white">{t.aboutSamePlaceTitle2 || "SAME TASTE."}</span>
            </h2>

            <p className="text-lg sm:text-2xl text-emerald-100 max-w-3xl mx-auto font-medium leading-relaxed">
              "{t.aboutSamePlaceSub || "Years change. Streets change. Trends change. But some tastes become timeless."}"
            </p>
          </div>
        </section>


        {/* =========================================================================
            SECTION 5 — WHAT MAKES OUR GOLGAPPE SPECIAL (4 Visual Moments)
        ========================================================================= */}
        <section className="py-24 sm:py-32 w-full bg-[#faf7f2] text-gray-900 border-b border-gray-200">
          <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-16">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-emerald-900 font-black uppercase text-xs bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-300">
                THE SECRET RITUAL
              </span>
              <h2 className="text-4xl sm:text-6xl font-black font-serif uppercase tracking-tight text-[#0f382c]">
                {t.aboutSpecialHeadline1 || "SIMPLE INGREDIENTS."} <br />
                <span className="text-amber-600">{t.aboutSpecialHeadline2 || "SERIOUS CRAVINGS."}</span>
              </h2>
            </div>

            {/* 4 Alternating Moments */}
            <div className="space-y-16">
              
              {/* Moment 01 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-10 rounded-3xl border-2 border-emerald-900/10 shadow-xl">
                <div className="lg:col-span-6 space-y-3">
                  <span className="text-5xl font-mono font-black text-amber-600">01</span>
                  <h3 className="text-2xl sm:text-3xl font-black font-serif text-[#0f382c] uppercase">CRISPY PURI</h3>
                  <p className="text-base text-amber-700 font-bold">That first crunch matters.</p>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed">
                    Fried fresh every afternoon in clean oil. Ultra crunchy golden puris that crack cleanly without getting soggy.
                  </p>
                </div>
                <div className="lg:col-span-6 rounded-2xl overflow-hidden h-64 border border-gray-200">
                  <img src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80" alt="Crispy Puri" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Moment 02 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-10 rounded-3xl border-2 border-emerald-900/10 shadow-xl">
                <div className="lg:col-span-6 lg:order-2 space-y-3">
                  <span className="text-5xl font-mono font-black text-amber-600">02</span>
                  <h3 className="text-2xl sm:text-3xl font-black font-serif text-[#0f382c] uppercase">SIGNATURE MASALA</h3>
                  <p className="text-base text-amber-700 font-bold">The flavour that brings everything together.</p>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed">
                    Warm boiled potatoes hand-mashed with black chickpeas, roasted cumin powder, and fine rock salt.
                  </p>
                </div>
                <div className="lg:col-span-6 lg:order-1 rounded-2xl overflow-hidden h-64 border border-gray-200">
                  <img src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80" alt="Signature Masala" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Moment 03 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-10 rounded-3xl border-2 border-emerald-900/10 shadow-xl">
                <div className="lg:col-span-6 space-y-3">
                  <span className="text-5xl font-mono font-black text-amber-600">03</span>
                  <h3 className="text-2xl sm:text-3xl font-black font-serif text-[#0f382c] uppercase">FRESH PAANI</h3>
                  <p className="text-base text-amber-700 font-bold">Tangy, spicy and refreshing.</p>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed">
                    100% RO mineral water infused with fresh mint leaves, tamarind paste, hing, and green chillies.
                  </p>
                </div>
                <div className="lg:col-span-6 rounded-2xl overflow-hidden h-64 border border-gray-200">
                  <img src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80" alt="Fresh Paani" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Moment 04 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-10 rounded-3xl border-2 border-emerald-900/10 shadow-xl">
                <div className="lg:col-span-6 lg:order-2 space-y-3">
                  <span className="text-5xl font-mono font-black text-amber-600">04</span>
                  <h3 className="text-2xl sm:text-3xl font-black font-serif text-[#0f382c] uppercase">THE PERFECT BITE</h3>
                  <p className="text-base text-amber-700 font-bold">The reason one plate is never enough.</p>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed">
                    Pop the whole Golgappa inside your mouth for an explosion of crispiness, warm aloo, and icy spicy paani!
                  </p>
                </div>
                <div className="lg:col-span-6 lg:order-1 rounded-2xl overflow-hidden h-64 border border-gray-200">
                  <img src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80" alt="The Perfect Bite" className="w-full h-full object-cover" />
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* =========================================================================
            SECTION 7 — OWNER / FOUNDER SECTION (Mahesh Kumar Gupta Editorial)
        ========================================================================= */}
        <section className="py-24 w-full bg-[#0f382c] text-white border-b border-emerald-800">
          <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Owner Image */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-3xl overflow-hidden border-4 border-amber-400/40 shadow-2xl bg-emerald-950">
                  <img
                    src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80"
                    alt="Owner Mahesh Kumar Gupta"
                    className="w-full h-[480px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f382c] via-transparent to-transparent opacity-80" />
                </div>
              </div>

              {/* Owner Story Text */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-amber-400 font-black text-xs uppercase tracking-widest bg-emerald-950 px-4 py-1.5 rounded-full border border-emerald-700">
                  {t.aboutOwnerLabel || "THE PERSON BEHIND THE TASTE"}
                </span>

                <h2 className="text-4xl sm:text-6xl font-black font-serif uppercase tracking-tight text-amber-300 leading-none">
                  {t.aboutOwnerTitle1 || "BUILT WITH PASSION."} <br />
                  <span className="text-white">{t.aboutOwnerTitle2 || "SERVED WITH PRIDE."}</span>
                </h2>

                <div>
                  <h3 className="text-2xl font-black font-serif text-white">{t.aboutOwnerName || "Mahesh Kumar Gupta"}</h3>
                  <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mt-0.5">{t.aboutOwnerRole || "Founder & Head Chef"}</p>
                </div>

                <p className="text-sm sm:text-base text-emerald-100 font-medium leading-relaxed">
                  {t.aboutOwnerBio || "Every afternoon since 2004, Mahesh Kumar Gupta personally selects the finest chickpeas, boils fresh potatoes, grinds aromatic roasted spices, and prepares 100% RO mineral water infused with fresh mint and tamarind. No artificial flavors, no compromises."}
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href="https://wa.me/919369610213?text=Hello%20Mahesh%20Ji,%20I%20want%20to%20know%20more%20about%20your%20Golgappa%20stall"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-emerald-950 font-black text-xs sm:text-sm px-8 py-4 rounded-2xl shadow-xl transition flex items-center justify-center gap-2 uppercase tracking-wider"
                  >
                    <MessageCircle className="w-4 h-4 fill-emerald-950" />
                    <span>WhatsApp: 9369610213</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* =========================================================================
            SECTION 8 — HERITAGE TIMELINE (2004 - 2026)
        ========================================================================= */}
        <section className="py-24 sm:py-32 w-full bg-[#faf7f2] text-gray-900 border-b border-gray-200">
          <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-16">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-emerald-900 font-black uppercase text-xs bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-300">
                TIMELINE & MILESTONES
              </span>
              <h2 className="text-4xl sm:text-6xl font-black font-serif uppercase tracking-tight text-[#0f382c]">
                {t.aboutTimelineHeadline1 || "MORE THAN TWO DECADES."} <br />
                <span className="text-amber-600">{t.aboutTimelineHeadline2 || "ONE JOURNEY."}</span>
              </h2>
            </div>

            {/* Timeline Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {timelineEvents.map((ev) => (
                <div key={ev.year} className="bg-white p-7 rounded-3xl border-2 border-emerald-900/10 shadow-xl space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-5xl font-mono font-black text-amber-600 block">{ev.year}</span>
                    <span className="text-[10px] font-mono font-black text-emerald-900 bg-emerald-100 px-3 py-1 rounded-full uppercase">
                      {ev.label}
                    </span>
                    <h3 className="text-lg font-black font-serif text-[#0f382c] pt-1">{ev.title}</h3>
                    <p className="text-xs text-gray-600 font-medium leading-relaxed">{ev.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* =========================================================================
            SECTION 9 — OUR VALUES (Typography Led)
        ========================================================================= */}
        <section className="py-24 w-full bg-[#0f382c] text-white border-b border-emerald-800">
          <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-16">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="bg-amber-400 text-emerald-950 font-black text-xs px-4 py-1.5 rounded-full uppercase tracking-widest">
                OUR CORE VALUES
              </span>
              <h2 className="text-4xl sm:text-6xl font-black font-serif uppercase tracking-tight text-amber-300">
                {t.aboutBeliefTitle || "WHAT WE BELIEVE IN."}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {brandValues.map((val) => (
                <div key={val.num} className="bg-emerald-950/80 p-6 rounded-3xl border border-emerald-700/60 shadow-xl space-y-3">
                  <span className="text-3xl">{val.icon}</span>
                  <span className="text-xs font-mono font-black text-amber-400 block">VALUE {val.num}</span>
                  <h3 className="text-xl font-black font-serif text-white uppercase">{val.title}</h3>
                  <h4 className="text-xs font-bold text-amber-300 uppercase">{val.subtitle}</h4>
                  <p className="text-xs text-emerald-100 font-medium leading-relaxed pt-1">{val.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* =========================================================================
            SECTION 11 — OLD MEETS NEW (Traditional Stall Meets Digital Experience)
        ========================================================================= */}
        <section className="py-24 sm:py-32 w-full bg-[#faf7f2] text-gray-900 border-b border-gray-200">
          <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-16">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-emerald-900 font-black uppercase text-xs bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-300">
                EVOLUTION
              </span>
              <h2 className="text-4xl sm:text-6xl font-black font-serif uppercase tracking-tight text-[#0f382c]">
                {t.aboutEvolvesTitle1 || "THE TASTE STAYS."} <br />
                <span className="text-amber-600">{t.aboutEvolvesTitle2 || "THE EXPERIENCE EVOLVES."}</span>
              </h2>
              <p className="text-gray-600 font-medium text-base sm:text-lg">
                {t.aboutEvolvesSub || "The Golgappa hasn't changed. The way you book it has."}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Traditional */}
              <div className="lg:col-span-6 bg-white p-8 rounded-3xl border-2 border-emerald-900/10 shadow-xl space-y-4">
                <span className="text-xs font-mono font-black text-amber-700 bg-amber-50 px-3 py-1 rounded-full uppercase">TRADITIONAL STALL</span>
                <h3 className="text-2xl font-black font-serif text-[#0f382c]">20+ Years On-Stall Legacy</h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">
                  Serving fresh, crispy, mineral-water Golgappe at Near Central Park, Main Market Street every afternoon.
                </p>
              </div>

              {/* Right Modern Digital */}
              <div className="lg:col-span-6 bg-[#0f382c] text-white p-8 rounded-3xl border-2 border-amber-400/40 shadow-2xl space-y-4">
                <span className="text-xs font-mono font-black text-amber-300 bg-emerald-950 px-3 py-1 rounded-full uppercase">DIGITAL BOOKING 2026</span>
                <h3 className="text-2xl font-black font-serif text-amber-300">Instant Online Plate Booking</h3>
                <p className="text-sm text-emerald-100 font-medium leading-relaxed">
                  Reserve your plate online, get instant WhatsApp notifications, and pay cash when you collect at Mahesh Ji's stall.
                </p>
                <button
                  onClick={() => setDrawerOpen(true)}
                  className="bg-amber-400 text-emerald-950 font-black text-xs px-6 py-3 rounded-xl uppercase tracking-wider shadow-lg"
                >
                  BOOK YOUR PLATE ONLINE
                </button>
              </div>
            </div>

          </div>
        </section>


        {/* =========================================================================
            SECTION 15 — FINAL CTA (Now You Know The Story)
        ========================================================================= */}
        <section className="relative w-full py-28 bg-[#0f382c] text-white border-t border-emerald-800 text-center">
          <div className="w-full px-4 sm:px-8 lg:px-12 max-w-4xl mx-auto space-y-8 relative z-10">
            <h2 className="text-4xl sm:text-7xl font-black font-serif uppercase tracking-tight text-amber-300 leading-tight">
              {t.aboutKnowStory1 || "NOW YOU KNOW"} <br />
              <span className="text-white">{t.aboutKnowStory2 || "THE STORY."}</span>
            </h2>

            <p className="text-xl sm:text-2xl text-emerald-100 font-medium">
              {t.aboutReadyTaste || "Ready to taste it?"}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setDrawerOpen(true)}
                className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-emerald-950 font-black text-base sm:text-lg px-10 py-4.5 rounded-full shadow-2xl transition uppercase tracking-wider"
              >
                BOOK YOUR PLATE NOW
              </button>

              <Link
                href="/visit"
                className="w-full sm:w-auto bg-emerald-950 border-2 border-amber-400/40 hover:bg-emerald-900 text-amber-300 font-extrabold text-base px-9 py-4.5 rounded-full transition shadow-xl uppercase tracking-wider"
              >
                VISIT STALL LOCATION
              </Link>
            </div>
          </div>
        </section>


        {/* =========================================================================
            SECTION 16 — LOCATION PREVIEW
        ========================================================================= */}
        <section className="py-20 w-full bg-[#faf7f2] text-gray-900 border-t border-gray-200">
          <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
            <div className="bg-white p-8 rounded-3xl border-2 border-emerald-900/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-xs font-mono font-bold text-amber-700 uppercase">VISIT OUR STALL</span>
                <h3 className="text-2xl font-black font-serif text-[#0f382c]">Near Central Park, Main Market Street</h3>
                <p className="text-xs text-gray-600 font-medium">Everyday 2:00 PM – 10:00 PM • Direct Call / WhatsApp: +91 9369610213</p>
              </div>

              <a
                href="https://maps.app.goo.gl/jm4LXsy1NSKZ38P17?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0f382c] hover:bg-emerald-900 text-amber-300 font-black text-xs px-7 py-4 rounded-2xl shadow-lg transition flex items-center gap-2 uppercase tracking-wider whitespace-nowrap"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS ON GOOGLE MAPS</span>
              </a>
            </div>
          </div>
        </section>

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
