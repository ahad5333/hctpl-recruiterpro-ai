'use client';

import { motion } from 'framer-motion';

const trustLogos = [
  { name: 'WSG', logo: 'https://www.google.com/s2/favicons?domain=wsg.com&sz=128' },
  { name: 'Emaar', logo: 'https://www.google.com/s2/favicons?domain=emaar.com&sz=128' },
  { name: 'AIA', logo: 'https://www.google.com/s2/favicons?domain=aia.com&sz=128' },
  { name: 'Yes Bank', logo: 'https://www.google.com/s2/favicons?domain=yesbank.in&sz=128' },
  { name: 'Axis Bank', logo: 'https://www.google.com/s2/favicons?domain=axisbank.com&sz=128' },
  { name: 'Standard Chartered', logo: 'https://www.google.com/s2/favicons?domain=sc.com&sz=128' },
  { name: 'Coca-Cola', logo: 'https://www.google.com/s2/favicons?domain=coca-cola.com&sz=128' },
  { name: 'Nestle', logo: 'https://www.google.com/s2/favicons?domain=nestle.com&sz=128' },
  { name: 'IBM', logo: 'https://www.google.com/s2/favicons?domain=ibm.com&sz=128' },
  { name: 'Accenture', logo: 'https://www.google.com/s2/favicons?domain=accenture.com&sz=128' },
  { name: 'Microsoft', logo: 'https://www.google.com/s2/favicons?domain=microsoft.com&sz=128' },
  { name: 'Google', logo: 'https://www.google.com/s2/favicons?domain=google.com&sz=128' }
];

export default function GlobalTrust() {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4"
          >
            Global Trust
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-600 font-bold"
          >
            850+ companies trust Interviewer.AI
          </motion.p>
        </div>

        <div className="relative flex overflow-x-hidden">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 lg:gap-32 items-center whitespace-nowrap py-10"
          >
             {[...trustLogos, ...trustLogos].map((logo, idx) => (
                <div key={idx} className="flex-shrink-0 group">
                   <div className="h-10 w-auto min-w-[120px] flex items-center justify-center grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                      <img 
                        src={logo.logo} 
                        alt={logo.name} 
                        className="max-h-full max-w-full object-contain"
                        onError={(e: any) => {
                          e.target.style.display = 'none';
                          const span = document.createElement('span');
                          span.className = 'text-xl font-black text-slate-300';
                          span.innerText = logo.name;
                          e.target.parentElement.appendChild(span);
                        }}
                      />
                   </div>
                </div>
             ))}
          </motion.div>
          
          <div className="absolute top-0 left-0 w-48 h-full bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
