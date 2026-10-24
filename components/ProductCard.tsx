"use client";

import Image from "next/image";
import { Product } from "@/types";
import { Droplets, Heart, Info, Plus, Star } from "lucide-react";

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (id: string) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, quantity?: number) => void;
}

export default function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      {/* Image Container */}
      <div className="relative h-72 w-full overflow-hidden bg-stone-100">
        <Image
          src={product.image}
          alt={product.name}
          width={1000}
          height={1000}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badge */}
        <div className="absolute top-3 left-3 bg-stone-900/85 backdrop-blur-md text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md">
          {product.tag}
        </div>

        {/* Wishlist toggle */}
        <button
          onClick={() => onToggleWishlist(product.id)}
          className="p-2 rounded-full bg-white/90 backdrop-blur-sm text-stone-700 hover:text-rose-600 transition-all shadow-sm absolute top-3 right-3"
          aria-label="Save to Wishlist"
        >
          <Heart
            className={`w-4 h-4 ${
              isWishlisted ? "fill-rose-500 text-rose-500" : ""
            }`}
          />
        </button>

        {/* Quick view button overlay */}
        <button
          onClick={() => onQuickView(product)}
          className="absolute bottom-3 inset-x-4 bg-white/95 hover:bg-white text-stone-900 py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-1.5 backdrop-blur-sm"
        >
          <Info className="w-3.5 h-3.5 text-rose-500" />
          <span>Botanical Details & Care</span>
        </button>
      </div>

      {/* Product Details */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-stone-400 mb-1">
            <span className="italic">{product.botanical}</span>
            <div className="flex items-center gap-1 text-amber-500 font-medium">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{product.rating}</span>
              <span className="text-stone-300">({product.reviewsCount})</span>
            </div>
          </div>

          <h3 className="font-serif text-xl font-medium text-stone-900 group-hover:text-rose-600 transition-colors">
            {product.name}
          </h3>

          <p className="text-xs text-stone-500 line-clamp-2 mt-2 leading-relaxed">
            {product.description}
          </p>

          <div className="mt-3 flex items-center gap-1.5 text-[11px] text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md w-fit">
            <Droplets className="w-3 h-3 text-emerald-600" />
            <span>{product.stems}</span>
          </div>
        </div>

        {/* Price and Add to Cart */}
        <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
          <div>
            <span className="text-xs text-stone-400 block">Price</span>
            <span className="text-xl font-serif font-semibold text-stone-900">
              ${product.price.toFixed(2)}
            </span>
          </div>

          <button
            onClick={() => onAddToCart(product, 1)}
            className="inline-flex items-center gap-2 bg-stone-900 hover:bg-rose-600 text-white px-4 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add to Bag</span>
          </button>
        </div>
      </div>
    </div>
  );
}
