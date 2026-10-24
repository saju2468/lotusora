
import { Check, Droplets, Sparkles, SunMedium } from "lucide-react";

export default function CareGuide() {
  return (
    <section id="care-guide" className="py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-rose-600 font-semibold block mb-2">
            Botanical Wisdom
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-stone-900">
            Caring for Your Sacred Blooms
          </h2>
          <p className="text-stone-500 text-sm mt-2">
            Simple secrets to ensure maximum longevity and divine fragrance in your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6">
              <Droplets className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-stone-900 mb-3">Fresh Cut Stems Care</h3>
            <ul className="space-y-3 text-xs text-stone-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Submerge stem bottoms in 6-8 inches of cool, fresh tap or spring water immediately upon arrival.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Trim 1/2 inch off the bottom under water at a 45-degree angle to clear any air bubbles from the vascular channels.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Place near gentle natural ambient light. Avoid direct harsh heating vents or air conditioners.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-6">
              <SunMedium className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-stone-900 mb-3">Potted Water Bowl Lotuses</h3>
            <ul className="space-y-3 text-xs text-stone-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Lotuses adore direct sunlight! Place your bowl where it receives at least 5-6 hours of sunshine each day.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Keep 2 to 3 inches of standing water above the soil level at all times, gently topping up as it evaporates.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Add one balanced aquatic fertilizer tablet once per month during active leaf growth.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-stone-900 mb-3">Tea Ceremony & Infusion</h3>
            <ul className="space-y-3 text-xs text-stone-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Use a clear glass teapot so you can watch the flower bloom as hot water (85°C / 185°F) gently touches it.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Allow the whole blossom to steep for 3-5 minutes for optimal aroma and honey-golden color.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Enjoy 30-45 minutes before sleep or during mindfulness meditation for profound peace.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
