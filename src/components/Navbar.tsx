import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X, Phone, Calendar } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick, onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Who We Help', href: '#who-we-help' },
    { name: 'Our Approach', href: '#approach' },
    { name: 'Therapist', href: '#therapist' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#E8E1D5]'
          : 'bg-[#FAF7F2] border-b border-[#F0EAE1]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="group flex items-center focus:outline-none"
            aria-label="Blooming Words Home"
          >
            <BrandLogo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-[#46534C]" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="transition-colors hover:text-[#2A5747] hover:underline underline-offset-8 decoration-[#87B4A0] py-2"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              id="header-contact-btn"
              onClick={onContactClick}
              className="text-xs font-semibold px-3.5 py-2 rounded-xl text-[#394941] hover:bg-[#ECE6DC] transition-colors cursor-pointer"
            >
              Contact Us
            </button>
            <button
              id="header-book-btn"
              onClick={onBookClick}
              className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-xl bg-[#3F6F5E] text-white hover:bg-[#32584B] shadow-xs transition-all duration-200 cursor-pointer active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an Appointment</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center sm:hidden">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#394941] hover:bg-[#EFEAE2] focus:outline-none focus:ring-2 focus:ring-[#3F6F5E]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E5DFD5] px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2 mb-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 text-base font-medium text-[#38443E] hover:bg-[#EFE9E0] rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-[#E8E2D7] flex flex-col gap-3">
            <button
              id="mobile-nav-book-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#3F6F5E] text-white font-medium shadow-xs"
            >
              <Calendar className="w-4 h-4" />
              Book an Appointment
            </button>
            <button
              id="mobile-nav-contact-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#D5CDC1] text-[#34423C] font-medium hover:bg-[#F2ECE3]"
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
