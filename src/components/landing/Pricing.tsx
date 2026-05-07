'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Rocket, Building2, Star } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small teams starting with AI outreach.',
    features: ['AI Sales Bot', 'Automated Lead Gen', 'Email Integration', 'Basic Analytics'],
    indiaPrice: '₹49K',
    intlPrice: '$999',
    icon: Zap,
    color: '#FF7F50',
    popular: false
  },
  {
    name: 'Growth',
    description: 'Ideal for scaling companies with high hiring volumes.',
    features: ['AI Sales + Recruiter', 'Priority AI Processing', 'Advanced Candidate Matching', 'ATS Integration', 'Multilingual Support'],
    indiaPrice: '₹1.5L',
    intlPrice: '$3K',
    icon: Rocket,
    color: '#FFD700',
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'Customized end-to-end AI hiring for large organizations.',
    features: ['End-to-End AI Hiring', 'Full Technical Screening', 'Dedicated Account Manager', 'Custom Workflows', '24/7 Priority Support'],
    indiaPrice: '₹5L+',
    intlPrice: '$10K+',
    icon: Building2,
    color: '#0F172A',
    popular: false
  }
];

const sellingPoints = [
  '24/7 recruitment operations',
  'Faster hiring',
  'Reduced HR cost',
  'Automated technical screening',
  'Multilingual AI calling',
  'End-to-end hiring automation',
  'IT + Non-IT recruitment',
  'AI-powered analytics',
  'Lower hiring turnaround time'
];

export default function Pricing() {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="pricing">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFF8EE] rounded-full blur-3xl -z-0 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-[#FF7F50] font-black uppercase tracking-widest text-sm mb-4">Pricing Plans</h3>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8">
            Simple, Transparent Pricing
          </h2>
          
          {/* Currency Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-bold ${currency === 'INR' ? 'text-slate-900' : 'text-slate-400'}`}>India (₹)</span>
            <button 
              onClick={() => setCurrency(currency === 'INR' ? 'USD' : 'INR')}
              className="w-16 h-8 bg-slate-100 rounded-full relative p-1 transition-colors hover:bg-slate-200"
            >
              <motion.div 
                animate={{ x: currency === 'INR' ? 0 : 32 }}
                className="w-6 h-6 bg-[#FF7F50] rounded-full shadow-lg"
              />
            </button>
            <span className={`text-sm font-bold ${currency === 'USD' ? 'text-slate-900' : 'text-slate-400'}`}>International ($)</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-[40px] p-10 border-2 ${plan.popular ? 'border-[#FF7F50] shadow-2xl shadow-[#FF7F50]/10' : 'border-[#f3e8d6]'} flex flex-col h-full`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FF7F50] text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6`} style={{ backgroundColor: `${plan.color}15`, color: plan.color }}>
                  <plan.icon size={28} />
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-2">{plan.name}</h4>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="mb-10">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl lg:text-5xl font-black text-slate-900">
                    {currency === 'INR' ? plan.indiaPrice : plan.intlPrice}
                  </span>
                  <span className="text-slate-400 font-bold text-lg">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                    <div className="w-5 h-5 bg-[#FF7F50]/10 rounded-full flex items-center justify-center text-[#FF7F50] flex-shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-black transition-all ${plan.popular ? 'bg-[#FF7F50] text-white shadow-xl shadow-[#FF7F50]/20 hover:bg-[#E67245]' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                Get Started Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Selling Points Section */}
        <div className="bg-[#FFF8EE] rounded-[48px] p-12 lg:p-16 border border-[#f3e8d6]">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="lg:w-1/2">
                    <h3 className="text-3xl font-black text-slate-900 mb-6">Why Choose RecruitPro?</h3>
                    <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                        Experience the power of end-to-end AI hiring that scales with your business needs.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {sellingPoints.map((point, idx) => (
                            <div key={idx} className="flex items-center gap-3 bg-white/50 p-4 rounded-2xl border border-[#f3e8d6]/50">
                                <div className="w-8 h-8 bg-[#FFD700]/20 rounded-lg flex items-center justify-center text-[#FFD700]">
                                    <Star size={16} fill="currentColor" />
                                </div>
                                <span className="text-sm font-bold text-slate-700">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:w-5/12">
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#FF7F50] rounded-[32px] rotate-3 blur-sm -z-10 opacity-10" />
                        <div className="bg-white p-8 rounded-[32px] shadow-2xl border border-[#f3e8d6] relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                    <Rocket size={24} />
                                </div>
                                <div>
                                    <h4 className="font-black text-slate-900">ROI Focused</h4>
                                    <p className="text-xs text-slate-500 font-bold">Maximize your hiring budget</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} transition={{ duration: 1.5 }} className="h-full bg-[#FF7F50]" />
                                </div>
                                <div className="flex justify-between text-xs font-black uppercase tracking-wider text-slate-400">
                                    <span>Hiring Speed</span>
                                    <span className="text-[#FF7F50]">85% Faster</span>
                                </div>
                                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: '70%' }} transition={{ duration: 1.5, delay: 0.2 }} className="h-full bg-[#FFD700]" />
                                </div>
                                <div className="flex justify-between text-xs font-black uppercase tracking-wider text-slate-400">
                                    <span>Cost Reduction</span>
                                    <span className="text-[#FFD700]">70% Lower</span>
                                </div>
                            </div>
                            <div className="mt-10 pt-8 border-t border-slate-100 text-center">
                                <p className="text-slate-500 font-bold mb-4 italic">"Transforming recruitment globally"</p>
                                <div className="flex justify-center -space-x-2">
                                    {[1,2,3,4].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="" />
                                        </div>
                                    ))}
                                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-900 flex items-center justify-center text-[10px] text-white font-black">+12k</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
