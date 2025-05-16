import BusinessPage from '@/components/BusinessPage';
import EntrepreneurLifestyle from '@/components/Entrelife/Entreprenuerlifestyle';

export default function EntreprenuerLifestylePage() {
  return (
    <>
      <BusinessPage
        name="Entrepreneur Lifestyle"
        description={
          <>
            Entrepreneur Lifestyle is dedicated to bridging the gap between business success and personal fulfillment. 
            We create content that inspires and educates entrepreneurs on achieving sustainable growth while 
            maintaining balance and wellbeing. 
            <a 
              href="#entrepreneur-content" 
              className="text-blue-600 font-medium hover:underline ml-2"
            >
              Read more
            </a>
          </>
        }
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
      
      <div id="entrepreneur-content">
        <EntrepreneurLifestyle />
      </div>
    </>
  );
}