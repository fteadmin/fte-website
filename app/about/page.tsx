import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Users, Code, Rocket, BarChart3 } from 'lucide-react';
import Image from 'next/image';

// Components
import AboutHero from '@/components/About/AboutHero';
import StatisticCard from '@/components/About/StatisticCard';
import ContentSection from '@/components/About/ContentSection';
import VerticalCard from '@/components/About/VerticalCard';

// Make sure to add 'use client' directive if using client components
export default function AboutPage() {
  return (
    <main className="bg-white">
      <AboutHero 
        title="About Future Trends Enterprise" 
        subtitle="Building innovative communities that foster growth, collaboration, and sustainable success."
      />
      
      {/* Core Business Model */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">Core Business Model</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-center mb-16">
            FTE leverages technology and community building to create powerful ecosystems for businesses to thrive.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <ContentSection 
              icon={<Code className="h-8 w-8 text-blue-600" />}
              title="Development of technology-powered software solutions"
              content="Future Trends Enterprise (FTE) focuses on designing innovative software solutions powered by cutting-edge technology. These solutions are crafted to streamline operations, enhance user experiences, and drive efficiencies across multiple industries. By harnessing data analytics, machine learning, and automation, FTEʼs tech solutions enable businesses to make data-driven decisions, optimize their workflows, and stay competitive in fast evolving markets."
            />
            
            <ContentSection 
              icon={<Rocket className="h-8 w-8 text-blue-600" />}
              title="Creation of vertical-specific applications"
              content="FTE develops specialized applications tailored to meet the demands of specific industries or 'verticals,' such as health and wellness, culinary & agriculture, e-commerce, finance, multi media, and education to name a few. By focusing on industry-specific challenges and opportunities, FTE crafts tools and systems that directly address the operational and regulatory needs unique to each field."
            />
            
            <ContentSection 
              icon={<Users className="h-8 w-8 text-blue-600" />}
              title="Integration of physical and digital communities"
              content="FTE brings together both physical and digital elements to create unified, immersive experiences for clients and users. By building platforms that operate fluidly between physical spaces (micro residential communities or production studios) and digital spaces (such as apps or virtual communities), FTE enables users to engage and interact across multiple channels effortlessly."
            />
            
            <ContentSection 
              icon={<BarChart3 className="h-8 w-8 text-blue-600" />}
              title="Technology-driven business incubation"
              content="FTEʼs business incubation model supports early-stage businesses by providing access to technology resources, mentorship, and infrastructure essential for growth. This technology-driven incubation program helps startups and emerging companies scale by offering strategic guidance on tech implementation, operational frameworks, and business development."
            />
          </div>
        </div>
      </section>
      
      {/* Strategic Approach - Vertical Integration */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">Strategic Approach</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-center mb-16">
            Our vertical integration strategy creates powerful ecosystems for businesses to thrive together.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <VerticalCard 
              title="Building specialized solutions"
              description="FTEʼs approach to vertical integration begins with designing tailored solutions that cater to the unique needs of various market segments. By developing customized technologies and applications specific to industries."
              image="/images/specialized-solutions.jpg"
              altText="Specialized solutions illustration"
            />
            
            <VerticalCard 
              title="Combining physical and digital"
              description="FTE emphasizes a seamless blend between physical and digital experiences, enabling businesses to connect with their customers across all channels. By creating cohesive touchpoints, FTE allows clients to bridge their presence."
              image="/images/physical-digital.jpg"
              altText="Physical and digital integration"
            />
            
            <VerticalCard 
              title="Ecosystem-wide platforms"
              description="FTEʼs strategy of building ecosystem-wide software platforms enables businesses to operate within a connected, collaborative environment. These platforms are designed to support a range of services."
              image="/images/ecosystem-platforms.jpg"
              altText="Ecosystem platforms"
            />
          </div>
        </div>
      </section>
      
      {/* Strategic Approach - Technology First */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">Technology-First Approach</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-center mb-16">
            Technology is at the heart of everything we do, driving innovation and creating competitive advantages.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Technology as the core differentiator</h3>
              <p className="text-gray-700 mb-4">
                At FTE, technology is the driving force that sets the company apart in the marketplace. By prioritizing the latest advancements in tech, FTE ensures that its solutions stand out for their innovation, efficiency, and user-centered design.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span>Data analytics and automation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span>Machine learning and AI implementation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span>Cloud computing and infrastructure</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Focus on developing scalable tech solutions</h3>
              <p className="text-gray-700 mb-4">
                Scalability is central to FTEʼs product development, as the company designs technology solutions that can grow alongside the clientʼs needs. By building products and platforms with modularity, flexible architecture, and cloud-based infrastructure.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span>Modular architecture design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span>Cloud-native infrastructure</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span>Future-proofed technology stack</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Integration of tech solutions across all verticals</h3>
              <p className="text-gray-700 mb-4">
                FTEʼs technology-first approach extends to a commitment to integrate its solutions across multiple industry verticals. This strategy enables FTE to bring consistent innovation, quality, and technical expertise to various sectors.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span>Cross-industry innovation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span>Interoperable systems and APIs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span>Collaborative ecosystem development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Achievements and Impact */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">Key Achievements and Impact</h2>
          <p className="text-blue-100 max-w-3xl mx-auto text-center mb-16">
            FTE has established itself as a significant player in community development and technology innovation.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <StatisticCard 
              value="15M+" 
              label="Annual Revenue" 
              description="With a revenue stream of 15 million, the company showcases strong financial health and growth."
            />
            
            <StatisticCard 
              value="2+" 
              label="Established Community Verticals" 
              description="Two communities have been successfully built, embodying the company's mission of nurturing thriving ecosystems."
            />
            
            <StatisticCard 
              value="15" 
              label="Incubated Companies" 
              description="Fifteen companies currently in our incubator been funded, furthering FTE's legacy of fostering entrepreneurship and innovation."
            />
            
            <StatisticCard 
              value="$420M+" 
              label="Company Evaluation" 
              description="Evaluated at an impressive $420 million, Future Trends Enterprise has established itself as a significant player in community development."
            />
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Thriving Ecosystem</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Whether you are looking to grow your business through our incubator, leverage our technology solutions, or become part of our community, FTE offers the platform you need to succeed.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full inline-flex items-center transition-colors duration-300">
            Get in touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </main>
  );
}