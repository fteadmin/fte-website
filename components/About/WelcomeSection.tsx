'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WelcomeSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">About Us </h2>
            
            <div className="text-gray-700 space-y-6 text-lg">
              <p>
                Future Trends Enterprise (FTE) operates as a parent venture ecosystem. We develop, accelerate, and expand businesses by combining incubation, capital access, shared infrastructure, and strategic brand development.
              </p>
              <p>
                Our operating model is straightforward: identify high-potential markets, incubate ventures with real demand, support them with capital-readiness and systems, then scale through community and cross-vertical execution.
              </p>
              <p>
                Through brands like FTE Capital, Sage Hospitality, Zariel & Co, Good Chef Co, and our Ecosystem, we convert community momentum into durable enterprise value for founders, partners, and investors.
              </p>
              
              {/* Explore Memberships Button */}
              <div className="pt-6">
                <Link 
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full inline-flex items-center transition-colors duration-300"
                >
                  Apply as Founder
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src="/assets/graphic.png"
              alt="Business professionals collaborating"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}