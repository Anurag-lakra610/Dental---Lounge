import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { clinicConfig } from '../data/clinicConfig';

export const AboutIntro = () => {
  const stats = [
    {
      number: "15K+",
      title: "Smiles Transformed",
      desc: "Healthy smiles and renewed confidence for thousands of families."
    },
    {
      number: "98%",
      title: "Patient Satisfaction",
      desc: "Our patients love the comfort, care, and results we deliver."
    },
    {
      number: "5+",
      title: "Expert Specialists",
      desc: "Skilled specialists in general, cosmetic, and restorative dentistry."
    },
    {
      number: "12+",
      title: "Years of Excellence",
      desc: "A trusted name in premium dental care serving the community."
    }
  ];

  return (
    <section className="py-24 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          <div className="lg:col-span-7">
            <h2 className="text-[48px] font-serif leading-tight text-[var(--color-text-main)] mb-10">
              At <span className="italic text-[var(--color-primary)]">Dental Lounge</span> we believe that every smile tells a story. For over <span className="font-bold">12+ years</span>, our dedicated team of dental professionals has been providing compassionate <span className="italic text-[var(--color-secondary)]">care with the latest technology and techniques.</span>
            </h2>
            
            <Link 
              to="/about" 
              className="inline-flex items-center gap-3 bg-white text-black border border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-[var(--color-secondary)] hover:text-white transition-all shadow-md group"
            >
              More About Us
              <span className="bg-black/5 group-hover:bg-white/20 p-1.5 rounded-full transition-colors">
                <ArrowRight size={18} />
              </span>
            </Link>
          </div>

          <div className="lg:col-span-5 relative">
            {/* The image with rounded corners to match the reference */}
            <img 
              src="https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?q=80&w=800&auto=format&fit=crop" 
              alt="Patient receiving dental care" 
              className="w-full h-auto aspect-[4/3] object-cover rounded-3xl shadow-lg"
            />
          </div>
        </div>

        {/* Bottom Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-start">
              <h3 className="font-serif text-5xl font-bold text-[var(--color-text-main)] mb-6">
                {stat.number}
              </h3>
              <h4 className="font-bold text-[var(--color-text-main)] text-lg mb-2">
                {stat.title}
              </h4>
              <p className="text-[var(--color-text-main)]/70 text-sm leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


