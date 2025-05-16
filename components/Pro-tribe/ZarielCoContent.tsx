'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, Lightbulb, Zap, Film, Share2 } from 'lucide-react';

export default function ZarielCoContent() {
  return (
    <div className="bg-white">
      {/* Main Vision Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">Reshaping the Media Landscape</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              At Zariel & Co, aka Z&Z studios, we're not just in the business of creating content - we're building a community 
              of creators, collaborators, and innovators. With a unique model based on member profit sharing and our own 
              platform for digital commerce, we're reshaping the media production and distribution landscape and empowering 
              individuals to thrive.
            </p>
          </motion.div>

          <div className="relative h-[400px] rounded-xl overflow-hidden mb-16">
            <Image
              src="https://images.unsplash.com/photo-1496559249665-c7e2874707ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt="Media production team collaborating"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Z&Z Studios</h3>
                <p className="text-white/80">Where creativity meets community and commerce</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">Our Vision and Mission</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-[#0A2472]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#010E2F]">Empowering Creators</h3>
              <p className="text-gray-600">
                At Z&Z Studios, our vision is to empower creators by providing them with the tools, resources, 
                and support they need to thrive in the dynamic world of media production and distribution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Share2 className="h-6 w-6 text-[#0A2472]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#010E2F]">Fostering Community</h3>
              <p className="text-gray-600">
                Our mission is to build a vibrant community of creators, collaborators, and innovators who can 
                share ideas, collaborate on projects, and inspire one another to push the boundaries of what's possible.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="h-6 w-6 text-[#0A2472]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#010E2F]">Driving Innovation</h3>
              <p className="text-gray-600">
                We believe that innovation is the key to unlocking new opportunities in the media industry. 
                That's why we're committed to providing our members with the tools and resources they need to 
                turn their ideas into reality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scripted Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#0A2472] rounded-lg flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#010E2F]">Scripted</h2>
              </div>
              <h3 className="text-xl font-bold mb-6 text-[#0A2472]">The Social Engine of Zariel & Co Multimedia Partners</h3>
              
              <p className="text-lg text-gray-700 mb-6">
                Scripted is the cultural ignition behind Zariel & Co Multimedia Partners, a production and entertainment 
                company incubated within Pro Tribe. As the official social engine, Scripted turns creative development 
                into community immersion—activating audiences, amplifying creators, and fueling visibility for projects 
                born at the intersection of art, tech, and purpose.
              </p>
              
              <p className="text-lg text-gray-700">
                Powered by the Life Connect cohort of Future Trends Enterprise Inc., Scripted is where content becomes currency. 
                It transforms Zariel & Co's multimedia offerings—from original films and live performances to digital streaming 
                and talent showcases—into high-impact social activations. Scripted brings production to the people, positioning 
                every release, audition, and collaboration as part of a larger, immersive brand experience.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Film production"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#010E2F]/80 flex items-end">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <Film className="h-5 w-5 text-white" />
                      <p className="text-white font-medium">Scripted Productions</p>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">From Concept to Community</h4>
                    <p className="text-white/80">Creating content that resonates, engages, and inspires action</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-[#010E2F] via-[#0A2472] to-[#0E6BA8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Our Media Services</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              From concept development to distribution, we provide end-to-end solutions for creators and brands looking 
              to make an impact in today's media landscape.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Film Production", icon: "🎬" },
              { title: "Digital Content", icon: "📱" },
              { title: "Live Events", icon: "🎭" },
              { title: "Talent Management", icon: "🌟" },
              { title: "Distribution", icon: "🚚" },
              { title: "Marketing", icon: "📣" },
              { title: "Creative Direction", icon: "🎨" },
              { title: "Community Building", icon: "👥" },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">Join Our Creative Community</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Whether you're a creator looking to bring your vision to life or a brand seeking innovative media solutions, 
              Zariel & Co has the expertise, resources, and community to help you succeed.
            </p>
            <a
              href="#contact-us"
              className="bg-[#010E2F] text-white px-8 py-3 rounded-full font-medium hover:bg-[#0A2472] transition-colors inline-flex items-center"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}