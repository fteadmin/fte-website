import BusinessPage from '@/components/BusinessPage';

export default function HousePartyPage() {
  return (
    <BusinessPage
      name="House Party"
      description="House Party creates vibrant community gatherings that foster genuine connections through shared experiences. Our curated events blend entertainment, culture, and networking in welcoming spaces where people feel valued and inspired. From themed social events to cultural celebrations, we bring diverse groups together to create memorable experiences that strengthen community bonds."
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
  );
}