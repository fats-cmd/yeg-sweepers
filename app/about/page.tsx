import type { Metadata } from 'next';
import Image from 'next/image';
import ScrollReveal from '@/app/components/ScrollReveal';
import CTABanner from '@/app/components/CTABanner';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Edmonton (YEG) Sweepers — our mission, values, and commitment to keeping Edmonton\'s commercial properties clean, safe, and beautiful.',
};

const values = [
  { icon: '🎯', title: 'Reliability', description: 'We show up on time, every time. Our clients count on us and we never let them down.' },
  { icon: '🌱', title: 'Sustainability', description: 'We use eco-friendly practices and properly dispose of all collected waste and debris.' },
  { icon: '🤝', title: 'Integrity', description: 'Transparent pricing, honest communication, and a commitment to doing what\'s right.' },
  { icon: '⭐', title: 'Excellence', description: 'We don\'t cut corners. Every job is completed to the highest professional standard.' },
  { icon: '👥', title: 'Community', description: 'We\'re proud Edmontonians working to make our city cleaner for everyone who lives here.' },
  { icon: '🔧', title: 'Innovation', description: 'We invest in the latest equipment and techniques to deliver superior results efficiently.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-36 pb-20 cta-gradient text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent bg-accent-light px-4 py-1.5 rounded-full mb-4">About Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Keeping Edmonton Clean &amp; Beautiful</h1>
          <p className="text-text-on-dark text-lg max-w-[560px] mx-auto">We&apos;re a team of dedicated professionals passionate about making Edmonton&apos;s commercial spaces cleaner, safer, and more inviting.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div className="relative rounded-2xl overflow-hidden h-[350px] lg:h-[450px]">
                <Image src="/images/about-team.png" alt="YEG Sweepers team in front of sweeping trucks in Edmonton" fill style={{ objectFit: 'cover' }} sizes="(max-width: 1024px) 100vw, 50vw" quality={75} />
              </div>
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent bg-accent-light px-4 py-1.5 rounded-full mb-4">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-5">More Than Just a Cleaning Company</h2>
                <p className="text-text-secondary leading-relaxed mb-4">Edmonton (YEG) Sweepers was founded with a simple mission: to keep Edmonton&apos;s commercial properties clean, safe, and beautiful. What started as a small operation has grown into one of the city&apos;s most trusted property maintenance services.</p>
                <p className="text-text-secondary leading-relaxed mb-4">Our team understands the unique challenges that Edmonton&apos;s climate presents — from harsh winters that leave behind mountains of gravel and salt, to spring thaws that reveal months of accumulated debris.</p>
                <p className="text-text-secondary leading-relaxed">Today, we serve hundreds of commercial properties across the Edmonton metropolitan area. Our commitment to quality, reliability, and customer satisfaction drives everything we do.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-[640px] mx-auto mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent bg-accent-light px-4 py-1.5 rounded-full mb-4">Our Values</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">What Drives Us Every Day</h2>
              <p className="text-text-secondary text-lg">These core values shape how we work, how we treat our clients, and how we serve Edmonton.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={(i % 3) + 1}>
                <div className="text-center p-9 bg-white rounded-2xl border border-border-light card-lift-sm">
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3 className="text-lg font-bold text-primary mb-2">{v.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-[640px] mx-auto mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent bg-accent-light px-4 py-1.5 rounded-full mb-4">Our Commitment</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Why Edmonton Trusts Us</h2>
              <p className="text-text-secondary text-lg">We&apos;re not just cleaning lots — we&apos;re protecting property values and making Edmonton safer.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              { icon: '🏆', title: '10+ Years Experience', desc: 'Over a decade of serving Edmonton\'s commercial property owners and managers.' },
              { icon: '📋', title: 'Fully Licensed', desc: 'Licensed, insured, and compliant with all City of Edmonton regulations.' },
              { icon: '💯', title: '100% Satisfaction', desc: 'We don\'t consider a job done until you\'re completely satisfied with the result.' },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div className="text-center p-10 bg-white rounded-2xl border border-border-light card-lift-sm">
                  <div className="w-16 h-16 rounded-xl bg-accent-light flex items-center justify-center mx-auto mb-5 text-2xl">{item.icon}</div>
                  <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-[0.95rem] leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Join Our Growing List of Satisfied Clients" description="Experience the YEG Sweepers difference. Contact us today for a free consultation and quote." />
    </>
  );
}
