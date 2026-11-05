import type { GalleryItem, Product } from "../types";

export const products: Product[] = [
  {
    id: "doces-finos",
    name: "Doces finos",
    category: "Doces finos",
    image: "/images/doces-finos.jpg",
  },
  {
    id: "doces-finos-2",
    name: "Doces finos",
    category: "Doces finos",
    image: "/images/doces-finos-2.jpg",
  },
];

export const gallery: GalleryItem[] = [
  { src: "/images/doce-1.jpg", alt: "Doce artesanal" },
  { src: "/images/doce-2.jpg", alt: "Seleção de doces" },
  { src: "/images/doce-3.jpg", alt: "Doce especial" },
];
