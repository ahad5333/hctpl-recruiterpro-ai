'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Building2 } from 'lucide-react';

const targets = [
  {
    title: 'Hiring Teams & Businesses',
    items: ['Volume hiring', 'Sales & customer-facing roles', 'Global hiring', 'Skills-based recruitment'],
    icon: Briefcase,
    image: '/images/landing/business_collaboration.png',
    color: 'blue'
  },
  {
    title: 'Universities & Education',
    items: ['Admissions interviews', 'Career readiness programs', 'Mock interview practice', 'Employer branding'],
    icon: GraduationCap,
    image: '/images/landing/university_campus.png',
    color: 'indigo'
  },
  {
    title: 'Recruiting & Staffing',
    items: ['Faster candidate shortlisting', 'Consistent evaluations', 'High-volume role screening', 'Multi-client workflows'],
    icon: Building2,
    image: '/images/landing/hero_dashboard.png',
    color: 'purple'
  }
];

export default function WhoItsFor() {
  return (
    <section className="py-24 bg-[#FFF8EE]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-[#FF7F50] font-bold uppercase tracking-widest text-sm mb-4">Who's it for</h3>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">Built for Teams That Screen at Scale</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {targets.map((target, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="relative p-10 rounded-[48px] overflow-hidden group min-h-[440px] flex flex-col justify-end shadow-2xl shadow-[#FF7F50]/5"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={target.image} 
                  alt={target.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-transparent" />
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform border border-white/20">
                  <target.icon size={28} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-6">{target.title}</h4>
                <ul className="space-y-4">
                  {target.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-200 font-semibold text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF7F50]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
