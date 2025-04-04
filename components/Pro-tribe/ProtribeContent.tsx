'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Building2, Users, TrendingUp, Briefcase, Network, ArrowRight } from 'lucide-react';
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

  // Pro Tribe businesses
  const businesses = [
    { 
      name: "Sage Hospital", 
      category: "Healthcare", 
      logoSrc: "/assets/logos/sage.jpg",
      description: "Pioneering accessible healthcare solutions with innovative technology and patient-centered approaches."
    },
    { 
      name: "Zariel and Co", 
      category: "Fashion & Lifestyle", 
      logoSrc: "/assets/logos/z.jpg",
      description: "Elevating fashion with sustainable practices and timeless designs for the modern consumer."
    },
    { 
      name: "Phylos", 
      category: "Technology", 
      logoSrc: "/assets/logos/phylos.png",
      description: "Developing cutting-edge technology solutions that transform how businesses operate and connect."
    },
    { 
      name: "Nx LVL", 
      category: "Entertainment", 
      logoSrc: "/assets/logos/nx.jpg",
      description: "Creating immersive entertainment experiences that push boundaries and captivate audiences."
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
      logoSrc: "/assets/logos/lc.jpg",
      description: "Blending luxury with accessibility through exclusive fashion collections and styling services."
    },
  ];

  return (
    <div className="bg-white">

      {/* Our Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">Our Mission</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              At Pro Tribe, we believe in the power of collaboration, where every dollar spent within our community 
              circulates back to fuel the growth of our members. We're building an ecosystem where businesses thrive 
              through mutual support and shared resources.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#010E2F]">Business Incubation</h3>
              <p className="text-gray-600">
                We provide the infrastructure, mentorship, and resources needed to transform innovative ideas into 
                successful businesses, fostering entrepreneurship from concept to market launch.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Network className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#010E2F]">Community Building</h3>
              <p className="text-gray-600">
                We create powerful networks of entrepreneurs, investors, and experts who collaborate to 
                solve problems, share knowledge, and create opportunities within our ecosystem.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#010E2F]">Sustainable Growth</h3>
              <p className="text-gray-600">
                We focus on building businesses that create lasting value, with strategies that ensure 
                long-term success, scalability, and positive impact on communities.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">How We Work</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our approach combines strategic business development, technological innovation, and community engagement 
              to create thriving enterprises that support each other's growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-xl overflow-hidden"
            >
              <Image 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2670"
                alt="Collaboration" 
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#010E2F]">Identify Opportunities</h3>
                    <p className="text-gray-600">We research market gaps and emerging trends to identify high-potential business opportunities.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#010E2F]">Build Strategic Teams</h3>
                    <p className="text-gray-600">We assemble talented teams with the right expertise to execute business concepts effectively.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#010E2F]">Provide Resources & Support</h3>
                    <p className="text-gray-600">We offer funding, operational support, mentorship, and technological infrastructure.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#010E2F]">Foster Cross-Business Collaboration</h3>
                    <p className="text-gray-600">We create synergies between our businesses for mutual growth and shared success.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
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

      {/* Benefits of Joining Pro Tribe */}
      <section className="py-20 bg-gradient-to-br from-[#010E2F] via-[#0A2472] to-[#0E6BA8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Benefits of Joining Pro Tribe</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              When you become part of the Pro Tribe ecosystem, you gain access to a comprehensive suite of resources 
              and support structures designed to accelerate your business growth.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Users className="h-8 w-8 text-blue-300 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Shared Resources</h3>
              <p className="text-white/80">
                Access to pooled resources including technology, office space, marketing services, and administrative support.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Network className="h-8 w-8 text-blue-300 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Business Network</h3>
              <p className="text-white/80">
                Connect with entrepreneurs, investors, mentors, and industry experts who can accelerate your growth.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Briefcase className="h-8 w-8 text-blue-300 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Strategic Guidance</h3>
              <p className="text-white/80">
                Expert advice on business development, market entry, growth strategies, and operational efficiency.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <TrendingUp className="h-8 w-8 text-blue-300 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Growth Opportunities</h3>
              <p className="text-white/80">
                Cross-promotion within our ecosystem and access to new markets through our established channels.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link 
              href="/contact" 
              className="bg-white text-[#010E2F] py-3 px-8 rounded-full font-medium hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              Join Our Ecosystem <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">Success Stories</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Hear from our partners about their experience working within the Pro Tribe ecosystem.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">S</div>
                <div>
                  <h3 className="text-xl font-bold text-[#010E2F]">Sage Hospital</h3>
                  <p className="text-gray-600">Healthcare Innovation</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Being part of Pro Tribe has accelerated our growth beyond what we could have achieved independently. 
                The shared resources and network connections have been invaluable to our expansion."
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">Z</div>
                <div>
                  <h3 className="text-xl font-bold text-[#010E2F]">Zariel and Co</h3>
                  <p className="text-gray-600">Fashion & Lifestyle</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The collaborative environment within Pro Tribe has opened doors to partnerships we wouldn't have 
                discovered otherwise. Our business has grown exponentially since joining the ecosystem."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
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