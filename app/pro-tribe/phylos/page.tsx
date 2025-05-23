import BusinessPage from '@/components/BusinessPage';

export default function PhylosPage() {
  return (
    <BusinessPage
      name="Phylos"
      description="Phylos is a cutting-edge technology company specializing in sustainable solutions and environmental innovation. Our mission is to develop and implement advanced technologies that address global environmental challenges while promoting sustainable business practices. Through our innovative products and services, we help organizations reduce their environmental impact while maintaining operational efficiency and profitability."
      logo = "/assets/logos/phylos.png"
      website="https://phylos.tech"
      social={{
        facebook: "https://facebook.com/phylostech",
        twitter: "https://twitter.com/phylostech",
        linkedin: "https://linkedin.com/company/phylos",
        instagram: "https://instagram.com/phylostech"
      }}
      contact={{
        email: "info@phylos.tech",
        phone: "(555) 345-6789",
        address: "123 Tech Park Way, Innovation Valley, IV 34567"
      }}
    />
  );
}