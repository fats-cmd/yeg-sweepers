import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

interface CTABannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTABanner({
  title = 'Ready to Get Your Property Cleaned?',
  description = 'Contact us today for a free, no-obligation estimate. We serve the entire Edmonton metropolitan area.',
  buttonText = 'Get a Free Quote',
  buttonHref = '/contact',
}: CTABannerProps) {
  return (
    <section className="cta-gradient py-20 text-center" id="cta-banner">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-text-on-dark text-lg max-w-[520px] mx-auto mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={buttonHref} className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent text-white font-semibold btn-lift hover:bg-accent-hover hover:shadow-lg">
              {buttonText}
            </Link>
            <a href="tel:5878178111" className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/40 text-white font-semibold btn-lift hover:border-white hover:bg-white/10">
              Call 587-817-8111
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
