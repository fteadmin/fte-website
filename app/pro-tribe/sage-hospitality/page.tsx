import BusinessPage from '@/components/BusinessPage';
import SageHospitalityContent from '@/components/Pro-tribe/SageHospitalityContent';

export default function SageHospitalityPage() {
  return (
    <>
      <BusinessPage
        name="Sage Hospitality and Concierge"
        description="Sage Hospitality and Concierge provides comprehensive real estate solutions spanning residential properties, commercial investments, and premium concierge services. We guide clients through every step of their real estate journey with personalized support and expert insights."
        logo="/assets/logos/sage.jpg"
        website="https://sagehospitality.com"
        social={{
          facebook: "https://facebook.com/sagehospitality",
          twitter: "https://twitter.com/sagehospitality",
          linkedin: "https://linkedin.com/company/sagehospitality",
          instagram: "https://instagram.com/sagehospitality"
        }}
        contact={{
          email: "info@sagehospitality.com",
          phone: "(555) 345-6789",
          address: "789 Concierge Boulevard, Hospitality District, HD 78901"
        }}
      />
      
      <div id="sage-hospitality-content">
        <SageHospitalityContent />
      </div>
    </>
  );
}