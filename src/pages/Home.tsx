import React from 'react';
import { Hero } from '../components/Hero';
import { Treatments } from '../components/Treatments';

import { WhyDentalLounge } from '../components/WhyDentalLounge';
import { DoctorSection } from '../components/DoctorSection';
import { AppointmentSection } from '../components/AppointmentSection';
import { Testimonials } from '../components/Testimonials';
export const Home = () => {
  return (
    <>
      <Hero />

      <Treatments />
      <WhyDentalLounge />
      <DoctorSection />

      <Testimonials />
    
      <AppointmentSection />
    </>
  );
};







