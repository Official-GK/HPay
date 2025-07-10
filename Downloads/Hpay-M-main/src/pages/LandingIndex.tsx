
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import EmpowermentSection from '../components/EmpowermentSection';
import StatsCarousel from '../components/StatsCarousel';
import AppShowcase from '../components/AppShowcase';
import DualPromoCards from '../components/DualPromoCards';
import AdvantagesGrid from '../components/AdvantagesGrid';
import GrowthTimeline from '../components/GrowthTimeline';
import ProductCards from '../components/ProductCards';
import CommunitySteps from '../components/CommunitySteps';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-hpay-bg">
      <Navigation />
      <HeroSection />
      <EmpowermentSection />
      <StatsCarousel />
      <AppShowcase />
      <DualPromoCards />
      <AdvantagesGrid />
      <GrowthTimeline />
      <ProductCards />
      <CommunitySteps />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
