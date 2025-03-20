'use client';

import { motion } from 'framer-motion';
import { Building2, Leaf, Network, Trophy, Users, Globe } from 'lucide-react';
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
            Future Trends Enterprise (FTE) is a forward-thinking technology startup that seamlessly integrates advanced solutions across
            digital and physical spaces.
          </p>
        </motion.div>

        {/* Pro Tribe and Life Connect Cards */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Pro Tribe"
                fill
                className="object-cover brightness-50"
              />
            </div>
            <div className="relative p-8 bg-gradient-to-r from-[#010E2F]/90">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="h-8 w-8 text-white" />
                <h3 className="text-2xl font-semibold text-white">Pro Tribe Ecosystem</h3>
              </div>
              <p className="text-white/90">
                A comprehensive business incubator that builds new ventures, collaborates with existing businesses, and
                provides growth solutions through our extensive networks and resources.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                alt="Life Connect"
                fill
                className="object-cover brightness-50"
              />
            </div>
            <div className="relative p-8 bg-gradient-to-r from-[#010E2F]/90">
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="h-8 w-8 text-white" />
                <h3 className="text-2xl font-semibold text-white">Life Connect</h3>
              </div>
              <p className="text-white/90">
                Our social engine platform focused on community building and increasing exposure for our partners.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Strategic Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-[#010E2F] mb-6">Our Strategic Vision</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-6 rounded-xl bg-gradient-to-r from-[#010E2F] to-[#0E6BA8] text-white">
              <Network className="h-6 w-6 flex-shrink-0" />
              <p>Establishing a thriving business ecosystem that promotes growth and innovation</p>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-xl bg-gradient-to-r from-[#010E2F] to-[#0E6BA8] text-white">
              <Network className="h-6 w-6 flex-shrink-0" />
              <p>Developing networks of diverse communities to foster collaboration and success</p>
            </div>
          </div>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-[#010E2F] mb-6">Key Achievements</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                  alt="Global Reach"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010E2F] via-[#010E2F]/70 to-transparent" />
              </div>
              <div className="relative p-6 pt-40">
                <Globe className="h-8 w-8 text-white mb-3" />
                <h4 className="text-xl font-semibold text-white mb-2">Global Reach</h4>
                <p className="text-white/90">Expanded to 10+ countries worldwide</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
                  alt="Community Growth"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010E2F] via-[#010E2F]/70 to-transparent" />
              </div>
              <div className="relative p-6 pt-40">
                <Users className="h-8 w-8 text-white mb-3" />
                <h4 className="text-xl font-semibold text-white mb-2">Community Growth</h4>
                <p className="text-white/90">100,000+ active community members</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80"
                  alt="Success Stories"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010E2F] via-[#010E2F]/70 to-transparent" />
              </div>
              <div className="relative p-6 pt-40">
                <Trophy className="h-8 w-8 text-white mb-3" />
                <h4 className="text-xl font-semibold text-white mb-2">Success Stories</h4>
                <p className="text-white/90">500+ businesses successfully launched</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}