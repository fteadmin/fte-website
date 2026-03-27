'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
import { Building2, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const ecosystemContent = {
  title: 'Ecosystem Brands',
  businesses: [
    'Good Chef Co', 
    'Sage Hospitality', 
    'Zariel and Co', 
    'Phylos', 
    'Nx LVL', 
    'Launch Couture'
  ]
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEcosystemOpen, setIsEcosystemOpen] = useState(false);

  // Close mobile menu when clicking outside
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

  // Disable body scroll when mobile menu is open
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

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle Ecosystem dropdown in mobile view
  const toggleEcosystem = () => {
    setIsEcosystemOpen(!isEcosystemOpen);
  };

  return (
    <div className="fixed w-full z-50">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#010E2F] via-[#0A2472] to-[#0E6BA8] opacity-90" />
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Replace text with logo image */}
            <Link href="/" className="flex items-center">
              <div className="relative h-12 w-32">
                <Image 
                  src="/assets/logos/logo-dark.png" 
                  alt="FTE Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Single toggle button that changes between hamburger and X */}
            <button
              id="menu-button"
              className="lg:hidden text-white z-50"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
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
                  <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10">Ecosystem Brands</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 bg-[#010E2F]/95 backdrop-blur-sm">
                      <div className="flex items-center gap-2 text-white">
                        <Building2 className="h-5 w-5" />
                        <div className="text-sm font-medium">{ecosystemContent.title}</div>
                      </div>
                      
                      {/* Ecosystem overview link */}
                      <Link
                        href="/ecosystem"
                        className="block p-2 mt-4 text-white bg-white/10 hover:bg-white/20 rounded-md transition-colors font-medium"
                      >
                        Active Revenue Drivers
                      </Link>
                      {/* Ecosystem updates link */}
                      <Link
                        href="/ecosystem/updates"
                        className="block p-2 mt-2 text-white bg-white/10 hover:bg-white/20 rounded-md transition-colors font-medium"
                      >
                        Ecosystem Updates
                      </Link>
                      
                      <div className="grid gap-2 mt-3">
                        <div className="text-white/80 text-xs uppercase tracking-wide pl-2">Brand Portfolio</div>
                        {ecosystemContent.businesses.map((business) => (
                          <Link
                            key={business}
                            href={`/ecosystem/${business.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block p-2 text-white hover:bg-white/10 rounded-md transition-colors"
                          >
                            {business}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {/* Life Connect and MaaHarvest are intentionally hidden */}
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

        {/* Mobile Menu - Fixed positioning and proper transitions */}
        <div
          id="mobile-menu"
          className={`lg:hidden fixed inset-0 bg-[#010E2F]/95 backdrop-blur-sm transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
          style={{ zIndex: 40 }}
        >
          {/* Add logo to mobile menu as well */}
          <div className="absolute top-6 left-4">
            <div className="relative h-10 w-28">
              <Image 
                src="/assets/logos/logo.png" 
                alt="FTE Logo" 
                fill
                className="object-contain"
              />
            </div>
          </div>
          
          <div className="pt-24 px-6 pb-16">
            <nav className="grid gap-2">
              <Link 
                href="/" 
                className="text-white text-lg py-2 hover:bg-white/10 rounded-md px-3"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-white text-lg py-2 hover:bg-white/10 rounded-md px-3"
                onClick={toggleMobileMenu}
              >
                About FTE
              </Link>
              <Link
                href="/contact"
                className="text-white text-lg py-2 hover:bg-white/10 rounded-md px-3"
                onClick={toggleMobileMenu}
              >
                For Founders
              </Link>
              <Link
                href="/contact"
                className="text-white text-lg py-2 hover:bg-white/10 rounded-md px-3"
                onClick={toggleMobileMenu}
              >
                For Investors
              </Link>
              <Link 
                href="/membership" 
                className="text-white text-lg py-2 hover:bg-white/10 rounded-md px-3"
                onClick={toggleMobileMenu}
              >
                Membership
              </Link>
              
              {/* Ecosystem Dropdown */}
              <div className="py-2">
                <button 
                  onClick={toggleEcosystem}
                  className="flex items-center justify-between w-full text-white text-lg py-2 px-3 hover:bg-white/10 rounded-md"
                  type="button"
                >
                  <span>Ecosystem Brands</span>
                  {isEcosystemOpen ? (
                    <ChevronDown className="h-5 w-5" />
                  ) : (
                    <ChevronRight className="h-5 w-5" />
                  )}
                </button>
                
                {isEcosystemOpen && (
                  <div className="mt-1 space-y-1 pl-3">
                    <Link
                      href="/ecosystem"
                      className="flex items-center text-white py-2 hover:bg-white/10 rounded-md px-3 font-medium"
                      onClick={toggleMobileMenu}
                    >
                      <Building2 className="h-4 w-4 mr-2" />
                      Ecosystem Overview
                    </Link>
                        <Link
                          href="/ecosystem/updates"
                          className="flex items-center text-white py-2 hover:bg-white/10 rounded-md px-3 font-medium"
                          onClick={toggleMobileMenu}
                        >
                          <Building2 className="h-4 w-4 mr-2" />
                          Ecosystem Updates
                        </Link>
                    <div className="pl-2 border-l border-white/20 ml-1 space-y-1 mt-2">
                      {ecosystemContent.businesses.map((business) => (
                        <Link
                          key={business}
                          href={`/ecosystem/${business.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex items-center text-white/80 py-2 hover:bg-white/10 rounded-md px-3 hover:text-white"
                          onClick={toggleMobileMenu}
                        >
                          {business}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Life Connect and MaaHarvest are intentionally hidden */}
              
              <Link 
                href="/contact" 
                className="text-white text-lg py-2 hover:bg-white/10 rounded-md px-3"
                onClick={toggleMobileMenu}
              >
                Contact / Apply
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}