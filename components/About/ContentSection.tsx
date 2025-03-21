'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ContentSectionProps {
  icon: ReactNode;
  title: string;
  content: string;
}

export default function ContentSection({ icon, title, content }: ContentSectionProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="bg-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">
        {content}
      </p>
    </motion.div>
  );
}