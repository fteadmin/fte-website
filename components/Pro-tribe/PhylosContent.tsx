'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BookOpen, Activity, Heart, Sparkles, BrainCircuit, Lightbulb, Dumbbell } from 'lucide-react';

export default function PhylosContent() {
  return (
    <div className="bg-white">
      {/* What's in a Name Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">What's in a Name?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover the profound wisdom within physical activity. Our platform helps you unlock the deeper meaning in movement for athletics, wellness, and beauty.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-[#0A2472]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#010E2F]">Phylos</h3>
              <p className="text-gray-600">
                A play on "philosophy" - the love of wisdom
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Activity className="h-8 w-8 text-[#0A2472]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#010E2F]">Body Movement</h3>
              <p className="text-gray-600">
                Holistic approach from top to bottom
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BrainCircuit className="h-8 w-8 text-[#0A2472]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#010E2F]">Dynamic Platform</h3>
              <p className="text-gray-600">
                Connecting wisdom with physical action
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Beyond Physical Activity Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">Beyond Physical Activity</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="relative mb-6 w-full h-64 overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="More Than Movement"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010E2F]/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">More Than Movement</h3>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                Movement isn't just physical. It's a source of insights, principles, and a way of life.
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
                  src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Embodied Wisdom"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010E2F]/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">Embodied Wisdom</h3>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                Our platform reveals the inherent wisdom found through physical activity.
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
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Holistic Benefits"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010E2F]/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">Holistic Benefits</h3>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                Experience improvements in athletics, wellness, and beauty simultaneously.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Power of "In" Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-8 text-[#010E2F]">The Power of "In"</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-6 w-6 text-[#0A2472]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-[#010E2F]">Discovery</h3>
                    <p className="text-gray-700">Unlock hidden potential</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Activity className="h-6 w-6 text-[#0A2472]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-[#010E2F]">Embodiment</h3>
                    <p className="text-gray-700">Experience wisdom physically</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BrainCircuit className="h-6 w-6 text-[#0A2472]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-[#010E2F]">Integration</h3>
                    <p className="text-gray-700">Connect mind and body</p>
                  </div>
                </div>
              </div>
              
              <p className="mt-8 text-gray-700">
                Our tagline emphasizes that philosophy exists within movement itself. 
                We help you access and apply this wisdom.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1524863479829-916d8e77f114?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Mindful movement"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010E2F]/80 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">Philosophy in Motion</h3>
                  <p className="text-white/90">
                    Discover the wisdom that exists within every movement you make
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Action-Oriented Approach Section */}
      <section className="py-20 bg-gradient-to-br from-[#010E2F] via-[#0A2472] to-[#0E6BA8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Action-Oriented Approach</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Philosophy isn't abstract with Phylos. It's experienced and embodied through movement.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:w-1/3 bg-white/10 backdrop-blur-sm p-8 rounded-xl"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <div className="text-2xl font-bold">1</div>
              </div>
              <h3 className="text-xl font-bold mb-4">Concept</h3>
              <p className="text-white/80">
                Understanding the philosophy
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/3 bg-white/10 backdrop-blur-sm p-8 rounded-xl"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <div className="text-2xl font-bold">2</div>
              </div>
              <h3 className="text-xl font-bold mb-4">Practice</h3>
              <p className="text-white/80">
                Applying through movement
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:w-1/3 bg-white/10 backdrop-blur-sm p-8 rounded-xl"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <div className="text-2xl font-bold">3</div>
              </div>
              <h3 className="text-xl font-bold mb-4">Transformation</h3>
              <p className="text-white/80">
                Experiencing the benefits
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">Core Benefits</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-gray-50 rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Dumbbell className="h-7 w-7 text-[#0A2472]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#010E2F]">Athletics</h3>
              <p className="text-gray-600">
                Enhance performance through mindful movement
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-gray-50 rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-7 w-7 text-[#0A2472]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#010E2F]">Wellness</h3>
              <p className="text-gray-600">
                Improve overall health and balance
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-gray-50 rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-7 w-7 text-[#0A2472]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#010E2F]">Beauty</h3>
              <p className="text-gray-600">
                Cultivate natural radiance from within
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-gray-50 rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-7 w-7 text-[#0A2472]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#010E2F]">Wisdom</h3>
              <p className="text-gray-600">
                Develop deeper understanding of self
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why It's Memorable Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">Why It's Memorable</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white shadow-md rounded-xl p-8 text-center"
            >
              <h3 className="text-xl font-bold mb-4 text-[#010E2F]">Thought-Provoking</h3>
              <p className="text-gray-600">
                Sparks curiosity about the philosophy within movement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white shadow-md rounded-xl p-8 text-center"
            >
              <h3 className="text-xl font-bold mb-4 text-[#010E2F]">Unique Positioning</h3>
              <p className="text-gray-600">
                Stands apart from typical fitness or wellness platforms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white shadow-md rounded-xl p-8 text-center"
            >
              <h3 className="text-xl font-bold mb-4 text-[#010E2F]">Invitational</h3>
              <p className="text-gray-600">
                Encourages personal discovery and exploration.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Clear Winner Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">The Clear Winner</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-4 bg-[#010E2F]/5 rounded-xl p-6"
            >
              <div className="w-12 h-12 bg-[#010E2F] rounded-full flex items-center justify-center text-white font-bold">1</div>
              <div>
                <h3 className="text-xl font-bold text-[#010E2F]">Brand Alignment</h3>
                <p className="text-gray-700">Perfect match with Phylos name</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4 bg-[#010E2F]/5 rounded-xl p-6"
            >
              <div className="w-12 h-12 bg-[#010E2F] rounded-full flex items-center justify-center text-white font-bold">2</div>
              <div>
                <h3 className="text-xl font-bold text-[#010E2F]">Inspirational Quality</h3>
                <p className="text-gray-700">Motivates deeper engagement</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4 bg-[#010E2F]/5 rounded-xl p-6"
            >
              <div className="w-12 h-12 bg-[#010E2F] rounded-full flex items-center justify-center text-white font-bold">3</div>
              <div>
                <h3 className="text-xl font-bold text-[#010E2F]">Audience Connection</h3>
                <p className="text-gray-700">Invites discovery of benefits</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 p-8 bg-gray-50 border border-gray-100 rounded-xl text-center"
          >
            <p className="text-lg font-medium text-gray-700 max-w-4xl mx-auto">
              "The Philosophy in body movement" is the ideal tagline for a dynamic platform encouraging holistic movement for athletics,
              wellness, and beauty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#010E2F] via-[#0A2472] to-[#0E6BA8] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Begin Your Movement Journey</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Discover the philosophy in your own body movement and unlock the wisdom that lies within.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#join-community"
                className="bg-white text-[#0A2472] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Join Our Community
              </a>
              <a
                href="#explore-programs"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                Explore Programs
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}