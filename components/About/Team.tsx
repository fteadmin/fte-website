'use client';

import { motion } from 'framer-motion';
import TeamMember from './TeamMember';

export default function Team() {
  // Updated team members data with the provided information
  const teamMembers = [
    {
      name: "Ben Larkpor",
      role: "Founder",
      bio: "Visionary leader with a passion for bridging technology and social impact. Ben founded Future Trends Enterprise to create innovative ecosystems that empower communities and businesses.",
      image: "/assets/team/ben.jpeg" // Update with actual image path
    },
    {
      name: "Alfonzo Spigner",
      role: "Chief Creative Officer (CCO)",
      bio: "Leads FTE's creative vision, brand identity, and innovation strategies. Alfonzo oversees design, marketing, content, and product aesthetics to ensure consistency and engagement across all platforms.",
      image: "/assets/team/alf.jpg" // Update with actual image path
    },
    {
      name: "Omari Sherif",
      role: "Business Strategist & Integrator",
      bio: "Omari is a results-driven Business Strategist specializing in aligning operations, teams, and systems to drive growth and efficiency.",
      image: "/assets/team/img-3.jpg" // Update with actual image path
    },
    {
      name: "Timothy Neal",
      role: "Community Relations Director",
      bio: "Timothy Neal excels in fostering meaningful connections between FTE and the communities it serves. He leads outreach initiatives, builds strategic partnerships, and advocates for inclusivity and economic empowerment.",
      image: "/assets/team/tim.jpg" // Update with actual image path
    },
    {
      name: "Carmelle Neal",
      role: "Community Relations Director",
      bio: "Carmelle has over a decade of experience in community outreach initiatives. With a passion for relationship-building, Carmelle ensures FTE remains engaged with its members, stakeholders, and broader networks, strengthening its impact and community-driven mission.",
      image: "/assets/team/car3.png"
    },
    {
      name: "Mimi Aremu",
      role: "Risk Strategy Advisor",
      bio: "Specializing in identifying, assessing, and mitigating risks that impact business growth and sustainability. Mimi develops strategic frameworks to safeguard operations, ensuring compliance, financial stability, and resilience against market uncertainties.",
      image: "/assets/team/mimi.jpeg"
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#010E2F] mb-4">Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the visionaries and experts behind Future Trends Enterprise who are driving innovation
            and creating new opportunities in technology and business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TeamMember 
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}