'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Building, Activity, Calendar, Users, Compass, Check, Star, Target } from 'lucide-react';

export default function HousePartyContent() {
  // Experience offerings by House Party
  const experiences = [
    {
      title: "Luxury Experience Activations",
      description: "Invite-only mixers, urban development unveilings, and lifestyle concierge lounges reflecting Sage's commitment to comfort and elite service",
      icon: <Star className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Brand Awareness Events",
      description: "Dynamic, people-first environments that showcase Sage's innovative service model and build trust with potential clients",
      icon: <Building className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Lead Generation Gatherings",
      description: "Strategic events that invite prospects into a living example of the Sage lifestyle, fueling client acquisition and loyalty",
      icon: <Target className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Brand Storytelling Experiences",
      description: "Immersive events that tell the Sage story as a movement redefining real estate and hospitality",
      icon: <Activity className="h-6 w-6 text-blue-600" />
    }
  ];

  // Benefits of House Party
  const benefits = [
    "Humanized luxury real estate and concierge experiences",
    "Strong community connections through curated gatherings",
    "Enhanced client loyalty and referral networks",
    "Content generation for multi-channel marketing",
    "Direct showcase of Sage's service excellence",
    "Transformation of transactional interactions into memorable experiences"
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
                The Social Engine of Sage Hospitality
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Where sophistication in real estate meets the power of lifestyle engagement
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <p className="text-lg text-gray-700 mb-6">
                  The House Party is the vibrant social engine behind Sage Hospitality and Lifestyle Concierge, fusing the sophistication of real estate and concierge 
                  excellence with the connective power of lifestyle engagement. Powered by Life Connect, the community activation arm of Future Trends Enterprise Inc., 
                  The House Party is where innovation in service meets celebration of culture, turning every touchpoint into a brand experience.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  At its core, The House Party is designed to humanize Sage's premium offerings—residential buying, commercial real estate, and white-glove concierge 
                  services—through curated gatherings that blend professional intention with social resonance. It transforms the transactional into the transformational 
                  by making real estate personal, immersive, and community-centered.
                </p>
                <div className="flex items-center mt-8">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Compass className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="ml-4 text-gray-600 italic">
                    "It's not just where deals are discussed—it's where legacy is felt."
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
            <h2 className="text-3xl font-bold text-[#010E2F] mb-4">Through The House Party, Sage Hospitality:</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Creating immersive experiences that transform space into story, and service into celebration
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

      {/* Content Engine Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <Image 
                  src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=1000" 
                  alt="Luxury Gathering" 
                  width={600} 
                  height={400}
                  className="rounded-xl shadow-xl object-cover w-full h-auto"
                />
              </div>
              
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-[#010E2F] mb-6">Experiential Marketing & Brand Immersion</h2>
                <p className="text-lg text-gray-700 mb-6">
                  These curated events double as experiential marketing and brand immersion, featuring elements like smart property demos, 
                  lifestyle panels, and wellness activations—all aligned with Sage's vision for an Urban Living Renaissance and Next-Gen 
                  Hospitality Hubs.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  By integrating Life Connect's multi-channel engagement strategy, The House Party ensures that every event is also a content 
                  engine, a network builder, and a market signal. Whether it's a rooftop affair overlooking a new smart complex or a digital 
                  soirée introducing Sage's latest concierge solutions, The House Party transforms space into story, and service into celebration.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500/10 p-2 rounded-lg">
                      <Calendar className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#010E2F]">Curated Events</h4>
                      <p className="text-gray-600 text-sm">Invitation-only experiences</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500/10 p-2 rounded-lg">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#010E2F]">Network Building</h4>
                      <p className="text-gray-600 text-sm">Strategic connections</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}