import React, { useRef } from 'react';
import { clinicConfig } from '../data/clinicConfig';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

export const Testimonials = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const avatars = [
    "https://randomuser.me/api/portraits/men/32.jpg", // Rahul (Male)
    "https://randomuser.me/api/portraits/women/44.jpg", // Priya (Female)
    "https://randomuser.me/api/portraits/men/46.jpg", // Amit (Male)
    "https://randomuser.me/api/portraits/women/68.jpg", // Extra Female
  ];

  return (
    <section className="py-16 md:py-24 lg:py-[100px] bg-[var(--color-background)] overflow-hidden">
      <div className="w-full px-6 lg:pl-[100px] lg:pr-0">
        
        {/* Header */}
        <div className="text-center mb-[40px] lg:pr-[100px]">
          <h2 className="text-[36px] md:text-[48px] font-serif font-bold text-[var(--color-text-main)] mb-[30px] leading-tight">
            Inspiring Patient Experiences
          </h2>
          <p className="text-[var(--color-text-main)]/70 text-lg">
            Join us and become our next success story
          </p>
        </div>

        {/* Overlapping Layout Container */}
        <div className="relative">
          
          {/* Static Summary Card (Absolutely positioned to overlap on Desktop) */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-24 z-10 w-[360px]">
            <div className="bg-[var(--color-primary)] text-white rounded-[2rem] p-10 h-full flex flex-col justify-between shadow-2xl min-h-[320px] relative overflow-hidden group">
              
              {/* Dental Background Pattern */}
              <svg width="100%" height="100%" className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none transition-transform duration-700 group-hover:scale-110">
                <defs>
                  <pattern id="tooth-pattern-desktop" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M25 40h10c3 0 5-2 5-5v-4c0-1.5.8-3 2-4 1.5-1.5 2-3 2-5 0-3.5-3-6-6-6-2.5 0-4.5 1.5-5.5 3.5C31.5 17.5 29.5 16 27 16c-3 0-6 2.5-6 6 0 2 .5 3.5 2 5 1.2 1 2 2.5 2 4v4c0 3 2 5 5 5z" fill="white" />
                  </pattern>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#tooth-pattern-desktop)" />
              </svg>

              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={24} className="fill-[#FBBF24] text-[#FBBF24]" />
                  ))}
                </div>
                <h3 className="font-serif text-3xl font-bold mb-4">4.9 Rating</h3>
                
                <p className="text-white/80 font-medium leading-relaxed text-sm pr-4">
                  Experience premium, pain-free dental care trusted by thousands in Sangrur and beyond.
                </p>
              </div>
              
              <div className="mt-8 relative z-10">
                <div className="flex -space-x-3 mb-4">
                  {avatars.slice(0, 3).map((img, i) => (
                    <img 
                      key={i} 
                      src={img} 
                      alt="Patient" 
                      className="w-12 h-12 rounded-full border-2 border-[var(--color-primary)] object-cover relative z-10"
                    />
                  ))}
                </div>
                <p className="text-2xl font-bold">15k+</p>
                <p className="text-white/80">Trusted Patients</p>
              </div>
            </div>
          </div>

          {/* Mobile version of the static card */}
          <div className="block lg:hidden mb-8">
            <div className="bg-[var(--color-primary)] text-white rounded-[2rem] p-10 h-full flex flex-col justify-between shadow-xl min-h-[320px] relative overflow-hidden group">
              
              {/* Dental Background Pattern */}
              <svg width="100%" height="100%" className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none transition-transform duration-700 group-hover:scale-110">
                <defs>
                  <pattern id="tooth-pattern-mobile" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M25 40h10c3 0 5-2 5-5v-4c0-1.5.8-3 2-4 1.5-1.5 2-3 2-5 0-3.5-3-6-6-6-2.5 0-4.5 1.5-5.5 3.5C31.5 17.5 29.5 16 27 16c-3 0-6 2.5-6 6 0 2 .5 3.5 2 5 1.2 1 2 2.5 2 4v4c0 3 2 5 5 5z" fill="white" />
                  </pattern>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#tooth-pattern-mobile)" />
              </svg>

              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={24} className="fill-[#FBBF24] text-[#FBBF24]" />
                  ))}
                </div>
                <h3 className="font-serif text-3xl font-bold mb-4">4.9 Rating</h3>
                
                <p className="text-white/80 font-medium leading-relaxed text-sm pr-4">
                  Experience premium, pain-free dental care trusted by thousands in Sangrur and beyond.
                </p>
              </div>
              
              <div className="mt-8 relative z-10">
                <div className="flex -space-x-3 mb-4">
                  {avatars.slice(0, 3).map((img, i) => (
                    <img 
                      key={i} 
                      src={img} 
                      alt="Patient" 
                      className="w-12 h-12 rounded-full border-2 border-[var(--color-primary)] object-cover relative z-10"
                    />
                  ))}
                </div>
                <p className="text-2xl font-bold">15k+</p>
                <p className="text-white/80">Trusted Patients</p>
              </div>
            </div>
          </div>

          {/* Carousel for Reviews - Slides underneath the static card! */}
          <div className="lg:ml-[260px] relative z-0">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2.2 },
                1440: { slidesPerView: 3.2 },
                1800: { slidesPerView: 4.2 },
              }}
              className="!pb-4 lg:!pl-[130px] pt-4" // Padding creates the space so active slide is visible, but slides behind the card when exiting!
            >
              {[...clinicConfig.testimonials, ...clinicConfig.testimonials].map((testimonial, index) => (
                <SwiperSlide key={`${testimonial.id}-${index}`} className="!h-auto">
                  <div className="bg-white rounded-[2rem] p-8 lg:p-10 h-full flex flex-col shadow-md border border-gray-100">
                    <Quote size={40} className="text-[var(--color-secondary)] mb-6 fill-current opacity-20" />
                    <p className="text-[var(--color-text-main)]/80 leading-relaxed mb-8 flex-grow">
                      {testimonial.text}
                    </p>
                    
                    <div className="flex items-center gap-4 mt-auto">
                      <img 
                        src={avatars[index % avatars.length]} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-[var(--color-text-main)]">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-[var(--color-text-main)]/60">
                          {clinicConfig.address.city}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8 lg:pr-[100px]">
            <button 
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-[var(--color-text-main)] hover:bg-[var(--color-secondary)] hover:text-white hover:border-[var(--color-secondary)] transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-[var(--color-text-main)] hover:bg-[var(--color-secondary)] hover:text-white hover:border-[var(--color-secondary)] transition-all"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};




