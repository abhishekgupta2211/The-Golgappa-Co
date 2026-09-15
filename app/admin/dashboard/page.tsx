"use client";

import React, { useEffect, useState, useRef } from "react";
import { Bell, CheckCircle, XCircle, Clock, ShoppingBag, DollarSign, Filter, RefreshCw, Volume2, Power, Store } from "lucide-react";
import Link from "next/link";

export default function AdminDashboardPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  const [newOrderAlert, setNewOrderAlert] = useState<any>(null);
  const [isShopOpen, setIsShopOpen] = useState(true);

  const fetchOrders = async () => {
    try {
      const res = await fetch(`/api/orders?status=${selectedFilter}`);
      const data = await res.json();
      if (data.success) {
        setOrders(data.orders || []);
      }
    } catch (err) {
      console.error("Failed to load orders", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchSettings = async () => {
    try {
      const res = await fetch("/api/admin/settings");
      const data = await res.json();
      if (data.success && data.settings) {
        setIsShopOpen(data.settings.isOpen);
      }
    } catch (err) {
      console.error("Failed to load settings", err);
    }
  };

  useEffect(() => {
    fetchOrders();
    fetchSettings();

    // Listen for Real-Time SSE updates from server
    const eventSource = new EventSource("/api/admin/sse");
    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === "NEW_ORDER") {
          setNewOrderAlert(data.order);
          // Play notification sound
          const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3");
          audio.play().catch(() => {});
          fetchOrders();
        } else if (data.type === "ORDER_UPDATED") {
          fetchOrders();
        }
      } catch (err) {
        console.error("SSE Parse Error", err);
      }
    };

    return () => {
      eventSource.close();
    };
  }, [selectedFilter]);

  const updateStatus = async (orderId: string, status: string, cancelReason?: string) => {
    try {
      const res = await fetch(`/api/orders/${orderId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderStatus: status, cancelReason }),
      });
      const data = await res.json();
      if (data.success) {
        fetchOrders();
      }
    } catch (err) {
      console.error("Failed to update status", err);
    }
  };

  const toggleShopStatus = async () => {
    try {
      const res = await fetch("/api/admin/settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isOpen: !isShopOpen }),
      });
      const data = await res.json();
      if (data.success) {
        setIsShopOpen(!isShopOpen);
      }
    } catch (err) {
      console.error("Failed to toggle shop status", err);
    }
  };

  // Metrics calculation
  const totalOrders = orders.length;
  const newOrdersCount = orders.filter((o) => o.orderStatus === "NEW").length;
  const preparingCount = orders.filter((o) => o.orderStatus === "PREPARING").length;
  const readyCount = orders.filter((o) => o.orderStatus === "READY").length;
  const completedCount = orders.filter((o) => o.orderStatus === "COMPLETED").length;
  const totalRevenue = orders
    .filter((o) => o.orderStatus !== "CANCELLED")
    .reduce((acc, o) => acc + o.total, 0);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col">
      
      {/* Top Admin Header */}
      <header className="bg-[#0f382c] text-white py-4 px-6 shadow-md flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-400 text-emerald-950 flex items-center justify-center font-black text-xl">
            🧆
          </div>
          <div>
            <h1 className="font-extrabold text-lg text-amber-300">Owner Dashboard</h1>
            <p className="text-xs text-emerald-200">THE GOLGAPPA CO. • Real-time Live Order Console</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Real-time shop status toggle */}
          <button
            onClick={toggleShopStatus}
            className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 transition ${
              isShopOpen ? "bg-emerald-600 text-white" : "bg-red-600 text-white"
            }`}
          >
            <Power className="w-4 h-4" />
            <span>{isShopOpen ? "SHOP OPEN 🟢" : "SHOP CLOSED 🔴"}</span>
          </button>
        </div>
      </header>

      {/* Main Admin Console Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 space-y-6">
        
        {/* Real-time Alert Toast Banner */}
        {newOrderAlert && (
          <div className="bg-amber-400 text-emerald-950 p-4 rounded-2xl shadow-xl flex items-center justify-between animate-bounce">
            <div className="flex items-center gap-3">
              <Bell className="w-6 h-6 text-emerald-950" />
              <div>
                <h4 className="font-black text-base">🔔 NEW ORDER RECEIVED!</h4>
                <p className="text-xs font-semibold">
                  {newOrderAlert.customerName} ({newOrderAlert.orderNumber}) • ₹{newOrderAlert.total} • Pickup: {newOrderAlert.pickupTime}
                </p>
              </div>
            </div>
            <button
              onClick={() => setNewOrderAlert(null)}
              className="bg-emerald-950 text-white px-4 py-1.5 rounded-xl font-bold text-xs"
            >
              DISMISS
            </button>
          </div>
        )}

        {/* Analytics Counter Cards */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-xs">
            <p className="text-xs font-bold text-gray-400 uppercase">Total Orders</p>
            <p className="text-2xl font-black text-[#0f382c]">{totalOrders}</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 shadow-xs">
            <p className="text-xs font-bold text-amber-700 uppercase">🔴 New Orders</p>
            <p className="text-2xl font-black text-amber-900">{newOrdersCount}</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-2xl border border-purple-200 shadow-xs">
            <p className="text-xs font-bold text-purple-700 uppercase">🟣 Preparing</p>
            <p className="text-2xl font-black text-purple-900">{preparingCount}</p>
          </div>
          <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200 shadow-xs">
            <p className="text-xs font-bold text-emerald-700 uppercase">🟢 Ready</p>
            <p className="text-2xl font-black text-emerald-900">{readyCount}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-2xl border border-gray-300 shadow-xs">
            <p className="text-xs font-bold text-gray-600 uppercase">⚫ Completed</p>
            <p className="text-2xl font-black text-gray-800">{completedCount}</p>
          </div>
          <div className="bg-emerald-900 text-white p-4 rounded-2xl shadow-md">
            <p className="text-xs font-bold text-emerald-300 uppercase">Total Sales</p>
            <p className="text-2xl font-black text-amber-300 font-mono">₹{totalRevenue}</p>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-gray-200">
          <div className="flex items-center gap-2 overflow-x-auto">
            {["ALL", "NEW", "ACCEPTED", "PREPARING", "READY", "COMPLETED", "CANCELLED"].map((st) => (
              <button
                key={st}
                onClick={() => setSelectedFilter(st)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase transition ${
                  selectedFilter === st ? "bg-[#0f382c] text-amber-300" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
          <button onClick={fetchOrders} className="p-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-gray-700">
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>

        {/* Orders Queue Grid */}
        {loading ? (
          <div className="py-12 text-center text-gray-400 font-bold">Loading orders...</div>
        ) : orders.length === 0 ? (
          <div className="py-12 text-center bg-white rounded-3xl border border-gray-200 text-gray-500 font-medium">
            No orders found for selected filter.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {orders.map((ord) => (
              <div
                key={ord.id}
                className={`bg-white rounded-3xl border shadow-lg p-6 flex flex-col justify-between space-y-4 ${
                  ord.orderStatus === "NEW" ? "border-amber-400 ring-2 ring-amber-400/50" : "border-gray-200"
                }`}
              >
                <div>
                  {/* Order Header */}
                  <div className="flex justify-between items-start border-b border-gray-100 pb-3">
                    <div>
                      <span className="font-mono font-black text-lg text-[#0f382c]">{ord.orderNumber}</span>
                      <p className="text-xs font-bold text-gray-700">{ord.customerName} • {ord.customerPhone}</p>
                    </div>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-900 font-black text-xs uppercase rounded-full">
                      {ord.orderStatus}
                    </span>
                  </div>

                  {/* Pickup & Items details */}
                  <div className="py-3 space-y-2 text-xs">
                    <p className="text-gray-500"><strong>Pickup:</strong> {ord.pickupTime}</p>
                    <div className="bg-gray-50 p-3 rounded-xl space-y-1">
                      {ord.items.map((item: any) => (
                        <div key={item.id} className="flex justify-between font-bold text-gray-800">
                          <span>{item.product?.name} × {item.quantity}</span>
                          <span className="font-mono">₹{item.totalPrice}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-[11px] text-emerald-800 font-semibold">
                      Payment: <strong className="text-amber-700">{ord.paymentMethod} ({ord.paymentStatus})</strong>
                    </p>
                  </div>
                </div>

                {/* Total & Status Transition Buttons */}
                <div className="pt-2 border-t border-gray-100 space-y-3">
                  <div className="flex justify-between items-center font-black text-[#0f382c]">
                    <span>Total:</span>
                    <span className="text-xl font-mono text-emerald-800">₹{ord.total}</span>
                  </div>

                  {/* Status update triggers */}
                  <div className="grid grid-cols-2 gap-2">
                    {ord.orderStatus === "NEW" && (
                      <>
                        <button
                          onClick={() => updateStatus(ord.id, "ACCEPTED")}
                          className="bg-emerald-700 hover:bg-emerald-800 text-white py-2 rounded-xl text-xs font-bold"
                        >
                          ACCEPT ORDER
                        </button>
                        <button
                          onClick={() => updateStatus(ord.id, "CANCELLED", "Rejected by owner")}
                          className="bg-red-600 hover:bg-red-700 text-white py-2 rounded-xl text-xs font-bold"
                        >
                          REJECT ORDER
                        </button>
                      </>
                    )}

                    {ord.orderStatus === "ACCEPTED" && (
                      <button
                        onClick={() => updateStatus(ord.id, "PREPARING")}
                        className="col-span-2 bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-xl text-xs font-bold"
                      >
                        MARK PREPARING
                      </button>
                    )}

                    {ord.orderStatus === "PREPARING" && (
                      <button
                        onClick={() => updateStatus(ord.id, "READY")}
                        className="col-span-2 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-xl text-xs font-bold"
                      >
                        MARK READY FOR PICKUP
                      </button>
                    )}

                    {ord.orderStatus === "READY" && (
                      <button
                        onClick={() => updateStatus(ord.id, "COMPLETED")}
                        className="col-span-2 bg-[#0f382c] hover:bg-emerald-950 text-amber-300 py-2 rounded-xl text-xs font-bold"
                      >
                        MARK COMPLETED & PAID
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </main>

    </div>
  );
}
