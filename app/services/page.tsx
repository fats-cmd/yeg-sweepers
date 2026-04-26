import type { Metadata } from 'next';
import Image from 'next/image';
import ScrollReveal from '../components/ScrollReveal';
import CTABanner from '../components/CTABanner';
import FAQ from './FAQ';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our professional litter removal, power sweeping, and lot cleaning services in Edmonton, AB. We keep commercial properties clean, safe, and attractive.',
};

const services = [
  {
    title: 'Litter Removal', image: '/images/litter-removal.png', alt: 'Workers removing litter from commercial property',
    description: 'Our litter removal service provides thorough hand-picking and collection of all trash, debris, and waste from your commercial property. We target parking lots, walkways, green spaces, and building perimeters to ensure your property makes the best first impression.',
    features: ['Complete parking lot and perimeter cleanup', 'Sidewalk and walkway debris removal', 'Green space and landscaping cleanup', 'Regular scheduled or one-time service', 'Post-event and seasonal cleanups', 'Detailed service reports provided'],
  },
  {
    title: 'Power Sweeping', image: '/images/power-sweeping.png', alt: 'Power sweeping machine cleaning a parking lot',
    description: 'Our industrial-grade power sweeping equipment removes accumulated gravel, sand, salt, and fine debris from parking lots and roadways. This is especially critical after Edmonton winters, when months of sand and salt buildup can damage pavement and clog drainage systems.',
    features: ['Industrial mechanical street sweepers', 'Post-winter gravel and salt removal', 'Construction site cleanup', 'Dust and particulate control', 'Drainage system protection', 'Night and weekend availability'],
  },
  {
    title: 'Lot Cleaning', image: '/images/lot-cleaning.png', alt: 'Clean well-maintained commercial lot',
    description: 'Our comprehensive lot cleaning service combines multiple cleaning methods to restore your property to pristine condition. From surface sweeping to pressure washing, we handle every aspect of lot maintenance so you can focus on running your business.',
    features: ['Complete surface-to-curb cleaning', 'Line marking and stall visibility', 'Stain and oil spot treatment', 'Seasonal maintenance programs', 'Property inspection reports', 'Customizable service packages'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-36 pb-20 cta-gradient text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent bg-accent-light px-4 py-1.5 rounded-full mb-4">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Professional Cleaning Solutions</h1>
          <p className="text-text-on-dark text-lg max-w-[560px] mx-auto">Comprehensive property maintenance services designed to keep your Edmonton commercial properties clean, safe, and attractive year-round.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 space-y-16">
          {services.map((service, index) => (
            <ScrollReveal key={service.title}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:[direction:rtl]' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden h-[300px] lg:h-[380px] lg:[direction:ltr]">
                  <Image src={service.image} alt={service.alt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 1024px) 100vw, 50vw" quality={75} />
                </div>
                <div className="lg:[direction:ltr]">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-text-secondary leading-relaxed mb-4">{service.description}</p>
                  <ul className="mt-5 space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-text-secondary text-[0.95rem]">
                        <span className="text-accent font-bold shrink-0 mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-[640px] mx-auto mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent bg-accent-light px-4 py-1.5 rounded-full mb-4">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Frequently Asked Questions</h2>
              <p className="text-text-secondary text-lg">Got questions? We&apos;ve got answers.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <FAQ />
          </ScrollReveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
