import { ArrowRight } from 'lucide-react';

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
        subtitle="The parent ecosystem powering the next generation of culture-driven enterprise — where vision meets infrastructure and communities become lasting value."
      />
      
      {/* Welcome Section with image on the right */}
      <WelcomeSection />
      
      {/* Key Achievements and Impact */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">Ecosystem Proof Points</h2>
          <p className="text-blue-100 max-w-3xl mx-auto text-center mb-16">
            Snapshot values shown here reflect current internal positioning as of March 2026 and are updated as operating data evolves.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <StatisticCard
              value="9"
              label="Ecosystem Verticals"
              description="Active and emerging ventures spanning capital, hospitality, media, culinary, fashion, wellness, and community platforms."
            />

            <StatisticCard
              value="4"
              label="Active IPs"
              description="Four active intellectual properties across the FTE ecosystem powering ventures and brand development."
            />

            <StatisticCard
              value="4"
              label="Automotive Patents"
              description="Four automotive patents reflecting FTE's commitment to innovation and technology-driven enterprise."
            />

            <StatisticCard
              value="$1.2M+"
              label="Assets"
              description="Current asset base across the FTE ecosystem supporting operations, ventures, and growth initiatives."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Build With The FTE Ecosystem</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Founders, investors, and strategic partners can engage FTE through audience-specific pathways designed for execution and long-term enterprise value.
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