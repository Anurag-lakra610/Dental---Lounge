import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How often should I visit the dentist for a check-up?",
    answer: "We recommend visiting the dentist every 6 months for a routine check-up and professional cleaning. However, if you have specific dental conditions, we may suggest more frequent visits."
  },
  {
    question: "Do you offer painless root canal treatments?",
    answer: "Yes, we use advanced rotary endodontics and local anesthesia to ensure our root canal treatments are as comfortable and pain-free as possible."
  },
  {
    question: "How long does a teeth whitening treatment take?",
    answer: "An in-clinic professional teeth whitening session typically takes about 45 to 60 minutes. You will see visibly brighter teeth immediately after the session."
  },
  {
    question: "What are the options for replacing missing teeth?",
    answer: "We offer several options including dental implants, bridges, and dentures. Dental implants are usually the most durable and natural-looking solution."
  },
  {
    question: "Is it safe to get dental treatments during pregnancy?",
    answer: "Routine dental care is safe during pregnancy. However, elective treatments and certain x-rays are usually postponed. Always inform your dentist if you are pregnant."
  }
];

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[var(--color-background)]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-serif font-bold text-[var(--color-text-main)] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[var(--color-text-main)]/70 max-w-2xl mx-auto">
            Find answers to common questions about our dental treatments and clinic policies.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-bold text-[var(--color-text-main)] pr-4">
                  {faq.question}
                </span>
                <span className="text-[var(--color-primary)] flex-shrink-0">
                  {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-[var(--color-text-main)]/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


