import React, { useEffect } from 'react';
import { clinicConfig } from '../data/clinicConfig';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { AppointmentForm } from '../components/AppointmentForm';
import { useLocation } from 'react-router-dom';

export const ContactPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-[var(--color-background)]">
      
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop" 
            alt="Contact Us Background" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0B1528]/70"></div>
        </div>
        <div className="relative z-10 text-center px-6 text-white mt-20">
          <h1 className="text-[40px] md:text-[60px] md:text-[48px] md:text-[80px] font-serif font-bold leading-none">
            Contact
          </h1>
        </div>
      </section>

      {/* 2. Contact Info Grid Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[var(--color-secondary)] font-bold tracking-widest uppercase text-sm mb-4 block">
            • Contact Info •
          </span>
          <h2 className="text-[40px] md:text-[36px] md:text-[48px] font-serif font-bold text-[var(--color-text-main)] mb-6">
            Contact & Join Together
          </h2>
          <p className="text-[var(--color-text-main)]/60 max-w-2xl mx-auto">
            We're here to help you achieve the perfect smile. Reach out to our team for any questions or to schedule your next appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <a href="https://maps.app.goo.gl/6iVVywqPPDJgqRQD8" target="_blank" rel="noopener noreferrer" className="bg-white rounded-[2rem] p-8 text-center shadow-lg shadow-gray-100/50 flex flex-col items-center hover:-translate-y-2 transition-transform duration-300 group cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-[var(--color-background)] flex items-center justify-center mb-6 text-[var(--color-text-main)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
              <MapPin size={28} />
            </div>
            <h3 className="font-bold text-[var(--color-text-main)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Visit Us At</h3>
            <p className="text-[var(--color-text-main)]/60 text-sm">
              {clinicConfig.address.line1}<br />
              {clinicConfig.address.city}, {clinicConfig.address.state}
            </p>
          </a>
          
          {/* Card 2 */}
          <a href={`tel:${clinicConfig.contact.phoneUrl}`} className="bg-white rounded-[2rem] p-8 text-center shadow-lg shadow-gray-100/50 flex flex-col items-center hover:-translate-y-2 transition-transform duration-300 group cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-[var(--color-background)] flex items-center justify-center mb-6 text-[var(--color-text-main)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
              <Phone size={28} />
            </div>
            <h3 className="font-bold text-[var(--color-text-main)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Call Us On</h3>
            <p className="text-[var(--color-text-main)]/60 text-sm mb-1">
              Tel: {clinicConfig.contact.phone}
            </p>
            <p className="text-[var(--color-text-main)]/60 text-sm">
              Mob: {clinicConfig.contact.whatsapp}
            </p>
          </a>

          {/* Card 3 */}
          <a href={`mailto:${clinicConfig.contact.email}`} className="bg-white rounded-[2rem] p-8 text-center shadow-lg shadow-gray-100/50 flex flex-col items-center hover:-translate-y-2 transition-transform duration-300 group cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-[var(--color-background)] flex items-center justify-center mb-6 text-[var(--color-text-main)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
              <Mail size={28} />
            </div>
            <h3 className="font-bold text-[var(--color-text-main)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Mail Address</h3>
            <p className="text-[var(--color-text-main)]/60 text-sm break-all">
              {clinicConfig.contact.email}
            </p>
          </a>

          {/* Card 4 */}
          <div className="bg-white rounded-[2rem] p-8 text-center shadow-lg shadow-gray-100/50 flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 rounded-full bg-[var(--color-background)] flex items-center justify-center mb-6 text-[var(--color-text-main)]">
              <Clock size={28} />
            </div>
            <h3 className="font-bold text-[var(--color-text-main)] mb-2">Opening Time</h3>
            <p className="text-[var(--color-text-main)]/60 text-sm mb-1">
              Mon - Sat : 10am - 8pm
            </p>
            <p className="text-[var(--color-text-main)]/60 text-sm">
              Sunday (Closed)
            </p>
          </div>
        </div>
      </section>

      {/* 3. Form & Image Split Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
          
          {/* Left: Image with floating card */}
          <div className="relative h-full aspect-[4/5] lg:aspect-auto">
            {/* The Person Image */}
            <div className="rounded-none overflow-hidden w-full h-full relative z-0">
              <img 
                src="/images/receptionist2.jpg" 
                alt="Friendly Receptionist" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            {/* Floating Live Chat / WhatsApp Card */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 md:bottom-10 md:left-auto md:-translate-x-0 md:-left-8 lg:-left-12 bg-[var(--color-primary)] text-white rounded-none p-6 md:p-10 shadow-2xl z-10 w-[90%] max-w-[280px] md:max-w-none md:w-[320px]">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                <MessageCircle size={32} />
              </div>
              <h3 className="font-bold text-xl mb-4">Chat With Live!</h3>
              <p className="text-white/80 text-sm mb-8 leading-relaxed">
                Have an urgent query or need immediate assistance? Our team is active on WhatsApp to guide you instantly.
              </p>
              <a 
                href={`https://wa.me/${clinicConfig.contact.whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white text-[var(--color-primary)] font-bold py-3 px-8 rounded-full hover:bg-[var(--color-secondary)] hover:text-white transition-colors"
              >
                LET'S CHAT
              </a>
            </div>
          </div>

          {/* Right: The Form Component */}
          <div><div className="text-center lg:text-left">
            <span className="text-[var(--color-secondary)] font-bold tracking-widest uppercase text-sm mb-4 block">
              • Contact Us •
            </span>
            <h2 className="text-[40px] md:text-[36px] md:text-[48px] font-serif font-bold text-[var(--color-text-main)] mb-10 leading-tight">
              Reach <span className="text-[var(--color-primary)]">& Get In Touch</span><br/>With Us !
            </h2></div>
            
            {/* Re-using the exact form design the user requested */}
            <AppointmentForm />
          </div>

        </div>
      </section>

      {/* 4. Full Width Map */}
      <section className="w-full h-[500px] mt-12 bg-gray-200 relative group cursor-pointer">
        {/* Clickable Overlay */}
        <a 
          href="https://maps.app.goo.gl/6iVVywqPPDJgqRQD8" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="absolute inset-0 z-10"
          aria-label="Open location in Google Maps"
        >
          {/* Optional hover effect on the overlay to show it's clickable */}
          <div className="absolute inset-0 bg-[var(--color-primary)]/0 group-hover:bg-[var(--color-primary)]/10 transition-colors duration-300 flex items-center justify-center">
            <div className="bg-white text-[var(--color-primary)] px-6 py-3 rounded-full font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
              Open in Google Maps
            </div>
          </div>
        </a>
        
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.1637731778933!2d75.8368!3d30.2458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910515e00000000%3A0x8e5e5f5f5f5f5f5f!2sSangrur%2C%20Punjab!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Clinic Location"
          className="relative z-0"
        ></iframe>
      </section>

    </div>
  );
};












