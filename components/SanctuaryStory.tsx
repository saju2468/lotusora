import Image from "next/image";
import { Droplets } from "lucide-react";

export default function SanctuaryStory() {
  return (
    <section id="sanctuary" className="py-20 bg-[#12231c] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Imagery Showcase */}
          <div className="relative">
            <div className="relative h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl border border-emerald-900/50">
              <Image
                src="/images/white-lotus.jpg"
                alt="Pure white lotus on pristine spring pond"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Stat Card */}
            <div className="absolute -bottom-6 -right-4 sm:bottom-6 sm:-right-6 bg-stone-900/90 backdrop-blur-md p-6 rounded-2xl border border-emerald-500/30 text-white max-w-xs shadow-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Droplets className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Spring-Fed Aquaculture</h4>
                  <span className="text-xs text-stone-400">Zero Synthetic Runoff</span>
                </div>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                Our aquatic fields are fed by natural mountain aquifers, replicating the sacred pristine waters where lotuses flourish in nature.
              </p>
            </div>
          </div>

          {/* Right Story & Steps */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-rose-300 font-semibold block">
              The Sacred Tradition
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white leading-tight">
              Harvested at First Light, <br />
              <span className="italic font-normal text-rose-200">
                Delivered with Living Radiance
              </span>
            </h2>
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-light">
              The sacred lotus opens with the sun and closes as evening falls. 
              Our master harvesters wade into the calm water between 5:00 AM and 6:30 AM to cut stems at their exact peak of turgidity and aromatic resin content.
            </p>

            <div className="space-y-4 pt-4">
              {/* Step 1 */}
              <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center shrink-0 font-serif font-bold text-sm">
                  01
                </div>
                <div>
                  <h4 className="font-medium text-white text-sm">Sunrise Stem Selection</h4>
                  <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                    Only mature, tightly furled flower buds are cut. This keeps petals protected against transport abrasion while storing full blooming energy.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 font-serif font-bold text-sm">
                  02
                </div>
                <div>
                  <h4 className="font-medium text-white text-sm">Hydro-Sleeve Packaging</h4>
                  <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                    Every stem is fitted with a specialized moisture reservoir sealed with botanical latex, ensuring the flower continues drinking throughout transit.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 font-serif font-bold text-sm">
                  03
                </div>
                <div>
                  <h4 className="font-medium text-white text-sm">Immediate Home Unfurling</h4>
                  <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                    Once placed in fresh water at your home or altar, the gentle warmth of your room prompts the petals to bloom majestically over 3 to 5 days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
