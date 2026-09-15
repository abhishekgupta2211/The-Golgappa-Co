"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { OrderDrawer } from "@/components/OrderDrawer";

export default function VisitPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fffdf7] text-gray-900 flex flex-col font-sans">
      <Navbar onOpenOrderModal={() => setDrawerOpen(true)} cartCount={0} />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-emerald-800 font-extrabold uppercase text-xs bg-emerald-100 px-4 py-1.5 rounded-full">
            VISIT OUR STALL
          </span>
          <h1 className="text-4xl font-black text-[#0f382c]">Stall Location & Details</h1>
          <p className="text-gray-600 text-sm font-medium">
            Visit Mahesh Kumar Gupta's stall for fresh, hot, crispy Golgappe!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-[#0f382c] text-white p-8 rounded-3xl shadow-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-amber-300">THE GOLGAPPA CO.</h3>
              
              <div className="space-y-4 text-sm font-medium text-emerald-100">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Near Central Park, Main Market Street</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                  <a href="tel:9369610213" className="font-bold text-amber-300 hover:underline">+91 9369610213</a>
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

          <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-gray-100 min-h-[400px]">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.062299710323!2d77.2289!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjg8MTInNTAuMCJOIDc3wrAxMyc0NC4wIkU!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
            />
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
