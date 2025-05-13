'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface BusinessProps {
  name: string;
  logoSrc?: string;
}

const BusinessLogo = ({ name, logoSrc }: BusinessProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 h-40">
      {logoSrc && !imageError ? (
        <div className="h-16 w-full flex items-center justify-center mb-4">
          <Image 
            src={logoSrc} 
            alt={`${name} logo`} 
            width={120} 
            height={80} 
            className="object-contain h-16 w-auto"
            onError={() => setImageError(true)}
          />
        </div>
      ) : (
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-4">
          <span className="text-2xl font-bold text-white">
            {name.charAt(0)}
          </span>
        </div>
      )}
      <h3 className="text-white font-medium text-center">{name}</h3>
    </div>
  );
};

export default function BusinessLogos() {
  // Actual FTE businesses and verticals with updated logo paths
  const businesses = [
    { name: "Sage Hospitality", logoSrc: "/assets/logos/sage.jpg" },
    { name: "Zariel and Co", logoSrc: "/assets/logos/z.jpg" },
    { name: "Phylos", logoSrc: "/assets/logos/phylos.png" },
    { name: "Nx LVL", logoSrc: "/assets/logos/nx.jpg" },
    { name: "Good Chef Co", logoSrc: "/assets/logos/good.png" },
    { name: "Launch Couture", logoSrc: "/assets/logos/lc.png" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#010E2F] to-[#0A2472]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4 font-vietnam-pro">Our Business Ecosystem</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Discover the innovative companies that are part of the Future Trends Enterprise ecosystem.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {businesses.map((business, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <BusinessLogo 
                name={business.name} 
                logoSrc={business.logoSrc} 
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a 
            href="/pro-tribe" 
            className="inline-block px-8 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Explore Our Full Ecosystem
          </a>
        </motion.div>
      </div>
    </section>
  );
}