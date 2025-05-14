import BusinessPage from '@/components/BusinessPage';
import EntrepreneurLifestyle from '@/components/Entrelife/Entreprenuerlifestyle';

export default function EntreprenuerLifestylePage() {
  return (
    <>
   
     <BusinessPage
      name="Entrepreneur Lifestyle"
      description="Entrepreneur Lifestyle is a holistic platform dedicated to helping business leaders thrive professionally and personally. We blend cutting-edge business strategies with wellness practices that promote sustainable success. Our approach focuses on work-life integration, mindful leadership, and creating businesses that generate positive impact while maintaining founder wellbeing."
      logo="/assets/logos/el.jpg"
      website="https://entrepreneurlifestyle.com"
      social={{
        facebook: "https://facebook.com/entrepreneurlifestyle",
        twitter: "https://twitter.com/entlifestyle",
        linkedin: "https://linkedin.com/company/entrepreneur-lifestyle",
        instagram: "https://instagram.com/entrepreneur_lifestyle"
      }}
      contact={{
        email: "connect@entrepreneurlifestyle.com",
        phone: "(555) 789-0123",
        address: "456 Innovation Drive, Suite 200, San Francisco, CA 94107"
      }}
    />
     <EntrepreneurLifestyle />
    
    </>
   
  );
}