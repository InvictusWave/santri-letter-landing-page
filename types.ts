
export interface Service {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  isBestSeller?: boolean;
  priceLabel?: string;
}

export enum Category {
  All = 'Semua',
  Outdoor = 'Outdoor Printing',
  Business = 'Identitas Bisnis',
  Signage = 'Signage & Display',
  Souvenir = 'Souvenir'
}
