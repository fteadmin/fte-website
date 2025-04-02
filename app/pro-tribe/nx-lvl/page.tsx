import BusinessPage from '@/components/BusinessPage';

export default function NxLvlPage() {
  return (
    <BusinessPage
      name="Nx LVL"
      description="Nx LVL is a premier fitness and wellness company dedicated to helping individuals and organizations achieve their peak performance potential. We combine cutting-edge exercise science with personalized coaching to deliver transformative fitness experiences. Our comprehensive approach encompasses physical training, nutrition guidance, and mental wellness strategies, ensuring holistic development for our clients."
      logo="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400"
      website="https://nxlvl.fitness"
      heroImage="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&q=80"
      social={{
        facebook: "https://facebook.com/nxlvlfitness",
        twitter: "https://twitter.com/nxlvlfitness",
        linkedin: "https://linkedin.com/company/nxlvl",
        instagram: "https://instagram.com/nxlvlfitness"
      }}
      contact={{
        email: "train@nxlvl.fitness",
        phone: "(555) 456-7890",
        address: "321 Fitness Way, Wellness District, WD 89012"
      }}
    />
  );
}