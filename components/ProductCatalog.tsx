"use client";

import { useMemo } from "react";
import { Product } from "@/types";
import ProductCard from "@/components/ProductCard";
import { Flower2, Search } from "lucide-react";

interface ProductCatalogProps {
  products: Product[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  wishlist: string[];
  onToggleWishlist: (id: string) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, quantity?: number) => void;
}

export default function ProductCatalog({
  products,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  wishlist,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
}: ProductCatalogProps) {
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory =
        activeCategory === "all" || p.category === activeCategory;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.botanical.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, activeCategory, searchQuery]);

  const categories = [
    { id: "all", label: "All Harvests" },
    { id: "blooms", label: "Fresh Cut Blooms" },
    { id: "plants", label: "Living Water Plants" },
    { id: "tea", label: "Lotus Tea & Herbs" },
    { id: "ceremony", label: "Ceremonial & Bulk" },
  ];

  return (
    <section id="catalog" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-rose-600 font-semibold block mb-2">
            Farm-to-Doorstep
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-stone-900">
            The Harvest Catalogue
          </h2>
          <p className="text-stone-500 text-sm mt-1 max-w-xl">
            Select your blooms. All fresh stems are packaged with individual moisture reservoirs ensuring pristine condition upon arrival.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search lotus, tea, tubers..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-stone-300 rounded-full focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all ${
              activeCategory === cat.id
                ? "bg-stone-900 text-white shadow-md"
                : "bg-white text-stone-600 border border-stone-200 hover:border-stone-300 hover:bg-stone-50"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-stone-300 p-8">
          <Flower2 className="w-12 h-12 text-stone-300 mx-auto mb-3" />
          <h3 className="font-serif text-lg text-stone-700">No blooms match your search</h3>
          <p className="text-xs text-stone-500 mt-1">Try resetting the filter or search query.</p>
          <button
            onClick={() => {
              onCategoryChange("all");
              onSearchChange("");
            }}
            className="mt-4 px-4 py-2 bg-rose-50 text-rose-600 rounded-full text-xs font-semibold uppercase"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishlist.includes(product.id)}
              onToggleWishlist={onToggleWishlist}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}
    </section>
  );
}
