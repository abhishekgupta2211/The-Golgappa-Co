"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { AboutVisitSection } from "@/components/AboutVisitSection";
import { OrderDrawer } from "@/components/OrderDrawer";

export default function AboutPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fffdf7] text-gray-900 flex flex-col font-sans">
      <Navbar onOpenOrderModal={() => setDrawerOpen(false)} cartCount={0} />

      <main className="flex-1">
        <AboutVisitSection />
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
