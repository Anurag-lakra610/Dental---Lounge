import React from 'react';
import { Link } from 'react-router-dom';
import { clinicConfig } from '../data/clinicConfig';
import { Phone, Mail, MapPin, MessageCircle, ChevronRight } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Use the exact Google Maps link provided by the user
  const mapsUrl = "https://maps.app.goo.gl/6iVVywqPPDJgqRQD8";

  return (
    <footer className="relative text-white overflow-hidden">
      
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop" 
          alt="Dental Lounge Clinic Background" 
          className="w-full h-full object-cover object-center"
        />
        {/* Brand Primary Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/95 via-[var(--color-primary)]/90 to-[var(--color-primary)]/95 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 inline-block">
              <div className="flex items-center gap-3">
                <img src="/logo.jpg" alt="Dental Lounge Logo" className="h-10 w-10 object-cover rounded-full bg-white p-0.5" />
                <span className="text-2xl font-serif font-bold tracking-tight text-white">{clinicConfig.name}</span>
              </div>
            </Link>
            <p className="font-serif italic text-xl text-white/90 mb-4">
              "{clinicConfig.tagline}"
            </p>
            <p className="text-white/80 text-sm leading-relaxed max-w-md mb-8">
              With our expertise in dental & aesthetic care, we are dedicated to providing premium treatments in a comfortable and luxurious environment.
            </p>
            <a 
              href="#appointment" 
              className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-6 py-3 rounded-full font-bold text-sm hover:bg-[var(--color-secondary)] hover:text-white transition-all shadow-md group"
            >
              Book an Appointment
              <ChevronRight size={16} />
            </a>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Treatments', path: '/treatments' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-white/80 hover:text-[var(--color-secondary)] transition-colors flex items-center gap-2 group text-sm font-medium"
                  >
                    <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-5">
              <li>
                <a href={`tel:${clinicConfig.contact.phoneUrl}`} className="flex items-start gap-3 text-white/90 hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-secondary)] transition-colors">
                    <Phone size={14} className="text-white" />
                  </div>
                  <div className="mt-1">
                    <span className="block text-xs text-white/60 uppercase tracking-wider mb-1 font-bold">Call Us</span>
                    <span className="text-sm font-medium">{clinicConfig.contact.phone}</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${clinicConfig.contact.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-white/90 hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-secondary)] transition-colors">
                    <MessageCircle size={14} className="text-white" />
                  </div>
                  <div className="mt-1">
                    <span className="block text-xs text-white/60 uppercase tracking-wider mb-1 font-bold">WhatsApp</span>
                    <span className="text-sm font-medium">{clinicConfig.contact.whatsapp}</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${clinicConfig.contact.email}`} className="flex items-start gap-3 text-white/90 hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-secondary)] transition-colors">
                    <Mail size={14} className="text-white" />
                  </div>
                  <div className="mt-1">
                    <span className="block text-xs text-white/60 uppercase tracking-wider mb-1 font-bold">Email</span>
                    <span className="text-sm font-medium break-all">{clinicConfig.contact.email}</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-white/90 hover:text-[var(--color-secondary)] transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-secondary)] transition-colors">
                    <MapPin size={14} className="text-white" />
                  </div>
                  <div className="mt-1">
                    <span className="block text-xs text-white/60 uppercase tracking-wider mb-1 font-bold">Visit Clinic</span>
                    <span className="text-sm font-medium leading-relaxed block">
                      {clinicConfig.address.city}, {clinicConfig.address.state}
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
          <p>&copy; {currentYear} {clinicConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

