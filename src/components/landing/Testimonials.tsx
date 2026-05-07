'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Angela Adams',
    role: 'Senior People Operations Manager',
    company: 'ARC Hospitality Recruitment',
    content: 'Interviewer.AI is easy to navigate & they have supported us in automating our screening process, enhancing the candidate experience, and significantly reducing our time to hire.',
    image: '/images/landing/testimonial_1.png'
  },
  {
    name: 'Jeffrey Chng',
    role: 'Head Partnership Academy',
    company: 'AIA Insurance',
    content: 'Interviewer.AI helped improve efficiency in operations for the learning team by 60%-70%. It also helped the learning and recruitment team take charge and lead the hiring efforts.',
    image: '/images/landing/testimonial_2.png'
  },
  {
    name: 'Nicholas Hurley',
    role: 'Managing Director',
    company: 'Executive Agents',
    content: 'The product is excellent and their support is always very prompt and helpful. It has transformed how we handle candidate volume.',
    image: '/images/landing/testimonial_3.png'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#FFF8EE] overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-[#FF7F50] font-bold uppercase tracking-widest text-sm mb-4">Testimonials</h3>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">Trusted by Businesses Worldwide</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[48px] border border-[#f3e8d6] shadow-[0_20px_50px_rgba(255,127,80,0.05)] relative group flex flex-col h-full"
            >
              {/* Glassmorphic Bubble */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FFF2E6]/50 backdrop-blur-xl rounded-full -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute top-8 right-10 text-[#FFF2E6] group-hover:text-[#FF7F50]/10 transition-colors">
                <Quote size={64} fill="currentColor" />
              </div>
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-lg text-slate-700 font-medium mb-10 leading-relaxed relative z-10 flex-grow italic">
                "{t.content}"
              </blockquote>

              <div className="flex items-center gap-4 relative z-10">
                <div className="w-14 h-14 bg-slate-100 rounded-2xl overflow-hidden ring-4 ring-white shadow-sm">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-sm text-slate-500 font-medium">{t.role}</p>
                    <p className="text-xs text-[#FF7F50] font-black uppercase tracking-wider mt-1">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
