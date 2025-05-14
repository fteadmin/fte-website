'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Leaf, Utensils, Calendar, Users, Sprout, Check, ShoppingBag } from 'lucide-react';

export default function MaaharvestContent() {
  // Experience offerings by Maa Harvest
  const experiences = [
    {
      title: "Seasonal Chef-Led Events",
      description: "Immersive culinary experiences tied to cultural and wellness themes, featuring local seasonal ingredients",
      icon: <Calendar className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Live Storytelling & Demos",
      description: "Interactive culinary demonstrations and heritage food storytelling sessions designed for social amplification",
      icon: <Utensils className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Product Launches",
      description: "Tasting tables and showcase events for Good Chef Co members to introduce new culinary creations to the community",
      icon: <ShoppingBag className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Holistic Lifestyle Events",
      description: "Wellness-focused gatherings that connect food, community, and mindful living practices",
      icon: <Users className="h-6 w-6 text-blue-600" />
    }
  ];

  // Benefits of Maa Harvest
  const benefits = [
    "Connection to local regenerative farms and ethical producers",
    "Access to indigenous crops and traditional culinary practices",
    "Community building through shared culinary experiences",
    "Education about sustainable food systems and practices",
    "Support for local chefs and food entrepreneurs",
    "Exposure to holistic nutrition and healing food traditions"
  ];

  return (
    <div>
      {/* About Platform Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#010E2F] mb-6">
                A Curated Chef's Farm-to-Table Experience
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Where nourishment, culture, and community connection unite
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <p className="text-lg text-gray-700 mb-6">
                  Maa Harvest is more than just a culinary event—it is the soul-nourishing ritual that unites the Life Connect Cohort
                  under a shared mission of holistic living, conscious consumption, and community restoration. Developed as a signature 
                  activation of Good Chef Co, a vertical incubated through Pro Tribe, Maa Harvest represents the crossroads of nourishment, 
                  culture, and connection.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Rooted in the principles of farm-to-table authenticity, Maa Harvest is a seasonal, chef-led experience that brings 
                  communities together through curated menus sourced from local regenerative farms, ethical producers, and indigenous growers. 
                  Every dish tells a story—of heritage, healing, and harmony.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  But Maa Harvest isn't just about the food. It's about rebuilding our relationship with the land, each other, and our lifestyle choices. 
                  Within the Life Connect engine, it serves as a vibrant social driver, offering immersive experiences that do more than feed the body—they 
                  inspire the spirit. Each gathering becomes a digital and physical touchpoint for storytelling, brand-building, and visibility for the chefs 
                  and creators within the Good Chef Co network.
                </p>
                <div className="flex items-center mt-8">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Leaf className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="ml-4 text-gray-600 italic">
                    "Every meal is a celebration of our connection to the earth and each other."
                  </p>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg border border-blue-200">
                  <h3 className="text-2xl font-bold text-[#010E2F] mb-6">Experience Benefits</h3>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="bg-blue-500/10 p-1 rounded-full mt-1">
                          <Check className="h-4 w-4 text-blue-600" />
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-[#010E2F] mb-4">Pro Tribe Incubator Activation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A revenue-generating showcase and community builder powering culinary innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                    {experience.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#010E2F] mb-4">{experience.title}</h3>
                  <p className="text-gray-600">{experience.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      {/* <section className="py-20 bg-gradient-to-br from-[#010E2F]/90 to-[#0A2472]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-6">
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-blue-300 font-medium">
                <span>Our Vision</span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transforming Tables into Movements
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto mb-12">
              Whether in an open field, urban rooftop, or intimate dining hall, Maa Harvest transforms every table into a movement—anchored in taste, trust, and transformation.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10"
              >
                <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-4xl text-white">🌱</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Taste</h3>
                <p className="text-white/80 text-center">
                  Celebrating the authentic flavors of locally-sourced, seasonally-inspired ingredients prepared with heritage techniques.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10"
              >
                <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-4xl text-white">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Trust</h3>
                <p className="text-white/80 text-center">
                  Building transparent relationships between chefs, farmers, and consumers through ethical food practices and storytelling.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10"
              >
                <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-4xl text-white">✨</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Transformation</h3>
                <p className="text-white/80 text-center">
                  Creating experiences that shift perspectives on food systems, community connection, and sustainable living.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
}