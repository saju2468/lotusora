
import Image from "next/image";
import { ArrowRight, Leaf, Truck, Sprout, HeartHandshake } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#faf6ef] text-stone-900 min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] flex flex-col justify-between select-text">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/lotus-hero-bg.jpg"
          alt="Beautiful blooming pink lotus flower on water with morning sunlight"
          fill
          priority
          quality={95}
          className="object-cover object-[72%_center] sm:object-right lg:object-center select-none"
        />
        {/* Subtle gradient overlay to keep text crystal-clear while blending naturally */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf6ef] via-[#faf6ef]/90 sm:via-[#faf6ef]/70 md:via-[#faf6ef]/20 to-transparent z-1 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf6ef]/85 via-transparent to-transparent sm:hidden z-1 pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 flex-1 flex flex-col justify-center w-full">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Top Category Tagline */}
          <div className="mb-3 sm:mb-4">
            <span className="text-[#284f3a] text-xs sm:text-[13px] font-semibold tracking-[0.24em] uppercase">
              BRING NATURE HOME
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal leading-[1.06] tracking-tight">
            <span className="block text-[#173b28] font-normal">Beautiful</span>
            <span className="block text-[#dc5872] mt-0.5 sm:mt-1.5 font-normal">
              Lotus Plants
            </span>
          </h1>

          {/* Description */}
          <p className="text-stone-700 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-lg mt-4 sm:mt-5 font-normal">
            Explore a wide range of premium lotus plants for your home, garden and ponds.
            Fresh, healthy and carefully grown in Kerala.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mt-7 sm:mt-8">
            <a
              href="#catalog"
              className="group inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#dc5872] hover:bg-[#c94861] active:bg-[#b83c54] text-white text-sm font-medium shadow-md shadow-rose-900/15 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Shop Lotus Plants</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <a
              href="#collections"
              className="inline-flex items-center justify-center px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white/70 hover:bg-white text-[#173b28] border border-[#173b28]/45 hover:border-[#173b28]/80 text-sm font-medium backdrop-blur-xs transition-all duration-200 transform hover:-translate-y-0.5 shadow-xs"
            >
              <span>Explore Varieties</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Features & Trust Highlights Row */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4 max-w-3xl">
          {/* 1. Healthy & Well-Grown Plants */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#efe8dc]/85 border border-[#dfd6c7] flex items-center justify-center shrink-0 text-[#284f3a]">
              <Leaf className="w-4 h-4 sm:w-[18px] sm:h-[18px] stroke-[1.8]" />
            </div>
            <div className="text-[11px] sm:text-xs font-semibold text-stone-800 leading-tight">
              <div>Healthy &amp;</div>
              <div>Well-Grown Plants</div>
            </div>
          </div>

          {/* 2. Safe Packaging Across India */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#efe8dc]/85 border border-[#dfd6c7] flex items-center justify-center shrink-0 text-[#284f3a]">
              <Truck className="w-4 h-4 sm:w-[18px] sm:h-[18px] stroke-[1.8]" />
            </div>
            <div className="text-[11px] sm:text-xs font-semibold text-stone-800 leading-tight">
              <div>Safe Packaging</div>
              <div>Across India</div>
            </div>
          </div>

          {/* 3. Expert Support for Beginners */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#efe8dc]/85 border border-[#dfd6c7] flex items-center justify-center shrink-0 text-[#284f3a]">
              <Sprout className="w-4 h-4 sm:w-[18px] sm:h-[18px] stroke-[1.8]" />
            </div>
            <div className="text-[11px] sm:text-xs font-semibold text-stone-800 leading-tight">
              <div>Expert Support</div>
              <div>for Beginners</div>
            </div>
          </div>

          {/* 4. Naturally Grown in Kerala */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#efe8dc]/85 border border-[#dfd6c7] flex items-center justify-center shrink-0 text-[#284f3a]">
              <HeartHandshake className="w-4 h-4 sm:w-[18px] sm:h-[18px] stroke-[1.8]" />
            </div>
            <div className="text-[11px] sm:text-xs font-semibold text-stone-800 leading-tight">
              <div>Naturally Grown</div>
              <div>in Kerala</div>
            </div>
          </div>
        </div>
      </div>

      {/* "Where Nature Blooms" Signature Script in Bottom Right */}
      <div className="hidden lg:flex flex-col items-start absolute bottom-6 right-8 xl:bottom-8 xl:right-14 z-20 pointer-events-none select-none -rotate-2">
        <div className="flex items-center gap-2">
          <span className="font-script text-3xl xl:text-4xl text-white font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] tracking-wide">
            Where
          </span>
          {/* Subtle hand-drawn arrow/leaf flourish */}
          <svg
            className="w-10 h-4 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
            viewBox="0 0 45 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 9 C14 5, 26 12, 38 7" />
            <path d="M33 3.5 L39.5 7.2 L34.5 12" />
          </svg>
        </div>
        <span className="font-script text-4xl xl:text-5xl text-white font-normal -mt-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] tracking-wide">
          Nature Blooms
        </span>
      </div>
    </section>
  );
}
