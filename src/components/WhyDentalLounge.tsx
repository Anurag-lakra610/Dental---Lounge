import React from 'react';
import { ShieldCheck, Sparkles, HeartHandshake } from 'lucide-react';

export const WhyDentalLounge = () => {
  const benefits = [
    {
      icon: <HeartHandshake size={32} className="text-white" />,
      title: "Personalised Care",
      description: "Treatment plans thoughtfully designed around your unique dental needs and aesthetic goals."
    },
    {
      icon: <Sparkles size={32} className="text-white" />,
      title: "Modern Treatment Approach",
      description: "Utilising current techniques and materials for effective, long-lasting results."
    },
    {
      icon: <ShieldCheck size={32} className="text-white" />,
      title: "Comfortable Patient Experience",
      description: "A calming environment focused on minimising anxiety and maximising comfort."
    }
  ];

  return (
    <section id="about" className="relative py-16 md:py-24 lg:py-[100px] overflow-hidden text-white">
      {/* Full-width Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop" 
          alt="Comfortable Dental Care" 
          className="w-full h-full object-cover object-center"
        />
        {/* Softer primary blue overlay to show background image more clearly */}
        <div className="absolute inset-0 bg-[var(--color-primary)]/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/85 via-[var(--color-primary)]/60 to-[var(--color-primary)]/85"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[36px] md:text-[48px] font-serif font-bold mb-[30px] leading-tight">
              Feel Good.<br />
              <span className="text-[var(--color-accent)]">Look Good.</span>
            </h2>
            <p className="text-lg text-white/90 max-w-lg mb-[40px] leading-relaxed">
              At Dental Lounge, we combine expert dental care with a comfortable, personalised approach to help you feel confident about your smile.
            </p>
          </div>
          
          <div className="flex flex-col gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 pt-1">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-white/80">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};




