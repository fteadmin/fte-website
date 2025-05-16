'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Building2, Users, TrendingUp, Briefcase, Network, ArrowRight, Database, UserPlus, Layers, Cpu } from 'lucide-react';
import Link from 'next/link';

export default function ProtribeContent() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
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

  // Pro Tribe businesses with updated categories
  const businesses = [
    { 
      name: "Sage Hospitality", 
      category: "Real Estate", 
      logoSrc: "/assets/logos/sage.jpg",
      description: "Making homeownership accessible and enjoyable by providing all real estate and concierge services in one place."
    },
    { 
      name: "Zariel and Co", 
      category: "Multimedia & Entertainment", 
      logoSrc: "/assets/logos/z.jpg",
      description: "A production and entertainment company creating content at the intersection of art, tech, and purpose."
    },
    { 
      name: "Phylos", 
      category: "Technology", 
      logoSrc: "/assets/logos/phylos.png",
      description: "Developing cutting-edge technology solutions that transform how businesses operate and connect."
    },
    { 
      name: "Nx LVL", 
      category: "Business Development", 
      logoSrc: "/assets/logos/nx.jpg",
      description: "Accelerating growth for entrepreneurs and early-stage ventures through strategic visibility and community engagement."
    },
    { 
      name: "Good Chef Co", 
      category: "Food & Beverage", 
      logoSrc: "/assets/logos/good.png",
      description: "Reimagining culinary experiences with sustainable, locally-sourced ingredients and innovative flavors."
    },
    { 
      name: "Launch Couture", 
      category: "Fashion & Lifestyle", 
      logoSrc: "/assets/logos/lc.png",
      description: "Blending luxury with accessibility through exclusive fashion collections and styling services."
    },
  ];

  return (
    <div className="bg-white">

      {/* Our Framework */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">A Progressive Framework for Success</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The Pro Tribe Ecosystem is more than just a business incubator—it is a dynamic, interconnected network designed to build, scale, and sustain ventures through a holistic approach that integrates information, data, community, support, and technology.
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
              At Pro Tribe, we believe that success is not achieved in isolation but through collaboration, resource-sharing, and strategic innovation. Our framework is designed to maximize economic circulation within our ecosystem, ensuring that every dollar spent fuels the collective prosperity of our members.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div variants={itemVariants} className="p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#010E2F]">Data-Driven Growth & Business Intelligence</h3>
              <p className="text-gray-600">
                We leverage data and market insights to help businesses make informed decisions, identify emerging trends, and refine their strategies.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <UserPlus className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#010E2F]">Community-Driven Success & Network Expansion</h3>
              <p className="text-gray-600">
                The Pro Tribe community is the foundation of our ecosystem, built on shared success and cooperative economics.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#010E2F]">Integrated Support & Tailored Solutions</h3>
              <p className="text-gray-600">
                We provide a support system that addresses the full lifecycle of business growth, from funding to operations.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#010E2F]">Cutting-Edge Technology & Digital Infrastructure</h3>
              <p className="text-gray-600">
                Our platform is equipped with AI-driven tools and automated solutions to enhance efficiency, scalability, and innovation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Data-Driven Growth Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">Data-Driven Growth & Business Intelligence</h2>
                <p className="text-lg text-gray-700 mb-6">
                  We leverage data and market insights to help businesses make informed decisions, identify emerging trends, and refine their strategies. Our analytics-driven approach enables members to:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">✓</div>
                    <p className="text-gray-700">Access real-time business intelligence to enhance decision-making.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">✓</div>
                    <p className="text-gray-700">Optimize marketing and customer engagement using predictive analytics.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">✓</div>
                    <p className="text-gray-700">Identify high-impact collaborations through trend mapping and ecosystem tracking.</p>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2">
                <Image 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                  alt="Data Analytics" 
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community-Driven Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">Community-Driven Success & Network Expansion</h2>
                <p className="text-lg text-gray-700 mb-6">
                  The Pro Tribe community is the foundation of our ecosystem, built on shared success and cooperative economics. Members benefit from:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-sm">✓</div>
                    <p className="text-gray-700">Peer-to-peer mentoring and industry-specific knowledge exchange.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-sm">✓</div>
                    <p className="text-gray-700">Cross-promotions and joint ventures to amplify brand visibility.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-sm">✓</div>
                    <p className="text-gray-700">Collective bargaining power to negotiate better business terms and opportunities.</p>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2">
                <Image 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80"
                  alt="Community Collaboration" 
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integrated Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">Integrated Support & Tailored Solutions</h2>
                <p className="text-lg text-gray-700 mb-6">
                  We provide a support system that addresses the full lifecycle of business growth, including:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-sm">✓</div>
                    <p className="text-gray-700">Access to funding opportunities, microloans, and CDFI partnerships.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-sm">✓</div>
                    <p className="text-gray-700">Business development coaching, operational strategies, and compliance assistance.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-sm">✓</div>
                    <p className="text-gray-700">Legal, financial, and administrative concierge services to streamline operations.</p>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2">
                <Image 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
                  alt="Business Support" 
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">Cutting-Edge Technology & Digital Infrastructure</h2>
                <p className="text-lg text-gray-700 mb-6">
                  The Pro Tribe platform is equipped with AI-driven tools and automated solutions to enhance efficiency, scalability, and innovation. Through:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-600 flex items-center justify-center text-white font-bold text-sm">✓</div>
                    <p className="text-gray-700">AI-powered business diagnostics, members receive tailored growth plans.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-600 flex items-center justify-center text-white font-bold text-sm">✓</div>
                    <p className="text-gray-700">Automated workflow integrations that optimize productivity.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-600 flex items-center justify-center text-white font-bold text-sm">✓</div>
                    <p className="text-gray-700">Digital marketplace solutions that allow members to connect with clients seamlessly.</p>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2">
                <Image 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
                  alt="Technology Solutions" 
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Circular Economy Section */}
      <section className="py-20 bg-gradient-to-br from-[#010E2F] via-[#0A2472] to-[#0E6BA8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">A Circular Economy Model</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Every interaction within the Pro Tribe Ecosystem is designed to keep resources circulating within the community.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Network className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Member-to-Member Transactions</h3>
              <p className="text-white/80">
                Prioritizing member-to-member transactions to strengthen financial sustainability.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Exclusive Investment Opportunities</h3>
              <p className="text-white/80">
                Creating exclusive investment opportunities for ecosystem participants.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Wealth & Knowledge Recycling</h3>
              <p className="text-white/80">
                Ensuring that wealth and knowledge recycle within the network, leading to long-term success.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Through the strategic fusion of information, data, community, support, and technology, Pro Tribe is redefining business success—not just as individual achievement, but as a collective movement toward financial independence, innovation, and wealth-building.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Business Portfolio */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">Our Business Portfolio</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover the innovative companies that are part of the Pro Tribe ecosystem, each contributing uniquely 
              to our collective vision of building successful, sustainable businesses.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {businesses.map((business, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <div className="h-48 bg-gray-100 flex items-center justify-center p-6">
                  <Image 
                    src={business.logoSrc} 
                    alt={`${business.name} logo`} 
                    width={200} 
                    height={120} 
                    className="object-contain h-full max-h-36"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm font-medium text-blue-600 mb-2 block">{business.category}</span>
                  <h3 className="text-xl font-bold mb-3 text-[#010E2F]">{business.name}</h3>
                  <p className="text-gray-600 mb-4">{business.description}</p>
                  <Link 
                    href={`/pro-tribe/${business.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-blue-600 font-medium flex items-center hover:text-blue-700"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">Ready to Join Pro Tribe?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Whether you're looking to start a new business, grow an existing one, or collaborate with our ecosystem, 
              we're here to help you succeed. Take the first step towards joining our thriving community.
            </p>
            <Link 
              href="/contact" 
              className="bg-[#010E2F] text-white py-3 px-8 rounded-full font-medium hover:bg-blue-800 transition-colors inline-flex items-center"
            >
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}