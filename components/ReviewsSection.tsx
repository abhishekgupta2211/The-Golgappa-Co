"use client";

import React, { useState } from "react";
import { Star, ExternalLink, CheckCircle2, ThumbsUp, ShieldCheck } from "lucide-react";

export function ReviewsSection() {
  const [filterRating, setFilterRating] = useState<number | 'ALL'>('ALL');

  const allGoogleReviews = [
    {
      id: 1,
      author: "Amit Verma",
      rating: 5,
      date: "2 days ago",
      comment: "Best Golgappa in the entire market! Mahesh Kumar Gupta Ji's Teekha Pudina Paani is unmatched. Super crispy puris fried in fresh oil with clean mineral water.",
      initials: "AV",
      bgColor: "bg-blue-600",
      likes: 12,
    },
    {
      id: 2,
      author: "Priya Sharma",
      rating: 5,
      date: "1 week ago",
      comment: "We booked Mahesh Ji's live Golgappa stall for my brother's wedding reception. All 4 paani varieties (Pudina, Imli, Hing & Garlic Chili) were a massive hit among guests!",
      initials: "PS",
      bgColor: "bg-purple-600",
      likes: 24,
    },
    {
      id: 3,
      author: "Rahul Roy",
      rating: 5,
      date: "2 weeks ago",
      comment: "Authentic chatpata street taste maintained since 2004. Dahi Puri Chatpata Delight is loaded with thick yogurt and fine nylon sev. Must try!",
      initials: "RR",
      bgColor: "bg-emerald-600",
      likes: 8,
    },
    {
      id: 4,
      author: "Sneha Gupta",
      rating: 5,
      date: "3 weeks ago",
      comment: "Super hygienic environment. 100% mineral water used for all preparations. Direct phone booking (+91 9369610213) makes pickup so convenient.",
      initials: "SG",
      bgColor: "bg-amber-600",
      likes: 15,
    },
    {
      id: 5,
      author: "Vikram Malhotra",
      rating: 5,
      date: "1 month ago",
      comment: "The Khatta-Meetha Imli Special Golgappa has the perfect balance of sweet tamarind date syrup and roasted cumin. Have been visiting for 10+ years!",
      initials: "VM",
      bgColor: "bg-red-600",
      likes: 19,
    },
    {
      id: 6,
      author: "Neha Rastogi",
      rating: 5,
      date: "1 month ago",
      comment: "Ordered bulk catering for a birthday party at home. Freshly sealed extra puris and paani bottles delivered right on time. Outstanding service!",
      initials: "NR",
      bgColor: "bg-indigo-600",
      likes: 11,
    }
  ];

  const filteredReviews = filterRating === 'ALL'
    ? allGoogleReviews
    : allGoogleReviews.filter(r => r.rating === filterRating);

  return (
    <section id="reviews" className="py-20 w-full bg-[#f4efe4] text-gray-900 border-t border-b border-emerald-900/10">
      <div className="w-full px-4 sm:px-8 lg:px-12 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-emerald-800 font-extrabold uppercase text-xs bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-300">
            GOOGLE MAPS VERIFIED REVIEWS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0f382c] font-serif">
            Loved by 10,000+ Foodies
          </h2>
          <p className="text-gray-600 font-medium text-sm sm:text-base">
            Verified feedback from street food lovers visiting Mahesh Kumar Gupta's stall at Near Central Park!
          </p>
        </div>

        {/* Big Google Rating Banner */}
        <div className="w-full max-w-5xl mx-auto bg-gradient-to-r from-[#071d17] via-[#0f382c] to-[#071d17] text-white p-6 sm:p-10 rounded-3xl shadow-2xl border-2 border-amber-400/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-400 text-emerald-950 font-black text-xs px-3 py-1 rounded-full uppercase">
              Google Maps Location Verified
            </div>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <span className="text-5xl font-black text-amber-300 font-mono">4.9</span>
              <div>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-emerald-200 font-bold mt-1">Based on 520+ Google Maps Reviews</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-emerald-100 font-medium">
              📍 Near Central Park, Main Market Street • Phone: 9369610213
            </p>
          </div>

          <a
            href="https://maps.app.goo.gl/jm4LXsy1NSKZ38P17?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 text-emerald-950 font-black text-sm sm:text-base px-6 py-3.5 rounded-2xl shadow-xl transition flex items-center justify-center gap-2.5 shrink-0"
          >
            <span>Open Google Maps Reviews</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((rev) => (
            <div key={rev.id} className="bg-white p-6 rounded-3xl border border-gray-200 shadow-md space-y-4 hover:shadow-lg transition">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-full ${rev.bgColor} text-white font-black text-base flex items-center justify-center shadow-md`}>
                    {rev.initials}
                  </div>
                  <div>
                    <h4 className="font-black text-sm sm:text-base text-[#0f382c] flex items-center gap-1.5">
                      <span>{rev.author}</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                    </h4>
                    <p className="text-[11px] text-gray-400 font-semibold">{rev.date} • Verified Visit</p>
                  </div>
                </div>

                <div className="flex text-amber-400 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed italic">
                "{rev.comment}"
              </p>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-semibold">
                <span className="flex items-center gap-1 text-emerald-800 font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" /> Google Maps Review
                </span>
                <span className="flex items-center gap-1 hover:text-gray-600 cursor-pointer">
                  <ThumbsUp className="w-3 h-3" /> {rev.likes} Helpful
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
