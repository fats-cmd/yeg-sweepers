'use client';

import { useState } from 'react';

const faqs = [
  { question: 'How often should I have my parking lot swept?', answer: 'We recommend at minimum a spring cleanup after winter and a fall cleanup before snow season. For high-traffic commercial properties, monthly or bi-weekly sweeping keeps your lot in top condition year-round.' },
  { question: 'Do you work on weekends or after hours?', answer: 'Absolutely! We understand that minimizing disruption to your business is important. We offer flexible scheduling including early mornings, evenings, and weekends at no extra charge.' },
  { question: 'What areas in Edmonton do you serve?', answer: 'We serve the entire Edmonton metropolitan area, including Sherwood Park, St. Albert, Spruce Grove, Leduc, and surrounding communities. Contact us to confirm service in your specific area.' },
  { question: 'How do you determine pricing?', answer: 'Pricing is based on the size of your property, the type of service needed, and the frequency of service. We provide free on-site estimates so you know exactly what to expect — no hidden fees.' },
  { question: 'Are you licensed and insured?', answer: 'Yes, we are fully licensed and carry comprehensive commercial liability insurance. We can provide proof of insurance upon request for property management requirements.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-[720px] mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className={`border-b border-border ${openIndex === index ? 'faq-open' : ''}`}>
          <button
            className="w-full text-left py-5 text-[1.05rem] font-semibold text-primary flex justify-between items-center"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            {faq.question}
            <span className="text-2xl font-light text-accent faq-plus">+</span>
          </button>
          <div className="faq-answer-wrap">
            <p className="text-text-secondary text-[0.95rem] leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
