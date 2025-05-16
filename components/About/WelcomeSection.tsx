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
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Welcome to Future Trends Enterprise</h2>
            
            <div className="text-gray-700 space-y-6 text-lg">
              <p>
                Welcome to Future Trends Enterprise Inc., where we believe in creating pathways to sustainable business growth, opportunities, and
                legacy.
              </p>
              <p>
                Our membership structure is designed with a clear progression in mind - taking you from the foundations of entrepreneurship to
                advanced wealth structuring strategies. We havee carefully crafted each tier to provide exactly what you need at your current stage while
                preparing you for what comes next.
              </p>
              <p>
                Whether you are just starting your business journey, ready to attract investment, or looking to establish complex corporate structures for
                long-term wealth preservation, FTE provides the education, resources, and community to help you succeed.
              </p>
              <p>
                Let us explore how FTE can become your partner in building not just a business, but a legacy.
              </p>
              
              {/* Explore Memberships Button */}
              <div className="pt-6">
                <Link 
                  href="/membership"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full inline-flex items-center transition-colors duration-300"
                >
                  Explore Memberships
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
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
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