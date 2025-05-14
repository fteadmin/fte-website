'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Utensils, Briefcase, PartyPopper, Mountain, Check, Users, Megaphone, ArrowRight } from 'lucide-react';

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
              <h2 className="text-4xl font-bold text-[#010E2F] mb-6">Life Connect- of Future Trends Enterprise Inc. (FTE)</h2>
              <p className="text-lg text-gray-700 mb-8">
                Life Connect is designed to amplify and activate the businesses developed within the Pro Tribe incubator. 
                More than a platform—Life Connect is a multi-channel visibility and engagement engine, offering entrepreneurs 
                the digital real estate, audience reach, and exposure necessary to grow loyal customer bases and maximize impact.
              </p>
              <p className="text-lg text-gray-700">
                As Pro Tribe incubates new ventures across various verticals—from wellness and fashion to tech and hospitality—Life Connect 
                serves as the connective tissue that links these businesses to the communities they serve. It creates branded channels, 
                themed social platforms, curated digital events, and interactive campaigns that are all designed to drive awareness, 
                generate leads, and foster trust in the marketplace.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000"
                alt="Business Growth" 
                width={600} 
                height={400} 
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ProTribe Connection Section */}
      <section className="py-20 bg-gradient-to-r from-[#010E2F] to-[#0A2472]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-6">
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-blue-300 font-medium inline-flex items-center">
                <Megaphone className="h-4 w-4 mr-2" />
                <span>Amplify Your Business</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Visibility Engine for <span className="text-blue-300">Pro Tribe</span> Entrepreneurs
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Through Life Connect, FTE extends its ecosystem beyond business development into full-scale community activation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 h-full">
                <h3 className="text-2xl font-bold text-white mb-6">Community Activation Engine</h3>
                <p className="text-white/80 mb-5">
                  Through Life Connect, FTE extends its ecosystem beyond business development into full-scale community activation, supporting:
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">Brand storytelling and content-driven marketing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">Segmented audience engagement for niche verticals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">Event-based exposure such as digital showcases, community roundtables, and live shopping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">Lead generation loops that recycle attention back into the Pro Tribe</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000"
                alt="Business Marketing" 
                width={600} 
                height={400} 
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Empowering Entrepreneurial Movements</h3>
            <p className="text-white/80 mb-6">
              Whether it's launching a new product line, growing a member-based service, or creating a lifestyle movement, 
              Life Connect empowers FTE entrepreneurs to scale their brand narratives into movements. It transforms each venture 
              from a business idea into a cultural presence, giving entrepreneurs the tools to build not just wealth—but influence, 
              loyalty, and lasting connection.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-blue-500/20 p-2 rounded-lg mt-1">
                  <Megaphone className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Amplified Visibility</h4>
                  <p className="text-white/70">Strategic positioning in front of targeted audiences</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-500/20 p-2 rounded-lg mt-1">
                  <Users className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Community Building</h4>
                  <p className="text-white/70">Fostering engaged and loyal customer communities</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-500/20 p-2 rounded-lg mt-1">
                  <PartyPopper className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Cultural Impact</h4>
                  <p className="text-white/70">Creating movements that transcend typical business boundaries</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-500/20 p-2 rounded-lg mt-1">
                  <ArrowRight className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Scalable Growth</h4>
                  <p className="text-white/70">Frameworks for sustainable business expansion</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Life Connect Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-[#010E2F] mb-4">Our Approach</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Life Connect embraces a multifaceted approach to business amplification through our specialized focus areas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {areas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 overflow-hidden shadow-md"
              >
                <div className="p-8">
                  <div className="flex items-center justify-center mb-6">
                    {area.logoSrc ? (
                      <div className="w-32 h-16 mb-2">
                        <Image 
                          src={area.logoSrc} 
                          alt={`${area.name} Logo`} 
                          width={128} 
                          height={64} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="rounded-full bg-blue-500/20 p-3 flex items-center justify-center">
                        {area.icon}
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-[#010E2F] mb-4 text-center">{area.name}</h3>
                  <p className="text-gray-600 mb-6 text-center">{area.description}</p>
                  <ul className="space-y-3">
                    {area.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-[#010E2F] to-[#0A2472]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              At Life Connect, our approach is guided by core principles that promote entrepreneurship, growth, and community connection.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10"
            >
              <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Mountain className="h-8 w-8 text-blue-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Visibility</h3>
              <p className="text-white/80">
                We create powerful platforms that amplify entrepreneurial voices and give businesses the exposure they need to thrive in competitive markets.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10"
            >
              <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Community</h3>
              <p className="text-white/80">
                We foster authentic connections between businesses and their audiences, creating engaged communities that drive sustainable growth.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10"
            >
              <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Impact</h3>
              <p className="text-white/80">
                We're committed to helping entrepreneurs build not just successful businesses, but ventures that create lasting cultural impact and meaningful change.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-[#010E2F] mb-6">Amplify Your Business</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to transform your business idea into a cultural movement? Join the Life Connect platform and leverage our visibility engine to grow your audience.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#010E2F] to-[#0A2472] text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              Connect With Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}