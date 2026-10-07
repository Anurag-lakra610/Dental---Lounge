import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[var(--color-background)] font-sans selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)]">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

