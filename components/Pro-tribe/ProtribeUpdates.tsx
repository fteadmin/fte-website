'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar, TrendingUp } from 'lucide-react';

type Update = {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  date: string;
  category: string;
  cta?: { label: string; href: string };
};

const updates: Update[] = [
  // {
  //   title: 'Good Chef Co — Member Pop-up',
  //   subtitle: 'A List Dining Series',
  //   description:
  //     'Our rotating chef series continues this month in Sacramento — members get priority seating and exclusive tastings.',
  //   image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80',
  //   date: 'December 2024',
  //   category: 'Food & Beverage',
  //   cta: { label: 'Learn More', href: '/pro-tribe/good-chef-co' },
  // },
  {
    title: 'Zariel & Co — Booked & Busy Campaign',
    subtitle: 'Launch Event',
    description:
      "Incubator program that turns your talent into a business—real tools, real ownership, real money.",
    image: '/assets/book.png',
    date: 'December 18, 2025',
    category: 'Multimedia',
    cta: { label: 'See Campaign', href: 'https://www.zaniyazariel.com/' },
  },
  // {
  //   title: 'Sage Hospitality — Membership Drive',
  //   subtitle: 'Home + Hospitality',
  //   description:
  //     'Sage is expanding concierge offerings and launching a members-only property showcase.',
  //   image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80',
  //   date: 'December 2024',
  //   category: 'Real Estate',
  //   cta: { label: 'View Details', href: '/pro-tribe/sage-hospitality' },
  // },
  // {
  //   title: 'Launch Couture — Holiday Collection',
  //   subtitle: 'Winter 2024',
  //   description:
  //     'Exclusive previews of our winter collection dropping this month — members get early access and special pricing.',
  //   image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80',
  //   date: 'December 2024',
  //   category: 'Fashion',
  //   cta: { label: 'Explore Collection', href: '/pro-tribe/launch-couture' },
  // },
];

export default function ProtribeUpdates() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-blue-100 text-[#0A2472] px-4 py-1 rounded-full text-sm font-medium mb-4">
            Latest Updates
          </div>
          <h2 className="text-4xl font-bold text-[#010E2F] mb-4">What's Happening Now</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay in the loop with current campaigns, member activations, and exciting announcements across the Pro Tribe ecosystem.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {updates.map((update, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={update.image}
                  alt={update.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30">
                    {update.category}
                  </span>
                </div>

                {/* Date */}
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs border border-white/30">
                  <Calendar className="h-3 w-3" />
                  {update.date}
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{update.title}</h3>
                  {update.subtitle && (
                    <div className="flex items-center gap-2 text-blue-200 text-sm font-medium">
                      <TrendingUp className="h-4 w-4" />
                      {update.subtitle}
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">{update.description}</p>
                
                {update.cta && (
                  <Link 
                    href={update.cta.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#010E2F] to-[#0A2472] text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                  >
                    {update.cta.label}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-[#010E2F] via-[#0A2472] to-[#0E6BA8] rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">Want to Feature Your Campaign?</h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Pro Tribe members can showcase their latest initiatives, events, and campaigns on this page.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-[#010E2F] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
