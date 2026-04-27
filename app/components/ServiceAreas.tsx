import ScrollReveal from './ScrollReveal';
import { MapPin, Phone } from 'lucide-react';

const serviceAreas = [
  { name: 'Downtown Edmonton', type: 'Primary Service Area' },
  { name: 'West Edmonton', type: 'Primary Service Area' },
  { name: 'South Edmonton', type: 'Primary Service Area' },
  { name: 'North Edmonton', type: 'Primary Service Area' },
  { name: 'Northeast Edmonton', type: 'Greater Area' },
  { name: 'Northwest Edmonton', type: 'Greater Area' },
  { name: 'Surrounding Areas', type: 'Call for details' },
];

export default function ServiceAreas() {
  return (
    <section className="py-20 bg-surface" id="service-areas">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent bg-accent-light px-4 py-1.5 rounded-full mb-4">Service Coverage</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">We Serve Edmonton & Surrounding Areas</h2>
            <p className="text-text-secondary text-lg">
              From downtown core to suburban neighborhoods, YEG Sweepers provides reliable commercial property maintenance throughout Edmonton.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {serviceAreas.map((area, index) => (
            <ScrollReveal key={area.name} delay={(index % 3) + 1}>
              <div className="p-5 bg-white border border-border rounded-xl text-center card-lift-sm hover:shadow-md transition-shadow">
                <div className="text-center mb-2 flex justify-center">
                  <MapPin size={28} className="text-accent" />
                </div>
                <h3 className="font-semibold text-primary text-sm">{area.name}</h3>
                <p className="text-xs text-text-muted mt-1">{area.type}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={1}>
          <div className="mt-12 p-8 bg-white border border-accent/20 rounded-2xl text-center card-lift-sm">
            <div className="inline-block px-4 py-2 bg-accent-light rounded-full mb-4">
              <span className="text-accent font-semibold text-sm flex items-center justify-center gap-2">
                <Phone size={16} /> Not sure if we serve your area?
              </span>
            </div>
            <p className="text-text-secondary mb-5">
              We cover a large service territory. Call us today for a quick confirmation and free estimate.
            </p>
            <a href="tel:5878178111" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent text-white font-semibold hover:bg-accent-hover transition-colors">
              <Phone size={18} className="mr-2" />
              Call 587-817-8111
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
