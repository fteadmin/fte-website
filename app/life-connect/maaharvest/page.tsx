import BusinessPage from '@/components/BusinessPage';
import MaaharvestContent from '@/components/MarrH/MaaharvestContent';

export default function MaaharvestPage() {
  return (
    <>
      <BusinessPage
        name="MaaHarvest"
        description="Maa Harvest is a soul-nourishing culinary experience that unites communities through seasonal, chef-led gatherings. As a signature activation of Good Chef Co within the Pro Tribe ecosystem, we celebrate farm-to-table authenticity while rebuilding connections to land, heritage, and conscious living."
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
      
      <div id="maaharvest-content">
        <MaaharvestContent />
      </div>
    </>
  );
}