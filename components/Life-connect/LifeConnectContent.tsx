'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Utensils, Briefcase, PartyPopper, Mountain, Check } from 'lucide-react';

interface LifeConnectAreaProps {
  name: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  logoSrc?: string;
}

const LifeConnectArea = ({ name, description, icon, features, logoSrc }: LifeConnectAreaProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/15">
      <div className="p-8">
        <div className="flex flex-col items-center gap-4 mb-6">
          {logoSrc ? (
            <div className="w-40 h-20 mb-2">
              <Image 
                src={logoSrc} 
                alt={`${name} Logo`} 
                width={160} 
                height={80} 
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <div className="rounded-full bg-blue-500/20 p-3 flex items-center justify-center">
              {icon}
            </div>
          )}
          <h3 className="text-2xl font-bold text-white text-center">{name}</h3>
        </div>
        <p className="text-white/80 mb-6">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <span className="text-white/80">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function LifeConnectContent() {
  // Life Connect areas with their features and logos
  const areas = [
    { 
      name: "MaaHarvest", 
      icon: <Utensils className="h-6 w-6 text-blue-400" />,
      logoSrc: "/assets/logos/mah.jpg",
      description: "Fresh, locally-sourced organic produce and sustainable goods supporting local farmers and artisans.",
      features: ["Farm-to-Table Products", "Zero-Waste Packaging", "Community Supported Agriculture"]
    }, 
    { 
      name: "Entrepreneur Lifestyle", 
      icon: <Briefcase className="h-6 w-6 text-blue-400" />,
      logoSrc: "/assets/logos/el.jpg",
      description: "Holistic approach to entrepreneurship that balances professional success with personal wellbeing and fulfillment.",
      features: ["Work-Life Integration", "Mindful Leadership", "Sustainable Business Practices"]
    }, 
    { 
      name: "House Party", 
      icon: <PartyPopper className="h-6 w-6 text-blue-400" />,
      logoSrc: "/assets/logos/hp.jpg",
      description: "Community gatherings that foster authentic connections through shared experiences in welcoming spaces.",
      features: ["Themed Social Events", "Networking Opportunities", "Cultural Celebrations"]
    }
  ];

  return (
    <div>
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            <div className="lg:w-1/2">
              {/* Removed the Life Connect logo div from here */}
              <h2 className="text-4xl font-bold text-[#010E2F] mb-6">Nurturing Holistic Growth</h2>
              <p className="text-lg text-gray-700 mb-8">
                Life Connect is a platform dedicated to promoting wellness, sustainability, and mindful living. We believe that 
                true fulfillment comes from living in harmony with nature and embracing practices that promote overall well-being.
              </p>
              <p className="text-lg text-gray-700">
                Through our community initiatives, sustainable products, and wellness events, we create spaces where people can 
                connect with nature, themselves, and each other in meaningful ways.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image 
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000"
                alt="Nature and Wellness" 
                width={600} 
                height={400} 
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Life Connect Areas */}
      <section className="py-20 bg-gradient-to-b from-[#010E2F] to-[#0A2472]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Approach</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Life Connect embraces a multifaceted approach to wellness and community building through our specialized focus areas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <LifeConnectArea 
                  name={area.name} 
                  description={area.description} 
                  icon={area.icon}
                  logoSrc={area.logoSrc}
                  features={area.features} 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-[#010E2F] mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Life Connect, our approach is guided by core principles that promote balance, authenticity, and connection.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200"
            >
              <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Mountain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-[#010E2F] mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We are committed to environmentally responsible practices and products that minimize our ecological footprint while maximizing positive impact.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200"
            >
              <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#010E2F] mb-4">Community</h3>
              <p className="text-gray-600">
                We foster authentic connections through shared experiences, creating spaces where people feel valued, supported, and inspired.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200"
            >
              <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#010E2F] mb-4">Wellness</h3>
              <p className="text-gray-600">
                We embrace a holistic approach to well-being that nurtures mind, body, and spirit through mindful practices and healthy living.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#010E2F] to-[#0A2472]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Join Our Community</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Be part of a growing movement dedicated to mindful living and sustainable practices.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-3 bg-white text-[#010E2F] rounded-full font-medium hover:bg-blue-50 transition-all duration-300"
            >
              Connect With Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}