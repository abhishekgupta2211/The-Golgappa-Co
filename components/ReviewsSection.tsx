"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink, CheckCircle2, ThumbsUp, ShieldCheck, Sparkles } from "lucide-react";

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
      bgColor: "bg-[#0f382c]",
      likes: 14,
      verified: true,
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
    <section id="reviews" className="py-24 w-full bg-[#faf7f2] text-gray-900 border-t border-b border-emerald-900/10 relative">
      
      <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-emerald-900 text-amber-300 border border-emerald-800 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>GOOGLE MAPS VERIFIED REVIEWS</span>
          </motion.div>

          <h2 className="text-4xl sm:text-6xl font-black font-serif uppercase tracking-tight text-[#0f382c]">
            Loved by 10,000+ Foodies
          </h2>
          <p className="text-gray-600 font-medium text-base sm:text-lg">
            Real customer ratings & feedback for Mahesh Kumar Gupta at Near Central Park!
          </p>
        </div>

        {/* Light Theme Big Google Rating Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-7xl mx-auto bg-[#0f382c] border-2 border-emerald-800 text-white p-6 sm:p-10 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-400 text-emerald-950 font-black text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
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
                <p className="text-xs text-emerald-100 font-bold mt-1">Based on 520+ Google Maps Customer Reviews</p>
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
            className="w-full md:w-auto bg-amber-400 hover:bg-amber-300 text-emerald-950 font-black text-xs sm:text-sm px-7 py-4 rounded-2xl shadow-xl transition flex items-center justify-center gap-2.5 shrink-0 uppercase tracking-wider"
          >
            <span>Open Google Maps Reviews</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Light Theme Equal Height Reviews Grid */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {filteredReviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white border-2 border-emerald-900/10 p-6 sm:p-7 rounded-3xl shadow-lg flex flex-col justify-between h-full group hover:shadow-2xl hover:border-emerald-800 transition-all duration-300 space-y-4"
            >
              <div className="space-y-4 flex-1 flex flex-col justify-between">
                
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-full ${rev.bgColor} text-white font-black text-base flex items-center justify-center shadow-md`}>
                      {rev.initials}
                    </div>
                    <div>
                      <h4 className="font-black text-sm sm:text-base text-[#0f382c] flex items-center gap-1.5 font-serif">
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

              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500 font-semibold mt-auto">
                <span className="flex items-center gap-1 text-emerald-800 font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" /> Google Maps Review
                </span>
                <span className="flex items-center gap-1 text-amber-700 font-bold">
                  <ThumbsUp className="w-3.5 h-3.5" /> {rev.likes} Helpful
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
