"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/components/LanguageContext";
import { Star, MapPin, Phone, Clock, MessageSquare, ExternalLink, ShieldCheck } from "lucide-react";
import { OrderDrawer } from "@/components/OrderDrawer";

export default function ReviewsPage() {
  const { t } = useLanguage();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const googleReviews = [
    {
      id: 1,
      author: "Amit Verma",
      rating: 5,
      date: "2 days ago",
      comment: "Best Golgappa in town! Mahesh Ji's Teekha Pudina Paani is out of this world. Crispy puri and very clean mineral water setup.",
      initials: "AV",
      bgColor: "bg-blue-600",
    },
    {
      id: 2,
      author: "Priya Sharma",
      rating: 5,
      date: "1 week ago",
      comment: "We booked their live Golgappa stall for my brother's wedding reception. Guests loved all 4 paani flavors! Highly recommended.",
      initials: "PS",
      bgColor: "bg-purple-600",
    },
    {
      id: 3,
      author: "Rahul Roy",
      rating: 5,
      date: "2 weeks ago",
      comment: "Authentic street taste maintained since 2004. Dahi Puri is super rich and tangy. Online ordering is so smooth!",
      initials: "RR",
      bgColor: "bg-emerald-600",
    },
    {
      id: 4,
      author: "Sneha Gupta",
      rating: 5,
      date: "1 month ago",
      comment: "Very hygienic and 100% mineral water used. Extra points for 3-language support and prompt phone booking (9369610213).",
      initials: "SG",
      bgColor: "bg-amber-600",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#fffdf7] text-gray-900 flex flex-col font-sans">
      <Navbar onOpenOrderModal={() => setDrawerOpen(true)} cartCount={0} />

      <main className="flex-1 w-full px-4 sm:px-8 lg:px-12 py-16 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-emerald-800 font-extrabold uppercase text-xs bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-300">
            GOOGLE MAPS CUSTOMER REVIEWS
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0f382c]">
            4.9 ★★★★★ Rating on Google Maps
          </h1>
          <p className="text-gray-600 font-medium text-base">
            Read what real customers say about Mahesh Kumar Gupta's legendary Golgappe!
          </p>
        </div>

        {/* Rating Summary Card */}
        <div className="max-w-4xl mx-auto bg-[#071d17] text-white p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-emerald-800">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-amber-400 text-emerald-950 font-black text-2xl flex items-center justify-center shadow-lg">
              G
            </div>
            <div>
              <h3 className="text-2xl font-black text-amber-300">THE GOLGAPPA CO.</h3>
              <div className="flex items-center gap-1 text-amber-400 py-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
                <span className="font-bold text-white text-sm ml-2">4.9 / 5.0 (500+ Reviews)</span>
              </div>
              <p className="text-xs text-emerald-300">Google Verified Business • Main Market Stall</p>
            </div>
          </div>

          <a
            href="https://maps.app.goo.gl/jm4LXsy1NSKZ38P17?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-400 hover:bg-amber-300 text-emerald-950 font-black px-6 py-3.5 rounded-2xl shadow-lg transition flex items-center gap-2 whitespace-nowrap text-sm"
          >
            <span>Write a Google Review</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {googleReviews.map((rev) => (
            <div key={rev.id} className="bg-white p-8 rounded-3xl border border-gray-200 shadow-lg space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full ${rev.bgColor} text-white font-black flex items-center justify-center shadow-md`}>
                    {rev.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-[#0f382c]">{rev.author}</h4>
                    <p className="text-xs text-gray-400">{rev.date}</p>
                  </div>
                </div>

                <div className="flex text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
              </div>

              <p className="text-sm text-gray-700 font-medium leading-relaxed italic">
                "{rev.comment}"
              </p>
            </div>
          ))}
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
