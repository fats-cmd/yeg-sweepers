import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { Star, Phone, MessageCircle } from 'lucide-react';

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
  const phoneNumber = '5878178111';
  const whatsappNumber = '5878178111';
  const whatsappMessage = 'Hi! I\'d like to get a free quote for your sweeping services.';

  return (
    <section className="cta-gradient py-20 text-center" id="cta-banner">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-text-on-dark text-lg max-w-[520px] mx-auto mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link href={buttonHref} className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent text-white font-semibold btn-lift hover:bg-accent-hover hover:shadow-lg transition-all">
              <Star size={20} className="mr-2 fill-white" /> {buttonText}
            </Link>
            <a href={`tel:+1${phoneNumber}`} className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/20 border border-white/40 text-white font-semibold btn-lift hover:bg-white/30 hover:border-white transition-all">
              <Phone size={20} className="mr-2" /> Call 587-817-8111
            </a>
            <a href={`https://wa.me/1${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#25D366]/90 text-white font-semibold btn-lift hover:bg-[#25D366] transition-all">
              <MessageCircle size={20} className="mr-2" /> WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
