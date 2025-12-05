import React from 'react';
import ProtribeUpdates from '@/components/Pro-tribe/ProtribeUpdates';
import Link from 'next/link';

export default function ProTribeUpdatesPage() {
  return (
    <main className="bg-white min-h-screen">
      <section className="py-20 bg-gradient-to-br from-[#010E2F] via-[#0A2472] to-[#0E6BA8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Pro Tribe Updates</h1>
          <p className="text-lg max-w-2xl mx-auto text-white/90">Live campaigns, member activations, and recent announcements from across our business verticals.</p>
          <div className="mt-6">
            <Link href="/pro-tribe" className="inline-block bg-white text-[#010E2F] px-4 py-2 rounded-full">Back to Pro Tribe</Link>
          </div>
        </div>
      </section>

      <ProtribeUpdates />
    </main>
  );
}
