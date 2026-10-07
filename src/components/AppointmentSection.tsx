import React, { useState } from 'react';
import { AppointmentForm } from './AppointmentForm';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer: "We recommend visiting the dentist every 6 months for a routine check-up and professional cleaning. If you have specific dental conditions, we may suggest more frequent visits."
  },
  {
    question: "Do you offer painless root canals?",
    answer: "Yes, we use advanced rotary endodontics and local anesthesia to ensure our root canal treatments are as comfortable and pain-free as possible."
  },
  {
    question: "How long does teeth whitening take?",
    answer: "An in-clinic professional teeth whitening session typically takes about 45 to 60 minutes. You will see visibly brighter teeth immediately after the session."
  },
  {
    question: "Options for replacing missing teeth?",
    answer: "We offer several options including dental implants, bridges, and dentures. Dental implants are usually the most durable and natural-looking solution."
  },
  {
    question: "Are treatments safe during pregnancy?",
    answer: "Routine dental care is safe during pregnancy. However, elective treatments and certain x-rays are usually postponed. Always inform your dentist if you are pregnant."
  },
  {
    question: "Do you offer clear aligners or Invisalign?",
    answer: "Absolutely! We provide modern invisible aligners that straighten your teeth comfortably without the need for traditional metal wires."
  },
  {
    question: "What should I do in a dental emergency?",
    answer: "If you experience severe tooth pain, swelling, or a broken tooth, please contact us immediately on our WhatsApp or emergency phone number. We prioritize emergency cases."
  },
  {
    question: "How long do dental implants last?",
    answer: "With proper oral hygiene and regular check-ups, dental implants can last a lifetime. They are designed to be a permanent replacement for missing teeth."
  }
];

export const AppointmentSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="appointment" className="py-[100px] bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row border border-gray-100">
          
          {/* Left Side: FAQs */}
          <div className="bg-gray-50 p-10 lg:p-12 w-full lg:w-1/2 flex flex-col border-r border-gray-100">
            <h2 className="text-[48px] font-serif font-bold text-[var(--color-text-main)] mb-[30px] leading-tight">
              Questions?<br/>Let's talk.
            </h2>
            <p className="text-[var(--color-text-main)]/70">
              Find quick answers below, or use the form to schedule a dedicated consultation with our experts.
            </p>
            
            <div className="space-y-3 mt-[40px]">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm transition-shadow"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-bold text-[var(--color-text-main)] pr-4 text-sm md:text-base">
                      {faq.question}
                    </span>
                    <span className="text-[var(--color-primary)] flex-shrink-0">
                      {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>
                  
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-[var(--color-text-main)]/70 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Appointment Form */}
          <div className="p-10 lg:p-16 w-full lg:w-1/2 bg-white relative">
            <button className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 transition-colors hidden md:block">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <AppointmentForm />
          </div>

        </div>

      </div>
    </section>
  );
};

