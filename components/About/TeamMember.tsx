'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export default function TeamMember({ name, role, bio, image }: TeamMemberProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // For longer bios, create a shortened version
  const shortBio = bio.length > 120 ? `${bio.substring(0, 120)}...` : bio;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-blue-600 font-medium mb-3">{role}</p>
        
        <div className="flex-grow">
          <p className="text-gray-600">{isHovered ? bio : shortBio}</p>
        </div>
      </div>
    </motion.div>
  );
}