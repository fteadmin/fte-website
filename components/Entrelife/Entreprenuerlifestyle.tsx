'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Network, Users, Target, Share2, Lightbulb, Check, ArrowRight } from 'lucide-react';

export default function EntrepreneurLifestyle() {
  // Features offered by Entrepreneur Lifestyle
  const features = [
    {
      title: "Marketing and Promotion",
      description: "Showcase and promote your FTE-aligned business to a targeted audience of entrepreneurs and potential clients",
      icon: <Share2 className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Community Networking",
      description: "Connect with like-minded entrepreneurs for partnerships, collaborations, and cross-promotional opportunities",
      icon: <Network className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Lead Generation",
      description: "Gain direct access to new clientele and build a pipeline of qualified prospects within the FTE ecosystem",
      icon: <Target className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Peer Collaboration",
      description: "Share resources, exchange knowledge, and develop referral networks with fellow entrepreneurs",
      icon: <Users className="h-6 w-6 text-blue-500" />
    }
  ];

  // Benefits of using Entrepreneur Lifestyle
  const benefits = [
    "Increased visibility within a targeted entrepreneurial community",
    "Access to a supportive network of mentors and peers",
    "Opportunities for strategic partnerships and joint ventures",
    "Platform to showcase milestones and business achievements",
    "Real-time feedback from experienced entrepreneurs",
    "Direct connection to potential clients and customers"
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
                The Entrepreneur's Social Hub
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Where business development meets community growth
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <p className="text-lg text-gray-700 mb-6">
                  Entrepreneur Lifestyle is the dynamic social networking hub within the Life Connect cohort of Future Trends Enterprise Inc. (FTE). 
                  Built for entrepreneurs navigating the Tier 1 journey of business development, this platform serves as a powerful tool for connection, 
                  collaboration, and client acquisition. It offers a dedicated space for members to showcase their ventures, share milestones, exchange 
                  resources, and cultivate strategic relationships.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  As an extension of FTE's mission to build sustainable wealth through structured business development, Entrepreneur Lifestyle bridges 
                  the gap between learning and launching by giving entrepreneurs real-time exposure. Whether you're marketing your products, seeking 
                  feedback, or networking for joint ventures, this platform empowers members to grow their visibility while staying immersed in a 
                  supportive and opportunity-rich ecosystem.
                </p>
                <div className="flex items-center mt-8">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Lightbulb className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="ml-4 text-gray-600 italic">
                    "Your network is your net worth. Entrepreneur Lifestyle helps you build both."
                  </p>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg border border-blue-200">
                  <h3 className="text-2xl font-bold text-[#010E2F] mb-6">Platform Benefits</h3>
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
            <h2 className="text-3xl font-bold text-[#010E2F] mb-4">Tailored Features for Entrepreneurs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tools and resources designed to help you connect, grow, and succeed
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
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
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#010E2F] mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section - Commented Out
      <section id="join-platform" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-12 text-center shadow-xl border border-blue-200"
          >
            <h2 className="text-3xl font-bold text-[#010E2F] mb-6">Join Entrepreneur Lifestyle Today</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Become part of a thriving community that helps you turn your business vision into reality with the support, connections, and exposure you need to succeed.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#010E2F] to-[#0A2472] text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              Get Started
            </a>
            <p className="mt-4 text-gray-600">
              Already a Pro Tribe member? <a href="/login" className="text-blue-600 font-medium">Log in here</a>
            </p>
          </motion.div>
        </div>
      </section>
      */}
    </div>
  );
}