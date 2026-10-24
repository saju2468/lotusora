"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, User, Heart, ShoppingCart, Menu, X } from "lucide-react";

interface HeaderProps {
  cartCount?: number;
  onOpenCart?: () => void;
  wishlistCount?: number;
  onOpenWishlist?: () => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  activeNav?: string;
  onNavClick?: (navItem: string) => void;
}

export default function Header({
  cartCount = 0,
  onOpenCart,
  wishlistCount = 0,
  onOpenWishlist,
  searchQuery = "",
  onSearchChange,
  activeNav = "Home",
  onNavClick,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userModalOpen, setUserModalOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Shop", href: "#catalog" },
    { name: "Growing Guide", href: "#care-guide" },
    { name: "About", href: "#sanctuary" },
    { name: "Contact", href: "#wholesale" },
  ];

  const handleNavClick = (itemName: string, href: string) => {
    if (onNavClick) {
      onNavClick(itemName);
    }
    setMobileMenuOpen(false);
    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      if (targetId) {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#faf8f5]/95 backdrop-blur-md border-b border-stone-200/70 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* 1. LOGO ICON & BRAND */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("Home", "#");
            }}
            className="flex items-center shrink-0 group py-1"
          >
            <div className="relative h-11 sm:h-12 w-48 sm:w-56 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/lotus_horizontal_logo.png"
                alt="Lotusora — Where Nature Blooms"
                width={1000}
                height={1000}
                priority
                className="object-contain object-left"
              />
            </div>
          </a>

          {/* 2. CENTER NAVIGATION MENU */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeNav === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.name, item.href)}
                  className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-rose-100/80 text-rose-600 font-semibold shadow-xs"
                      : "text-stone-700 hover:text-stone-950 hover:bg-stone-100/60"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* 3. RIGHT SIDE CONTROLS: SEARCH, USER, WISHLIST, CART */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search Pill Input */}
            <div className="relative hidden md:block w-44 lg:w-52">
              <input
                type="text"
                placeholder="Search plants..."
                value={searchQuery}
                onChange={(e) =>
                  onSearchChange && onSearchChange(e.target.value)
                }
                className="w-full pl-4 pr-9 py-2 text-xs sm:text-sm bg-[#f3ede4]/80 hover:bg-[#f3ede4] focus:bg-white text-stone-800 placeholder:text-stone-400 rounded-full border border-stone-200/60 focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-200/50 transition-all"
              />
              <Search className="w-4 h-4 text-stone-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* User Profile Account Icon */}
            <button
              onClick={() => setUserModalOpen(true)}
              className="p-2 text-stone-700 hover:text-rose-600 hover:bg-rose-50/60 rounded-full transition-colors relative"
              aria-label="User Account"
            >
              <User className="w-5 h-5 stroke-[1.8]" />
            </button>

            {/* Wishlist Heart Icon */}
            <button
              onClick={() => {
                if (onOpenWishlist) {
                  onOpenWishlist();
                } else {
                  alert(
                    wishlistCount > 0
                      ? `You have saved ${wishlistCount} sacred blooms in your wishlist!`
                      : "Your wishlist is empty. Tap the heart on any bloom to save it!",
                  );
                }
              }}
              className="p-2 text-stone-700 hover:text-rose-600 hover:bg-rose-50/60 rounded-full transition-colors relative"
              aria-label="Saved Wishlist"
            >
              <Heart
                className={`w-5 h-5 stroke-[1.8] ${
                  wishlistCount > 0 ? "fill-rose-500 text-rose-500" : ""
                }`}
              />
              {wishlistCount > 0 && (
                <span className="absolute 0 top-1 right-1 w-4 h-4 bg-rose-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Cart Icon with Badge */}
            <button
              id="header-cart-button"
              onClick={onOpenCart}
              className="p-2 text-stone-700 hover:text-rose-600 hover:bg-rose-50/60 rounded-full transition-colors relative"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="w-5 h-5 stroke-[1.8]" />
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                {cartCount}
              </span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-700 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors ml-1"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION DRAWER */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#faf8f5] border-t border-stone-200/80 px-6 py-5 space-y-4 shadow-lg animate-in fade-in duration-200">
            {/* Mobile Search input */}
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search plants, lotus tea, tubers..."
                value={searchQuery}
                onChange={(e) =>
                  onSearchChange && onSearchChange(e.target.value)
                }
                className="w-full pl-4 pr-9 py-2 text-sm bg-[#f3ede4] text-stone-800 placeholder:text-stone-400 rounded-full border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rose-200"
              />
              <Search className="w-4 h-4 text-stone-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            <div className="flex flex-col space-y-1.5 pt-2">
              {navItems.map((item) => {
                const isActive = activeNav === item.name;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.name, item.href)}
                    className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-rose-100/80 text-rose-600 font-semibold"
                        : "text-stone-700 hover:bg-stone-100"
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* USER ACCOUNT MODAL (SIGN IN / CONCIERGE ACCESS) */}
      {userModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div
            onClick={() => setUserModalOpen(false)}
            className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm"
          />
          <div className="relative bg-white rounded-3xl max-w-sm w-full p-6 sm:p-8 shadow-2xl z-10 border border-stone-200">
            <button
              onClick={() => setUserModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-3">
                <User className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-stone-900">
                Lotusora Patron
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Sign in to manage your seasonal bloom subscriptions & order
                history.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "🌸 Welcome back to Lotusora! You are signed in as a verified patron.",
                );
                setUserModalOpen(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  placeholder="patron@lotusora.com"
                  className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Password
                </label>
                <input
                  required
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-rose-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-stone-900 hover:bg-rose-600 text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
              >
                Sign In
              </button>

              <p className="text-[11px] text-center text-stone-500 mt-3">
                Need temple or bulk wholesale access?{" "}
                <a
                  href="#wholesale"
                  onClick={() => setUserModalOpen(false)}
                  className="text-rose-600 hover:underline font-medium"
                >
                  Contact Concierge
                </a>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
