import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-[72px] overflow-hidden" id="hero">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Street sweeper cleaning a commercial parking lot in Edmonton at sunset"
          fill
          style={{ objectFit: 'cover' }}
          quality={75}
          preload
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-gradient z-[1]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-[2]">
        <div className="max-w-[640px] py-20 md:py-24">
          {/* Badge */}
          <div className="animate-hero-badge inline-flex items-center gap-2 bg-accent/15 border border-accent/30 px-5 py-2 rounded-full text-accent text-sm font-semibold mb-6">
            <Star size={16} className="fill-accent" /> Edmonton&apos;s Trusted Cleaning Experts
          </div>

          {/* Heading */}
          <h1 className="animate-hero-heading text-white text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight tracking-tight mb-5">
            Professional Street &amp; Property Sweeping Services in Edmonton
          </h1>

          {/* Subheadline */}
          <p className="animate-hero-text text-accent text-lg md:text-xl font-semibold mb-3 max-w-[520px]">
            Clean. Safe. Reliable. Trusted by 200+ properties across Edmonton.
          </p>

          {/* Subtext */}
          <p className="animate-hero-text text-text-on-dark text-lg md:text-xl mb-9 max-w-[520px] leading-relaxed">
            Professional litter removal, power sweeping, and lot cleaning that improves curb appeal, prevents liability, and protects your property investment.
          </p>

          {/* Buttons - Conversion focused */}
          <div className="animate-hero-buttons flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent text-white font-semibold hover:bg-accent-hover hover:shadow-lg transition-all active:scale-95 btn-lift">
              <Star size={20} className="mr-2 fill-white" />
              Request a Free Quote
            </Link>
            <a href="tel:5878178111" className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/60 text-white font-semibold hover:border-white hover:bg-white/10 transition-all active:scale-95 btn-lift">
              <Phone size={20} className="mr-2" />
              Call Now: 587-817-8111
            </a>
          </div>

          {/* Mini stats */}
          <div className="animate-hero-stats flex flex-wrap gap-6 md:gap-10 mt-14 pt-8 border-t border-white/15">
            {[
              { num: '10+', label: 'Years Experience' },
              { num: '500+', label: 'Projects Done' },
              { num: '200+', label: 'Happy Clients' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold text-accent">{s.num}</div>
                <div className="text-sm text-text-on-dark mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
