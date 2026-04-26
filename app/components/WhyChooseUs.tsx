import ScrollReveal from './ScrollReveal';

const reasons = [
  { icon: '🏢', title: 'Curb Appeal', description: 'Attract high-quality customers and tenants to your properties when it looks and feels pristine. First impressions matter.' },
  { icon: '🌿', title: 'Environmental Protection', description: 'Our services target gravel, salt, and debris which when left in drainage systems, leads to costly maintenance and repair.' },
  { icon: '⚠️', title: 'Prevent Slips & Falls', description: 'The same gravel and sand that was saving us on icy sidewalks is now the gravel that creates a hazard. We remove it safely.' },
  { icon: '💰', title: 'Lower Costs for All', description: 'Preventive maintenance saves you from expensive repairs. Regular cleaning extends the life of your pavement and infrastructure.' },
  { icon: '⏰', title: 'Flexible Scheduling', description: 'We work around your schedule — early mornings, evenings, or weekends — to minimize disruption to your business operations.' },
  { icon: '✅', title: 'Licensed & Insured', description: 'Fully licensed and insured team with commercial-grade equipment. Your property is in professional hands.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-surface" id="why-choose-us">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent bg-accent-light px-4 py-1.5 rounded-full mb-4">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Why Should You Choose YEG Sweepers?</h2>
            <p className="text-text-secondary text-lg">We go beyond basic cleaning to protect your investment, your tenants, and the Edmonton community.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {reasons.map((reason, index) => (
            <ScrollReveal key={reason.title} delay={(index % 3) + 1}>
              <div className="text-center p-10 bg-white rounded-2xl border border-border-light card-lift-sm">
                <div className="w-16 h-16 rounded-xl bg-accent-light flex items-center justify-center mx-auto mb-5 text-2xl">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2.5">{reason.title}</h3>
                <p className="text-text-secondary text-[0.95rem] leading-relaxed">{reason.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
