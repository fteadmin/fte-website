import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Components
import AboutHero from '@/components/About/AboutHero';
import StatisticCard from '@/components/About/StatisticCard';
import Team from '@/components/About/Team'; // Import the Team component
import WelcomeSection from '@/components/About/WelcomeSection';

// Make sure to add 'use client' directive if using client components
export default function AboutPage() {
  // Contact email
  const contactEmail = "specialist@futuretrendsent.info";
  
  return (
    <main className="bg-white">
      <AboutHero 
        title="About Future Trends Enterprise" 
        subtitle="Building innovative communities that foster growth, collaboration, and sustainable success."
      />
      
      {/* Welcome Section with image on the right */}
      <WelcomeSection />
      
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

      {/* Team Section */}
      <Team />

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Thriving Ecosystem</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Whether you are just starting your entrepreneurial journey or looking to build a lasting legacy, FTE offers the platform you need to succeed at every stage.
          </p>

          {/* Email Button */}
          <a 
            href={`mailto:${contactEmail}?subject=Inquiry%20from%20Website&body=Hello%20FTE%20Team,%0A%0AI%20would%20like%20to%20learn%20more%20about%20your%20services.%0A%0ABest%20regards,`} 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full inline-flex items-center transition-colors duration-300"
          >
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}