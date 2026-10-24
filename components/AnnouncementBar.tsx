import { Sparkles } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <aside
      aria-label="Daily Announcement"
      className="bg-[#1c2c26] text-emerald-100 text-xs py-2 px-4 text-center tracking-wide font-medium flex items-center justify-center gap-2 border-b border-emerald-950/40"
    >
      <Sparkles className="w-3.5 h-3.5 text-rose-300 animate-pulse" />
      <span>
        <strong>Dawn Harvest Dispatched Daily:</strong> Orders placed before 10
        AM ship with specialized stem-hydration packs!
      </span>
      <span className="hidden md:inline text-emerald-400/60">•</span>
      <span className="hidden md:inline text-rose-200">
        Complimentary shipping on orders over $60
      </span>
    </aside>
  );
}
