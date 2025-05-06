'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import StatisticCard from './StatisticCard';

export default function KeyAchievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const achievementData = [
    {
      value: "15M+",
      numericValue: 15000000,
      label: "Annual Revenue",
      description: "With a revenue stream of 15 million, the company showcases strong financial health and growth."
    },
    {
      value: "2+",
      numericValue: 2,
      label: "Established Community Verticals",
      description: "Two communities have been successfully built, embodying the company's mission of nurturing thriving ecosystems."
    },
    {
      value: "15",
      numericValue: 15,
      label: "Incubated Companies",
      description: "Fifteen companies currently in our incubator have been funded, furthering FTE's legacy of fostering entrepreneurship and innovation."
    },
    {
      value: "$420M+",
      numericValue: 420000000,
      label: "Company Evaluation",
      description: "Evaluated at an impressive $420 million, Future Trends Enterprise has established itself as a significant player in community development."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">Key Achievements and Impact</h2>
          <p className="text-blue-100 max-w-3xl mx-auto text-center mb-16">
            FTE has established itself as a significant player in community development and technology innovation.
          </p>
        </motion.div>
        
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {achievementData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <StatisticCard 
                value={item.value} 
                label={item.label} 
                description={item.description}
                animate={isInView}
                numericValue={item.numericValue}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}