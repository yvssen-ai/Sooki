import type { ProductShape, ProductSymbol } from "@/components/ProductIcon";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: "Rings" | "Bracelets" | "Necklaces" | "Pendants";
  shape: ProductShape;
  symbol: ProductSymbol;
  isNew?: boolean;
  /** Real product photo; when set, this replaces the illustrated ProductIcon on the card. */
  image?: string;
}

export const COLLECTION_CATEGORIES = ["All", "Rings", "Bracelets", "Necklaces", "Pendants"] as const;

export const PRODUCTS: Product[] = [
  { id: "p1", name: "Pharaoh Ring", price: 149, category: "Rings", shape: "ring", symbol: "scarab", image: "/images/products/pharaoh-ring.jpg" },
  { id: "p2", name: "Ankh Pendant", price: 129, category: "Pendants", shape: "necklace", symbol: "ankh" },
  { id: "p3", name: "Horus Necklace", price: 179, category: "Necklaces", shape: "necklace", symbol: "falcon" },
  { id: "p4", name: "Egyptian Bracelet", price: 159, category: "Bracelets", shape: "bracelet", symbol: "scarab" },
  { id: "p5", name: "Eye of Horus Ring", price: 139, category: "Rings", shape: "ring", symbol: "eye" },
  { id: "p6", name: "Scarab Bracelet", price: 169, category: "Bracelets", shape: "bracelet", symbol: "scarab", isNew: true },
  { id: "p7", name: "Falcon Pendant", price: 135, category: "Pendants", shape: "necklace", symbol: "falcon" },
  { id: "p8", name: "Nile Chain Necklace", price: 189, category: "Necklaces", shape: "necklace", symbol: "eye", isNew: true },
  { id: "p9", name: "Cleopatra Band Ring", price: 155, category: "Rings", shape: "ring", symbol: "ankh" },
];
