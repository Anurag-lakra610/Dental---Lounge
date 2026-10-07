import React from 'react';
import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';
import { clinicConfig } from '../data/clinicConfig';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-[36px] md:text-[48px] font-serif font-semibold text-[var(--color-primary)] mb-6">Visit Dental Lounge</h2>
            <p className="text-lg text-[var(--color-text-main)]/70 mb-12">
              Located conveniently in Sangrur, we're ready to provide you with expert dental and aesthetic care.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-[var(--color-secondary)]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-[var(--color-primary)] mb-1">Address</h3>
                  <p className="text-[var(--color-text-main)]/70">
                    {clinicConfig.address.line1}<br />
                    {clinicConfig.address.line2}<br />
                    {clinicConfig.address.city}, {clinicConfig.address.state}, {clinicConfig.address.country}
                  </p>
                  <a href="#" className="inline-block mt-3 text-[var(--color-secondary)] font-medium hover:text-[var(--color-primary)] transition-colors">
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-[var(--color-secondary)]">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-[var(--color-primary)] mb-1">Phone</h3>
                  <p className="text-[var(--color-text-main)]/70">{clinicConfig.contact.phone}</p>
                  <a href={`tel:${clinicConfig.contact.phoneUrl}`} className="inline-block mt-3 bg-white text-black border border-gray-200 px-6 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-[var(--color-secondary)] hover:text-white transition-all">
                    Call Now
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-[var(--color-secondary)]">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-[var(--color-primary)] mb-1">WhatsApp</h3>
                  <p className="text-[var(--color-text-main)]/70">{clinicConfig.contact.whatsapp}</p>
                  <a href={`https://wa.me/${clinicConfig.contact.whatsappNumber}`} target="_blank" rel="noreferrer" className="inline-block mt-3 bg-white text-black border border-gray-200 px-6 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-[var(--color-secondary)] hover:text-white transition-all">
                    WhatsApp Us
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-[var(--color-secondary)]">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-[var(--color-primary)] mb-1">Email</h3>
                  <p className="text-[var(--color-text-main)]/70">{clinicConfig.contact.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[400px] lg:h-auto rounded-[2rem] overflow-hidden shadow-lg border border-[var(--color-primary)]/10 bg-gray-200">
            {/* Simple Map Placeholder */}
            <div className="w-full h-full flex items-center justify-center bg-[#E5E5E5]">
              <div className="text-center">
                <MapPin size={48} className="mx-auto text-[var(--color-secondary)] mb-4" />
                <p className="text-lg font-medium text-[var(--color-primary)]">Map Location</p>
                <p className="text-[var(--color-text-main)]/60 text-sm mt-2">{clinicConfig.address.city}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



