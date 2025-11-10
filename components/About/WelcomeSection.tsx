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
                Future Trends Enterprise (FTE) is a forward-thinking technology company that seamlessly integrates advanced solutions across digital and physical spaces.
                We transform innovation into opportunity by building interconnected ecosystems where community, technology, and commerce converge.
              </p>
              <p>
              Our  process defines who we are:
              We identify markets with high upside potential, establish a built-in community around them, and apply strategic policies that scale profits. This approach ensures that every project we launch is grounded in real-world relevance, supported by engaged stakeholders, and positioned for long-term growth.
              At the heart of our enterprise is a commitment to inclusive wealth creation. Through platforms like Pro Tribe and Life Connect, we empower visionary founders, creators, and community members to thrive inside an ecosystem designed for elevation.
              </p>
              <p>
                These platforms offer strategic guidance, access to resources, collaboration opportunities, and shared value streams that accelerate both personal and business development.
                Innovation drives our solutions, community fuels our momentum, and excellence defines our standards. Whether we are building digital systems, physical environments, or hybrid experiences, FTE ensures that every connection contributes to a larger goal: impact, scalability, and sustainable profit.
                Future Trends Enterprise is more than a company; it's a movement designed to unlock potential, elevate communities, and reshape the way modern businesses grow.
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