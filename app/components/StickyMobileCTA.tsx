'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(true);
  const phoneNumber = '5878178111';
  const whatsappNumber = '5878178111'; // Using same number (you can update with actual WhatsApp number)
  const whatsappMessage = 'Hi! I\'d like to get a free quote for your sweeping services.';

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide when at the very top of page
      if (currentScrollY < 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-border-light shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
      <div className="max-w-[1200px] mx-auto px-3 py-2.5 flex gap-2">
        {/* Call button */}
        <a
          href={`tel:+1${phoneNumber}`}
          className="flex-1 sticky-cta-button flex items-center justify-center gap-2 bg-accent text-white hover:bg-accent-hover"
          aria-label="Call YEG Sweepers"
        >
          <Phone size={20} />
          <span>Call</span>
        </a>

        {/* WhatsApp button */}
        <a
          href={`https://wa.me/1${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 sticky-cta-button flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#20BA5A]"
          aria-label="Message via WhatsApp"
        >
          <MessageCircle size={20} />
          <span>Message</span>
        </a>
      </div>
    </div>
  );
}
