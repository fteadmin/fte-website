'use client';

import { motion } from 'framer-motion';

interface StatisticCardProps {
  value: string;
  label: string;
  description: string;
}

export default function StatisticCard({ value, label, description }: StatisticCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-colors duration-300"
    >
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">{value}</div>
      <h3 className="text-lg font-semibold text-blue-200 mb-3">{label}</h3>
      <p className="text-sm text-blue-100 opacity-90">{description}</p>
    </motion.div>
  );
}