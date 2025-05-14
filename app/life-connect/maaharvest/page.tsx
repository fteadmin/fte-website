import BusinessPage from '@/components/BusinessPage';
import MaaharvestContent from '@/components/MarrH/MaaharvestContent';

export default function MaaharvestPage() {
  return (
    <>

     <BusinessPage
      name="MaaHarvest"
      description="MaaHarvest is a sustainable farming initiative dedicated to reconnecting communities with organic, locally-grown food. We combine traditional agricultural practices with modern sustainability techniques to produce high-quality, nutrient-rich crops. Our community-based approach promotes food security, environmental stewardship, and economic empowerment for local farmers."
      logo="/assets/logos/mah.jpg"
      website="https://maaharvest.com"
      social={{
        facebook: "https://facebook.com/maaharvest",
        twitter: "https://twitter.com/maaharvest",
        linkedin: "https://linkedin.com/company/maaharvest",
        instagram: "https://instagram.com/maaharvest"
      }}
      contact={{
        email: "info@maaharvest.com",
        phone: "(555) 123-4567",
        address: "123 Harvest Way, Greenfield, GF 12345"
      }}
    />
        <MaaharvestContent />

    </>
   
  );
}