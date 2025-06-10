import BusinessPage from '@/components/BusinessPage';
import LaunchCoutureContent from '@/components/Pro-tribe/LaunchCoutureContent';

export default function LaunchCouturePage() {
  return (
    <>
      <BusinessPage
        name="Launch Couture"
        description="Launch Couture is an innovative business incubator elevating fashion and beauty entrepreneurs through our comprehensive four-tier development model. We provide a platform for industry advancement, supporting creators at every stage while building an exclusive community of innovators."
        logo = "/assets/logos/lc.png"
        website="https://launchcouture.com"
        social={{
          facebook: "https://facebook.com/launchcouture",
          twitter: "https://twitter.com/launchcouture",
          linkedin: "https://linkedin.com/company/launchcouture",
          instagram: "https://instagram.com/launchcouture"
        }}
        contact={{
          email: "info@launchcouture.com",
          phone: "(555) 789-0123",
          address: "123 Fashion Avenue, Design District, NY 10001"
        }}
      />
      
      <div id="launchcouture-content">
        <LaunchCoutureContent />
      </div>
    </>
  );
}