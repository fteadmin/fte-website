'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Leaf, 
  Heart, 
  Users, 
  Gem, 
  ArrowRight, 
  Activity, 
  Utensils, 
  Briefcase, 
  PartyPopper,
  Mountain, 
  Scroll,
  Globe,
  Sun
} from 'lucide-react';

export default function LifeConnectContent() {
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

  // Life Connect areas
  const areas = [
   
    { 
      name: "MaaHarvest", 
      icon: <Utensils className="h-6 w-6 text-blue-600" />,
      description: "Fresh, locally-sourced organic produce and sustainable goods supporting local farmers and artisans.",
      features: ["Farm-to-Table Products", "Zero-Waste Packaging", "Community Supported Agriculture"]
    }, 
    { 
      name: "Entrepreneur Lifestyle", 
      icon: <Briefcase className="h-6 w-6 text-blue-600" />,
      description: "Holistic approach to entrepreneurship that balances professional success with personal wellbeing and fulfillment.",
      features: ["Work-Life Integration", "Mindful Leadership", "Sustainable Business Practices"]
    }, 
    { 
      name: "House Party", 
      icon: <PartyPopper className="h-6 w-6 text-blue-600" />,
      description: "Community gatherings that foster authentic connections through shared experiences in welcoming spaces.",
      features: ["Themed Social Events", "Networking Opportunities", "Cultural Celebrations"]
    }

    // { 
    //   name: "Eco Tourism", 
    //   icon: <Mountain className="h-6 w-6 text-blue-600" />,
    //   description: "Immersive nature experiences that educate and inspire while preserving environmental integrity.",
    //   features: ["Guided Nature Retreats", "Conservation Projects", "Sustainable Adventure Tours"]
    // },
  ];

  return (
    <div className="bg-white">
      {/* Our Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">Our Vision</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Life Connect is built on the principle that true fulfillment comes from living in harmony with 
              nature and embracing practices that promote overall well-being. We're creating spaces and experiences 
              that nourish the body, mind, and spirit while fostering deeper connections to ourselves, our communities, 
              and our planet.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="p-6 rounded-xl border border-blue-100 shadow-sm bg-blue-50">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#010E2F]">Holistic Wellness</h3>
              <p className="text-gray-700">
                We integrate physical health, mental clarity, and spiritual growth to promote balance and 
                vitality in all aspects of life.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-6 rounded-xl border border-blue-100 shadow-sm bg-blue-50">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#010E2F]">Environmental Stewardship</h3>
              <p className="text-gray-700">
                Our practices honor and protect the natural world, promoting sustainability and 
                regenerative approaches in everything we do.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-6 rounded-xl border border-blue-100 shadow-sm bg-blue-50">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#010E2F]">Community Building</h3>
              <p className="text-gray-700">
                We foster meaningful connections and collaborative relationships that support personal growth 
                and collective wellbeing.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">Our Approach</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We take a nature-centered approach that harmonizes modern innovation with timeless wisdom, 
              creating experiences that reconnect people with themselves and the natural world.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-xl overflow-hidden shadow-md"
            >
              <Image 
src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000"
alt="Nature and Wellness" 
                width={600} 
                height={400} 
                className="object-cover w-full h-full"
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
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <Leaf className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#010E2F]">Mindful Integration</h3>
                    <p className="text-gray-700">We thoughtfully combine ancient wisdom with modern science to create balanced, effective approaches to wellness.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <Sun className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#010E2F]">Sustainable Practices</h3>
                    <p className="text-gray-700">Every decision we make considers its impact on the environment, prioritizing regenerative and eco-friendly solutions.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <Scroll className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#010E2F]">Educational Empowerment</h3>
                    <p className="text-gray-700">We provide knowledge and tools that empower individuals to make informed choices for their health and the planet.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Offerings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">Our Offerings</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover the diverse experiences and spaces within Life Connect, each designed to foster 
              connection, growth, and harmony with the natural world.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {areas.map((area, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg border border-gray-200"
              >
                <div className="h-48 bg-blue-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
                      {area.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#010E2F]">{area.name}</h3>
                  <p className="text-gray-700 mb-4">{area.description}</p>
                  <ul className="space-y-2 mb-4">
                    {area.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 mr-2 mt-1">
                          <Gem className="h-4 w-4 text-blue-500" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={`/life-connect/${area.name.toLowerCase().replace(/\s+/g, '-')}`}
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

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-br from-[#010E2F] via-[#0A2472] to-[#0E6BA8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Benefits of Life Connect</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              When you engage with Life Connect, you become part of a movement dedicated to creating a 
              healthier, more harmonious relationship with ourselves and our planet.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <Heart className="h-8 w-8 text-blue-300 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Improved Wellbeing</h3>
              <p className="text-white/80">
                Access holistic approaches to health that address physical, mental, and spiritual dimensions.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <Users className="h-8 w-8 text-blue-300 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Meaningful Connections</h3>
              <p className="text-white/80">
                Join a community of like-minded individuals who value authenticity, growth, and environmental stewardship.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <Leaf className="h-8 w-8 text-blue-300 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Eco-Conscious Living</h3>
              <p className="text-white/80">
                Discover practical ways to reduce your environmental footprint while enhancing your quality of life.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <Sun className="h-8 w-8 text-blue-300 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Personal Growth</h3>
              <p className="text-white/80">
                Access resources and experiences designed to support your journey of self-discovery and development.
              </p>
            </motion.div>
          </div>

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
              Join Our Community <ArrowRight className="ml-2 h-5 w-5" />
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
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">Community Stories</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Hear from our community members about their transformative experiences with Life Connect.
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
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">M</div>
                <div>
                  <h3 className="text-xl font-bold text-[#010E2F]">Maya Johnson</h3>
                  <p className="text-gray-600">Wellness Center Member</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Life Connect has completely changed my approach to health and wellness. The holistic programs 
                have helped me find balance in all areas of my life, and I've connected with an amazing community 
                of supportive individuals."
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">J</div>
                <div>
                  <h3 className="text-xl font-bold text-[#010E2F]">James Rivera</h3>
                  <p className="text-gray-600">Eco Tourism Participant</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The eco-tourism experiences offered by Life Connect have opened my eyes to the beauty of 
                sustainable travel. I've gained a deeper appreciation for nature while learning practical ways 
                to minimize my environmental impact."
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
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">Begin Your Life Connect Journey</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Whether you're seeking improved wellbeing, meaningful community connections, or ways to live more 
              harmoniously with nature, we invite you to explore what Life Connect has to offer.
            </p>
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white py-3 px-8 rounded-full font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}