'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface BrandCardProps {
  name: string;
  logoSrc?: string;
  status: 'Active' | 'Emerging' | 'Community';
}

const statusClassMap: Record<BrandCardProps['status'], string> = {
  Active: 'bg-emerald-500/20 text-emerald-200 border-emerald-300/30',
  Emerging: 'bg-blue-500/20 text-blue-100 border-blue-300/30',
  Community: 'bg-amber-500/20 text-amber-100 border-amber-300/30',
};

const BrandCard = ({ name, logoSrc, status }: BrandCardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 h-44 border border-white/10">
      <span className={`text-xs px-2.5 py-1 rounded-full border mb-4 ${statusClassMap[status]}`}>{status}</span>
      {logoSrc && !imageError ? (
        <div className="h-14 w-full flex items-center justify-center mb-4">
          <Image
            src={logoSrc}
            alt={`${name} logo`}
            width={120}
            height={80}
            className="object-contain h-14 w-auto"
            onError={() => setImageError(true)}
          />
        </div>
      ) : (
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-4">
          <span className="text-xl font-bold text-white">{name.charAt(0)}</span>
        </div>
      )}
      <h3 className="text-white font-medium text-center">{name}</h3>
    </div>
  );
};

export default function BusinessLogos() {
  const brands = [
    { name: 'FTE Capital', status: 'Active', logoSrc: '/assets/logos/logo.png' },
    { name: 'Sage Hospitality', status: 'Active', logoSrc: '/assets/logos/sage.jpg' },
    { name: 'Zariel and Co', status: 'Active', logoSrc: '/assets/logos/z.jpg' },
    { name: 'Good Chef Co', status: 'Active', logoSrc: '/assets/logos/goodchef.png' },
    { name: 'Randolph Enterprises', status: 'Active', logoSrc: '/assets/logos/logo-light.png' },
    { name: 'Phylos', status: 'Emerging', logoSrc: '/assets/logos/phylos.png' },
    { name: 'World Lowrider Association', status: 'Emerging', logoSrc: '/assets/logos/logo-dark.png' },
    { name: 'FTE Next Generation', status: 'Emerging', logoSrc: '/assets/logos/logo.png' },
    { name: 'Launch Couture', status: 'Emerging', logoSrc: '/assets/logos/lc.png' },
    // { name: 'Life Connect', status: 'Community', logoSrc: '/assets/logos/lifec.png' },
    // { name: 'MaaHarvest', status: 'Community', logoSrc: '/assets/logos/mah.jpg' },
  ] as const;

  return (
    <section className="py-20 bg-gradient-to-b from-[#010E2F] to-[#0A2472]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4 font-vietnam-pro">Ecosystem Brands</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            FTE organizes its portfolio by business maturity so visitors can quickly understand what is actively generating revenue and what is scaling next.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={`${brand.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 * index }}
              viewport={{ once: true }}
            >
              <BrandCard name={brand.name} logoSrc={brand.logoSrc} status={brand.status} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          <Link
            href="/contact"
            className="inline-block px-6 py-3 rounded-full bg-white text-[#010E2F] font-semibold hover:bg-blue-50 transition-colors"
          >
            Apply as Founder
          </Link>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 rounded-full border border-white/40 text-white hover:bg-white/10 transition-colors"
          >
            Inquire as Investor
          </Link>
          <Link
            href="/membership"
            className="inline-block px-6 py-3 rounded-full border border-white/40 text-white hover:bg-white/10 transition-colors"
          >
            Explore Membership
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
