import React from 'react';
import Header from "@/components/layout/Header.jsx";
import Footer from "@/components/layout/Footer.jsx";
import HeroSection from "@/components/sections/HeroSection.jsx";
import OverviewSection from "@/components/sections/OverviewSection.jsx";
import ServicesSection from "@/components/sections/ServicesSection.jsx";
import ContactSection from "@/components/sections/ContactSection.jsx";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-grow">
        <HeroSection/>
        <OverviewSection/>
        <ServicesSection/>
        <ContactSection/>
      </main>
      <Footer/>
    </div>
  );
};

export default App;
