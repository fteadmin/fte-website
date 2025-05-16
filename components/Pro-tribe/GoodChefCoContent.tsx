'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChefHat, Users, TrendingUp, CalendarDays } from 'lucide-react';

export default function GoodChefCoContent() {
  return (
    <div className="bg-white">
      {/* Chef Incubator Program Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">Chef Incubator Program</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We are transforming passionate chefs into successful entrepreneurs through our elite business accelerator, 
              state-of-the-art test kitchen, dedicated funding program, and a membership dining experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Good Chef Co represents the future of culinary entrepreneurship, offering a groundbreaking platform that unites 
              ambitious chefs with passionate food enthusiasts. Our innovative dual-market solution combines a comprehensive 
              chef incubator program with an exclusive membership-based dining community, creating unprecedented opportunities 
              for culinary innovation and exceptional dining experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Chef preparing food"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <ChefHat className="h-6 w-6 text-[#0A2472]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#010E2F]">Elite Business Accelerator</h3>
                  <p className="text-gray-600">Comprehensive business training tailored specifically for culinary professionals, covering everything from concept development to scaling operations.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-[#0A2472]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#010E2F]">Dedicated Funding Program</h3>
                  <p className="text-gray-600">Access to capital, investors, and financial guidance specifically designed for culinary ventures and restaurant concepts.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-[#0A2472]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#010E2F]">Membership Dining Experience</h3>
                  <p className="text-gray-600">A direct connection to food enthusiasts who provide feedback, support, and a built-in customer base for emerging chefs.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Engine Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">Good Chef Co Social Engine</h2>
            <p className="text-xl font-medium text-[#0E6BA8] mb-4">Welcome to The A List: Where Culinary Innovation Meets Dining Excellence</p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Good Chef Co's newest venture in downtown LA brings together emerging culinary talent and food enthusiasts. 
              The A List serves as both an incubator for ambitious chefs and a hub for our culinary membership community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-center mb-12 text-[#010E2F]">The A List Experience: A Culinary Playground</h3>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="h-48 bg-[#0A2472] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="Rotating Chefs"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3 text-[#010E2F]">Rotating Chefs</h4>
                  <p className="text-gray-600">
                    Experience diverse chef concepts that change regularly. Each dish tells a unique culinary story of the 
                    ingredients and the chef behind the food.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="h-48 bg-[#0A2472] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1581349485608-9469926a8e5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="Interactive Dining"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3 text-[#010E2F]">Interactive Dining</h4>
                  <p className="text-gray-600">
                    Enjoy chefs craft masterpieces in our test kitchen design. Every seat offers an experience of culinary artistry.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="h-48 bg-[#0A2472] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1470784790053-6c2f15489967?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="Exclusive Events"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3 text-[#010E2F]">Exclusive Events</h4>
                  <p className="text-gray-600">
                    Join special tastings, chef meet-and-greets, and investor showcases. Members get priority access.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Membership CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#010E2F] via-[#0A2472] to-[#0E6BA8] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Join Our Culinary Community</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Whether you're a chef looking to launch your culinary career or a food enthusiast seeking extraordinary dining 
              experiences, Good Chef Co offers a platform where passion meets opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#chef-application"
                className="bg-white text-[#0A2472] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Apply as a Chef
              </a>
              <a
                href="#membership"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                Join as a Member
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}