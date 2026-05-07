'use client';

import { motion } from 'framer-motion';
import { PlusCircle, UserPlus, FileText } from 'lucide-react';

const steps = [
  {
    title: 'Create an Interview',
    description: 'Add job details or generate a JD with AI. Set JD, pick interview style, and customize scoring.',
    icon: PlusCircle,
    color: 'blue'
  },
  {
    title: 'Invite Candidates',
    description: 'Share interview links or integrate with ATS. Candidates interview on their own schedule.',
    icon: UserPlus,
    color: 'indigo'
  },
  {
    title: 'Review, Score & Shortlist',
    description: 'AI-generated summaries and scoring. Compare candidates objectively and share feedback.',
    icon: FileText,
    color: 'blue'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#FFF8EE] relative overflow-hidden">
      {/* Decorative Image */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 opacity-10 pointer-events-none">
        <img src="/images/landing/success.png" alt="" className="w-full h-full object-cover rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-[#FF7F50] font-bold uppercase tracking-widest text-sm mb-4">How It Works</h3>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">How to Start in 3 Steps?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Set up AI interviews, invite candidates, and review AI-powered insights to shortlist faster—with less manual effort.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-[#f3e8d6] -translate-y-1/2 -z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-white p-10 rounded-[40px] border border-[#f3e8d6] shadow-[0_20px_50px_rgba(255,127,80,0.05)] text-center group"
            >
              <div className="w-20 h-20 bg-[#FF7F50] rounded-[24px] flex items-center justify-center text-white mx-auto mb-8 shadow-lg shadow-[#FF7F50]/20 group-hover:scale-110 transition-transform">
                <step.icon size={32} />
              </div>
              <div className="absolute top-10 right-10 text-6xl font-black text-slate-50 select-none">
                0{idx + 1}
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
