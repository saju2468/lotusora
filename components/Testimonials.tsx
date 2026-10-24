import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      quote:
        "We ordered 50 Sacred Ivory White lotuses for our temple's full moon Wesak observance. Every stem arrived alive and hydrated, and when placed in water they opened into breathtaking purity. Simply immaculate service.",
      author: "Venerable Sujatha",
      role: "Pure Land Sanctuary",
    },
    {
      quote:
        "The Zen Patio living bowl kit is the most rewarding thing on my apartment balcony. Following their simple water guide, the baby pads multiplied in 3 weeks and we just had our first pink bloom open yesterday!",
      author: "Evelyn Vance",
      role: "Botanical Designer, Seattle",
    },
    {
      quote:
        "The whole blossom lotus tea is pure sensory meditation. Watching a single golden blossom unfurl inside my glass teapot while sipping the delicate honey notes has transformed my evening routine.",
      author: "Marcus Lindqvist",
      role: "Mindfulness Instructor",
    },
  ];

  return (
    <section className="py-20 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-rose-600 font-semibold block mb-2">
            Spoken By Devotees & Connoisseurs
          </span>
          <h2 className="text-3xl font-serif text-stone-900">
            Kind Words From Our Patrons
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-stone-600 leading-relaxed italic mb-4">
                  {r.quote}
                </p>
              </div>
              <div className="border-t border-stone-100 pt-3">
                <span className="text-xs font-semibold text-stone-900 block">
                  {r.author}
                </span>
                <span className="text-[11px] text-stone-400">{r.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
