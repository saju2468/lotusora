"use client";

import { useState } from "react";
import { Product, CartItem } from "@/types";
import { PRODUCTS } from "@/data/products";

// Component-based architecture
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CuratedCollections from "@/components/CuratedCollections";
import ProductCatalog from "@/components/ProductCatalog";
import SanctuaryStory from "@/components/SanctuaryStory";
import CareGuide from "@/components/CareGuide";
import WholesaleInquiry from "@/components/WholesaleInquiry";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import QuickViewModal from "@/components/QuickViewModal";
import CheckoutModal from "@/components/CheckoutModal";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [orderModalOpen, setOrderModalOpen] = useState<boolean>(false);
  const [activeNav, setActiveNav] = useState<string>("Home");

  const totalItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateCartQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleToggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleOrderComplete = () => {
    alert(
      "🌸 Auspicious blessings! Your lotus harvest order is received. A confirmation with delivery tracking will be dispatched to your email!"
    );
    setCart([]);
    setOrderModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-800 flex flex-col selection:bg-rose-100 selection:text-rose-900">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <AnnouncementBar />

      {/* 2. NAVIGATION BAR */}
      <Header
        cartCount={totalItemsCount}
        onOpenCart={() => setIsCartOpen(true)}
        wishlistCount={wishlist.length}
        onOpenWishlist={() => {
          if (wishlist.length > 0) {
            alert(`You have saved ${wishlist.length} blooms in your sacred wishlist!`);
          } else {
            alert("Your wishlist is empty. Tap the heart on any bloom to save it!");
          }
        }}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeNav={activeNav}
        onNavClick={setActiveNav}
      />

      {/* 3. HERO SECTION */}
      <Hero />

      {/* 4. CURATED COLLECTIONS */}
      <CuratedCollections onSelectCategory={setActiveCategory} />

      {/* 5. MAIN PRODUCT CATALOG */}
      <ProductCatalog
        products={PRODUCTS}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        wishlist={wishlist}
        onToggleWishlist={handleToggleWishlist}
        onQuickView={setQuickViewProduct}
        onAddToCart={handleAddToCart}
      />

      {/* 6. SANCTUARY STORY & AQUACULTURE */}
      <SanctuaryStory />

      {/* 7. BOTANICAL CARE & BLOOMING GUIDE */}
      <CareGuide />

      {/* 8. TEMPLE, CEREMONY & WHOLESALE CONCIERGE */}
      <WholesaleInquiry />

      {/* 9. TESTIMONIALS & REPUTATION */}
      <Testimonials />

      {/* 10. NEWSLETTER & 10% VOUCHER */}
      <Newsletter />

      {/* 11. FOOTER */}
      <Footer />

      {/* 12. SLIDE-OVER SHOPPING CART DRAWER */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setOrderModalOpen(true);
        }}
      />

      {/* 13. QUICK VIEW BOTANICAL MODAL */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* 14. CHECKOUT MODAL */}
      <CheckoutModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        cart={cart}
        onOrderComplete={handleOrderComplete}
      />
    </div>
  );
}
