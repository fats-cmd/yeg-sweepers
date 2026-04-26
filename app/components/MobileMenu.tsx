'use client';

import { useEffect } from 'react';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-[72px] left-0 right-0 bottom-0 bg-white z-[99] p-8 flex flex-col gap-2 mobile-menu-slide ${isOpen ? 'open' : ''}`}
      aria-label="Mobile navigation"
    >
      {[
        { href: '/', label: 'Home' },
        { href: '/services', label: 'Services' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
      ].map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onClose}
          className="text-xl font-semibold text-primary py-4 border-b border-border-light"
        >
          {link.label}
        </Link>
      ))}
      <Link
        href="/contact"
        onClick={onClose}
        className="mt-4 text-center px-7 py-3.5 rounded-full bg-accent text-white font-semibold"
      >
        Get a Free Quote
      </Link>
    </nav>
  );
}
