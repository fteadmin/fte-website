'use client';

import { motion } from 'framer-motion';
import { Building2, Leaf, Network } from 'lucide-react';
import Image from 'next/image';

export default function WhoWeAre() {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Who We Are Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-[#010E2F] mb-6">Who We Are</h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Future Trends Enterprise (FTE) is a forward-thinking technology company that seamlessly integrates advanced solutions across
            digital and physical spaces.
          </p>
        </motion.div>

        {/* Platform Sections - Updated Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-[#010E2F] mb-10">Our Flagship Platforms</h3>
          
          {/* Pro Tribe Section */}
          <div className="flex flex-col md:flex-row gap-8 mb-12 items-center">
            <div className="w-full md:w-2/5 flex justify-center">
              <div className="bg-[#010E2F]/5 rounded-xl p-8 flex items-center justify-center h-60 w-full md:w-80">
                <Image 
                  src="/assets/logos/protribe.png" 
                  alt="Pro Tribe Logo" 
                  width={300} 
                  height={120} 
                  className="w-full max-w-[250px] h-auto object-contain"
                />
              </div>
            </div>
            <div className="w-full md:w-3/5">
              <div className="bg-gradient-to-r from-[#010E2F] to-[#0A2472] text-white p-8 rounded-xl h-full">
                <h4 className="text-2xl font-bold mb-4 flex items-center">
                  <Building2 className="h-6 w-6 mr-2" />
                  Pro Tribe Ecosystem
                </h4>
                <p className="text-white/90 mb-4">
                  A comprehensive business incubator that builds new ventures, collaborates with existing businesses, and
                  provides growth solutions through our extensive networks and resources.
                </p>
                <ul className="list-disc pl-5 mt-3 text-white/80">
                  <li>Business development and strategic guidance</li>
                  <li>Access to industry networks and potential partners</li>
                  <li>Digital transformation solutions</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Life Connect Section - Updated with actual logo */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="w-full md:w-2/5 flex justify-center">
              <div className="bg-[#010E2F]/5 rounded-xl p-8 flex items-center justify-center h-60 w-full md:w-80">
                <Image 
                  src="/assets/logos/lifec.png" 
                  alt="Life Connect Logo" 
                  width={300} 
                  height={120} 
                  className="w-full max-w-[250px] h-auto object-contain"
                />
              </div>
            </div>
            <div className="w-full md:w-3/5">
              <div className="bg-gradient-to-r from-[#0E6BA8] to-[#0A2472] text-white p-8 rounded-xl h-full">
                <h4 className="text-2xl font-bold mb-4 flex items-center">
                  <Leaf className="h-6 w-6 mr-2" />
                  Life Connect Platform
                </h4>
                <p className="text-white/90 mb-4">
                  Our social engine platform focused on community building and increasing exposure for our partners.
                </p>
                <ul className="list-disc pl-5 mt-3 text-white/80">
                  <li>Enhanced social networking capabilities</li>
                  <li>Community-driven engagement features</li>
                  <li>Integrated business promotion tools</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Strategic Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-[#010E2F] mb-6">Strategic Vision</h3>
          <div className="bg-gradient-to-r from-[#010E2F] to-[#0E6BA8] text-white p-8 rounded-xl">
            <ul className="list-disc pl-5 space-y-3">
              <li>Create synergistic ecosystems that capitalize on emerging Web 3.0 technologies.</li>
              <li>Integration of health tech, fitness tech, sports tech, and entertainment tech.</li>
              <li>Leverage blockchain, AI, and metaverse technologies for seamless consumer experiences.</li>
              <li>Build bridges between digital and physical economies through innovative commerce solutions.</li>
              <li>Develop comprehensive community ecosystems that generate sustainable revenue streams.</li>
            </ul>
          </div>
        </motion.div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-[#010E2F] mb-6">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-[#010E2F]/10 bg-white shadow-sm">
              <h4 className="text-xl font-semibold text-[#010E2F] mb-3">Innovation</h4>
              <p className="text-gray-600">
                We constantly push the boundaries of what's possible, using technology to create new opportunities and solutions.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-[#010E2F]/10 bg-white shadow-sm">
              <h4 className="text-xl font-semibold text-[#010E2F] mb-3">Community</h4>
              <p className="text-gray-600">
                We believe in building strong communities that provide value, support, and opportunity for all members.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-[#010E2F]/10 bg-white shadow-sm">
              <h4 className="text-xl font-semibold text-[#010E2F] mb-3">Excellence</h4>
              <p className="text-gray-600">
              We are dedicated to achieving excellence in every facet of our operations, from product development to customer service.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}