import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    title: 'Litter Removal',
    description: 'Hand-pick every piece of litter and debris from your property. Professional team removes waste, trash, and hazardous materials safely and efficiently. Improves curb appeal instantly and attracts quality tenants.',
    image: '/images/litter-removal.png',
    alt: 'Workers in safety vests removing litter from a commercial property',
    benefits: ['✓ Instant curb appeal', '✓ Safer environment', '✓ Professional image'],
  },
  {
    title: 'Power Sweeping',
    description: 'Industrial-grade mechanical sweeping removes gravel, sand, salt, and debris that accumulates in parking lots. Prevents these materials from entering drainage systems and causing costly repairs. Extends pavement life.',
    image: '/images/power-sweeping.png',
    alt: 'Mechanical street sweeper cleaning a parking lot',
    benefits: ['✓ Prevents drainage issues', '✓ Protects pavement', '✓ Long-term savings'],
  },
  {
    title: 'Lot Cleaning & Maintenance',
    description: 'Complete lot maintenance including sweeping, washing, debris removal, and seasonal cleanup. Year-round care keeps your property looking pristine and prevents liability issues. Regular maintenance saves money on repairs.',
    image: '/images/lot-cleaning.png',
    alt: 'Clean well-maintained commercial parking lot',
    benefits: ['✓ Liability protection', '✓ Preventive care', '✓ Peace of mind'],
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20" id="services-preview">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent bg-accent-light px-4 py-1.5 rounded-full mb-4">Services We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Professional Cleaning Services Built for Results</h2>
            <p className="text-text-secondary text-lg">
              From routine litter removal to heavy-duty power sweeping, every service is designed to protect your property and strengthen your business reputation.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index + 1}>
              <div className="group bg-white border border-border rounded-2xl overflow-hidden card-lift hover:shadow-lg transition-shadow">
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={75}
                    className="service-card-img-zoom"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-primary mb-2.5">{service.title}</h3>
                  <p className="text-text-secondary text-[0.95rem] mb-5 leading-relaxed">{service.description}</p>
                  <div className="flex flex-col gap-1.5 mb-5">
                    {service.benefits.map((benefit) => (
                      <p key={benefit} className="text-sm font-medium text-accent">
                        {benefit}
                      </p>
                    ))}
                  </div>
                  <a href="tel:5878178111" className="inline-flex items-center gap-1.5 font-semibold text-sm text-accent link-arrow hover:gap-2 transition-all">
                    Get a Free Quote <span>→</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={1}>
          <div className="text-center mt-12">
            <p className="text-text-secondary mb-6 text-lg">
              <strong>Every service includes:</strong> Licensed &amp; insured team • Commercial-grade equipment • Flexible scheduling • 100% satisfaction guarantee
            </p>
            <Link href="/services" className="inline-flex items-center justify-center px-7 py-3 rounded-full border-2 border-accent text-accent font-semibold hover:bg-accent-light transition-colors">
              Explore All Services
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
