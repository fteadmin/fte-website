'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BarChart2, Users, Zap, MessageSquare, Target, Check, TrendingUp, Award } from 'lucide-react';

export default function LevelUpContent() {
  // Service offerings by Level Up
  const offerings = [
    {
      title: "Brand Storytelling",
      description: "Public narrative crafting that transforms your business journey into compelling content",
      icon: <MessageSquare className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Social Media Activations",
      description: "Themed digital content and strategic campaigns that amplify your business presence",
      icon: <Zap className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Startup Spotlight Showcases",
      description: "Micro-demo days and feature opportunities that increase visibility for your venture",
      icon: <Award className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Thought Leadership Forums",
      description: "Peer-driven roundtables and content features that position you as an industry voice",
      icon: <Users className="h-6 w-6 text-blue-600" />
    }
  ];

  // Benefits of Level Up
  const benefits = [
    "Enhanced visibility in competitive markets",
    "Community support from fellow entrepreneurs",
    "Strategic content that drives lead generation",
    "Credibility building through consistent exposure",
    "Access to Pro Tribe's business incubator resources",
    "Transformation of business milestones into marketing moments"
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
                The Social Engine of NXNLVL
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Where business building becomes a public journey and growth becomes a movement
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <p className="text-lg text-gray-700 mb-6">
                  Level Up is the activation core of NXNLVL, the business-building vertical of Pro Tribe, created to accelerate growth for 
                  emerging entrepreneurs and early-stage ventures. As the social engine of NXNLVL, Level Up transforms brand development 
                  into a public journey—where building a business is not just a task, but a movement.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Powered by Life Connect, the multi-channel visibility engine of Future Trends Enterprise Inc., Level Up drives exposure, 
                  engagement, and elevation. It offers entrepreneurs the visibility they need to scale, by wrapping strategy in story and 
                  growth in community. Through curated showcases, themed digital content, live pitch forums, and collaborative campaigns, 
                  Level Up ensures that each NXNLVL venture doesn't just grow—it gets seen.
                </p>
                <div className="flex items-center mt-8">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="ml-4 text-gray-600 italic">
                    {`"More than marketing—Level Up is movement-building for entrepreneurs on the rise."`}
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
            <h2 className="text-3xl font-bold text-[#010E2F] mb-4">Through Level Up, NXNLVL entrepreneurs unlock:</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Strategic visibility tools that transform business growth into a public journey
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

      {/* Vision Section */}
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
                  src="/assets/images/business-growth.jpg" 
                  alt="Business growth concept" 
                  width={600} 
                  height={400}
                  className="rounded-xl shadow-2xl relative z-10 w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.pexels.com/photos/7376/startup-photos.jpg";
                  }}
                />
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
                <p className="text-white/90 mb-6">
                  Whether launching a product, validating a service, or pivoting a brand, Level Up is where founders go to be heard, seen, 
                  and supported in real time. Each activation under Level Up becomes a platform for visibility, a stage for credibility, 
                  and a pipeline for opportunity.
                </p>
                <p className="text-white/90 mb-6">
                  It transforms every milestone into momentum, every challenge into content, and every founder into a voice of influence.
                  If NXNLVL is where businesses are built, then Level Up is where their stories come to life.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500/20 p-2 rounded-lg">
                      <Target className="h-5 w-5 text-blue-300" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Lead Generation</h4>
                      <p className="text-white/70 text-sm">Traffic back to Pro Tribe's incubator</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500/20 p-2 rounded-lg">
                      <BarChart2 className="h-5 w-5 text-blue-300" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Business Growth</h4>
                      <p className="text-white/70 text-sm">Visibility that drives sustainable scaling</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="/pro-tribe" 
                  className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 text-white rounded-lg transition-all duration-300"
                >
                  Explore Pro Tribe
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}