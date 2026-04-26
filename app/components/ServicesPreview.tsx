import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    title: 'Litter Removal',
    description: 'Thorough hand-picking and collection of litter, debris, and waste from commercial properties, parking lots, and public spaces.',
    image: '/images/litter-removal.png',
    alt: 'Workers in safety vests removing litter from a commercial property',
  },
  {
    title: 'Power Sweeping',
    description: 'Industrial-grade mechanical sweeping to remove gravel, sand, and debris that accumulates in parking lots and roadways.',
    image: '/images/power-sweeping.png',
    alt: 'Mechanical street sweeper cleaning a parking lot',
  },
  {
    title: 'Lot Cleaning',
    description: 'Complete lot maintenance including sweeping, washing, and debris removal to keep your property looking its absolute best.',
    image: '/images/lot-cleaning.png',
    alt: 'Clean well-maintained commercial parking lot',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20" id="services-preview">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent bg-accent-light px-4 py-1.5 rounded-full mb-4">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Professional Cleaning Services</h2>
            <p className="text-text-secondary text-lg">
              From routine litter removal to heavy-duty power sweeping, we deliver comprehensive property maintenance solutions across Edmonton.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index + 1}>
              <div className="group bg-white border border-border rounded-2xl overflow-hidden card-lift">
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
                  <Link href="/services" className="inline-flex items-center gap-1.5 font-semibold text-sm text-accent link-arrow">
                    Learn More <span>→</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
