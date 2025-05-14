import BusinessPage from '@/components/BusinessPage';

export default function SageHospitalPage() {
  return (
    <BusinessPage
      name="Sage Hospital"
      description="Sage Hospital is a pioneering healthcare institution committed to providing innovative, patient-centered care through the integration of cutting-edge technology and compassionate medical services. Our state-of-the-art facilities and expert medical staff work together to deliver exceptional healthcare outcomes while maintaining the highest standards of patient comfort and satisfaction. We specialize in both traditional and innovative medical treatments, offering comprehensive care across multiple specialties."
      logo = "/assets/logos/sage.jpg"
      website="https://sagehospital.com"
      social={{
        facebook: "https://facebook.com/sagehospital",
        twitter: "https://twitter.com/sagehospital",
        linkedin: "https://linkedin.com/company/sagehospital",
        instagram: "https://instagram.com/sagehospital"
      }}
      contact={{
        email: "info@sagehospital.com",
        phone: "(555) 123-4567",
        address: "789 Healthcare Avenue, Medical District, MD 12345"
      }}
    />
  );
}