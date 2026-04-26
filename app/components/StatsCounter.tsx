'use client';

import { useEffect, useRef, useState } from 'react';

function StatItem({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = end / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) { setCount(end); clearInterval(timer); }
            else { setCount(Math.floor(current)); }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="p-6 text-center">
      <div className="text-4xl md:text-5xl font-extrabold text-accent leading-none">{count}{suffix}</div>
      <div className="text-text-on-dark text-[0.95rem] mt-2 font-medium">{label}</div>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="bg-primary py-16 text-center" id="stats">
      <div className="max-w-[1200px] mx-auto px-6">
        <h3 className="text-white text-2xl font-bold mb-10">Why Edmonton trusts YEG Sweepers</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          <StatItem end={10} suffix="+" label="Years Serving Edmonton" />
          <StatItem end={500} suffix="+" label="Projects Completed" />
          <StatItem end={200} suffix="+" label="Satisfied Clients" />
          <StatItem end={100} suffix="%" label="Client Satisfaction" />
        </div>
      </div>
    </section>
  );
}
