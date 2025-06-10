'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Rocket, Users, BookOpen, TrendingUp, Target, Network, Layers, Award, Lightbulb } from 'lucide-react';

export default function LaunchCoutureContent() {
  return (
    <div className="bg-white">
      {/* Business Incubator Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">Launch Couture Business Incubator Program</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Elevating fashion and beauty entrepreneurs to new heights through our innovative four-tier development model.
              We provide a comprehensive platform for industry advancement, supporting creators at every stage of their journey.
            </p>
          </motion.div>

          <div className="relative h-[400px] rounded-xl overflow-hidden mb-16">
            <Image
              src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt="Fashion designers collaborating"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#010E2F]/80 to-transparent flex items-end">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Empowering Fashion & Beauty Innovators</h3>
                <p className="text-white/90">Where creativity meets business acumen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">Our Mission</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl p-8 text-center shadow-md"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="h-8 w-8 text-[#0A2472]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#010E2F]">Empower</h3>
              <p className="text-gray-600">
                Transform ambitious creators into industry leaders
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl p-8 text-center shadow-md"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-[#0A2472]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#010E2F]">Guide</h3>
              <p className="text-gray-600">
                Provide structured pathways to success
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl p-8 text-center shadow-md"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Network className="h-8 w-8 text-[#0A2472]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#010E2F]">Connect</h3>
              <p className="text-gray-600">
                Build an exclusive community of innovators
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Landscape Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">Industry Landscape: Why Incubators Matter</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-[#0A2472] mb-4">$455B</div>
              <h3 className="text-xl font-bold mb-3 text-[#010E2F]">Beauty Market</h3>
              <p className="text-gray-600">
                Projected global value by 2027
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-[#0A2472] mb-4">63%</div>
              <h3 className="text-xl font-bold mb-3 text-[#010E2F]">Startups</h3>
              <p className="text-gray-600">
                Higher success rate with incubator support
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-[#0A2472] mb-4">47%</div>
              <h3 className="text-xl font-bold mb-3 text-[#010E2F]">Diversity</h3>
              <p className="text-gray-600">
                Increased representation in supported brands
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Four-Tier Program Structure */}
      <section className="py-20 bg-gradient-to-br from-[#010E2F] via-[#0A2472] to-[#0E6BA8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Four-Tier Program Structure</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <div className="text-lg font-bold">1</div>
              </div>
              <h3 className="text-xl font-bold mb-3">Aspiring</h3>
              <p className="text-white/80">
                Ideation and validation tools
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <div className="text-lg font-bold">2</div>
              </div>
              <h3 className="text-xl font-bold mb-3">Early-Stage</h3>
              <p className="text-white/80">
                Product development and launch strategy
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <div className="text-lg font-bold">3</div>
              </div>
              <h3 className="text-xl font-bold mb-3">Emerging</h3>
              <p className="text-white/80">
                Brand building and scaling sales
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <div className="text-lg font-bold">4</div>
              </div>
              <h3 className="text-xl font-bold mb-3">Established</h3>
              <p className="text-white/80">
                Expansion, new markets, advanced leadership
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Program Elements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">Core Program Elements</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-[#0A2472]" />
                </div>
                <h3 className="text-xl font-bold text-[#010E2F]">Mentor Matching</h3>
              </div>
              <p className="text-gray-600">
                Personalized guidance aligned with business stage
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-[#0A2472]" />
                </div>
                <h3 className="text-xl font-bold text-[#010E2F]">Structured Education</h3>
              </div>
              <p className="text-gray-600">
                Masterclasses, workshops, and hands-on labs
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Layers className="h-6 w-6 text-[#0A2472]" />
                </div>
                <h3 className="text-xl font-bold text-[#010E2F]">Strategic Resources</h3>
              </div>
              <p className="text-gray-600">
                Financial, legal, and PR guidance
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community & Networking */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">Community & Networking Advantages</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="relative mb-6 w-full h-64 overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Peer Network"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010E2F]/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">Peer Network</h3>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                Connect with fellow entrepreneurs facing similar challenges
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="relative mb-6 w-full h-64 overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Industry Access"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010E2F]/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">Industry Access</h3>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                Meet leaders, investors, and media contacts
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="relative mb-6 w-full h-64 overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Showcase Opportunities"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010E2F]/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">Showcase Opportunities</h3>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                Present your brand at exclusive industry events
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Track Record Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">Track Record & Competitive Advantage</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white shadow-md rounded-xl p-8"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-[#0A2472]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#010E2F]">Proven Results</h3>
              <p className="text-gray-600">
                Inspired by successful programs like L'Oréal Beauty Tech Atelier. Nearly 100 startups accelerated, majority women-led.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white shadow-md rounded-xl p-8"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="h-6 w-6 text-[#0A2472]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#010E2F]">Dual Focus</h3>
              <p className="text-gray-600">
                Develops both creative vision and executive skills. Promotes action-oriented inclusivity across the industry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white shadow-md rounded-xl p-8"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-[#0A2472]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#010E2F]">Practical Support</h3>
              <p className="text-gray-600">
                Emphasis on operational guidance and increased visibility for all participants.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Haute & Vine Social Club */}
      <section className="py-20 bg-gradient-to-br from-[#010E2F] via-[#0A2472] to-[#0E6BA8] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6">Haute & Vine Social Club</h2>
              <h3 className="text-xl font-medium mb-6 text-white/90">
                The Sophisticated Hub for Fashion & Beauty Professionals
              </h3>
              <p className="text-lg mb-6">
                An exclusive bar and networking space designed for the sophisticated and fashionably aware, 
                serving as the social anchor for Launch Couture members and industry professionals.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1513267048331-5611cad62e41?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Elegant bar interior"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent/10 flex items-end">
                  <div className="p-8">
                    <h4 className="text-xl font-bold text-white mb-2">Exclusive Member Events</h4>
                    <p className="text-white/80">Network with industry leaders in a sophisticated setting</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Launch Couture Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">Join Launch Couture: Applications Open Soon</h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 p-6 rounded-xl text-center"
            >
              <div className="w-12 h-12 bg-[#010E2F] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#010E2F]">Apply</h3>
              <p className="text-gray-600">Submit application with pitch deck</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 p-6 rounded-xl text-center"
            >
              <div className="w-12 h-12 bg-[#010E2F] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#010E2F]">Present</h3>
              <p className="text-gray-600">Share your vision through video</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 p-6 rounded-xl text-center"
            >
              <div className="w-12 h-12 bg-[#010E2F] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#010E2F]">Interview</h3>
              <p className="text-gray-600">Meet with our selection committee</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-50 p-6 rounded-xl text-center"
            >
              <div className="w-12 h-12 bg-[#010E2F] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#010E2F]">Join</h3>
              <p className="text-gray-600">Begin your Launch Couture journey</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <a
              href="#apply-now"
              className="bg-[#010E2F] text-white px-8 py-3 rounded-full font-medium hover:bg-[#0A2472] transition-colors inline-flex items-center"
            >
              Register for Updates
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}