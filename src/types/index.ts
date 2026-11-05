export interface Product { id: string; name: string; description?: string; category: string; image?: string; note?: string }
export interface GalleryItem { src: string; alt: string }
export interface DeliveryOption { id: string; label: string; area: string; url: string | null }
