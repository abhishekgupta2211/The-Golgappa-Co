"use client";

import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { MenuSection, Product } from "@/components/MenuSection";
import { OrderDrawer } from "@/components/OrderDrawer";
import { useLanguage } from "@/components/LanguageContext";

export default function MenuPage() {
  const { t } = useLanguage();
  const [products, setProducts] = useState<Product[]>([]);
  const [addOns, setAddOns] = useState<any[]>([]);
  const [cart, setCart] = useState<{ [id: string]: number }>({});
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    fetch("/api/menu")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProducts(data.products || []);
          setAddOns(data.addOns || []);
        }
      });
  }, []);

  const totalCartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  const handleAddToCart = (prod: Product) => {
    setCart((prev) => ({
      ...prev,
      [prod.id]: (prev[prod.id] || 0) + 1,
    }));
    setDrawerOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fffdf7] text-gray-900 flex flex-col font-sans">
      <Navbar onOpenOrderModal={() => setDrawerOpen(true)} cartCount={totalCartCount} />
      
      <main className="flex-1 py-12">
        <MenuSection
          products={products}
          onAddToCart={handleAddToCart}
          cart={cart}
        />
      </main>

      <OrderDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        products={products}
        addOnsList={addOns}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
}
