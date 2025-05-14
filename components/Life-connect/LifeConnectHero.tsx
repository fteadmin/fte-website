'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

interface LifeConnectHeroProps {
  title?: string;
  subtitle?: string;
}

export default function LifeConnectHero({ 
  title = "Life Connect",
  subtitle = "Our social engine platform focused on community building and increasing exposure for our partners."
}: LifeConnectHeroProps) {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Gradient background - using the same royal blue as ProTribe */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#010E2F] via-[#0A2472] to-[#0E6BA8]" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[url('/assets/images/pattern-bg.png')] opacity-10" />
      
      {/* Circular blur elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/3 text-center lg:text-left mb-12 lg:mb-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {title}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl lg:max-w-xl mx-auto lg:mx-0">
              {subtitle}
            </p>
          </motion.div>
          
          {/* Logo Display - updated to use actual logo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/3 flex justify-center"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center p-6 shadow-lg">
              {/* Replaced Leaf icon with actual Life Connect logo */}
              <Image 
                src="/assets/logos/lifec.png"
                alt="Life Connect Logo" 
                width={180} 
                height={180} 
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#010E2F]/30 opacity-50" />
      </div>
    </section>
  );
}