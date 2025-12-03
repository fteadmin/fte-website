import BusinessPage from '@/components/BusinessPage';
import GoodChefCoContent from '@/components/Pro-tribe/GoodChefCoContent';

export default function GoodChefCoPage() {
  return (
    <>
      <BusinessPage
        name="Good Chef Co"
        description="Good Chef Co represents the future of culinary entrepreneurship, offering a groundbreaking platform that unites ambitious chefs with passionate food enthusiasts. Our innovative dual-market solution combines a comprehensive chef incubator program with an exclusive membership-based dining community, creating unprecedented opportunities for culinary innovation and exceptional dining experiences.

"
        logo="/assets/logos/goodchef.png"
        website="https://goodchefco.com"
        social={{
          facebook: "https://facebook.com/goodchefco",
          twitter: "https://twitter.com/goodchefco",
          linkedin: "https://linkedin.com/company/goodchefco",
          instagram: "https://instagram.com/goodchefco"
        }}
        contact={{
          email: "info@goodchefco.com",
          phone: "(818) 651-7779",
          address: "1401 21st ST Studio R, Sacramento, CA 95811, US"
        }}
      />
      
      <div id="goodchefco-content">
        <GoodChefCoContent />
      </div>
    </>
  );
}