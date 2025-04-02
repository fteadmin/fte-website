import BusinessPage from '@/components/BusinessPage';

export default function SageHospitalPage() {
  return (
    <BusinessPage
      name="Sage Hospital"
      description="Sage Hospital is a pioneering healthcare institution committed to providing innovative, patient-centered care through the integration of cutting-edge technology and compassionate medical services. Our state-of-the-art facilities and expert medical staff work together to deliver exceptional healthcare outcomes while maintaining the highest standards of patient comfort and satisfaction. We specialize in both traditional and innovative medical treatments, offering comprehensive care across multiple specialties."
      logo="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400"
      website="https://sagehospital.com"
      heroImage="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80"
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