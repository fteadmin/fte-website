'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles, Building2, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Countdown from 'react-countdown';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const tiers = [
  {
    name: 'Entrepreneur',
    price: 75,
    description: 'Unlock Your Limitless Potential',
    icon: Sparkles,
    features: [
      'Master Financial Mastery',
      'Conquer Calculated Risks',
      'Build an Unshakable Foundation',
      'Access to Basic Resources',
      'Monthly Group Coaching',
      'Community Forum Access'
    ]
  },
  {
    name: 'Investor',
    price: 199,
    description: 'Access Funding Opportunities',
    icon: Building2,
    features: [
      'All Entrepreneur Features',
      'Identify Funding Channels',
      'Prepare Investment Packages',
      'Connect with Investor Network',
      'Capital Efficiency Training',
      'Priority Support'
    ]
  },
  {
    name: 'Visionary',
    price: 499,
    description: 'Build a Legacy',
    icon: Crown,
    features: [
      'All Investor Features',
      'C Corporations Setup Guide',
      'Strategic LLC Formation',
      'Trust Structures Planning',
      '1-on-1 Strategy Sessions',
      'VIP Network Access'
    ]
  }
];

// Set countdown date to 7 days from now
const countdownDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

export default function Membership() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (tierName: string) => {
    try {
      setIsLoading(true);
      setSelectedTier(tierName);

      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tier: tierName.toUpperCase(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || 'Failed to create checkout session');
      }

      const data = await response.json();
      
      if (!data.sessionId) {
        throw new Error('No session ID returned from the server');
      }

      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe failed to initialize');
      }

      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (stripeError) {
        throw new Error(stripeError.message);
      }
    } catch (error) {
      console.error('Error:', error);
      // Here you might want to show an error toast to the user
    } finally {
      setIsLoading(false);
      setSelectedTier(null);
    }
  };

  return (
    <section className="py-20 px-4 min-h-screen bg-gray-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your Path to Success
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join our community of visionaries and unlock your full potential with our comprehensive membership tiers.
          </p>
          
          <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg inline-block">
            <p className="text-white mb-2">Special Launch Offer Ends In:</p>
            <Countdown
              date={countdownDate}
              renderer={({ days, hours, minutes, seconds }) => (
                <div className="flex gap-4 text-2xl font-bold text-white">
                  <div>
                    <span>{days}</span>
                    <span className="text-sm block">Days</span>
                  </div>
                  <div>
                    <span>{hours}</span>
                    <span className="text-sm block">Hours</span>
                  </div>
                  <div>
                    <span>{minutes}</span>
                    <span className="text-sm block">Minutes</span>
                  </div>
                  <div>
                    <span>{seconds}</span>
                    <span className="text-sm block">Seconds</span>
                  </div>
                </div>
              )}
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative bg-white rounded-2xl p-8 shadow-xl overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-bl-full transform translate-x-8 -translate-y-8" />
              
              <tier.icon className="h-12 w-12 text-blue-600 mb-6" />
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
              <p className="text-gray-600 mb-6">{tier.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-gray-900">${tier.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                onClick={() => handleSubscribe(tier.name)}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                disabled={isLoading || selectedTier === tier.name}
              >
                {isLoading && selectedTier === tier.name ? 'Processing...' : 'Get Started'}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}