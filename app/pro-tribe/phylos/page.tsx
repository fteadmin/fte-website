import BusinessPage from '@/components/BusinessPage';
import PhylosContent from '@/components/Pro-tribe/PhylosContent';

export default function PhylosPage() {
  return (
    <>
      <BusinessPage
        name="Phylos"
        description="Phylos is a dynamic platform that helps Our platform helps you unlock the deeper meaning in movement for athletics, wellness, and beauty."
        logo="/assets/logos/phylos.png"
        // https://nxnlvl.com
        website="https://phyloswisdom.com"
        social={{
          facebook: "https://facebook.com/phylos",
          twitter: "https://twitter.com/phylos",
          linkedin: "https://linkedin.com/company/phylos",
          instagram: "https://instagram.com/phylos"
        }}
        contact={{
          email: "info@phylos.com",
          phone: "(555) 456-7890",
          address: "789 Movement Ave, Wellness District, WD 56789"
        }}
      />
      
      <div id="phylos-content">
        <PhylosContent />
      </div>
    </>
  );
}