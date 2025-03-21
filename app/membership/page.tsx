'use client';

import { useRef } from 'react';
import Membership from '@/components/Membership/Membership';
import MembershipHero from '@/components/Membership/MembershipHero';

export default function MembershipPage() {
  // Reference to the membership plans section
  const plansRef = useRef<HTMLDivElement>(null);
  
  // Function to scroll to plans section
  const scrollToPlans = () => {
    plansRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <>
      <MembershipHero scrollToPlans={scrollToPlans} />
      <div ref={plansRef}>
        <Membership />
      </div>
    </>
  );
}