"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/components/LanguageContext";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { OrderDrawer } from "@/components/OrderDrawer";

export default function FaqPage() {
  const { t } = useLanguage();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do I book an order online?",
      a: "Click 'BOOK YOUR PLATE' in the navigation bar, select your Golgappa plates, choose your spice level & paani preference, enter your mobile number and pickup time slot!",
    },
    {
      q: "Do I need to make an online payment?",
      a: "No! Payment is NOT collected online. All bookings are marked 'Pay at Stall'. You pay cash/UPI directly at Mahesh Kumar Gupta's stall upon pickup.",
    },
    {
      q: "Can I book live Golgappa stalls for Weddings & Events?",
      a: "Yes! We specialize in live Golgappa stalls for Weddings, Birthdays, Anniversaries & Corporate parties. Call Mahesh Kumar Gupta directly at 9369610213 or visit our Catering page.",
    },
    {
      q: "What water is used for the Paani?",
      a: "We use 100% RO Mineral Water for all 4 paani preparations (Teekha Pudina, Khatta-Meetha Imli, Hing Jeera & Garlic Chili).",
    },
    {
      q: "How do I track my booking status?",
      a: "Go to the 'Track Order' page from the navigation bar, enter your Order ID (e.g. GP-20260915-001) and mobile number to see real-time updates.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#fffdf7] text-gray-900 flex flex-col font-sans">
      <Navbar onOpenOrderModal={() => setDrawerOpen(true)} cartCount={0} />

      <main className="flex-1 w-full px-4 sm:px-8 lg:px-12 py-16 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-emerald-800 font-extrabold uppercase text-xs bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-300">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h1 className="text-4xl font-black text-[#0f382c] font-serif">FAQ & Support</h1>
          <p className="text-gray-600 font-medium text-sm">
            Everything you need to know about booking, customization & event catering.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left font-bold text-[#0f382c] flex items-center justify-between gap-4 text-base"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-amber-600" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-gray-600 font-medium leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
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
