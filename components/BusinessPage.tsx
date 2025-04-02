'use client';

import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Globe, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface BusinessPageProps {
  name: string;
  description: string;
  logo: string;
  website: string;
  social: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  heroImage: string;
}

export default function BusinessPage({ 
  name, 
  description, 
  logo, 
  website, 
  social, 
  contact,
  heroImage 
}: BusinessPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={`${name} hero image`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex items-center gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-32 h-32 bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <Image
                  src={logo}
                  alt={`${name} logo`}
                  fill
                  className="object-contain p-2"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl font-bold text-white mb-4">{name}</h1>
                <Link 
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-white/90 hover:text-white flex items-center gap-2"
                >
                  <Globe className="h-5 w-5" />
                  <span>{website.replace('https://', '')}</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2"
            >
              <h2 className="text-2xl font-semibold mb-6">About {name}</h2>
              <div className="prose prose-lg max-w-none">
                <p>{description}</p>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Information */}
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <a href={`mailto:${contact.email}`} className="hover:text-blue-600">
                      {contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <a href={`tel:${contact.phone}`} className="hover:text-blue-600">
                      {contact.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span>{contact.address}</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  {social.facebook && (
                    <Link 
                      href={social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Facebook className="h-6 w-6" />
                    </Link>
                  )}
                  {social.twitter && (
                    <Link 
                      href={social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Twitter className="h-6 w-6" />
                    </Link>
                  )}
                  {social.instagram && (
                    <Link 
                      href={social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Instagram className="h-6 w-6" />
                    </Link>
                  )}
                  {social.linkedin && (
                    <Link 
                      href={social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}