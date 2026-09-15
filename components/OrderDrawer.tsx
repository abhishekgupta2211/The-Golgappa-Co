"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { Product } from "./MenuSection";
import { X, ArrowRight, Minus, Plus, Check, ShoppingBag } from "lucide-react";
import confetti from "canvas-confetti";

export function OrderDrawer({
  isOpen,
  onClose,
  products,
  addOnsList,
  cart,
  setCart,
}: {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  addOnsList: any[];
  cart: { [id: string]: number };
  setCart: React.Dispatch<React.SetStateAction<{ [id: string]: number }>>;
}) {
  const { t } = useLanguage();
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [loading, setLoading] = useState(false);

  // Customization state
  const [spiceLevel, setSpiceLevel] = useState("Medium");
  const [paniPreference, setPaniPreference] = useState("Pudina");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  // Form state
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [pickupTime, setPickupTime] = useState("ASAP");
  const [notes, setNotes] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Confirmed Order result
  const [createdOrder, setCreatedOrder] = useState<any>(null);

  if (!isOpen) return null;

  const cartItemIds = Object.keys(cart).filter((id) => cart[id] > 0);
  const selectedProducts = products.filter((p) => cartItemIds.includes(p.id));

  // Calculate Subtotal & Total EXACTLY from cart state
  let itemsSubtotal = 0;
  selectedProducts.forEach((p) => {
    itemsSubtotal += p.price * cart[p.id];
  });

  let addOnsSubtotal = 0;
  selectedAddOns.forEach((addOnId) => {
    const addon = addOnsList.find((a) => a.id === addOnId);
    if (addon) addOnsSubtotal += addon.price;
  });

  const totalAmount = itemsSubtotal + addOnsSubtotal;

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) => {
      const newQty = (prev[id] || 0) + delta;
      if (newQty <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: newQty };
    });
  };

  const handleNextStep = () => {
    setErrorMsg("");
    if (step === 1) {
      if (cartItemIds.length === 0) {
        setErrorMsg("Please select at least 1 Golgappa plate!");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      if (!customerName.trim()) {
        setErrorMsg("Full Name is required.");
        return;
      }
      if (!/^[6-9]\d{9}$/.test(customerPhone.trim())) {
        setErrorMsg("Please enter a valid 10-digit Indian mobile number.");
        return;
      }
      setStep(4);
    }
  };

  const handleConfirmBooking = async () => {
    setLoading(true);
    setErrorMsg("");

    try {
      const orderItems = selectedProducts.map((p) => ({
        productId: p.id,
        name: p.name,
        price: p.price,
        quantity: cart[p.id],
        spiceLevel,
        paniPreference,
        addOnIds: selectedAddOns,
      }));

      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: customerName.trim(),
          customerPhone: customerPhone.trim(),
          pickupTime,
          notes,
          items: orderItems,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to place order");
      }

      setCreatedOrder(data.order);
      setStep(5);
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-xs">
      <div className="w-full max-w-lg bg-[#fffdf7] text-gray-900 h-full flex flex-col shadow-2xl relative">
        
        {/* Drawer Header */}
        <div className="bg-[#0f382c] text-white px-6 py-4 flex items-center justify-between border-b border-emerald-800">
          <div>
            <h3 className="font-extrabold text-lg text-amber-300 flex items-center gap-2 font-serif">
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              {t.cartTitle}
            </h3>
            <p className="text-xs text-emerald-200">
              {step === 1 && t.step1}
              {step === 2 && t.step2}
              {step === 3 && t.step3}
              {step === 4 && t.step4}
              {step === 5 && "Booking Confirmed!"}
            </p>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-emerald-900 text-emerald-200 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Drawer Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {errorMsg && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-3.5 rounded-xl text-xs font-bold">
              ⚠️ {errorMsg}
            </div>
          )}

          {/* STEP 1: Select Quantities */}
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="font-bold text-gray-800 text-sm uppercase tracking-wider">Select Golgappa Plates</h4>
              {products.map((prod) => {
                const qty = cart[prod.id] || 0;
                return (
                  <div key={prod.id} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-200 shadow-xs">
                    <div className="flex items-center gap-3">
                      <img src={prod.image} alt={prod.name} className="w-14 h-14 rounded-xl object-cover" />
                      <div>
                        <h5 className="font-bold text-sm text-[#0f382c]">{prod.name}</h5>
                        <p className="text-xs font-mono font-bold text-emerald-800">₹{prod.price}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-xl px-2 py-1">
                      <button onClick={() => updateQuantity(prod.id, -1)} className="p-1 text-emerald-800 font-black hover:bg-emerald-100 rounded">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-6 text-center font-bold text-sm text-[#0f382c]">{qty}</span>
                      <button onClick={() => updateQuantity(prod.id, 1)} className="p-1 text-emerald-800 font-black hover:bg-emerald-100 rounded">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* STEP 2: Customization */}
          {step === 2 && (
            <div className="space-y-6">
              {/* Spice Level */}
              <div>
                <label className="block font-bold text-sm text-[#0f382c] mb-2">{t.spicePreference}</label>
                <div className="grid grid-cols-2 gap-2">
                  {["Mild", "Medium", "Spicy", "Extra Spicy"].map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => setSpiceLevel(lvl)}
                      className={`p-3 rounded-xl border text-sm font-bold flex items-center justify-between transition ${
                        spiceLevel === lvl ? "bg-[#0f382c] text-amber-300 border-[#0f382c]" : "bg-white text-gray-700 border-gray-200"
                      }`}
                    >
                      <span>{lvl}</span>
                      {spiceLevel === lvl && <Check className="w-4 h-4 text-amber-400" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Paani Preference */}
              <div>
                <label className="block font-bold text-sm text-[#0f382c] mb-2">{t.paaniPreference}</label>
                <div className="grid grid-cols-2 gap-2">
                  {["Pudina", "Imli", "Khatta-Meetha", "Mix"].map((p) => (
                    <button
                      key={p}
                      onClick={() => setPaniPreference(p)}
                      className={`p-3 rounded-xl border text-sm font-bold flex items-center justify-between transition ${
                        paniPreference === p ? "bg-[#0f382c] text-amber-300 border-[#0f382c]" : "bg-white text-gray-700 border-gray-200"
                      }`}
                    >
                      <span>{p}</span>
                      {paniPreference === p && <Check className="w-4 h-4 text-amber-400" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add-ons */}
              <div>
                <label className="block font-bold text-sm text-[#0f382c] mb-2">{t.addOns}</label>
                <div className="space-y-2">
                  {addOnsList.map((addon) => {
                    const isChecked = selectedAddOns.includes(addon.id);
                    return (
                      <button
                        key={addon.id}
                        onClick={() => {
                          if (isChecked) {
                            setSelectedAddOns(selectedAddOns.filter((id) => id !== addon.id));
                          } else {
                            setSelectedAddOns([...selectedAddOns, addon.id]);
                          }
                        }}
                        className={`w-full p-3 rounded-xl border text-left flex items-center justify-between text-xs font-bold transition ${
                          isChecked ? "bg-emerald-50 border-emerald-600 text-emerald-950" : "bg-white border-gray-200 text-gray-700"
                        }`}
                      >
                        <div>
                          <p>{addon.name}</p>
                          <p className="text-[10px] text-gray-500 font-normal">{addon.description}</p>
                        </div>
                        <span className="font-mono text-emerald-800">+{addon.price}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Customer Information */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label className="block font-bold text-xs text-gray-700 uppercase mb-1">{t.fullName} *</label>
                <input
                  type="text"
                  placeholder={t.namePlaceholder}
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full p-3.5 rounded-xl border border-gray-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white"
                />
              </div>

              <div>
                <label className="block font-bold text-xs text-gray-700 uppercase mb-1">{t.phoneLabel} *</label>
                <input
                  type="tel"
                  placeholder={t.phonePlaceholder}
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  maxLength={10}
                  className="w-full p-3.5 rounded-xl border border-gray-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white"
                />
              </div>

              <div>
                <label className="block font-bold text-xs text-gray-700 uppercase mb-1">{t.pickupTime} *</label>
                <select
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full p-3.5 rounded-xl border border-gray-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white"
                >
                  <option value="ASAP">{t.asap}</option>
                  <option value="04:00 PM">04:00 PM</option>
                  <option value="05:00 PM">05:00 PM</option>
                  <option value="06:00 PM">06:00 PM</option>
                  <option value="07:00 PM">07:00 PM</option>
                  <option value="08:00 PM">08:00 PM</option>
                  <option value="09:00 PM">09:00 PM</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-xs text-gray-700 uppercase mb-1">{t.specialNotes}</label>
                <textarea
                  rows={2}
                  placeholder={t.notesPlaceholder}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-3.5 rounded-xl border border-gray-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white"
                />
              </div>
            </div>
          )}

          {/* STEP 4: Review Booking */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl text-xs space-y-1">
                <p className="font-bold text-amber-900 uppercase">Customer Details</p>
                <p><strong>Name:</strong> {customerName}</p>
                <p><strong>Mobile:</strong> {customerPhone}</p>
                <p><strong>Pickup:</strong> Today • {pickupTime}</p>
              </div>

              <div className="space-y-2">
                <p className="font-bold text-xs uppercase text-gray-500">Order Items</p>
                {selectedProducts.map((p) => (
                  <div key={p.id} className="flex justify-between text-xs font-semibold py-1 border-b border-gray-100">
                    <span>{p.name} × {cart[p.id]}</span>
                    <span className="font-mono">₹{p.price * cart[p.id]}</span>
                  </div>
                ))}
                <div className="text-[11px] text-emerald-800 font-medium">
                  Customization: Spice: {spiceLevel} • Paani: {paniPreference}
                </div>
              </div>

              <div className="bg-[#0f382c] text-white p-4 rounded-2xl space-y-2">
                <div className="flex justify-between text-xs text-emerald-200">
                  <span>{t.paymentMethod}</span>
                  <span className="font-bold text-amber-300">{t.payAtStall}</span>
                </div>
                <div className="flex justify-between text-lg font-black text-white pt-2 border-t border-emerald-800">
                  <span>{t.total}</span>
                  <span className="text-amber-300 font-mono">₹{totalAmount}</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: Confirmation Success */}
          {step === 5 && createdOrder && (
            <div className="text-center space-y-6 py-6">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <Check className="w-10 h-10 stroke-[3]" />
              </div>

              <h3 className="text-3xl font-black text-[#0f382c] font-serif">Booking Confirmed! 🎉</h3>
              <p className="text-sm text-gray-600 font-medium">Your Golgappe are waiting for you.</p>

              <div className="bg-[#0f382c] text-white p-6 rounded-3xl space-y-3 text-left shadow-lg border border-emerald-700">
                <div className="flex justify-between items-center border-b border-emerald-800 pb-2">
                  <span className="text-xs text-emerald-300 font-bold uppercase">ORDER ID</span>
                  <span className="font-mono font-black text-amber-300 text-lg">{createdOrder.orderNumber}</span>
                </div>
                <div className="flex justify-between text-xs text-emerald-200">
                  <span>CUSTOMER</span>
                  <span className="font-bold text-white">{createdOrder.customerName}</span>
                </div>
                <div className="flex justify-between text-xs text-emerald-200">
                  <span>PICKUP TIME</span>
                  <span className="font-bold text-white">{createdOrder.pickupTime}</span>
                </div>
                <div className="flex justify-between text-xs text-emerald-200">
                  <span>TOTAL AMOUNT</span>
                  <span className="font-mono font-black text-amber-300 text-base">₹{createdOrder.total}</span>
                </div>
                <div className="pt-2 text-[11px] text-amber-200 bg-emerald-950 p-2.5 rounded-xl text-center font-semibold">
                  💳 Payment will be made at the stall upon pickup.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer Buttons */}
        {step < 5 && (
          <div className="p-6 bg-white border-t border-gray-200 space-y-3">
            <div className="flex justify-between items-center font-bold text-[#0f382c]">
              <span>{t.total}:</span>
              <span className="text-2xl font-mono text-emerald-800 font-black">₹{totalAmount}</span>
            </div>

            {step < 4 ? (
              <button
                onClick={handleNextStep}
                className="w-full bg-[#0f382c] hover:bg-emerald-900 text-amber-300 font-black py-4 rounded-2xl shadow-lg flex items-center justify-center gap-2 transition text-sm uppercase tracking-wider"
              >
                <span>{t.continue}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                disabled={loading}
                onClick={handleConfirmBooking}
                className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 text-emerald-950 font-black py-4 rounded-2xl shadow-xl flex items-center justify-center gap-2 text-base uppercase tracking-wider transition"
              >
                {loading ? "Creating Order..." : t.confirmBooking}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
