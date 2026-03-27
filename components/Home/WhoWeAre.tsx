'use client';

import { motion } from 'framer-motion';
import { Building2, HandCoins, Network, Cpu, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const pillars = [
  {
    title: 'Venture Building',
    description:
      'We identify high-potential markets, incubate founder-led brands, and support execution from concept to operating scale.',
    icon: Building2,
  },
  {
    title: 'Capital Access',
    description:
      'We help ventures become capital-ready through strategy, positioning, and investor-aligned growth pathways.',
    icon: HandCoins,
  },
  {
    title: 'Shared Infrastructure',
    description:
      'Our ecosystem model combines shared operating support, cross-brand visibility, and collaborative distribution channels.',
    icon: Network,
  },
  {
    title: 'Technology & IP',
    description:
      'We are building proprietary platform capabilities to improve data, audience activation, and ecosystem-wide scalability.',
    icon: Cpu,
  },
];

const activeRevenueDrivers = ['FTE Capital', 'Sage Hospitality', 'Zariel & Co', 'Good Chef Co'];

export default function WhoWeAre() {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <h2 className="text-4xl font-bold text-[#010E2F] mb-6">What FTE Is</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Future Trends Enterprise is a venture ecosystem that builds, funds, and scales businesses across culture,
            technology, hospitality, wellness, and community-driven industries.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-xl border border-blue-100 bg-blue-50/40 p-6">
              <div className="w-11 h-11 rounded-lg bg-[#0A2472] text-white flex items-center justify-center mb-4">
                <pillar.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-[#010E2F] mb-3">{pillar.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="rounded-2xl bg-gradient-to-r from-[#010E2F] to-[#0E6BA8] p-8 md:p-10 text-white"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-3">Active Revenue Drivers</h3>
              <p className="text-white/85 max-w-2xl">
                These operating brands currently lead visibility and revenue momentum inside the FTE ecosystem.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {activeRevenueDrivers.map((brand) => (
                  <span
                    key={brand}
                    className="px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-sm"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/pro-tribe"
                className="inline-flex items-center gap-2 rounded-full bg-white text-[#010E2F] px-5 py-3 font-semibold hover:bg-blue-50 transition-colors"
              >
                Explore Ecosystem Brands
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 font-semibold hover:bg-white/10 transition-colors"
              >
                Apply as Founder
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
