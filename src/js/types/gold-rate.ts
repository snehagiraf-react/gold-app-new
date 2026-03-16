export type GoldRateCards = {
  id: number;
  gram: string;
  price: number;
};

export type SubscriptionPlanCards = {
  id: number;
  plan: string;
  expiry?: string;
  price: string;
  offer: string;
  save: string;
  features: string[];
};
