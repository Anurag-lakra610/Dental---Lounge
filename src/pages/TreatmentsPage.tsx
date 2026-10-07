import React, { useEffect } from 'react';
import { clinicConfig } from '../data/clinicConfig';
import { ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const TreatmentsPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Verified, safe Unsplash images used elsewhere on the site to guarantee no broken links or wrong images.
  const treatmentImages = [
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1920&auto=format&fit=crop", // General (Doctor with patient)
    "/images/treatments/implants.jpg", // Implants (User Uploaded)
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1920&auto=format&fit=crop", // Root Canal (Tools)
    "/images/treatments/braces.jpg", // Braces (User Uploaded)
    "/images/treatments/whitening.png", // Whitening (User Uploaded)
    "/images/treatments/smile-makeover.jpg", // Smile Makeover (User Uploaded)
  ];

  return (
    <div className="bg-white">
      
      {/* 1. Full-Resolution Hero */}
      <section className="relative h-[70vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop" 
            alt="Dental Treatments" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0B1528]/60"></div>
        </div>
        <div className="relative z-10 text-center px-6 text-white max-w-4xl mx-auto mt-20">
          <span className="text-sm md:text-base tracking-[0.2em] uppercase mb-4 block opacity-90">Our Services</span>
          <h1 className="text-[60px] md:text-[80px] font-serif font-bold leading-none mb-6">
            Exceptional Care.
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90">
            Comprehensive dental solutions tailored to your unique smile.
          </p>
        </div>
      </section>

      {/* 2. Treatments List (Expert Alternating Layout, No Cards) */}
      <section className="py-24">
        {clinicConfig.treatments.map((treatment, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={treatment.id} className="w-full mb-24 lg:mb-32 last:mb-0">
              <div className={`max-w-[1600px] mx-auto px-6 lg:px-[100px] flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24`}>
                
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[4/3] overflow-hidden w-full group">
                    <div className="w-full h-full transition-transform duration-1000 group-hover:scale-105">
                      <img 
                        src={treatmentImages[index % treatmentImages.length]} 
                        alt={treatment.name}
                        className={`w-full h-full object-cover ${treatment.name === 'Teeth Whitening' ? '-scale-x-100' : ''}`}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Text Section (Cardless, pure typography) */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[var(--color-primary)] font-serif text-2xl italic">0{index + 1}.</span>
                    <div className="h-px bg-gray-200 flex-grow max-w-[100px]"></div>
                  </div>
                  
                  <h2 className="text-[48px] font-serif font-bold text-[var(--color-text-main)] mb-6 leading-[1.1]">
                    {treatment.name}
                  </h2>
                  
                  <p className="text-xl text-[var(--color-text-main)]/70 leading-relaxed mb-10 max-w-lg">
                    {treatment.description} We utilize the latest in dental technology to ensure this procedure is highly effective, remarkably comfortable, and customized specifically to your oral health needs.
                  </p>
                  
                  
                </div>

              </div>
            </div>
          );
        })}
      </section>

      

    </div>
  );
};

