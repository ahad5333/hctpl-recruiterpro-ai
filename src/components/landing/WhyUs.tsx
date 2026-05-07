'use client';

import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Globe, Clock, Zap } from 'lucide-react';

const features = [
  {
    title: 'AI-Powered, Human-Centric',
    description: 'Designed to feel natural and conversational while delivering structured, explainable evaluations.',
    icon: Sparkles,
    color: 'blue'
  },
  {
    title: 'Fair & Structured Assessments',
    description: 'Every candidate is evaluated using the same criteria—reducing bias and ensuring consistency.',
    icon: ShieldCheck,
    color: 'green'
  },
  {
    title: 'Supports 10+ languages',
    description: 'Conduct interviews across regions and time zones with support for multiple languages.',
    icon: Globe,
    color: 'purple'
  },
  {
    title: 'Reduces time-to-hire',
    description: 'Screen thousands of candidates simultaneously while reducing manual effort by up to 80%.',
    icon: Clock,
    color: 'orange'
  },
  {
    title: 'Built for scale & fairness',
    description: 'Designed to support high-volume screening while meeting global compliance standards.',
    icon: Zap,
    color: 'red'
  }
];

const stats = [
  { value: '60%', label: 'Faster Time-to-Hire', color: 'blue' },
  { value: '10x', label: 'More Candidates Screened', color: 'green' },
  { value: '90%', label: 'Candidate Satisfaction', color: 'purple' },
  { value: '$250k', label: 'Average Annual Savings', color: 'orange' }
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-[#FFF8EE] overflow-hidden" id="why-us">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-[#FF7F50] font-bold uppercase tracking-widest text-sm mb-4">Why RecruitPro</h3>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">Why AI Video Interviews?</h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8 mb-24">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform group-hover:shadow-lg border border-[#f3e8d6]">
                <feature.icon className={`w-8 h-8 text-[#FF7F50]`} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-[48px] p-12 lg:p-20 shadow-2xl shadow-[#FF7F50]/10 overflow-hidden border border-[#f3e8d6]"
        >
          {/* Background decoration - Realistic Shapes */}
          <motion.div 
            animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-64 h-64 bg-[#FFF2E6] rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2" 
          />
          <motion.div 
            animate={{ rotate: [0, -15, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#FFF2E6] rounded-[40px] -z-0 rotate-12 blur-2xl opacity-50" 
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 right-1/4 w-12 h-12 bg-[#FFD700]/20 rounded-full blur-xl -z-0" 
          />
          
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <p className="text-[#FF7F50] font-bold text-lg mb-4 italic">"It's like adding 15 full-time recruiters"</p>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-12 leading-tight">
              RecruitPro saves companies over 1,000 hours per year and delivers industry-leading ROI
            </h3>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className={`text-5xl font-black mb-2 text-slate-900`}>
                    {stat.value}
                  </div>
                  <p className="text-slate-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
