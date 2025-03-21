'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface StatisticCardProps {
  value: string;
  numericValue?: number;
  label: string;
  description: string;
  animate?: boolean;
}

export default function StatisticCard({ value, numericValue, label, description, animate = false }: StatisticCardProps) {
  const [count, setCount] = useState(0);
  
  // Format number with commas
  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  // Display value based on the format of the original value
  const getDisplayValue = (): string => {
    if (!numericValue || !animate) return value;
    
    if (value.startsWith('$')) {
      return `$${formatNumber(count)}${value.endsWith('+') ? '+' : ''}`;
    }
    
    return `${formatNumber(count)}${value.endsWith('+') ? '+' : ''}`;
  };
  
  useEffect(() => {
    if (!animate || !numericValue) return;
    
    // For large numbers, use a scaled approach to make animation smoother
    const duration = 1500; // 1.5 seconds
    const frameRate = 30; // frames per second
    const totalFrames = duration / 1000 * frameRate;
    const increment = numericValue / totalFrames;
    
    let currentCount = 0;
    let frame = 0;
    
    const timer = setInterval(() => {
      frame++;
      
      // Ease-out effect: faster at the beginning, slower towards end
      const progress = 1 - Math.pow(1 - frame / totalFrames, 3);
      currentCount = Math.min(Math.round(numericValue * progress), numericValue);
      
      setCount(currentCount);
      
      if (frame >= totalFrames) {
        clearInterval(timer);
      }
    }, 1000 / frameRate);
    
    return () => clearInterval(timer);
  }, [animate, numericValue]);
  
  return (
    <div className="bg-white/10 backdrop-blur-sm p-5 sm:p-6 rounded-xl text-center hover:bg-white/15 transition-all duration-300">
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
          {getDisplayValue()}
        </h3>
        <p className="text-blue-100 font-medium text-lg mb-4">{label}</p>
        <p className="text-blue-100/80 text-sm">{description}</p>
      </motion.div>
    </div>
  );
}