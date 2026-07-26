export type ChainId = "gold" | "rose-gold" | "silver" | "black-cord";

export interface ChainStyle {
  id: ChainId;
  name: string;
  priceModifier: number;
  /** Stroke color used to render the chain/cord on the canvas. */
  color: string;
}

export const CHAIN_STYLES: ChainStyle[] = [
  { id: "gold", name: "Gold Chain", priceModifier: 0, color: "#D4AF37" },
  { id: "rose-gold", name: "Rose Gold Chain", priceModifier: 10, color: "#E0A899" },
  { id: "silver", name: "Silver Chain", priceModifier: 5, color: "#C7CCD1" },
  { id: "black-cord", name: "Black Cord", priceModifier: 0, color: "#3a3a3a" },
];

export type MaterialKind = "charm" | "bead";

export type CharmIconId = "ankh" | "eye" | "scarab" | "falcon";
export type BeadColorId = "gold" | "ruby" | "turquoise" | "pearl";

export interface Material {
  id: string;
  name: string;
  price: number;
  kind: MaterialKind;
  /** For charms: which line-art icon to draw. For beads: the fill color key. */
  render: CharmIconId | BeadColorId;
}

export const CHARMS: Material[] = [
  { id: "charm-ankh", name: "Ankh Charm", price: 18, kind: "charm", render: "ankh" },
  { id: "charm-eye", name: "Eye of Horus Charm", price: 22, kind: "charm", render: "eye" },
  { id: "charm-scarab", name: "Scarab Charm", price: 20, kind: "charm", render: "scarab" },
  { id: "charm-falcon", name: "Falcon Charm", price: 25, kind: "charm", render: "falcon" },
];

export const BEADS: Material[] = [
  { id: "bead-gold", name: "Gold Bead", price: 6, kind: "bead", render: "gold" },
  { id: "bead-ruby", name: "Ruby Bead", price: 8, kind: "bead", render: "ruby" },
  { id: "bead-turquoise", name: "Turquoise Bead", price: 8, kind: "bead", render: "turquoise" },
  { id: "bead-pearl", name: "Pearl Bead", price: 7, kind: "bead", render: "pearl" },
];

export const BEAD_COLORS: Record<BeadColorId, string> = {
  gold: "#D4AF37",
  ruby: "#8B1A2B",
  turquoise: "#2FA79B",
  pearl: "#EFE7DA",
};

export const BASE_NECKLACE_PRICE = 89;
export const MAX_PLACED_ITEMS = 12;

export interface PlacedItem {
  /** Unique instance id, distinct from the material id since the same material can be placed more than once. */
  instanceId: string;
  material: Material;
}
