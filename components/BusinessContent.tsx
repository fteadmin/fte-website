'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Globe, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight
} from 'lucide-react';

interface BusinessContentProps {
  name: string;
  description: string;
  logo: string;
  website?: string;
  heroImage?: string;
  social?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  contact?: {
    email?: string;
    phone?: string;
    address?: string;
  };
  services?: Array<{
    name: string;
    description: string;
    icon?: React.ReactNode;
  }>;
}

export default function BusinessContent({
  name,
  description,
  logo,
  website,
  heroImage,
  social,
  contact,
  services = []
}: BusinessContentProps) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  // Default services if none provided
  // First, update the defaultServices to include the icon property (even if null)
const defaultServices = [
  {
    name: 'Core Services',
    description: 'Our primary offerings that define our business and create value for our clients.',
    icon: null, 
  },
  {
    name: 'Special Projects',
    description: 'Custom solutions designed to address specific client needs with innovative approaches.',
    icon: null, 
  },
  {
    name: 'Consulting',
    description: 'Expert guidance to help our clients navigate challenges and identify new opportunities.',
    icon: null, 
  }
];

  const displayServices = services.length > 0 ? services : defaultServices;

  return (
    <div className="bg-white">
      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">About {name}</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {description}
            </p>
          </motion.div>

          {/* Quick Info Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mt-12"
          >
            {/* Business Info Card */}
            <motion.div variants={itemVariants} className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#010E2F]/10 rounded-full flex items-center justify-center">
                  <Globe className="h-6 w-6 text-[#010E2F]" />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-[#010E2F]">Business Info</h3>
              </div>
              <div className="space-y-3">
                {website && (
                  <a 
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    <span>Website</span>
                  </a>
                )}
              </div>
            </motion.div>

            {/* Social Media Card */}
            <motion.div variants={itemVariants} className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#010E2F]/10 rounded-full flex items-center justify-center">
                  <Facebook className="h-6 w-6 text-[#010E2F]" />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-[#010E2F]">Connect</h3>
              </div>
              {social && (
                <div className="grid grid-cols-2 gap-3">
                  {social.facebook && (
                    <a 
                      href={social.facebook}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <Facebook className="h-4 w-4 mr-2" />
                      <span>Facebook</span>
                    </a>
                  )}
                  {social.twitter && (
                    <a 
                      href={social.twitter}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <Twitter className="h-4 w-4 mr-2" />
                      <span>Twitter</span>
                    </a>
                  )}
                  {social.linkedin && (
                    <a 
                      href={social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {social.instagram && (
                    <a 
                      href={social.instagram}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <Instagram className="h-4 w-4 mr-2" />
                      <span>Instagram</span>
                    </a>
                  )}
                </div>
              )}
            </motion.div>

            {/* Contact Card */}
            <motion.div variants={itemVariants} className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#010E2F]/10 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-[#010E2F]" />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-[#010E2F]">Contact</h3>
              </div>
              {contact && (
                <div className="space-y-3">
                  {contact.email && (
                    <a 
                      href={`mailto:${contact.email}`} 
                      className="flex items-start text-blue-600 hover:text-blue-800"
                    >
                      <Mail className="h-4 w-4 mr-2 mt-1" />
                      <span>{contact.email}</span>
                    </a>
                  )}
                  {contact.phone && (
                    <a 
                      href={`tel:${contact.phone}`} 
                      className="flex items-start text-blue-600 hover:text-blue-800"
                    >
                      <Phone className="h-4 w-4 mr-2 mt-1" />
                      <span>{contact.phone}</span>
                    </a>
                  )}
                  {contact.address && (
                    <div className="flex items-start text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 mt-1" />
                      <span>{contact.address}</span>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image Section */}
      {heroImage && (
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-xl overflow-hidden shadow-lg h-96 relative"
            >
              <Image 
                src={heroImage} 
                alt={name} 
                fill
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white">{name}</h3>
                <p className="text-white/80">Part of the Pro Tribe Ecosystem</p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">Our Services</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover what makes {name} unique and how we can help you achieve your goals.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {displayServices.map((service, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg border border-gray-200"
              >
                <div className="h-32 bg-[#010E2F]/5 relative flex items-center justify-center">
                  {service.icon ? service.icon : (
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                      <ArrowRight className="h-8 w-8 text-blue-600" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#010E2F]">{service.name}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pro Tribe Connection */}
      <section className="py-20 bg-gradient-to-br from-[#010E2F] via-[#0A2472] to-[#0E6BA8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Part of the Pro Tribe Ecosystem</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              {name} is a proud member of Pro Tribe, FTE's business ecosystem designed to foster growth, 
              collaboration, and community impact.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:w-1/3 flex justify-center"
            >
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <Image 
                  src="/assets/logos/protribe.png"
                  alt="Pro Tribe Logo"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-2/3"
            >
              <p className="text-white/90 mb-6">
                Pro Tribe businesses benefit from shared resources, collaborative opportunities, and a supportive 
                network of like-minded entrepreneurs dedicated to creating positive change in their communities.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/pro-tribe" 
                  className="bg-white text-[#010E2F] py-2 px-6 rounded-full font-medium hover:bg-blue-50 transition-colors"
                >
                  Learn About Pro Tribe
                </a>
                <a 
                  href="/contact" 
                  className="bg-white/10 text-white py-2 px-6 rounded-full font-medium hover:bg-white/20 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}