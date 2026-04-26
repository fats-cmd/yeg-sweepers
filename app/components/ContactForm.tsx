'use client';

import { useState, type FormEvent } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12 px-6">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-primary">Thank You!</h3>
        <p className="text-text-secondary mt-2">We&apos;ve received your message and will get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} id="contact-form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="mb-3">
          <label htmlFor="firstName" className="block text-sm font-semibold text-primary mb-1.5">First Name</label>
          <input type="text" id="firstName" name="firstName" placeholder="John" required className="w-full px-4 py-3.5 border border-border rounded-xl text-[0.95rem] form-focus-ring" />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="block text-sm font-semibold text-primary mb-1.5">Last Name</label>
          <input type="text" id="lastName" name="lastName" placeholder="Doe" required className="w-full px-4 py-3.5 border border-border rounded-xl text-[0.95rem] form-focus-ring" />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="block text-sm font-semibold text-primary mb-1.5">Email Address</label>
        <input type="email" id="email" name="email" placeholder="john@example.com" required className="w-full px-4 py-3.5 border border-border rounded-xl text-[0.95rem] form-focus-ring" />
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-1.5">Phone Number</label>
        <input type="tel" id="phone" name="phone" placeholder="(587) 000-0000" className="w-full px-4 py-3.5 border border-border rounded-xl text-[0.95rem] form-focus-ring" />
      </div>

      <div className="mb-3">
        <label htmlFor="service" className="block text-sm font-semibold text-primary mb-1.5">Service Needed</label>
        <select id="service" name="service" required defaultValue="" className="w-full px-4 py-3.5 border border-border rounded-xl text-[0.95rem] bg-white form-focus-ring">
          <option value="" disabled>Select a service</option>
          <option value="litter-removal">Litter Removal</option>
          <option value="power-sweeping">Power Sweeping</option>
          <option value="lot-cleaning">Lot Cleaning</option>
          <option value="other">Other / Multiple Services</option>
        </select>
      </div>

      <div className="mb-5">
        <label htmlFor="message" className="block text-sm font-semibold text-primary mb-1.5">Message</label>
        <textarea id="message" name="message" placeholder="Tell us about your property and what you need..." rows={5} required className="w-full px-4 py-3.5 border border-border rounded-xl text-[0.95rem] resize-y min-h-[140px] form-focus-ring" />
      </div>

      <button type="submit" className="w-full px-8 py-4 rounded-full bg-accent text-white font-semibold btn-lift hover:bg-accent-hover hover:shadow-lg">
        Send Message
      </button>
    </form>
  );
}
