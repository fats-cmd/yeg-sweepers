'use client';

import { useState } from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border-light h-[72px]" id="site-header">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-full">
          <Link href="/" className="flex items-center gap-2.5 text-lg font-bold text-primary" aria-label="YEG Sweepers Home">
            <span className="w-9 h-9 bg-accent rounded-md flex items-center justify-center text-white font-extrabold text-sm">YEG</span>
            <span>Edmonton Sweepers</span>
          </Link>

          <nav className="hidden md:flex gap-8 items-center" aria-label="Main navigation">
            {[
              { href: '/', label: 'Home' },
              { href: '/services', label: 'Services' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-[0.95rem] font-medium text-text-secondary hover:text-primary nav-link-animated"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact" className="hidden md:inline-flex items-center justify-center px-7 py-3 rounded-full bg-accent text-white font-semibold text-[0.95rem] btn-lift hover:bg-accent-hover hover:shadow-lg">
            Get a Free Quote
          </Link>

          <button
            className={`flex md:hidden flex-col gap-[5px] p-2 ${menuOpen ? 'hamburger-open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="w-6 h-0.5 bg-primary rounded-sm hamburger-line" />
            <span className="w-6 h-0.5 bg-primary rounded-sm hamburger-line" />
            <span className="w-6 h-0.5 bg-primary rounded-sm hamburger-line" />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
