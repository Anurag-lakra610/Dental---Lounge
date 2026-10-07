import React from 'react';
import { clinicConfig } from '../data/clinicConfig';

export const DoctorSection = () => {
  return (
    <section className="py-[100px] bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-[var(--color-primary)]/5">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5 relative">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop" 
                alt="Doctor at Dental Lounge" 
                className="w-full h-full object-cover min-h-[400px]"
              />
            </div>
            
            <div className="lg:w-3/5 p-10 lg:p-16 flex flex-col justify-center">
              <h2 className="text-[48px] font-serif font-semibold text-[var(--color-primary)] mb-[30px]">Meet Your Dental Care Team</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-serif text-2xl font-medium text-[var(--color-primary)]">{clinicConfig.doctor.name}</h3>
                  <p className="text-[var(--color-secondary)] font-medium mt-1">{clinicConfig.doctor.specialisation}</p>
                  <p className="text-[var(--color-text-main)]/60 mt-1">{clinicConfig.doctor.qualification}</p>
                </div>
                
                <p className="text-[var(--color-text-main)]/80 leading-relaxed max-w-2xl mt-6">
                  Dedicated to providing premium dental care with a gentle touch. Our team believes in patient education, ethical practice, and delivering results that naturally enhance your confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



