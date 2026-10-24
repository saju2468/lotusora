"use client";


import Image from "next/image";
import { Product } from "@/types";
import { Clock, Droplets, ShoppingBag, SunMedium, X } from "lucide-react";

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity?: number) => void;
}

export default function QuickViewModal({
  product,
  onClose,
  onAddToCart,
}: QuickViewModalProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm"
      />
      <div className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl z-10 border border-stone-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-stone-700 hover:text-stone-950 transition-colors shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="relative h-64 sm:h-full bg-stone-100 min-h-[260px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase font-semibold text-rose-600 tracking-wider">
                {product.tag}
              </span>
              <h3 className="font-serif text-2xl text-stone-900 mt-1">
                {product.name}
              </h3>
              <p className="text-xs italic text-stone-500 mb-3">
                {product.botanical}
              </p>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                {product.description}
              </p>

              <div className="space-y-2 text-xs bg-stone-50 p-3 rounded-xl border border-stone-200/80 mb-4">
                <div className="flex items-center gap-2 text-stone-700">
                  <Droplets className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                  <span>
                    <strong>Scent:</strong> {product.scent}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-stone-700">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>
                    <strong>Harvest:</strong> {product.harvestNote}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-stone-700">
                  <SunMedium className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>
                    <strong>Care:</strong> {product.careTip}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
              <span className="font-serif text-2xl font-semibold text-stone-900">
                ${product.price.toFixed(2)}
              </span>
              <button
                onClick={() => {
                  onAddToCart(product, 1);
                  onClose();
                }}
                className="px-6 py-2.5 bg-stone-900 hover:bg-rose-600 text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-md flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Bag</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
