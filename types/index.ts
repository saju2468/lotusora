export interface Product {
  id: string;
  name: string;
  botanical: string;
  category: "blooms" | "plants" | "tea" | "ceremony";
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  tag: string;
  stems: string;
  scent: string;
  description: string;
  harvestNote: string;
  careTip: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
