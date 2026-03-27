'use client';

import { motion } from 'framer-motion';
import TeamMember from './TeamMember';

export default function Team() {
  // Founder-led core team profile for public site consistency.
  const teamMembers = [
      {
      name: "Curtis Randolph",
      role: "Founder",
      bio: "Curtis Randolph is the founder of Future Trends Enterprise, leading ecosystem strategy across venture building, partnerships, and operating brand growth.",
      image: "/assets/team/curtis.webp" // Update with actual image path
    },
    {
      name: "Ben Larkpor",
      role: "Strategic Operations",
      bio: "Ben supports strategic planning and execution across FTE ventures, helping align growth priorities with ecosystem-wide outcomes.",
      image: "/assets/team/ben.jpeg" // Update with actual image path
    },
    // {
    //   name: "Alfonzo Spigner",
    //   role: "Chief Creative Officer (CCO)",
    //   bio: "Leads FTE's creative vision, brand identity, and innovation strategies. Alfonzo oversees design, marketing, content, and product aesthetics to ensure consistency and engagement across all platforms.",
    //   image: "/assets/team/alf.jpg" // Update with actual image path
    // },
    {
      name: "Omari Sherif",
      role: "Business Strategist & Integrator",
      bio: "Omari aligns operations, teams, and systems to help FTE ventures execute with speed and consistency.",
      image: "/assets/team/omari.png" // Update with actual image path
    },
    {
      name: "Timothy Neal",
      role: "Community Relations Director",
      bio: "Timothy leads community and partnership initiatives that connect ventures to target audiences and ecosystem opportunities.",
      image: "/assets/team/tim.jpg" // Update with actual image path
    },
    {
      name: "Carmelle Neal",
      role: "Community Relations Director",
      bio: "Carmelle helps steward stakeholder relationships and outreach strategy across FTE programs and portfolio initiatives.",
      image: "/assets/team/car3.png"
    },
    {
      name: "Mimi Aremu",
      role: "Risk Strategy Advisor",
      bio: "Mimi supports enterprise risk and resilience planning, helping ventures build durable operating models.",
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
            FTE operates with a founder-led core team and specialist collaborators across strategy, operations,
            partnerships, and venture execution.
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