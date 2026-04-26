import HeroSection from '@/app/components/HeroSection';
import ServicesPreview from '@/app/components/ServicesPreview';
import WhyChooseUs from '@/app/components/WhyChooseUs';
import StatsCounter from '@/app/components/StatsCounter';
import Testimonials from '@/app/components/Testimonials';
import ServiceAreas from '@/app/components/ServiceAreas';
import CTABanner from '@/app/components/CTABanner';

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
