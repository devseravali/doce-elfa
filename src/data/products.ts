import type { GalleryItem, Product } from "../types";

const imageUrl = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

export const products: Product[] = [
  {
    id: "doces-finos",
    name: "Doces finos",
    category: "Doces finos",
    image: imageUrl("doces-finos.jpg"),
  },
  {
    id: "doces-finos-2",
    name: "Doces finos",
    category: "Doces finos",
    image: imageUrl("doces-finos-2.jpg"),
  },
];

export const gallery: GalleryItem[] = [
  { src: imageUrl("doce-1.jpg"), alt: "Doce artesanal" },
  { src: imageUrl("doce-2.jpg"), alt: "Seleção de doces" },
  { src: imageUrl("doce-3.jpg"), alt: "Doce especial" },
];
