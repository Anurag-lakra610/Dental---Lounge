import React from 'react';
import { clinicConfig } from '../data/clinicConfig';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <div className="bg-white">
      
      {/* 1. Full-Resolution Hero */}
      <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
            alt="Modern Dental Clinic" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center px-6 text-white max-w-4xl mx-auto mt-20">
          <span className="text-sm md:text-base tracking-[0.2em] uppercase mb-4 block opacity-90">About Us</span>
          <h1 className="text-[60px] md:text-[80px] font-serif font-bold leading-none mb-6">
            Elevating Dental Care.
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90">
            Redefining what it means to visit the dentist in Sangrur.
          </p>
        </div>
      </section>

      {/* 2. Typographic Intro (No Cards, Pure Text) */}
      <section className="py-32 px-6 lg:px-[100px] max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-[48px] md:text-[56px] font-serif font-bold text-[var(--color-text-main)] leading-[1.1]">
              A new standard in aesthetic and functional dentistry.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pl-12 lg:border-l border-gray-200">
            <p className="text-xl text-[var(--color-text-main)]/80 leading-relaxed mb-8">
              At {clinicConfig.name}, we believe that a visit to the dentist shouldn't feel clinical. We designed our practice around the concept of absolute comfort, blending luxury hospitality with cutting-edge medical technology.
            </p>
            <p className="text-xl text-[var(--color-text-main)]/80 leading-relaxed">
              Located opposite Namdev Gurudwara, our state-of-the-art facility is equipped to handle everything from routine check-ups to complex smile makeovers. We focus on transparent communication, pain-free procedures, and outcomes that make you look and feel incredible.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Expert (Split Layout, No Cards) */}
      <section className="w-full bg-[var(--color-background)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
          {/* Edge-to-Edge Portrait */}
          <div className="h-[50vh] lg:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop" 
              alt="Lead Dentist" 
              className="w-full h-full object-cover object-top"
            />
          </div>
          
          {/* Text Content */}
          <div className="flex flex-col justify-center p-12 lg:p-24 xl:p-32">
            <span className="text-[var(--color-primary)] font-bold tracking-widest uppercase text-sm mb-4">
              Lead Specialist
            </span>
            <h2 className="text-[48px] font-serif font-bold text-[var(--color-text-main)] mb-2">
              Meet The Doctor
            </h2>
            <p className="text-xl text-[var(--color-text-main)]/60 mb-10 font-serif italic">
              BDS, MDS — Endodontics & Conservative Dentistry
            </p>
            
            <div className="space-y-6 text-lg text-[var(--color-text-main)]/80 leading-relaxed mb-12">
              <p>
                With over a decade of specialized experience in pain-free root canals and aesthetic dentistry, our lead specialist brings world-class techniques directly to Sangrur.
              </p>
              <p>
                Every treatment is approached with a philosophy of minimal intervention and maximum comfort. We take the time to listen to your concerns, meticulously plan your treatment using digital imaging, and execute with flawless precision.
              </p>
            </div>
            
            
          </div>
        </div>
      </section>
      
    </div>
  );
};

