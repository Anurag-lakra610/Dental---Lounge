import React from 'react';
import { ArrowRight, Stethoscope, Sparkles, SmilePlus, ShieldCheck } from 'lucide-react';
import { clinicConfig } from '../data/clinicConfig';

export const Treatments = () => {
  // Map icons to the first 4 treatments to match the 4-column layout perfectly
  const icons = [
    <Stethoscope className="text-[var(--color-primary)]" size={32} strokeWidth={1.5} />,
    <SmilePlus className="text-[var(--color-primary)]" size={32} strokeWidth={1.5} />,
    <ShieldCheck className="text-[var(--color-primary)]" size={32} strokeWidth={1.5} />,
    <Sparkles className="text-[var(--color-primary)]" size={32} strokeWidth={1.5} />
  ];

  const displayTreatments = clinicConfig.treatments.slice(0, 4);

  // A custom dental pattern (tooth, cross, sparkle) completely unique to this page
  const dentalPattern = `data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%232563eb' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' opacity='0.04'%3E%3Cpath d='M35 30 C28 30 25 35 25 40 C25 47 31 52 31 59 C31 62 35 62 35 59 C35 52 39 52 39 59 C39 62 43 62 43 59 C43 52 49 47 49 40 C49 35 46 30 35 30 Z'/%3E%3Cpath d='M 85 85 L 85 93 M 81 89 L 89 89' /%3E%3Cpath d='M 15 85 Q 20 85 20 80 Q 20 85 25 85 Q 20 85 20 90 Q 20 85 15 85 Z' /%3E%3Cpath d='M 95 20 Q 98 20 98 17 Q 98 20 101 20 Q 98 20 98 23 Q 98 20 95 20 Z' /%3E%3C/g%3E%3C/svg%3E`;

  return (
    <section 
      id="treatments" 
      className="py-[100px] relative bg-[var(--color-background)]"
      style={{ backgroundImage: `url("${dentalPattern}")`, backgroundSize: '120px' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Centered Header block matching the image */}
        <div className="text-center max-w-2xl mx-auto mb-[40px]">
          <p className="text-[var(--color-secondary)] text-xs font-bold uppercase tracking-widest mb-3">
            What We Provide
          </p>
          <h2 className="text-[48px] font-serif font-bold text-[var(--color-text-main)] mb-[30px]">
            Our Dental Services
          </h2>
          <p className="text-[var(--color-text-main)]/60 text-sm">
            Caring for the smiles of {clinicConfig.address.city} and surrounding areas.
          </p>
        </div>
        
        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayTreatments.map((treatment, index) => (
            <div 
              key={treatment.id} 
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col items-start h-full transform hover:-translate-y-1"
            >
              <div className="mb-6">
                {icons[index]}
              </div>
              <h3 className="font-serif text-lg font-bold text-[var(--color-text-main)] mb-3">
                {treatment.name}
              </h3>
              <p className="text-[var(--color-text-main)]/60 text-sm leading-relaxed mb-8 flex-grow">
                {treatment.description}
              </p>
              <a 
                href="#appointment" 
                className="inline-flex items-center text-[var(--color-secondary)] text-xs font-bold tracking-wide hover:opacity-80 transition-opacity mt-auto"
              >
                Read More <ArrowRight size={14} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};



