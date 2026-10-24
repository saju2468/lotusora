"use client";

import { useState } from "react";
import { Check, PhoneCall } from "lucide-react";

export default function WholesaleInquiry() {
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  return (
    <section id="wholesale" className="py-20 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-rose-600 font-semibold block mb-2">
              Special Occasions & Sacred Spaces
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-4">
              Temple Offerings, Weddings & Bulk Orders
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed mb-6">
              Planning a grand Buddhist, Hindu, or spiritual ceremony, luxury botanical wedding, or high-end spa display? 
              Lotusora supplies bulk dawn-harvested lotus blooms and custom aquatic displays with verified delivery scheduling.
            </p>

            <div className="grid grid-cols-2 gap-4 text-xs text-stone-700 mb-8">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <h4 className="font-semibold text-stone-900 mb-1">Guaranteed Dawn Delivery</h4>
                <p className="text-stone-500">Scheduled arrival timed for auspicious morning ceremonies.</p>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <h4 className="font-semibold text-stone-900 mb-1">Volume Pricing</h4>
                <p className="text-stone-500">Tiered pricing for orders exceeding 50, 100, or 500 stems.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-stone-600">
              <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-medium text-stone-900">Direct Farm Concierge</span>
                <span className="text-xs text-stone-500">+1 (800) LOTUS-ORA • concierge@lotusora.com</span>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-[#faf8f5] p-8 rounded-3xl border border-stone-200 shadow-sm">
            {inquirySubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-stone-900">Inquiry Received</h3>
                <p className="text-xs text-stone-600 max-w-sm mx-auto">
                  Thank you! Our farm concierge will review your event date and stem requirements, and reach out within 4 business hours.
                </p>
                <button
                  onClick={() => setInquirySubmitted(false)}
                  className="text-xs text-rose-600 font-semibold uppercase tracking-wider hover:underline"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setInquirySubmitted(true);
                }}
                className="space-y-4"
              >
                <h3 className="font-serif text-xl text-stone-900">Request Bulk Harvest Quote</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Maya Chen"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="you@example.com"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-rose-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Event / Delivery Date *
                    </label>
                    <input
                      required
                      type="date"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Estimated Stems Quantity
                    </label>
                    <select className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-rose-500">
                      <option>25 - 50 Stems</option>
                      <option>50 - 150 Stems</option>
                      <option>150 - 500 Stems</option>
                      <option>500+ Stems (Temple / Gala)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Event Details & Specific Flower Varieties
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your ceremony, preferred colors (Pink, White, Blue), and any custom packaging requirements..."
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-rose-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-stone-900 hover:bg-rose-600 text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
                >
                  Send Concierge Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
