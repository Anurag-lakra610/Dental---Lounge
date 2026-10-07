import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';

// Lazy loading inner pages is best practice, but for simplicity we'll just import them once created.
import { About } from './pages/About';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {/* We will uncomment these as we create them */}
          <Route path="about" element={<About />} />
          <Route path="treatments" element={<TreatmentsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

