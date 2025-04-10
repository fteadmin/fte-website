import BusinessPage from '@/components/BusinessPage';


export default function GoodChefCoPage() {
  return (
    <BusinessPage
      name="Good Chef Co"
      description="Good Chef Co is an innovative culinary enterprise that brings restaurant-quality dining experiences to homes and businesses. We combine traditional cooking techniques with modern technology to deliver exceptional meal services. Our team of expert chefs creates customized menus that cater to diverse dietary preferences and requirements, ensuring every meal is both delicious and nutritious."
      logo = "/assets/logos/good.png"
      website="https://goodchefco.com"
      social={{
        facebook: "https://facebook.com/goodchefco",
        twitter: "https://twitter.com/goodchefco",
        linkedin: "https://linkedin.com/company/goodchefco",
        instagram: "https://instagram.com/goodchefco"
      }}
      contact={{
        email: "hello@goodchefco.com",
        phone: "(555) 567-8901",
        address: "567 Culinary Lane, Food District, FD 45678"
      }}
    />
  );
}