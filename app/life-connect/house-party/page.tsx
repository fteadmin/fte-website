import BusinessPage from '@/components/BusinessPage';
import HousePartyContent from '@/components/HouseParty/HousePartyContent';

export default function HousePartyPage() {
  return (
    <>
     <BusinessPage
      name="House Party"
      description={
        <>
          House Party is the vibrant social engine behind Sage Hospitality and Lifestyle Concierge, blending real estate 
          expertise with community engagement. We transform residential and commercial property experiences into 
          meaningful connections through curated gatherings that make real estate personal and community-centered.
          <a 
            href="#houseparty-content" 
            className="text-blue-600 font-medium hover:underline ml-2"
          >
            Read more
          </a>
        </>
      }
      logo="/assets/logos/hp.jpg"
      website="https://housepartyevents.com"
      social={{
        facebook: "https://facebook.com/housepartyevents",
        twitter: "https://twitter.com/housepartyevents",
        linkedin: "https://linkedin.com/company/house-party-events",
        instagram: "https://instagram.com/house.party.events"
      }}
      contact={{
        email: "events@housepartyevents.com",
        phone: "(555) 234-5678",
        address: "789 Community Plaza, Suite 300, Los Angeles, CA 90012"
      }}
    />
      <div id="houseparty-content">
        <HousePartyContent />
      </div>
    </>
   
  );
}