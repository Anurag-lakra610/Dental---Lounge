import React from 'react';
import { clinicConfig } from '../data/clinicConfig';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export const FloatingWhatsApp = () => {
  return (
    <a
      href={`https://wa.me/${clinicConfig.contact.whatsappNumber}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-black/10 hover:scale-110 hover:shadow-xl transition-all duration-300 group flex items-center justify-center"
      aria-label="WhatsApp Us"
    >
      <WhatsAppIcon size={28} className="fill-current" />
      <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm pointer-events-none">
        WhatsApp Us
      </span>
    </a>
  );
};



