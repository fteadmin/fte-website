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
      answer: "Future Trends Enterprise provides technology-powered solutions, vertical-specific applications, and business incubation services designed to streamline operations and drive growth. Our ecosystem approach connects businesses with resources, mentorship, and community support to foster sustainable success."
    },
    {
      question: "What industries does FTE specialize in?",
      answer: "We specialize in multiple verticals including health and wellness, culinary & agriculture, e-commerce, finance, multimedia, and education. Our solutions are tailored to meet the specific challenges and opportunities within each industry."
    },
    {
      question: "How long does it take to implement your solutions?",
      answer: "Implementation timelines vary depending on the complexity of your needs and the scope of the project. Typically, our basic solutions can be implemented within 4-8 weeks, while more comprehensive ecosystem integrations may take 3-6 months. We work closely with you to establish clear timelines and milestones."
    },
    {
      question: "Do you offer ongoing support after implementation?",
      answer: "Yes, we offer various support packages to ensure your continued success. These include technical support, maintenance, updates, and strategic consultations to help you maximize the value of your solution as your business evolves."
    },
    {
      question: "How does your business incubation program work?",
      answer: "Our incubation program supports early-stage businesses with technology resources, mentorship, and infrastructure. We provide strategic guidance on tech implementation, operational frameworks, and business development. Businesses in our program benefit from our ecosystem network, shared resources, and collaborative environment."
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