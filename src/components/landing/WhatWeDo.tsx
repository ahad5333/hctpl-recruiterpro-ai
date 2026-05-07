'use client';

import { motion } from 'framer-motion';
import { Users, Target, Check, BarChart3 } from 'lucide-react';

export default function WhatWeDo() {
  return (
    <section className="py-24 bg-[#FFF8EE]" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-[#FF7F50] font-bold uppercase tracking-widest text-sm mb-4">What We Do</h3>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
            One Platform. Multiple AI Interview Experiences.
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            RecruitPro is a unified AI interview platform built for hiring, admissions pre-screening, 
            conversational AI interviews, and AI-driven mock interviews. We help organisations evaluate 
            large applicant volumes fairly and at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-white border border-[#f3e8d6] group shadow-sm hover:shadow-xl transition-all"
          >
            <div className="w-14 h-14 bg-[#FFF2E6] rounded-2xl flex items-center justify-center text-[#FF7F50] mb-6 group-hover:bg-[#FF7F50] group-hover:text-white transition-all">
              <Users size={28} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">Screen thousands of candidates</h4>
            <p className="text-slate-600">
              Process massive applicant pools in hours, not weeks, with automated AI screening that never tires.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-white border border-[#f3e8d6] group shadow-sm hover:shadow-xl transition-all"
          >
            <div className="w-14 h-14 bg-[#FFF2E6] rounded-2xl flex items-center justify-center text-[#FF7F50] mb-6 group-hover:bg-[#FF7F50] group-hover:text-white transition-all">
              <Target size={28} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">Assess intent and readiness</h4>
            <p className="text-slate-600">
              Go beyond resumes to evaluate soft skills, motivation, and practical communication ability.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-white border border-[#f3e8d6] group shadow-sm hover:shadow-xl transition-all"
          >
            <div className="w-14 h-14 bg-[#FFF2E6] rounded-2xl flex items-center justify-center text-[#FF7F50] mb-6 group-hover:bg-[#FF7F50] group-hover:text-white transition-all">
              <Check size={28} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">Reduce bias consistently</h4>
            <p className="text-slate-600">
              Ensure every candidate gets the same structured experience, removing unconscious human bias.
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 bg-[#FF7F50] text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-[#FF7F50]/20">
              <BarChart3 size={20} />
              <span>Reduce manual screening effort by up to 80%</span>
            </div>
        </div>
      </div>
    </section>
  );
}
