import BusinessPage from '@/components/BusinessPage';

export default function LaunchCouturePage() {
  return (
    <BusinessPage
      name="Launch Couture"
      description="Launch Couture is a revolutionary fashion technology company that bridges the gap between traditional fashion and digital innovation. We specialize in creating cutting-edge fashion experiences through advanced technology and sustainable practices. Our platform enables designers and brands to showcase their collections through immersive digital experiences while maintaining the highest standards of quality and craftsmanship."
      logo = "/assets/logos/lc.png"
      website="https://launchcouture.com"
      social={{
        facebook: "https://facebook.com/launchcouture",
        twitter: "https://twitter.com/launchcouture",
        linkedin: "https://linkedin.com/company/launchcouture",
        instagram: "https://instagram.com/launchcouture"
      }}
      contact={{
        email: "hello@launchcouture.com",
        phone: "(555) 678-9012",
        address: "890 Fashion Avenue, Design District, DD 23456"
      }}
    />
  );
}