'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building, Clock, User, Search, FileText, BarChart, Settings, CheckCircle } from 'lucide-react';

export default function SageHospitalityContent() {
  return (
    <div className="bg-white">
      {/* Residential Real Estate Section */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">Welcome to Your Dream Home Journey</h2>
            <p className="text-lg text-gray-700 mb-8">
              At Sage Hospitality and Concierge, we make homeownership accessible and enjoyable by providing everything you need in one place. Here's what we offer:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-md">
                  <FileText className="h-5 w-5 text-[#0A2472]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#010E2F]">Home Buying Process Explanation</h3>
                  <p className="text-gray-600 text-sm">Simplify your journey with step-by-step guides</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-md">
                  <Search className="h-5 w-5 text-[#0A2472]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#010E2F]">Property Search Functionality</h3>
                  <p className="text-gray-600 text-sm">Easily find your ideal home with our user-friendly platform</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-md">
                  <User className="h-5 w-5 text-[#0A2472]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#010E2F]">First-Time Buyer Guides</h3>
                  <p className="text-gray-600 text-sm">Tailored resources for first-time buyers</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-md">
                  <BarChart className="h-5 w-5 text-[#0A2472]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#010E2F]">Property Valuation Tools</h3>
                  <p className="text-gray-600 text-sm">Understand the true value of your desired property</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-md">
                  <Home className="h-5 w-5 text-[#0A2472]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#010E2F]">Featured Residential Listings</h3>
                  <p className="text-gray-600 text-sm">Explore handpicked properties</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-md">
                  <CheckCircle className="h-5 w-5 text-[#0A2472]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#010E2F]">Success Stories</h3>
                  <p className="text-gray-600 text-sm">Be inspired by clients who've turned dreams into reality</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commercial Property Section */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">Your Gateway to Smart Commercial Real Estate Solutions</h2>
            <p className="text-lg text-gray-700 mb-8">
              Unlock the Potential of Commercial Real Estate. We provide the tools, insights, and expertise to help you succeed in the dynamic world of commercial real estate.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-md">
                  <Building className="h-5 w-5 text-[#0A2472]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#010E2F]">Types of Commercial Properties</h3>
                  <p className="text-gray-600 text-sm">Office spaces, retail centers, industrial facilities, and mixed-use developments</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-md">
                  <BarChart className="h-5 w-5 text-[#0A2472]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#010E2F]">Investment Opportunities</h3>
                  <p className="text-gray-600 text-sm">High-potential investment options with expert guidance</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-md">
                  <FileText className="h-5 w-5 text-[#0A2472]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#010E2F]">Market Analysis Reports</h3>
                  <p className="text-gray-600 text-sm">Comprehensive market insights and data-driven reports</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-md">
                  <Settings className="h-5 w-5 text-[#0A2472]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#010E2F]">Property Management Services</h3>
                  <p className="text-gray-600 text-sm">Professional solutions ensuring seamless operations</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-md">
                  <Building className="h-5 w-5 text-[#0A2472]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#010E2F]">Portfolio of Completed Projects</h3>
                  <p className="text-gray-600 text-sm">Showcase of successfully executed projects</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-md">
                  <BarChart className="h-5 w-5 text-[#0A2472]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#010E2F]">ROI Calculators</h3>
                  <p className="text-gray-600 text-sm">User-friendly tools for evaluating potential returns</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Concierge Services */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">Experience Effortless Living with Our Concierge Services</h2>
            <p className="text-lg text-gray-700 mb-8">
              At Sage Hospitality and Concierge, we redefine convenience and excellence with personalized concierge solutions designed to enhance your property and lifestyle experience.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-md">
                  <CheckCircle className="h-5 w-5 text-[#0A2472]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#010E2F]">List of Available Services</h3>
                  <p className="text-gray-600 text-sm">Comprehensive range of property management and personal assistance</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-md">
                  <Clock className="h-5 w-5 text-[#0A2472]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#010E2F]">24/7 Support Details</h3>
                  <p className="text-gray-600 text-sm">Around-the-clock service to address your requests</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-md">
                  <Settings className="h-5 w-5 text-[#0A2472]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#010E2F]">Property Maintenance Programs</h3>
                  <p className="text-gray-600 text-sm">Customized maintenance plans for pristine condition</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-md">
                  <User className="h-5 w-5 text-[#0A2472]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#010E2F]">Tenant Relations Services</h3>
                  <p className="text-gray-600 text-sm">Professional support in communication and issue resolution</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-md">
                  <CheckCircle className="h-5 w-5 text-[#0A2472]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#010E2F]">Lifestyle Support Options</h3>
                  <p className="text-gray-600 text-sm">Enhancing your everyday living experience</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-md">
                  <FileText className="h-5 w-5 text-[#0A2472]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#010E2F]">Service Packages</h3>
                  <p className="text-gray-600 text-sm">Tailored solutions for different needs and budgets</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Journey */}
      <section className="py-16 border-b bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-[#010E2F]">Client Journey</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Our 4-step process ensures a seamless experience from start to finish
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 bg-[#010E2F] text-white rounded-full flex items-center justify-center mb-4 font-bold">1</div>
                <h3 className="text-xl font-bold mb-3 text-[#010E2F]">Discover Phase</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#0A2472] rounded-full"></div>
                    <span>Initial consultation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#0A2472] rounded-full"></div>
                    <span>Requirement analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#0A2472] rounded-full"></div>
                    <span>Market overview</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 bg-[#010E2F] text-white rounded-full flex items-center justify-center mb-4 font-bold">2</div>
                <h3 className="text-xl font-bold mb-3 text-[#010E2F]">Curate Phase</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#0A2472] rounded-full"></div>
                    <span>Property matching</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#0A2472] rounded-full"></div>
                    <span>Market opportunity analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#0A2472] rounded-full"></div>
                    <span>Investment strategy development</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 bg-[#010E2F] text-white rounded-full flex items-center justify-center mb-4 font-bold">3</div>
                <h3 className="text-xl font-bold mb-3 text-[#010E2F]">Secure Phase</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#0A2472] rounded-full"></div>
                    <span>Transaction support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#0A2472] rounded-full"></div>
                    <span>Negotiation assistance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#0A2472] rounded-full"></div>
                    <span>Documentation handling</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 bg-[#010E2F] text-white rounded-full flex items-center justify-center mb-4 font-bold">4</div>
                <h3 className="text-xl font-bold mb-3 text-[#010E2F]">Elevate Phase</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#0A2472] rounded-full"></div>
                    <span>Property management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#0A2472] rounded-full"></div>
                    <span>Concierge services</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#0A2472] rounded-full"></div>
                    <span>Ongoing support</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#010E2F]">Future Projects</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-100 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#010E2F]">Urban Living Renaissance</h3>
              <p className="text-gray-600">Modern urban residential complexes designed for contemporary lifestyles</p>
            </div>
            
            <div className="text-center p-6 border border-gray-100 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#010E2F]">Next-Gen Hospitality Hub</h3>
              <p className="text-gray-600">Revolutionary spaces redefining the hospitality experience</p>
            </div>
            
            <div className="text-center p-6 border border-gray-100 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#010E2F]">Smart Business Complex</h3>
              <p className="text-gray-600">Technologically advanced office spaces for the future of work</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Buying Program */}
      <section className="py-16 bg-gradient-to-br from-[#010E2F] via-[#0A2472] to-[#0E6BA8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Real Estate Buying Program</h2>
            <p className="text-center text-white/80 mb-10">A comprehensive approach to your real estate journey</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">1. Initial Assessment</h3>
                <ul className="space-y-2 text-white/80">
                  <li>Personal requirements analysis</li>
                  <li>Budget planning</li>
                  <li>Location preferences</li>
                  <li>Investment goals</li>
                  <li>Timeline establishment</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">2. Market Education</h3>
                <ul className="space-y-2 text-white/80">
                  <li>Current market conditions</li>
                  <li>Property value trends</li>
                  <li>Investment opportunities</li>
                  <li>Risk assessment</li>
                  <li>Financial planning</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">3. Property Selection</h3>
                <ul className="space-y-2 text-white/80">
                  <li>Personalized property matching</li>
                  <li>Virtual and physical tours</li>
                  <li>Comparative market analysis</li>
                  <li>Due diligence support</li>
                  <li>Technical assessments</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">4. Transaction Support</h3>
                <ul className="space-y-2 text-white/80">
                  <li>Negotiation strategy</li>
                  <li>Documentation handling</li>
                  <li>Legal compliance</li>
                  <li>Financing assistance</li>
                  <li>Closing support</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">5. Post-Purchase Services</h3>
                <ul className="space-y-2 text-white/80">
                  <li>Property management setup</li>
                  <li>Maintenance planning</li>
                  <li>Tenant screening (if applicable)</li>
                  <li>Renovation coordination</li>
                  <li>Ongoing market analysis</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">6. Value Enhancement</h3>
                <ul className="space-y-2 text-white/80">
                  <li>Property optimization strategies</li>
                  <li>Market positioning</li>
                  <li>Upgrade recommendations</li>
                  <li>ROI maximization plans</li>
                  <li>Regular performance reviews</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <a
                href="#contact-us"
                className="bg-white text-[#0A2472] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Start Your Journey Today
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}