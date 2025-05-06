'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles, Building2, Crown, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Countdown from 'react-countdown';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Image from 'next/image';

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
    ],
    color: 'from-blue-500 to-blue-700',
    highlightColor: 'blue-500',
    borderColor: 'border-blue-200'
  },
  {
    name: 'Investor',
    price: 5000,
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
    color: 'from-purple-600 to-blue-600',
    highlightColor: 'purple-500',
    borderColor: 'border-purple-200'
  },
  {
    name: 'Visionary',
    price: 25000,
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
    borderColor: 'border-blue-300'
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
    <section className="relative py-20 px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#010E2F] via-[#0A2472] to-[#0E6BA8] -z-10"></div>
      <div className="absolute inset-0 bg-[url('/assets/images/pattern-bg.png')] opacity-10 -z-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse -z-10"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse -z-10" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
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

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16 relative"
        >
          <div className="bg-gradient-to-r from-blue-700/70 to-purple-800/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('/assets/images/pattern-bg.png')] opacity-5"></div>
            <div className="absolute top-0 left-0 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            
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

        {/* Price Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
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
              
              {/* Card border glow */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${tier.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              
              <div className="px-8 pt-10 pb-10 relative">
                {/* Header */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-r ${tier.color} mb-6`}>
                  <tier.icon className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-blue-200 mb-6 h-14">{tier.description}</p>
                
                <div className="flex items-baseline mb-8">
                  <span className="text-5xl font-bold text-white">${tier.price}</span>
                  {/* <span className="text-blue-200 ml-2">/month</span> */}
                </div>
                
                {/* Features */}
                <ul className="space-y-4 mb-10 min-h-[280px]">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={`h-5 w-5 text-${tier.highlightColor} flex-shrink-0 mt-0.5`} />
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Button */}
                <Button
                  onClick={() => handleSubscribe(tier.name)}
                  disabled={isLoading || selectedTier === tier.name}
                  className={`w-full bg-gradient-to-r ${tier.color} text-white py-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-${tier.highlightColor}/20 flex items-center justify-center`}
                >
                  {isLoading && selectedTier === tier.name ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2"></div>
                      Processing...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </div>
                  )}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Testimonial */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-10 shadow-xl"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="md:w-1/4 flex justify-center">
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-blue-600/30">
                <Image 
                  src="/assets/images/testimonial-user.jpg" 
                  alt="Testimonial" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-3/4">
              <svg className="h-10 w-10 text-blue-500/40 mb-4" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
              </svg>
              <p className="text-white/80 text-lg mb-6">
                "Joining FTE's membership program was the best decision for my business. The resources, networking opportunities and expert guidance have been invaluable. I've seen tangible growth within just months of joining."
              </p>
              <div>
                <h4 className="text-white font-semibold">Sarah Johnson</h4>
                <p className="text-blue-300">CEO, TechSolutions Inc.</p>
              </div>
            </div>
          </div>
        </motion.div> */}
        
        {/* FAQ Section */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-12">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl text-left">
              <h3 className="text-xl font-semibold text-white mb-3">How do the memberships work?</h3>
              <p className="text-white/70">Our membership programs are designed to provide you with ongoing support, resources, and community. You'll be billed monthly and can cancel at any time.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl text-left">
              <h3 className="text-xl font-semibold text-white mb-3">Can I upgrade my membership?</h3>
              <p className="text-white/70">Yes, you can upgrade your membership at any time. You'll only be charged the difference in price for the remainder of your billing cycle.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl text-left">
              <h3 className="text-xl font-semibold text-white mb-3">Is there a refund policy?</h3>
              <p className="text-white/70">We offer a 14-day money-back guarantee for new members. If you're not satisfied, contact us within 14 days for a full refund.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl text-left">
              <h3 className="text-xl font-semibold text-white mb-3">How do I access member resources?</h3>
              <p className="text-white/70">After joining, you'll receive login credentials to our member portal where all resources, courses, and community features are available.</p>
            </div>
          </div>
          
          <div className="mt-12">
            <p className="text-white/80 mb-4">Still have questions about our membership options?</p>
            <Button className="bg-white text-[#0A2472] hover:bg-blue-100">
              Contact Our Support Team
            </Button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}