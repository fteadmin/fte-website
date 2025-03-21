'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

export default function TeamMember({ name, role, bio, image, linkedin, twitter }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
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
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-blue-600 font-medium mb-3">{role}</p>
        <p className="text-gray-600 mb-4">{bio}</p>
        
        {/* Social Links */}
        {(linkedin || twitter) && (
          <div className="flex space-x-3">
            {linkedin && (
              <a 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-700 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            )}
            {twitter && (
              <a 
                href={twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500 transition-colors"
              >
                <Twitter size={20} />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}