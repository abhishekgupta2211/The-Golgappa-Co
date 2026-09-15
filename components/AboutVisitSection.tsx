"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";
import { MapPin, Phone, Clock, Navigation, CheckCircle2, ShieldCheck } from "lucide-react";

export function AboutVisitSection() {
  const { t } = useLanguage();

  return (
    <div className="w-full space-y-0">
      
      {/* 2026 About Legacy Section */}
      <section id="about" className="py-24 bg-[#020705] text-white border-t border-emerald-900/40 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="bg-[#091f18] border border-amber-400/40 text-amber-300 font-extrabold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest">
                OUR LEGACY & STORY
              </span>

              <h2 className="text-4xl sm:text-6xl font-black font-serif tracking-tight text-amber-300 uppercase leading-none">
                {t.aboutHeading}
              </h2>

              <p className="text-lg text-emerald-100/90 leading-relaxed font-medium">
                {t.aboutPara1}
              </p>

              <p className="text-base text-emerald-200/80 leading-relaxed font-normal">
                {t.aboutPara2}
              </p>

              <div className="p-6 bg-[#091f18]/90 rounded-3xl border border-emerald-700/60 flex items-center gap-5 shadow-2xl backdrop-blur-xl">
                <div className="w-14 h-14 rounded-full bg-amber-400 text-emerald-950 flex items-center justify-center font-black text-2xl shrink-0">
                  👨‍🍳
                </div>
                <div>
                  <h4 className="font-black font-serif text-amber-300 text-xl">{t.ownerName}</h4>
                  <p className="text-xs text-emerald-300 font-semibold mt-0.5">
                    Founder & Head Chef • Direct WhatsApp: <strong>9369610213</strong>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-2xl bg-[#091f18]"
            >
              <img
                src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80"
                alt="Mahesh Kumar Gupta Preparation"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020705] via-transparent to-transparent opacity-80" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2026 Visit Stall & Location Section */}
      <section id="visit" className="py-24 bg-[#030907] text-white border-t border-emerald-900/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-amber-300 font-black uppercase text-xs bg-[#091f18] px-4 py-1.5 rounded-full border border-amber-400/40">
              FIND OUR LIVE STALL
            </span>
            <h2 className="text-4xl sm:text-5xl font-black font-serif uppercase tracking-tight text-white">
              {t.visitHeading}
            </h2>
            <p className="text-emerald-200/80 text-sm sm:text-base font-medium">
              {t.visitSub}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Location Details Box */}
            <div className="lg:col-span-5 bg-[#091f18]/90 p-8 rounded-3xl border border-emerald-700/60 shadow-2xl backdrop-blur-xl flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-amber-300 text-base uppercase font-serif">Stall Address</h4>
                    <p className="text-xs text-emerald-100 font-medium mt-1">Near Central Park, Main Market Street</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-amber-300 text-base uppercase font-serif">Stall Timings</h4>
                    <p className="text-xs text-emerald-100 font-medium mt-1">Everyday 2:00 PM – 10:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-amber-300 text-base uppercase font-serif">Direct Call / WhatsApp</h4>
                    <p className="text-xs text-emerald-100 font-medium mt-1">+91 9369610213 (Mahesh Kumar Gupta)</p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/jm4LXsy1NSKZ38P17?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-emerald-950 font-black text-xs sm:text-sm py-4 rounded-2xl shadow-xl transition flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <Navigation className="w-4 h-4" />
                <span>OPEN DIRECTIONS IN GOOGLE MAPS</span>
              </a>
            </div>

            {/* Map Embed Container */}
            <div className="lg:col-span-7 rounded-3xl overflow-hidden border-2 border-emerald-700/60 shadow-2xl min-h-[350px]">
              <iframe
                title="Stall Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.562211904791!2d77.2289!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjg_MTgnNTAuMCJOIDc3wrAxMyc0NC4wIkU!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
