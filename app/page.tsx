import HeroSection from './components/HeroSection';
import ServicesPreview from './components/ServicesPreview';
import WhyChooseUs from './components/WhyChooseUs';
import StatsCounter from './components/StatsCounter';
import Testimonials from './components/Testimonials';
import ServiceAreas from './components/ServiceAreas';
import CTABanner from './components/CTABanner';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <WhyChooseUs />
      <StatsCounter />
      <Testimonials />
      <ServiceAreas />
      <CTABanner />
    </>
  );
}
