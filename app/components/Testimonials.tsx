import ScrollReveal from './ScrollReveal';

const testimonials = [
  { text: 'YEG Sweepers transformed our parking lot. Our tenants noticed the difference immediately and we\'ve had zero complaints since. Highly recommend their services!', name: 'Sarah Mitchell', role: 'Property Manager', initials: 'SM' },
  { text: 'Professional, reliable, and thorough. They showed up on time, did an incredible job, and the pricing was very fair. We use them every spring and fall now.', name: 'James Chen', role: 'Commercial Property Owner', initials: 'JC' },
  { text: 'After winter, our lot was a mess. YEG Sweepers handled everything — gravel removal, litter cleanup, the works. It looked brand new. Outstanding service!', name: 'Amanda Rodriguez', role: 'Retail Store Manager', initials: 'AR' },
];

export default function Testimonials() {
  return (
    <section className="py-20" id="testimonials">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent bg-accent-light px-4 py-1.5 rounded-full mb-4">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">What Our Clients Say</h2>
            <p className="text-text-secondary text-lg">Don&apos;t just take our word for it — hear from property managers and business owners across Edmonton.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i + 1}>
              <div className="bg-white border border-border rounded-2xl p-8 card-lift-sm">
                <div className="text-3xl text-accent leading-none mb-4">&ldquo;</div>
                <p className="text-text-secondary text-[0.95rem] italic leading-relaxed mb-5">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-accent-light flex items-center justify-center font-bold text-accent">{t.initials}</div>
                  <div>
                    <div className="font-semibold text-primary text-[0.95rem]">{t.name}</div>
                    <div className="text-xs text-text-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
