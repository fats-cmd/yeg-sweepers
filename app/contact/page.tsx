import type { Metadata } from 'next';
import ScrollReveal from '@/app/components/ScrollReveal';
import ContactForm from '@/app/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get a free quote for litter removal, power sweeping, and lot cleaning services in Edmonton. Call 587-817-8111 or fill out our contact form.',
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-36 pb-20 cta-gradient text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent bg-accent-light px-4 py-1.5 rounded-full mb-4">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-text-on-dark text-lg max-w-[560px] mx-auto">Ready for a cleaner property? Reach out for a free, no-obligation estimate. We typically respond within 24 hours.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12">
            <ScrollReveal>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Send Us a Message</h2>
                <p className="text-text-secondary mb-7">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
                <ContactForm />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="bg-primary rounded-2xl p-10 text-white">
                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>

                {[
                  { icon: '📧', label: 'Email', value: 'service@ualberta.ca' },
                  { icon: '📞', label: 'Phone', value: '587-817-8111' },
                  { icon: '📍', label: 'Location', value: 'Edmonton, AB, Canada' },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3.5 py-4 border-b border-white/10">
                    <div className="w-[42px] h-[42px] rounded-xl bg-accent/15 flex items-center justify-center text-accent shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="text-white text-[0.95rem] font-semibold mb-0.5">{item.label}</h4>
                      <p className="text-text-on-dark opacity-80 text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}

                <div className="flex gap-3.5 py-4 border-b border-white/10">
                  <div className="w-[42px] h-[42px] rounded-xl bg-accent/15 flex items-center justify-center text-accent shrink-0">⏰</div>
                  <div>
                    <h4 className="text-white text-[0.95rem] font-semibold mb-0.5">Business Hours</h4>
                    <p className="text-text-on-dark opacity-80 text-sm">Mon – Fri: 7:00 AM – 7:00 PM</p>
                    <p className="text-text-on-dark opacity-80 text-sm">Sat – Sun: 8:00 AM – 5:00 PM</p>
                  </div>
                </div>

                <div className="mt-7 p-5 bg-accent/10 rounded-xl">
                  <h4 className="text-accent text-[0.95rem] font-semibold mb-1.5">🚀 Fast Response Guarantee</h4>
                  <p className="text-text-on-dark text-sm opacity-90">We respond to all inquiries within 24 hours. For urgent requests, call us directly.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
