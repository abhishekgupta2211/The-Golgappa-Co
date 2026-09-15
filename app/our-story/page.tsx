"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/components/LanguageContext";
import { Sparkles, Heart, Award, CheckCircle2, Phone, MapPin, Clock } from "lucide-react";
import { OrderDrawer } from "@/components/OrderDrawer";
import Link from "next/link";

export default function StoryPage() {
  const { t } = useLanguage();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const storyChapters = [
    {
      year: "2004",
      title: "The Vision & The First Handcart",
      subtitle: "Starting at Central Park with 100% Mineral Water",
      content: "In September 2004, Shri Mahesh Kumar Gupta set up a tiny handcart near Central Park with a strong promise: never compromise on health or taste. While other local vendors used municipal tap water, Mahesh Ji introduced 100% RO mineral water for preparing the paani and fried fresh puris in clean sunflower oil every afternoon.",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    },
    {
      year: "2008",
      title: "The Secret Spice Mix Secret Revealed",
      subtitle: "Hand-ground roasted cumin, Himalayan pink salt & Royal Hing",
      content: "Mahesh Ji perfected his iconic 4-paani secret recipe: Teekha Pudina, Khatta-Meetha Imli Khajoor, Hing Jeera, and Garlic Chili. The unique roasted aroma of ground cumin and fresh pudina leaves created an instant sensation across the city.",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    },
    {
      year: "2015",
      title: "Generations of Foodies & Local Fame",
      subtitle: "A shop families have grown up visiting",
      content: "Students who visited the stall in 2004 began bringing their own children 10 years later. THE GOLGAPPA CO. became more than a stall; it became a cherished ritual for families, couples, and food lovers every evening between 3 PM and 10 PM.",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    },
    {
      year: "2020",
      title: "Shubh Avsar Wedding & Live Party Catering",
      subtitle: "Bringing authentic street stalls to luxury events",
      content: "Due to overwhelming demand, Mahesh Ji launched live Golgappa catering stalls for weddings, sangeet functions, birthdays & corporate parties. Uniformed chefs, hygienic steel counters, and authentic taste made it a highlight at over 500+ events.",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    },
    {
      year: "2026",
      title: "20+ Years Legacy & Digital Ordering",
      description: "Celebrating over two decades at the exact same location! Introducing online order booking, live order tracking, and 3-language support while preserving the exact same authentic street taste.",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#fffdf7] text-gray-900 flex flex-col font-sans">
      <Navbar onOpenOrderModal={() => setDrawerOpen(true)} cartCount={0} />

      <main className="flex-1 w-full space-y-16 py-12">
        
        {/* Editorial Story Header */}
        <div className="w-full px-4 sm:px-8 lg:px-12 text-center max-w-4xl mx-auto space-y-4">
          <span className="text-emerald-800 font-extrabold uppercase text-xs bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-300">
            HERITAGE DOCUMENTARY & FOUNDER STORY
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-[#0f382c] font-serif leading-tight">
            20+ YEARS. ONE LOCATION. ONE LEGENDARY TASTE.
          </h1>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            The inspiring journey of Shri Mahesh Kumar Gupta — how a single handcart built on pure mineral water and secret spices became the city's most beloved Golgappa destination.
          </p>
        </div>

        {/* Detailed Story Chapters */}
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto space-y-16">
          {storyChapters.map((chap, idx) => (
            <div key={chap.year} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-gray-200 pb-16">
              <div className="lg:col-span-5 space-y-3">
                <span className="text-6xl font-black font-serif text-amber-600 block">{chap.year}</span>
                <span className="text-xs font-black text-emerald-800 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  CHAPTER 0{idx + 1}
                </span>
                <h3 className="text-2xl font-black text-[#0f382c] font-serif pt-2">{chap.title}</h3>
                <h4 className="text-xs font-bold text-amber-700 uppercase">{chap.subtitle}</h4>
                <p className="text-sm text-gray-700 leading-relaxed font-medium pt-2">{chap.content || chap.description}</p>
              </div>

              <div className="lg:col-span-7">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-amber-400/20 aspect-video">
                  <img src={chap.image} alt={chap.title} className="w-full h-full object-cover transform hover:scale-105 transition duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Founder Promise Banner */}
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-5xl mx-auto">
          <div className="bg-[#0f382c] text-white p-8 sm:p-12 rounded-3xl shadow-2xl border-2 border-amber-400/40 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-amber-400 text-emerald-950 flex items-center justify-center font-black text-3xl mx-auto">
              👨‍🍳
            </div>
            <h2 className="text-3xl font-black text-amber-300 font-serif">
              "Quality & Purity is Our Sacred Tradition."
            </h2>
            <p className="text-emerald-100 max-w-2xl mx-auto text-sm font-medium leading-relaxed">
              — Mahesh Kumar Gupta (Founder, THE GOLGAPPA CO.) • Phone: <strong>+91 9369610213</strong>
            </p>
            <div className="pt-2">
              <button
                onClick={() => setDrawerOpen(true)}
                className="bg-amber-400 hover:bg-amber-300 text-emerald-950 font-black px-8 py-4 rounded-2xl shadow-xl transition uppercase text-sm"
              >
                BOOK YOUR PLATE NOW →
              </button>
            </div>
          </div>
        </div>

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
