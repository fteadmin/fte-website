'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface VerticalCardProps {
  title: string;
  description: string;
  image: string;
  altText: string;
}

export default function VerticalCard({ title, description, image, altText }: VerticalCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="relative h-48 w-full">
        <Image 
          src={image} 
          alt={altText} 
          fill 
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </motion.div>
  );
}