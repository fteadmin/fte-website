
'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Building2, Leaf, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const proTribeContent = {
  title: 'Pro Tribe',
  description: 'At Pro Tribe, we believe in the power of collaboration, where every dollar spent within our community circulates back to fuel the growth of our members.',
  businesses: [
    'Sage Hospital', 
    'Zariel and Co', 
    'Phylos', 
    'Nx LVL', 
    'Good Chef Co', 
    'Launch Couture'
  ]
};

const lifeConnectContent = {
  title: 'Life Connect',
  description: 'At Life Connect, we believe that true fulfillment comes from living in harmony with nature and embracing practices that promote overall well-being.',
  businesses: ['Wellness Center', 'Organic Market', 'Eco Tourism']
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.getElementById('mobile-menu');
      const menuButton = document.getElementById('menu-button');
      
      if (mobileMenu && menuButton && 
          !mobileMenu.contains(event.target as Node) && 
          !menuButton.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="fixed w-full z-50">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#010E2F] via-[#0A2472] to-[#0E6BA8] opacity-90" />
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white">
              FTE
            </Link>

            <button
              id="menu-button"
              className="lg:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            <NavigationMenu className="hidden lg:block">
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:bg-white/10")}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:bg-white/10")}>
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10">Pro Tribe</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 bg-[#010E2F]/95 backdrop-blur-sm">
                      <div className="flex items-center gap-2 text-white">
                        <Building2 className="h-5 w-5" />
                        <div className="text-sm font-medium">{proTribeContent.title}</div>
                      </div>
                      <p className="text-sm text-white/70 mt-2">{proTribeContent.description}</p>
                      
                      {/* Added Pro Tribe main page link */}
                      <Link
                        href="/pro-tribe"
                        className="block p-2 mt-4 text-white bg-white/10 hover:bg-white/20 rounded-md transition-colors font-medium"
                      >
                        Pro Tribe Overview
                      </Link>
                      
                      <div className="grid gap-2 mt-3">
                        <div className="text-white/80 text-xs uppercase tracking-wide pl-2">Our Businesses</div>
                        {proTribeContent.businesses.map((business) => (
                          <Link
                            key={business}
                            href={`/pro-tribe/${business.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block p-2 text-white hover:bg-white/10 rounded-md transition-colors"
                          >
                            {business}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10">Life Connect</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 bg-[#010E2F]/95 backdrop-blur-sm">
                      <div className="flex items-center gap-2 text-white">
                        <Leaf className="h-5 w-5" />
                        <div className="text-sm font-medium">{lifeConnectContent.title}</div>
                      </div>
                      <p className="text-sm text-white/70 mt-2">{lifeConnectContent.description}</p>
                      
                      {/* Added Life Connect main page link for consistency */}
                      <Link
                        href="/life-connect"
                        className="block p-2 mt-4 text-white bg-white/10 hover:bg-white/20 rounded-md transition-colors font-medium"
                      >
                        Life Connect Overview
                      </Link>
                      
                      <div className="grid gap-2 mt-3">
                        <div className="text-white/80 text-xs uppercase tracking-wide pl-2">Explore Areas</div>
                        {lifeConnectContent.businesses.map((business) => (
                          <Link
                            key={business}
                            href={`/life-connect/${business.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block p-2 text-white hover:bg-white/10 rounded-md transition-colors"
                          >
                            {business}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/membership" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:bg-white/10")}>
                      Membership
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:bg-white/10")}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`lg:hidden fixed inset-0 bg-[#010E2F]/95 backdrop-blur-sm transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="pt-24 px-6">
            <nav className="grid gap-2">
              <Link 
                href="/" 
                className="text-white text-lg py-2 hover:bg-white/10 rounded-md px-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-white text-lg py-2 hover:bg-white/10 rounded-md px-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/membership" 
                className="text-white text-lg py-2 hover:bg-white/10 rounded-md px-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Membership
              </Link>
              <div className="py-2">
                <h3 className="text-white text-lg mb-2 px-3">Pro Tribe</h3>
                {/* Added Pro Tribe main page link in mobile menu */}
                <Link
                  href="/pro-tribe"
                  className="block text-white py-2 hover:bg-white/10 rounded-md px-6 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pro Tribe Overview
                </Link>
                <div className="space-y-1 mt-2">
                  {proTribeContent.businesses.map((business) => (
                    <Link
                      key={business}
                      href={`/pro-tribe/${business.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block text-white/70 py-2 hover:bg-white/10 rounded-md px-6"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {business}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="py-2">
                <h3 className="text-white text-lg mb-2 px-3">Life Connect</h3>
                {/* Added Life Connect main page link in mobile menu */}
                <Link
                  href="/life-connect"
                  className="block text-white py-2 hover:bg-white/10 rounded-md px-6 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Life Connect Overview
                </Link>
                <div className="space-y-1 mt-2">
                  {lifeConnectContent.businesses.map((business) => (
                    <Link
                      key={business}
                      href={`/life-connect/${business.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block text-white/70 py-2 hover:bg-white/10 rounded-md px-6"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {business}
                    </Link>
                  ))}
                </div>
              </div>
              <Link 
                href="/contact" 
                className="text-white text-lg py-2 hover:bg-white/10 rounded-md px-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}