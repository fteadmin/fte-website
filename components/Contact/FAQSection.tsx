'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem = ({ question, answer, isOpen, toggleOpen }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full items-center justify-between text-left focus:outline-none"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <ChevronDown
          className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqs = [
    {
      question: "How can FTE help my business grow?",
      answer: "FTE supports growth through a venture ecosystem model: incubation, capital-readiness support, shared operating infrastructure, and ecosystem distribution pathways. Founders receive strategic guidance and access to aligned brand and community channels."
    },
    {
      question: "What industries does FTE specialize in?",
      answer: "Our portfolio spans capital, hospitality, media, culinary, fashion, wellness, and community-driven platforms. We focus on verticals where culture, demand, and operating leverage can compound over time."
    },
    {
      question: "How long does it take to implement your solutions?",
      answer: "Implementation timelines vary depending on the complexity of your needs and the scope of the project. Typically, our basic solutions can be implemented within 4-8 weeks, while more comprehensive ecosystem integrations may take 3-6 months. We work closely with you to establish clear timelines and milestones."
    },
    {
      question: "Do you work with investors and strategic partners?",
      answer: "Yes. We provide investor and partner pathways with ecosystem context, venture visibility, and opportunities to engage with active and emerging brands aligned to the FTE thesis."
    },
    {
      question: "How does founder onboarding work?",
      answer: "Founder onboarding starts with a fit conversation, then moves into ecosystem alignment, growth priorities, and a scoped support path. The process clarifies whether a venture is best positioned for incubation, strategic services, or capital-readiness support."
    }
  ];
  
  return (
    <div className="space-y-2">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={index === openIndex}
          toggleOpen={() => setOpenIndex(index === openIndex ? -1 : index)}
        />
      ))}
    </div>
  );
}