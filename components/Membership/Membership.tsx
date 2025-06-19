'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles, Building2, Crown, Star, ArrowRight, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Countdown from 'react-countdown';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const tiers = [
  {
    name: 'Entrepreneur',
    price: 125,
    originalPrice: 2500,
    description: 'Unlock Your Limitless Potential',
    icon: Sparkles,
    features: [
      'Master Financial Mastery',
      'Conquer Calculated Risks',
      'Build an Unshakable Foundation',
      'Access to Basic Resources',
      'Monthly Group Coaching',
      'Community Forum Access'
    ],
    color: 'from-blue-500 to-blue-700',
    highlightColor: 'blue-500',
    borderColor: 'border-blue-200',
    limitedOffer: true,
    link: 'https://751e3102-2fdb-41f7-bf0a-209cb1a5fdc9.paylinks.godaddy.com/ee7b01ff-5d7b-43f4-b196-46b'
  },
  {
    name: '100 Strong',
    price: 250,
    // Added limited offer flag
    limitedOffer: true,
    description: 'Fast-track to a high-yield FTE portfolio',
    icon: Users,
    features: [
      'Custom Package for 100 Strong Community',
      'High-Yield Portfolio Setup',
      'Exclusive Access to FTE Resources',
      'Priority Support'
    ],
    color: 'from-blue-400 to-blue-600',
    highlightColor: 'blue-400',
    borderColor: 'border-blue-200',
    link: 'https://751e3102-2fdb-41f7-bf0a-209cb1a5fdc9.paylinks.godaddy.com/1ad52fae-9b95-42f2-82ff-0c0'
  },
  {
    name: 'Investor',
    // Changed price back to 5000
    price: 5000,
    // Removed originalPrice to remove the strikethrough
    description: 'Access Funding Opportunities',
    icon: Building2,
    features: [
      'All Entrepreneur Features',
      'Identify Funding Channels',
      'Prepare Investment Packages',
      'Connect with Investor Network',
      'Capital Efficiency Training',
      'Priority Support'
    ],
    popular: true,
    // Removed limitedOffer flag
    color: 'from-purple-600 to-blue-600',
    highlightColor: 'purple-500',
    borderColor: 'border-purple-200',
    link: 'https://751e3102-2fdb-41f7-bf0a-209cb1a5fdc9.paylinks.godaddy.com/3031daf8-0bba-4f06-b444-e57'
  },
  {
    name: 'Visionary',
    price: 'Contact us for a quote',
    description: 'Build a Legacy',
    icon: Crown,
    features: [
      'All Investor Features',
      'C Corporations Setup Guide',
      'Strategic LLC Formation',
      'Trust Structures Planning',
      '1-on-1 Strategy Sessions',
      'VIP Network Access'
    ],
    color: 'from-blue-700 to-indigo-900',
    highlightColor: 'blue-700',
    borderColor: 'border-blue-300',
    link: '/contact-us'
  }
];

// Set countdown date to June 24, 2025 (7 days from June 17, 2025)
// const countdownDate = new Date('2025-06-24T00:00:00');

export default function Membership() {
  const router = useRouter();
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTierSelection = (tier: typeof tiers[0]) => {
    setIsLoading(true);
    setSelectedTier(tier.name);

    setTimeout(() => {
      if (tier.link.startsWith('http')) {
        window.open(tier.link, '_blank');
      } else {
        router.push(tier.link);
      }

      setIsLoading(false);
      setSelectedTier(null);
    }, 500);
  };

  return (
    <section className="relative py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-[#010E2F] via-[#0A2472] to-[#0E6BA8] -z-10"></div>
      <div className="absolute inset-0 bg-[url('/assets/images/pattern-bg.png')] opacity-10 -z-10"></div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-blue-300 font-medium inline-flex items-center">
              <Star className="h-4 w-4 mr-2" />
              <span>Exclusive Membership Benefits</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Join Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">Visionary</span> Community
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Unlock resources, connections, and strategies that propel your business forward with our carefully crafted membership tiers.
          </p>
        </motion.div>

        {/* Countdown Timer - commented out 
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16 relative"
        >
          <div className="bg-gradient-to-r from-blue-700/70 to-purple-800/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl overflow-hidden">
            <div className="relative">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-white">Special Launch Offer</h3>
                  <p className="text-blue-200">Limited time pricing for early adopters</p>
                </div>
                
                <Countdown
                  date={countdownDate}
                  renderer={({ days, hours, minutes, seconds }) => (
                    <div className="flex space-x-4">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center text-3xl font-bold text-white">{days}</div>
                        <span className="text-xs mt-1 text-blue-200">Days</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center text-3xl font-bold text-white">{hours}</div>
                        <span className="text-xs mt-1 text-blue-200">Hours</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center text-3xl font-bold text-white">{minutes}</div>
                        <span className="text-xs mt-1 text-blue-200">Minutes</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center text-3xl font-bold text-white">{seconds}</div>
                        <span className="text-xs mt-1 text-blue-200">Seconds</span>
                      </div>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        </motion.div>
        */}

        <div className="grid md:grid-cols-4 gap-8 lg:gap-10">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
              className={`relative bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden group ${
                tier.popular ? 'md:scale-105 md:-translate-y-2 z-10' : ''
              }`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-1 rounded-bl-lg text-sm font-medium shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}
              
              {/* Limited Time Offer badge */}
              {tier.limitedOffer && !tier.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-1 rounded-bl-lg text-sm font-medium shadow-lg">
                    Limited Time Offer
                  </div>
                </div>
              )}
              
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${tier.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>

              <div className="px-8 pt-10 pb-10 relative">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-r ${tier.color} mb-6`}>
                  <tier.icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-blue-200 mb-6 h-12">{tier.description}</p>

                <div className="flex items-baseline mb-8">
                  {/* Modified price display for Entrepreneur tier only */}
                  {tier.name === 'Entrepreneur' ? (
                    <div className="flex items-center flex-wrap">
                      <span className="text-5xl font-bold text-white">${tier.price}</span>
                      <span className="ml-3 line-through text-gray-400 text-xl">${tier.originalPrice}</span>
                      <span className="ml-3 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                        95% OFF
                      </span>
                    </div>
                  ) : typeof tier.price === 'number' ? (
                    <span className="text-5xl font-bold text-white">${tier.price}</span>
                  ) : (
                    <span className="text-3xl font-bold text-white">{tier.price}</span>
                  )}
                </div>

                <ul className="space-y-4 mb-10 min-h-[280px]">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handleTierSelection(tier)}
                  disabled={isLoading || selectedTier === tier.name}
                  className={`w-full bg-gradient-to-r ${tier.color} text-white py-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 flex items-center justify-center`}
                >
                  {isLoading && selectedTier === tier.name ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2"></div>
                      Processing...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      {tier.name === 'Visionary' ? 'Contact Us' : 'Get Started'}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </div>
                  )}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}