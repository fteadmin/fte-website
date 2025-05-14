'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Video, Film, Users, Megaphone, Zap, Check, Globe, PlayCircle } from 'lucide-react';

export default function ScriptedContent() {
  // Service offerings by Scripted
  const offerings = [
    {
      title: "Multi-channel Audience Engagement",
      description: "Trailers, behind-the-scenes exclusives, and interactive story arcs that captivate audiences across platforms",
      icon: <Globe className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Talent-centered Exposure",
      description: "Curated showcases, digital casting calls, and community premieres that highlight emerging talent",
      icon: <Users className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Branded Story Campaigns",
      description: "Strategic content promotion that drives momentum before, during, and after content launches",
      icon: <Megaphone className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Cross-platform Collaborations",
      description: "Partnership opportunities with artists, producers, and storytellers in the Pro Tribe ecosystem",
      icon: <Zap className="h-6 w-6 text-blue-600" />
    }
  ];

  // Benefits of Scripted
  const benefits = [
    "Enhanced visibility for original creative content",
    "Direct connection to engaged target audiences",
    "Community building around branded entertainment",
    "Integrated promotion across digital channels",
    "Lead generation and fan loyalty development",
    "Empowered creators with narrative ownership"
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
                The Social Engine of Zariel & Co Multimedia Partners
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Where content becomes currency and creativity meets community
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <p className="text-lg text-gray-700 mb-6">
                  Scripted is the cultural ignition behind Zariel & Co Multimedia Partners, a production and entertainment company incubated within Pro Tribe. 
                  As the official social engine, Scripted turns creative development into community immersion—activating audiences, amplifying creators, and 
                  fueling visibility for projects born at the intersection of art, tech, and purpose.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Powered by the Life Connect cohort of Future Trends Enterprise Inc., Scripted is where content becomes currency. It transforms Zariel & Co{`'`}s 
                  multimedia offerings—from original films and live performances to digital streaming and talent showcases—into high-impact social activations. 
                  Scripted brings production to the people, positioning every release, audition, and collaboration as part of a larger, immersive brand experience.
                </p>
                <div className="flex items-center mt-8">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Film className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="ml-4 text-gray-600 italic">
                    {`"In a world full of noise, Scripted helps Zariel & Co tell unforgettable stories—and makes sure the world is watching."`}
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
            <h2 className="text-3xl font-bold text-[#010E2F] mb-4">Through Scripted, Zariel & Co gains:</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Strategic social activation that transforms creative content into community engagement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((offering, index) => (
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
                    {offering.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#010E2F] mb-4">{offering.title}</h3>
                  <p className="text-gray-600">{offering.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-[#010E2F]/90 to-[#0A2472]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-10"
          >
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-500/20 rounded-xl blur-xl"></div>
                <Image 
                    src="https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg" 
                    alt="Creative content production" 
                  width={600} 
                  height={400}
                  className="rounded-xl shadow-2xl relative z-10 w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-white/90 mb-6">
                  Whether launching a new series, incubating emerging creators, or premiering groundbreaking work, Scripted activates 
                  Zariel & Co{`'`}s mission to disrupt the entertainment industry with equity, innovation, and narrative ownership. Every post, 
                  event, and campaign becomes part of a larger movement—where visibility meets opportunity and creators own their spotlight.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500/20 p-2 rounded-lg">
                      <PlayCircle className="h-5 w-5 text-blue-300" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Content Amplification</h4>
                      <p className="text-white/70 text-sm">Strategic distribution across platforms</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500/20 p-2 rounded-lg">
                      <Video className="h-5 w-5 text-blue-300" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Creator Empowerment</h4>
                      <p className="text-white/70 text-sm">Supporting diverse voices and visions</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* <div className="mt-8">
                <a 
                  href="#" 
                  className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 text-white rounded-lg transition-all duration-300"
                >
                  Discover Our Projects
                </a>
              </div> */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}