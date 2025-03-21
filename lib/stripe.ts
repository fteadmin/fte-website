import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
  typescript: true,
});

export const SUBSCRIPTION_TIERS = {
  ENTREPRENEUR: {
    name: 'Entrepreneur',
    priceId: process.env.STRIPE_ENTREPRENEUR_PRICE_ID,
    price: 75,
  },
  INVESTOR: {
    name: 'Investor',
    priceId: process.env.STRIPE_INVESTOR_PRICE_ID,
    price: 199,
  },
  VISIONARY: {
    name: 'Visionary',
    priceId: process.env.STRIPE_VISIONARY_PRICE_ID,
    price: 499,
  },
} as const;