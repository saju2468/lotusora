"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface CuratedCollectionsProps {
  onSelectCategory: (category: string) => void;
}

export default function CuratedCollections({
  onSelectCategory,
}: CuratedCollectionsProps) {
  const handleCollectionClick = (cat: string) => {
    onSelectCategory(cat);
    const el = document.getElementById("catalog");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 bg-[#f5f0eb] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-rose-600 font-semibold block mb-2">
            Sacred Collections
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 font-normal">
            Every Flower Tells a Story of Rebirth
          </h2>
          <div className="w-16 h-[2px] bg-rose-400 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div
            onClick={() => handleCollectionClick("blooms")}
            className="cursor-pointer group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200/60 p-6 flex flex-col justify-between"
          >
            <div className="relative h-56 w-full rounded-xl overflow-hidden mb-6">
              <Image
                src="/images/lotus-bundle.jpg"
                alt="Fresh cut pink lotus flowers"
                width={1000}
                height={1000}
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-md text-white text-[11px] px-3 py-1 rounded-full uppercase tracking-wider font-medium">
                Cut Stems
              </div>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-stone-900 mb-2 group-hover:text-rose-600 transition-colors">
                Fresh Cut Blooms
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                Delicate buds cut at sunrise with closed petals that bloom
                gracefully in room-temperature water. Perfect for home decor and
                ceremonies.
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-rose-600 group-hover:gap-2.5 transition-all">
                Shop Fresh Stems <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Feature 2 */}
          <div
            onClick={() => handleCollectionClick("plants")}
            className="cursor-pointer group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200/60 p-6 flex flex-col justify-between"
          >
            <div className="relative h-56 w-full rounded-xl overflow-hidden mb-6">
              <Image
                src="/images/bowl-garden.jpg"
                alt="Living miniature lotus in ceramic bowl"
                width={1000}
                height={1000}
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-emerald-900/80 backdrop-blur-md text-emerald-100 text-[11px] px-3 py-1 rounded-full uppercase tracking-wider font-medium">
                Living Flora
              </div>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-stone-900 mb-2 group-hover:text-rose-600 transition-colors">
                Patio & Water Bowl Kits
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                Grow your own tranquil water garden. Our dormant and sprouted
                tubers adapt effortlessly to sunny patios, balconies, and
                tabletop bowls.
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-rose-600 group-hover:gap-2.5 transition-all">
                Explore Living Plants <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Feature 3 */}
          <div
            onClick={() => handleCollectionClick("tea")}
            className="cursor-pointer group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200/60 p-6 flex flex-col justify-between"
          >
            <div className="relative h-56 w-full rounded-xl overflow-hidden mb-6">
              <Image
                src="/images/lotus-tea.jpg"
                alt="Whole dried lotus blossom tea brewing"
                width={1000}
                height={1000}
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-amber-900/80 backdrop-blur-md text-amber-100 text-[11px] px-3 py-1 rounded-full uppercase tracking-wider font-medium">
                Wellness Infusion
              </div>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-stone-900 mb-2 group-hover:text-rose-600 transition-colors">
                Artisanal Blossom Teas
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                100% whole golden lotus flowers that unfurl in boiling water.
                Renowned for calming the mind, relaxing tension, and deep
                peaceful sleep.
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-rose-600 group-hover:gap-2.5 transition-all">
                Taste The Infusions <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
