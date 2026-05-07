'use client';

import { motion } from 'framer-motion';

const partners = [
  { name: 'The Economic Times', domain: 'economictimes.indiatimes.com' },
  { name: 'Medium', domain: 'medium.com' },
  { name: 'The Washington Post', domain: 'washingtonpost.com' },
  { name: 'Forbes', domain: 'forbes.com' },
  { name: 'Business Insider', domain: 'businessinsider.com' },
  { name: 'TechCrunch', domain: 'techcrunch.com' },
];

export default function Partners() {
  return (
    <section className="py-20 bg-white border-b border-[#f3e8d6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-bold text-slate-500 mb-16 tracking-widest uppercase">
          Check what others say about us
        </p>
        
        <div className="relative flex overflow-x-hidden">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-20 lg:gap-32 items-center whitespace-nowrap py-4"
          >
            {[...partners, ...partners].map((partner, idx) => (
              <div key={idx} className="flex-shrink-0 group">
                <img 
                  src={`https://www.google.com/s2/favicons?domain=${partner.domain}&sz=128`} 
                  alt={partner.name} 
                  className="h-10 lg:h-12 w-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  onError={(e: any) => {
                    e.target.style.display = 'none';
                    const span = document.createElement('span');
                    span.className = 'text-2xl font-black text-slate-300 italic tracking-tight';
                    span.innerText = partner.name;
                    e.target.parentElement.appendChild(span);
                  }}
                />
              </div>
            ))}
          </motion.div>
          
          {/* Subtle fade effect on sides */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
