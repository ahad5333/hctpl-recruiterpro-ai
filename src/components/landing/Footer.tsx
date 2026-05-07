'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Video, Globe, Users, Play, ArrowRight } from 'lucide-react';

const footerLinks = {
  Features: [
    'Response Relevancy', 'Deep AI Score Breakdown', 'Resume Scoring 2.0',
    'Avatar-Based Interviews', 'WorkMap (Skill) Assessments', 'Interview Fraud Checklist'
  ],
  Compare: [
    'Hirevue Vs Interviewer.AI', 'Vidcruiter Vs Interviewer.AI',
    'Spark Hire Vs Interviewer.AI', 'myInterview Vs Interviewer.AI'
  ],
  'Why choose us?': [
    'Cost Effective', 'Time Efficient', 'Quality Hires', 'Diversity Hiring'
  ],
  Company: [
    'About Us', 'Newsroom', 'Team', 'Blogs', 'Careers', 'Contact Us'
  ],
  Resources: [
    'How it works', 'The Science', 'Structured Interviews', 'Help Center', 'FAQs'
  ]
};

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-8 group">
              <div className="w-10 h-10 bg-[#FF7F50] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#FF7F50]/20 group-hover:scale-110 transition-transform">
                <Video size={20} />
              </div>
              <span className="text-xl font-bold tracking-tight">RecruitPro</span>
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-sm">
              Empowering universities and enterprises with AI-driven video interviews for smarter, more confident selection decisions.
            </p>
            
            <div className="flex gap-4 mb-12">
                {[Globe, Users, Play].map((Icon, idx) => (
                  <motion.a 
                    key={idx}
                    href="#" 
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#FF7F50] transition-all border border-slate-700"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 relative overflow-hidden group backdrop-blur-sm"
            >
                {/* Floating Realistic Shape */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#FF7F50]/10 rounded-full blur-xl group-hover:bg-[#FF7F50]/20 transition-colors" />
                
                <h4 className="font-bold mb-4 relative z-10">Join our mailing list</h4>
                <div className="flex gap-2 relative z-10">
                    <input 
                        type="email" 
                        placeholder="Enter your email"
                        className="bg-[#0F172A] border border-slate-700 px-4 py-2.5 rounded-xl flex-grow focus:outline-none focus:ring-2 focus:ring-[#FF7F50] transition-all text-sm"
                    />
                    <motion.button 
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#FF7F50] p-2.5 rounded-xl hover:bg-[#E67245] transition-all"
                    >
                        <ArrowRight size={20} />
                    </motion.button>
                </div>
            </motion.div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">{title}</h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-slate-400 hover:text-[#FF7F50] transition-colors text-sm font-medium">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-slate-800">
          <p className="text-slate-500 text-sm font-medium">
            Copyright © 2026 RecruitPro. | All rights reserved.
          </p>
          <div className="flex gap-8 mt-6 md:mt-0 text-sm font-medium text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
