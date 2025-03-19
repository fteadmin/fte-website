'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

export default function HomeLanding() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#010E2F] via-[#0A2472] to-[#0E6BA8]">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.15),transparent_30%)]" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl pl-0 sm:pl-4 md:pl-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white mb-8 font-vietnam-pro leading-none whitespace-nowrap"
            >
              Building Thriving Communities
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg text-white/90 mb-6 font-vietnam-pro leading-relaxed max-w-xl"
            >
              We are on a mission to build and sustain an ecosystem of thriving businesses and visionary brands,
              where like-minded individuals come together to flourish in a vibrant community dedicated to success.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg text-white/80 mb-10 font-vietnam-pro leading-relaxed max-w-xl"
            >
              Join us in creating a future where collaboration and innovation drive success for everyone.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group relative px-8 py-4 bg-white text-[#010E2F] rounded-full font-vietnam-pro font-semibold hover:bg-white/90 transition-all duration-300 flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Play Video Demo
                <div className="absolute inset-0 rounded-full border-2 border-white -m-0.5 group-hover:scale-105 transition-transform duration-300" />
              </button>
              
              <button className="group relative px-8 py-4 bg-transparent text-white rounded-full font-vietnam-pro font-semibold hover:bg-white/10 transition-all duration-300 flex items-center border-2 border-white">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#010E2F] to-transparent z-10" />
    </div>
  );
}