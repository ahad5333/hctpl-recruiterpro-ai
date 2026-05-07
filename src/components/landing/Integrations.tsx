'use client';

import { motion } from 'framer-motion';
import { Zap, Link as LinkIcon, Database, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Integrations() {
  return (
    <section className="py-24 bg-[#FFF8EE] relative overflow-hidden" id="integrations">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#FF7F50]/10 text-[#FF7F50] px-4 py-1.5 rounded-full text-sm font-black mb-8">
              <Zap size={16} />
              <span>Seamless Workflow</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 leading-[1.1]">
              Fits Seamlessly Into <br /> Your Hiring Stack
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
              RecruitPro integrates with the tools you already use—from ATS and admissions systems to 
              APIs and automation platforms. Launch AI interviews without switching platforms.
            </p>
            
            <div className="flex flex-col gap-5 mb-12">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-5 rounded-[24px] bg-white border border-[#f3e8d6] shadow-sm group hover:shadow-md transition-all"
                >
                    <div className="w-12 h-12 bg-[#FFF2E6] rounded-xl flex items-center justify-center text-[#FF7F50] group-hover:scale-110 transition-transform">
                        <LinkIcon size={24} />
                    </div>
                    <span className="font-bold text-slate-800 text-lg">Region-Specific Compliance</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-5 rounded-[24px] bg-white border border-[#f3e8d6] shadow-sm group hover:shadow-md transition-all"
                >
                    <div className="w-12 h-12 bg-[#FFF2E6] rounded-xl flex items-center justify-center text-[#FF7F50] group-hover:scale-110 transition-transform">
                        <Database size={24} />
                    </div>
                    <span className="font-bold text-slate-800 text-lg">Multi-Language Support</span>
                </motion.div>
            </div>

            <Link
              href="#demo"
              className="inline-flex items-center gap-2 bg-[#FF7F50] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-[#E67245] hover:shadow-2xl hover:shadow-[#FF7F50]/20 transition-all group"
            >
              Schedule a Demo
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Sphere Border Design */}
            <div className="relative w-[480px] h-[480px]">
              {/* Outer Decorative Rings */}
              <div className="absolute inset-0 border-2 border-[#FF7F50]/10 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 border border-[#FFD700]/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Main Image Container (The Sphere) */}
              <div className="absolute inset-10 rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10">
                <img 
                  src="/images/landing/integrations.png" 
                  alt="Tech Stack Integrations" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF7F50]/10 to-transparent pointer-events-none" />
              </div>

              {/* Floating Spheres */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-10 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center z-20 border border-[#f3e8d6]"
              >
                <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <img src="https://www.google.com/s2/favicons?domain=slack.com&sz=128" className="w-5 h-5" alt="" />
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 25, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -left-5 w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center z-20 border border-[#f3e8d6]"
              >
                <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                    <img src="https://www.google.com/s2/favicons?domain=microsoft.com&sz=128" className="w-6 h-6" alt="" />
                </div>
              </motion.div>

              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 -right-8 w-14 h-14 bg-[#FFD700] rounded-full shadow-lg flex items-center justify-center z-20 border-4 border-white"
              >
                <Zap size={20} className="text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
