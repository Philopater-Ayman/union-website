
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTop from '@/components/ScrollToTop';

// Pages
import Index from '@/pages/Index';
import About from '@/pages/About';
import Products from '@/pages/Products';
import PowderCoatings from '@/pages/PowderCoatings';
import Masterbatches from '@/pages/Masterbatches';
import Industries from '@/pages/Industries';
import Architectural from '@/pages/industries/Architectural';
import Appliances from '@/pages/industries/Appliances';
import GeneralIndustry from '@/pages/industries/GeneralIndustry';
import Furniture from '@/pages/industries/Furniture';
import Automotive from '@/pages/industries/Automotive';
import ACE from '@/pages/industries/ACE';
import News from '@/pages/News';
import Contact from '@/pages/Contact';
import ClientPortal from '@/pages/ClientPortal';
import Certificates from '@/pages/Certificates';
import Sustainability from '@/pages/Sustainability';

function App() {  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/powder-coatings" element={<PowderCoatings />} />
        <Route path="/products/masterbatches" element={<Masterbatches />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/industries/architectural" element={<Architectural />} />
        <Route path="/industries/appliances" element={<Appliances />} />
        <Route path="/industries/general-industry" element={<GeneralIndustry />} />
        <Route path="/industries/furniture" element={<Furniture />} />
        <Route path="/industries/automotive" element={<Automotive />} />
        <Route path="/industries/ace" element={<ACE />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/client-portal" element={<ClientPortal />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/sustainability" element={<Sustainability />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
