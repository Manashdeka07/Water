export type BottleSize = '330ml' | '500ml' | '750ml' | '1000ml';
export type BottleMaterial = 'rpet' | 'glass' | 'aluminum' | 'stainless';
export type CapType = 'white-screw' | 'black-matte' | 'gold-luxury' | 'wooden' | 'sports';
export type WaterType = 'spring' | 'sparkling' | 'alkaline' | 'electrolyte';
export type LabelFinish = 'matte-velvet' | 'glossy-metallic' | 'transparent' | 'kraft';

export interface CustomBottleConfig {
  size: BottleSize;
  material: BottleMaterial;
  cap: CapType;
  water: WaterType;
  finish: LabelFinish;
  brandName: string;
  tagline: string;
  primaryColor: string;
  secondaryColor: string;
  logoType: 'crown' | 'wine' | 'hearts' | 'globe' | 'custom';
  customLogoUrl?: string;
  enableQr: boolean;
  qrUrl: string;
  quantity: number;
}

export interface QuoteRequest {
  id: string;
  createdAt: string;
  config: CustomBottleConfig;
  customerName: string;
  companyName: string;
  email: string;
  phone: string;
  eventDate?: string;
  notes?: string;
  status: string;
}

export interface SampleOrder {
  id: string;
  createdAt: string;
  name: string;
  shippingAddress: string;
  city: string;
  country: string;
  email: string;
  phone: string;
  status: string;
}

export interface AIBrandSuggestion {
  tagline: string;
  labelDescription: string;
  colorRecommendations: string[];
  qrSuggestion: string;
}
