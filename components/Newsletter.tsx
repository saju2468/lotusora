"use client";

import { useState } from "react";
import { Gift } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <section className="py-16 bg-[#1a2d24] text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="w-12 h-12 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center mx-auto mb-4">
          <Gift className="w-6 h-6" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-light mb-2">
          Join the Lotusora Circle
        </h2>
        <p className="text-xs sm:text-sm text-stone-300 max-w-md mx-auto mb-6">
          Receive 10% off your initial dawn harvest order, plus our lunar bloom calendar and seasonal water gardening advice.
        </p>

        {subscribed ? (
          <div className="bg-white/10 border border-white/20 p-4 rounded-full max-w-md mx-auto text-xs text-rose-200 font-medium">
            ✨ Welcome! Use promo code <span className="font-bold underline">LOTUS10</span> for 10% off at checkout.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-full text-xs bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
            >
              Claim 10% Off
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
