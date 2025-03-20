'use client';

// placeholder design for the Who We Are section

import { motion } from 'framer-motion';
import { Building2, Leaf, Network, Trophy, Users, Globe, Target, Lightbulb, TrendingUp, Layers } from 'lucide-react';
import Image from 'next/image';

export default function WhoWeAre() {
  // Animation variants for reuse
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <section className="relative py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="mb-12 flex flex-col md:flex-row gap-8 items-start"
        >
          <div className="md:w-1/3">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#010E2F]">Who We Are</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-lg text-gray-600">
              Future Trends Enterprise (FTE) is a forward-thinking technology startup that seamlessly integrates advanced solutions across
              digital and physical spaces, driving innovation and creating sustainable ecosystems for businesses and communities alike.
            </p>
          </div>
        </motion.div>

        {/* Our Ecosystems - More compact cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-[#010E2F] mb-6">Our Ecosystems</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Pro Tribe Card */}
            <div className="group relative h-64 rounded-xl overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Pro Tribe"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#010E2F]/90 to-[#010E2F]/60" />
              </div>
              <div className="relative h-full p-6 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <Building2 className="h-7 w-7 text-white" />
                  <h3 className="text-xl font-semibold text-white">Pro Tribe Ecosystem</h3>
                </div>
                <p className="text-white/90 mt-2">
                  A comprehensive business incubator that builds new ventures, collaborates with existing businesses, and
                  provides growth solutions through our extensive networks and resources.
                </p>
              </div>
            </div>
            
            {/* Life Connect Card */}
            <div className="group relative h-64 rounded-xl overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                  alt="Life Connect"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#010E2F]/90 to-[#010E2F]/60" />
              </div>
              <div className="relative h-full p-6 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <Leaf className="h-7 w-7 text-white" />
                  <h3 className="text-xl font-semibold text-white">Life Connect</h3>
                </div>
                <p className="text-white/90 mt-2">
                  Our social engine platform focused on community building and increasing exposure for our partners through innovative 
                  digital solutions and meaningful engagement strategies.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Strategic Vision - Compact layout with 4 items */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-[#010E2F] mb-6">Our Strategic Vision</h3>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <div className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-r from-[#010E2F] to-[#0E6BA8] text-white">
              <Network className="h-5 w-5 mt-1 flex-shrink-0" />
              <p className="text-sm">Establishing a thriving business ecosystem that promotes growth and innovation</p>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-r from-[#010E2F] to-[#0E6BA8] text-white">
              <Users className="h-5 w-5 mt-1 flex-shrink-0" />
              <p className="text-sm">Developing networks of diverse communities to foster collaboration and success</p>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-r from-[#010E2F] to-[#0E6BA8] text-white">
              <Target className="h-5 w-5 mt-1 flex-shrink-0" />
              <p className="text-sm">Creating sustainable solutions that address real-world challenges and opportunities</p>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-r from-[#010E2F] to-[#0E6BA8] text-white">
              <Lightbulb className="h-5 w-5 mt-1 flex-shrink-0" />
              <p className="text-sm">Leveraging cutting-edge technology to drive innovation and disruptive change</p>
            </div>
          </div>
        </motion.div>

        {/* Core Values - New section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-[#010E2F] mb-6">Core Values</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <TrendingUp className="h-6 w-6 text-[#0E6BA8]" />, title: "Innovation", description: "We constantly pursue new ideas and approaches to solve complex problems" },
              { icon: <Layers className="h-6 w-6 text-[#0E6BA8]" />, title: "Integrity", description: "We maintain honest and ethical principles in all our business practices" },
              { icon: <Users className="h-6 w-6 text-[#0E6BA8]" />, title: "Collaboration", description: "We believe in the power of teamwork and community to achieve greatness" }
            ].map((value, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-200 hover:border-[#0E6BA8] transition-colors duration-300 bg-white hover:shadow-md">
                <div className="mb-4 bg-[#F0F4F8] p-3 rounded-full w-fit">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-[#010E2F] mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Achievements - More compact design */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
        >
          <h3 className="text-2xl font-bold text-[#010E2F] mb-6">Key Achievements</h3>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: <Globe className="h-6 w-6 text-white" />,
                title: "Global Reach",
                description: "Expanded to 10+ countries worldwide",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
              },
              {
                icon: <Users className="h-6 w-6 text-white" />,
                title: "Community Growth",
                description: "100,000+ active community members",
                image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
              },
              {
                icon: <Trophy className="h-6 w-6 text-white" />,
                title: "Success Stories",
                description: "500+ businesses successfully launched",
                image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80"
              }
            ].map((achievement, index) => (
              <div key={index} className="group relative h-56 rounded-xl overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#010E2F] via-[#010E2F]/70 to-transparent" />
                </div>
                <div className="relative h-full flex flex-col justify-end p-5">
                  <div className="mb-2 bg-[#0E6BA8]/80 p-2 rounded-full w-fit">
                    {achievement.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-1">{achievement.title}</h4>
                  <p className="text-white/90 text-sm">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}