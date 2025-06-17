'use client';

import { motion } from 'framer-motion';

export default function MembershipHero() {
  // Define the scrollToPlans function locally inside the component
  const scrollToPlans = () => {
    // Find the element with id "membership-plans"
    const plansElement = document.getElementById('membership-plans');
    if (plansElement) {
      plansElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="relative bg-gradient-to-br from-[#010E2F] via-[#0A2472] to-[#0E6BA8] text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full border-[30px] border-white"
        />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] border-[20px] border-white"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        />
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Membership Tiers
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 max-w-2xl"
          >
            Structured progression from entrepreneurial foundations to advanced wealth structuring
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8"
          >
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-blue-100">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-300 rounded-full mr-2"></div>
                <span>Entrepreneur</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-300 rounded-full mr-2"></div>
                <span>Investor</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-300 rounded-full mr-2"></div>
                <span>Visionary</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-300 rounded-full mr-2"></div>
                <span>Progression</span>
              </div>
            </div>
          </motion.div>
          
          {/* Button to scroll to plans */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            onClick={scrollToPlans}
            className="mt-8 bg-white text-blue-900 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            View Membership Plans
          </motion.button>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-900 to-transparent"></div>
    </section>
  );
}