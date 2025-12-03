import BusinessPage from '@/components/BusinessPage';
import ScriptedContent from '@/components/Pro-tribe/ScriptedContent';

export default function ZarielAndCoPage() {
  return (
    <>
     <BusinessPage
      name="Zariel and Co"
      description="Zariel and Co is a forward-thinking consulting firm that specializes in business transformation and strategic innovation. We partner with organizations to navigate complex challenges and capitalize on emerging opportunities in today's rapidly evolving business landscape. Our team of experienced consultants brings diverse expertise across industries, helping clients achieve sustainable growth through data-driven insights and customized solutions."
      logo = "/assets/logos/z.jpg"
      website="https://zaniyazariel.com"
      social={{
        facebook: "https://facebook.com/zarielandco",
        twitter: "https://twitter.com/zarielandco",
        linkedin: "https://linkedin.com/company/zarielandco",
        instagram: "https://instagram.com/zarielandco"
      }}
      contact={{
        email: "info@zaniyazariel.com",
        phone: "+1 (424) 491-5669",
        address: "1401 21st St Ste R, Sacramento County, CA 95811"
      }}
    />
    <ScriptedContent />
    </>
   
  );
}