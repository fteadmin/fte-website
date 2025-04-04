'use client';

import { motion } from 'framer-motion';

interface ContactHeroProps {
  title: string;
  subtitle: string;
}

export default function ContactHero({ title, subtitle }: ContactHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#010E2F] via-[#0A2472] to-[#0E6BA8] text-white py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full border-[20px] border-white"
        />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-[-10%] left-[-5%] w-[250px] h-[250px] border-[15px] border-white rounded-md transform rotate-45"
        />
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{title}</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl">{subtitle}</p>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="hidden md:block absolute right-10 bottom-10">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
          <div className="w-24 h-[2px] bg-blue-300"></div>
          <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}