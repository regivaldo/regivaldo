import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import ProductsSection from '../components/sections/ProductsSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div className="section-divider" />
      <AboutSection />
      <div className="section-divider" />
      <ServicesSection />
      <div className="section-divider" />
      <ProductsSection />
      <div className="section-divider" />
      <PortfolioSection />
      <div className="section-divider" />
      <ContactSection />
    </>
  );
};

export default HomePage;
