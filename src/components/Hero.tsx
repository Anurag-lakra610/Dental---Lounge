import React from 'react';
import { ArrowRight, Star, ShieldCheck, Award } from 'lucide-react';
import { clinicConfig } from '../data/clinicConfig';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-28 pb-16 md:pt-32 md:pb-20 px-6 lg:px-8 overflow-hidden">
      {/* Full-width Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.jpg" 
          alt="Premium Dental Care Background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/90 via-[var(--color-primary)]/50 to-[var(--color-primary)]/90 lg:bg-gradient-to-r lg:from-[var(--color-primary)]/85 lg:via-[var(--color-primary)]/60 lg:to-transparent"></div>
        {/* Additional subtle dark overlay for text readability on mobile */}
        <div className="absolute inset-0 bg-black/10 md:hidden"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left text-white mt-8 lg:mt-0">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full text-[16px] font-bold uppercase tracking-wider mb-6 backdrop-blur-md border border-white/20">
            <span>Dental & Aesthetic Care</span>
          </div>
          
          <h1 className="font-serif text-[40px] md:text-[60px] font-bold leading-[1.15] mb-[30px] tracking-tight">
            Enhancing Lives<br />
            <span>With Brighter Smiles.</span>
          </h1>
          
          <p className="text-[18px] text-white/90 mb-[40px] max-w-xl leading-relaxed font-medium">
            With our expertise in dental and aesthetic treatments, we provide personalized care designed around your comfort and confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
            <a href="#appointment" className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[var(--color-secondary)] hover:text-white hover:-translate-y-1 transition-all shadow-xl flex items-center justify-center gap-2 group">
              Book an Appointment
              <ArrowRight size={20} />
            </a>
            
            <a href={`https://wa.me/${clinicConfig.contact.whatsappNumber}`} target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[var(--color-secondary)] hover:text-white hover:-translate-y-1 transition-all shadow-xl flex items-center justify-center gap-2 group">
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Right Side Floating Badges (Visible on larger screens) */}
        <div className="hidden lg:flex flex-col gap-6 items-end justify-center pr-10">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4 shadow-2xl translate-x-12">
            <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white shrink-0">
              <Star size={24} fill="currentColor" />
            </div>
            <div>
              <p className="text-white font-bold text-xl">5.0 / 5.0</p>
              <p className="text-white/80 text-sm">Highly Rated Clinic</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4 shadow-2xl -translate-x-4">
            <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-white font-bold text-xl">Premium Care</p>
              <p className="text-white/80 text-sm">Advanced Treatments</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4 shadow-2xl translate-x-8">
            <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white shrink-0">
              <Award size={24} />
            </div>
            <div>
              <p className="text-white font-bold text-xl">Expert Team</p>
              <p className="text-white/80 text-sm">Dedicated Professionals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};





