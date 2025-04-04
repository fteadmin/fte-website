'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface BusinessHeroProps {
  name: string;
  tagline: string;
  description: string;
  logoSrc: string;
  backgroundImage?: string;
}

export default function BusinessHero({ 
  name, 
  tagline, 
  description,
  logoSrc,
  backgroundImage
}: BusinessHeroProps) {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Gradient background - using the same royal blue as ProTribe */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#010E2F] via-[#0A2472] to-[#0E6BA8]" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[url('/assets/images/pattern-bg.png')] opacity-10" />
      
      {/* Background image if provided */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image 
            src={backgroundImage} 
            alt={`${name} background`} 
            fill 
            className="object-cover opacity-20 mix-blend-overlay"
          />
        </div>
      )}
      
      {/* Circular blur elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back to Pro Tribe link */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <Link 
            href="/pro-tribe" 
            className="inline-flex items-center text-blue-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to Pro Tribe</span>
          </Link>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Logo Display */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3 flex justify-center order-2 lg:order-1 mt-8 lg:mt-0"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center p-5 shadow-lg">
              <Image 
                src={logoSrc} 
                alt={`${name} Logo`} 
                width={180} 
                height={180} 
                className="object-contain" 
                priority
              />
            </div>
          </motion.div>
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-2/3 text-center lg:text-left order-1 lg:order-2"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3">
              {name}
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-300 font-medium mb-4">
              {tagline}
            </h2>
            <p className="text-lg text-white/80 max-w-2xl lg:max-w-xl mx-auto lg:mx-0">
              {description}
            </p>
          </motion.div>
        </div>
        
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#010E2F]/30 opacity-50" />
      </div>
    </section>
  );
}