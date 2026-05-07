'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star, Zap, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[#FFF8EE]">
      {/* Decorative Floating Shapes */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-[10%] w-32 h-32 bg-[#FF7F50] rounded-full flex items-center justify-center z-10 overflow-hidden"
      >
        <div className="w-full h-1 bg-white/30 rotate-45 absolute top-1/4" />
        <div className="w-full h-1 bg-white/30 rotate-45 absolute top-1/2" />
        <div className="w-full h-1 bg-white/30 rotate-45 absolute bottom-1/4" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-bold mb-8">
            <Sparkles size={16} />
            <span>Trusted by 850+ global companies</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 leading-[1.1]">
            We’ve helped <br />
            <span className="text-[#FF7F50]">thousands of teams</span> <br />
            hire their best.
          </h1>

          <p className="text-xl text-slate-600 mb-12 max-w-lg leading-relaxed font-medium">
            Our platform makes it faster and easier to evaluate candidates, boosting your chances of finding the perfect fit for your next chapter.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-8 mb-12">
            <Link
              href="#demo"
              className="w-full sm:w-auto bg-[#FF7F50] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-[#E67245] hover:shadow-2xl hover:shadow-[#FF7F50]/20 transition-all flex items-center justify-center gap-2 group"
            >
              Sign up for Free
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#stories"
              className="text-slate-900 font-bold text-lg border-b-2 border-slate-900 hover:text-[#FF7F50] hover:border-[#FF7F50] transition-all"
            >
              or read the stories
            </Link>
          </div>
          
          <p className="text-sm text-slate-400 font-bold">Trusted by 6 million candidates and hiring managers.</p>
        </motion.div>

        {/* Main Image & Floating Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Large Yellow Background Circle */}
          <div className="relative w-[500px] h-[500px]">
            <div className="absolute inset-0 bg-[#FFD700] rounded-full scale-[1.1]" />
            
            {/* Main Person Image */}
            <div className="absolute inset-0 flex items-end justify-center overflow-hidden rounded-full border-8 border-white shadow-2xl">
              <img 
                src="/images/landing/hero_person.png" 
                alt="Happy Professional" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Happy Professional Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF7F50] text-white px-6 py-2 rounded-full font-black text-sm shadow-xl z-30 whitespace-nowrap"
            >
                Happy Professional
            </motion.div>

            {/* Floating Testimonials */}
            <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-1/4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 max-w-[200px] z-20"
            >
                <p className="text-xs font-bold text-slate-800 mb-2">"Interviewer.AI made hiring extremely easy and helpful."</p>
                <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />)}
                </div>
                <div className="flex items-center gap-2">
                    <img src="/images/landing/testimonial_3.png" className="w-8 h-8 rounded-full border-2 border-white shadow-sm" alt="" />
                </div>
            </motion.div>

            <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-12 bottom-1/4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 max-w-[220px] z-20"
            >
                <p className="text-xs font-bold text-slate-800 mb-2">"I was so excited to start the journey of my hiring career."</p>
                <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />)}
                </div>
                <div className="flex items-center gap-2">
                    <img src="/images/landing/testimonial_1.png" className="w-8 h-8 rounded-full border-2 border-white shadow-sm" alt="" />
                </div>
            </motion.div>

            <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-4 right-4 bg-slate-900 text-white p-4 rounded-2xl shadow-2xl z-20 flex items-center gap-3"
            >
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Zap size={16} className="text-[#FF7F50]" />
                </div>
                <p className="text-[10px] font-bold leading-tight">It will help me as I continue <br /> to scale my team!</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
