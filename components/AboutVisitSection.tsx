"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import { Award, ShieldCheck, Sparkles, MapPin, Phone, Clock } from "lucide-react";

export function AboutVisitSection() {
  const { t } = useLanguage();

  return (
    <>
      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-[#0a271f] to-[#0f382c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="bg-amber-400/20 text-amber-300 font-extrabold text-xs px-4 py-1.5 rounded-full border border-amber-400/40">
                OUR STORY
              </span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-amber-300">
                {t.aboutHeading}
              </h2>
              <p className="text-lg text-emerald-100/90 leading-relaxed">
                {t.aboutPara1}
              </p>
              <p className="text-base text-emerald-200/80 leading-relaxed">
                {t.aboutPara2}
              </p>

              <div className="p-6 bg-emerald-950/80 rounded-2xl border border-emerald-700/60 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-amber-400 text-emerald-950 flex items-center justify-center font-black text-2xl">
                  👨‍🍳
                </div>
                <div>
                  <h4 className="font-bold text-amber-300 text-lg">{t.ownerName}</h4>
                  <p className="text-xs text-emerald-300 font-semibold">Founder & Head Chef • Established 2004</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-400/20">
              <img
                src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80"
                alt="Golgappa Street Food Prep"
                className="w-full h-auto object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Visit Us / Google Maps Section */}
      <section id="visit" className="py-20 bg-[#fffdf7] text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-emerald-800 font-extrabold uppercase text-xs bg-emerald-100 px-4 py-1.5 rounded-full">
              FIND OUR STALL
            </span>
            <h2 className="text-4xl font-black text-[#0f382c]">{t.navVisit}</h2>
            <p className="text-gray-600 text-sm font-medium">
              Visit our iconic stall for fresh, hot, crispy Golgappe served straight from the counter!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Contact Information Card */}
            <div className="bg-[#0f382c] text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-amber-300">{t.brandName}</h3>
                
                <div className="space-y-4 text-sm font-medium text-emerald-100">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span>Main Market Street, Near Central Park, Food Street</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>+91 9876543210</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>Open Everyday: 03:00 PM - 10:00 PM</span>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/jm4LXsy1NSKZ38P17?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-amber-400 hover:bg-amber-300 text-emerald-950 font-black py-4 rounded-2xl text-center shadow-lg transition flex items-center justify-center gap-2"
              >
                <MapPin className="w-5 h-5" />
                <span>Open in Google Maps</span>
              </a>
            </div>

            {/* Embedded Interactive Map Card */}
            <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-gray-100 min-h-[350px]">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.062299710323!2d77.2289!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjg8MTInNTAuMCJOIDc3wrAxMyc0NC4wIkU!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                allowFullScreen
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
