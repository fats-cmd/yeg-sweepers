import HeroSection from './components/HeroSection';
import ServicesPreview from './components/ServicesPreview';
import WhyChooseUs from './components/WhyChooseUs';
import StatsCounter from './components/StatsCounter';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <WhyChooseUs />
      <StatsCounter />
      <Testimonials />
      <CTABanner />
    </>
  );
}
