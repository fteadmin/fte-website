'use client';

import { motion } from 'framer-motion';
import TeamMember from './TeamMember';

export default function Team() {
  // Founder-led core team profile for public site consistency.
  const teamMembers = [
    {
      name: "Ben Larkpor",
      role: "Founder",
      bio: "Ben Larkpor is the founder of Future Trends Enterprise, leading ecosystem strategy across venture building, partnerships, and operating brand growth.",
      image: "/assets/team/ben.jpeg"
    },
    {
      name: "Alfonzo Spigner",
      role: "Strategic Operations",
      bio: "Alfonzo supports strategic planning and execution across FTE ventures, helping align growth priorities with ecosystem-wide outcomes.",
      image: "/assets/team/alf.jpg"
    },
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