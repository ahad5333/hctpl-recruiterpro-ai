'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How does AI-based pre-screening work in high-volume hiring?',
    answer: 'Interviewer.AI conducts structured, job-specific interviews at the application stage. Every candidate is asked the same role-aligned questions and evaluated against consistent criteria, helping you shortlist qualified candidates faster—without manual CV screening.'
  },
  {
    question: 'Will AI introduce bias into our hiring process?',
    answer: 'Our AI is designed to be fair and structured. Every candidate is evaluated using the same objective criteria, which actually helps reduce human bias and ensures a level playing field for all applicants regardless of background.'
  },
  {
    question: 'How much time and cost does this actually save?',
    answer: 'Companies typically save over 1,000 hours per year and reduce time-to-hire by up to 60%. It allows you to screen 10x more candidates with 80% less manual effort.'
  },
  {
    question: 'Will using an AI tool negatively impact the candidate experience?',
    answer: 'Actually, 90% of candidates report a positive experience. They appreciate the flexibility of interviewing on their own time and the feeling that they are being evaluated fairly based on their actual performance rather than just a resume.'
  },
  {
    question: 'Does this replace our recruiting team?',
    answer: 'Not at all. It empowers your team by handling the repetitive top-of-funnel screening. This allows your recruiters to focus on deep role evaluation and personal candidate engagement with the top 5% of talent.'
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-4">FAQs</h3>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">Got Questions? We’ve Got Answers</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Everything you need to know about using AI to screen high-volume applications—fairly, securely, and at scale.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className={`border rounded-3xl transition-all duration-300 ${
                openIdx === idx ? 'border-blue-200 bg-blue-50/30' : 'border-slate-100 bg-white'
              }`}
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-8 text-left"
              >
                <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${openIdx === idx ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                        <HelpCircle size={18} />
                    </div>
                    <span className="text-lg font-bold text-slate-900">{faq.question}</span>
                </div>
                {openIdx === idx ? <Minus className="text-blue-600" /> : <Plus className="text-slate-400" />}
              </button>

              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 pl-20 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
