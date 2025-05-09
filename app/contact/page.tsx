'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, ArrowRight, CheckCircle2 } from 'lucide-react';
import ContactHero from '@/components/Contact/ContactHero';
import ContactInfo from '@/components/Contact/ContactInfo';
import ContactForm from '@/components/Contact/ContactForm';
import FAQSection from '@/components/Contact/FAQSection';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <ContactHero 
        title="Get in Touch" 
        subtitle="We're here to answer your questions and help your business thrive." 
      />
      
      {/* Contact Grid Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6">
                  <h2 className="text-2xl font-bold text-white">Send Us a Message</h2>
                  <p className="text-blue-100 mt-1"> We will get back to you as soon as possible</p>
                </div>
                <div className="p-6 md:p-8">
                  <ContactForm />
                </div>
              </motion.div>
            </div>
            
            {/* Contact Information */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 shadow-md mb-8"
              >
                <h2 className="text-xl font-bold mb-6 border-b border-gray-200 pb-2">Contact Information</h2>
                <div className="space-y-5">
                  <ContactInfo 
                    icon={<MapPin className="h-5 w-5 text-blue-600" />}
                    title="Office Location"
                    content="777 Alameda 2nd Floor, Los Angeles, CA 90021"
                  />
                  <ContactInfo 
                    icon={<Phone className="h-5 w-5 text-blue-600" />}
                    title="Phone Number"
                    content="+1 (888) 948-1118"
                    link="tel:+888948-1118"
                  />
                  <ContactInfo 
                    icon={<Mail className="h-5 w-5 text-blue-600" />}
                    title="Email Address"
                    content="specialists@futuretrendsent.info"
                    link="mailto:specialists@futuretrendsent.info"
                  />
                  <ContactInfo 
                    icon={<Clock className="h-5 w-5 text-blue-600" />}
                    title="Business Hours"
                    content="Monday-Friday: 9AM-5PM PST"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-blue-600 text-white rounded-xl p-6 shadow-md"
              >
                <h2 className="text-xl font-bold mb-4">Join Our Community</h2>
                <p className="text-blue-100 mb-6">
                  Stay updated with our latest news, insights, and opportunities by subscribing to our newsletter.
                </p>
                <div className="flex">
                  <input 
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow bg-white/20 text-white placeholder-blue-200 border-0 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 rounded-l-none px-4">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services, process, and how we can help your business.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <FAQSection />
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
              Join our community of forward-thinking businesses and entrepreneurs who are building the future together.
            </p>
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 px-8">
              Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
      
     {/* Map Section */}
    <section className="h-96 w-full">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7169701268!2d-118.25009848478976!3d34.03962168061125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c63c9fb08f9d%3A0xb5236eb2eb8877ae!2s777%20S%20Alameda%20St%202nd%20Floor%2C%20Los%20Angeles%2C%20CA%2090021!5e0!3m2!1sen!2sus!4v1680531342684!5m2!1sen!2sus" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={false} 
        loading="lazy"
        title="FTE office location at 777 Alameda 2nd Floor, Los Angeles"
      ></iframe>
    </section>
    </main>
  );
}