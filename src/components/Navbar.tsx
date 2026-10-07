import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { clinicConfig } from '../data/clinicConfig';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Treatments', href: '/treatments' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // If we are on an inner page, the navbar should probably have a background by default 
  // since there might not be a huge hero image with a dark gradient.
  const isInnerPage = location.pathname !== '/';
  const navBackground = (isScrolled || isInnerPage) ? 'bg-white shadow-sm py-4' : 'bg-transparent py-6';
  const textColor = (isScrolled || isInnerPage) ? 'text-[var(--color-text-main)] hover:text-[var(--color-secondary)]' : 'text-white/90 hover:text-white';
  const logoColor = (isScrolled || isInnerPage) ? 'text-[var(--color-primary)]' : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Dental Lounge Logo" className="h-10 w-10 object-cover rounded-full bg-white p-0.5" />
            <span className={`font-serif text-2xl font-bold tracking-tight transition-colors ${logoColor}`}>
              {clinicConfig.name}
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`font-medium transition-colors ${textColor}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <a 
            href={`https://wa.me/${clinicConfig.contact.whatsappNumber}`} 
            target="_blank" 
            rel="noreferrer" 
            className={`font-medium transition-colors ${textColor}`}
          >
            WhatsApp
          </a>
          <Link 
            to="/contact" 
            className={`px-6 py-2.5 rounded-full font-bold transition-all shadow-sm ${(isScrolled || isInnerPage) ? 'bg-black text-white hover:bg-[var(--color-secondary)] hover:text-white' : 'bg-white text-black hover:bg-[var(--color-secondary)] hover:text-white'}`}
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`p-2 transition-colors ${logoColor}`}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 py-4 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
             <Link 
               key={link.name} 
               to={link.href} 
               onClick={() => setMobileMenuOpen(false)}
               className="text-[var(--color-text-main)] font-medium py-2 border-b border-gray-100 last:border-0"
             >
               {link.name}
             </Link>
          ))}
          <div className="flex flex-col space-y-3 pt-2">
             <a href={`https://wa.me/${clinicConfig.contact.whatsappNumber}`} target="_blank" rel="noreferrer" className="text-center bg-white border border-gray-200 text-black px-5 py-3 rounded-full font-bold shadow-sm hover:bg-[var(--color-secondary)] hover:text-white transition-all">
               WhatsApp Us
             </a>
             <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-center bg-black text-white px-5 py-3 rounded-full font-medium">
               Book Appointment
             </Link>
          </div>
        </div>
      )}
    </nav>
  );
};


