"use client";

import { useMemo } from "react";
import { CartItem } from "@/types";
import { Flower2, X } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onOrderComplete: () => void;
}

export default function CheckoutModal({
  isOpen,
  onClose,
  cart,
  onOrderComplete,
}: CheckoutModalProps) {
  const totalItemsCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  );

  const cartSubtotal = useMemo(
    () => cart.reduce((total, item) => total + item.product.price * item.quantity, 0),
    [cart]
  );

  const freeShippingThreshold = 60;
  const isFreeShipping = cartSubtotal >= freeShippingThreshold;
  const finalTotal = cartSubtotal + (isFreeShipping ? 0 : 9.5);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm"
      />
      <div className="relative bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl z-10 border border-stone-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-stone-100 text-stone-500"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-2">
            <Flower2 className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl text-stone-900">Sanctuary Checkout</h3>
          <p className="text-xs text-stone-500 mt-1">
            Complete your dawn harvest delivery reservation.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onOrderComplete();
          }}
          className="space-y-4"
        >
          <div className="bg-[#faf8f5] p-3 rounded-xl border border-stone-200 text-xs">
            <div className="flex justify-between font-semibold text-stone-900 mb-1">
              <span>Order Items:</span>
              <span>{totalItemsCount} blooms / kits</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>Total Amount Due:</span>
              <span className="font-bold text-rose-600">
                ${finalTotal.toFixed(2)}
              </span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">
              Recipient Full Name *
            </label>
            <input
              required
              type="text"
              placeholder="e.g. Maya Chen"
              className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-rose-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">
                Contact Email *
              </label>
              <input
                required
                type="email"
                placeholder="you@email.com"
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-rose-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">
                Phone (Delivery Updates) *
              </label>
              <input
                required
                type="tel"
                placeholder="(555) 000-0000"
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-rose-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">
              Delivery Address *
            </label>
            <input
              required
              type="text"
              placeholder="Street address, apartment, suite..."
              className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-rose-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">
              Special Delivery Instructions / Temple Blessing Note
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Leave in shaded porch area, or include a gift message..."
              className="w-full px-3.5 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-rose-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-rose-600 hover:bg-rose-700 text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
          >
            Confirm & Place Sacred Order
          </button>
        </form>
      </div>
    </div>
  );
}
