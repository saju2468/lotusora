import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#101b16] text-stone-400 text-xs pt-16 pb-12 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Col 1: Brand */}
        <div className="space-y-4">
          <div className="relative h-10 w-48">
            <Image
              src="/lotus_horizontal_logo.png"
              alt="Lotusora — Where Nature Blooms"
              width={1000}
              height={1000}
              className="object-contain object-left invert brightness-200"
            />
          </div>
          <p className="text-stone-400 text-xs leading-relaxed">
            Cultivating sacred lotus flowers and living aquatic flora in harmony with natural spring waters. Harvested at sunrise, delivered with reverence.
          </p>
          <div className="text-[11px] text-stone-500">
            © {new Date().getFullYear()} Lotusora Aquatic Sanctuary. All rights reserved.
          </div>
        </div>

        {/* Col 2: Collections */}
        <div>
          <h4 className="text-white font-medium text-sm mb-3 uppercase tracking-wider">
            Sacred Offerings
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="#catalog" className="hover:text-rose-400 transition-colors">
                Imperial Pink Royal Lotus
              </a>
            </li>
            <li>
              <a href="#catalog" className="hover:text-rose-400 transition-colors">
                Sacred Ivory White Lotus
              </a>
            </li>
            <li>
              <a href="#catalog" className="hover:text-rose-400 transition-colors">
                Celestial Blue Egyptian Lily
              </a>
            </li>
            <li>
              <a href="#catalog" className="hover:text-rose-400 transition-colors">
                Living Water Bowl Kits
              </a>
            </li>
            <li>
              <a href="#catalog" className="hover:text-rose-400 transition-colors">
                Whole Blossom Artisanal Tea
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Care & Guides */}
        <div>
          <h4 className="text-white font-medium text-sm mb-3 uppercase tracking-wider">
            Wisdom & Care
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="#care-guide" className="hover:text-rose-400 transition-colors">
                Stem Vase Life Extension
              </a>
            </li>
            <li>
              <a href="#care-guide" className="hover:text-rose-400 transition-colors">
                Patio Water Garden Soil Guide
              </a>
            </li>
            <li>
              <a href="#care-guide" className="hover:text-rose-400 transition-colors">
                Brewing Whole Lotus Flowers
              </a>
            </li>
            <li>
              <a href="#sanctuary" className="hover:text-rose-400 transition-colors">
                Dawn Harvest Philosophy
              </a>
            </li>
            <li>
              <a href="#wholesale" className="hover:text-rose-400 transition-colors">
                Temple Offering Protocol
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact & Assurance */}
        <div>
          <h4 className="text-white font-medium text-sm mb-3 uppercase tracking-wider">
            Sanctuary Assurance
          </h4>
          <p className="text-xs text-stone-400 mb-3">
            Questions about stem care or order timing?
          </p>
          <div className="space-y-2 text-xs">
            <p className="text-stone-300 font-medium">Spring Pond Sanctuary, Oregon</p>
            <p>Email: concierge@lotusora.com</p>
            <p>Hours: Mon–Sat, 6:00 AM – 4:00 PM PST</p>
          </div>
          <div className="mt-4 flex items-center gap-2 text-emerald-400 text-[11px]">
            <ShieldCheck className="w-4 h-4" />
            <span>48-Hour Fresh Stems Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
