import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond, Caveat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lotusora | Sacred Fresh Lotus Flowers, Living Plants & Artisanal Lotus Teas",
  description:
    "Exquisite dawn-harvested fresh lotus blooms, living water bowl plants, and organic whole-blossom lotus teas delivered fresh with specialized hydration packaging.",
  keywords: [
    "lotus flowers",
    "buy lotus flower",
    "sacred pink lotus",
    "fresh lotus blooms",
    "white lotus flowers",
    "blue lotus water lily",
    "living lotus plants",
    "lotus tea",
    "ceremonial lotus flowers",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${cormorant.variable} ${caveat.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#faf8f5] text-stone-900 selection:bg-rose-100 selection:text-rose-900">
        {children}
      </body>
    </html>
  );
}
