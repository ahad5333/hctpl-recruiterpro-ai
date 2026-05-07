'use client';

import { motion } from 'framer-motion';
import { Video, Bot, GraduationCap, PlayCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const products = [
  {
    title: 'Asynchronous Video Interviews',
    subtitle: 'Structured, scalable interviews—on the candidate’s time',
    description: 'Go beyond resumes with structured AI video interviews. Assess communication, intent, and readiness consistently while screening thousands of candidates.',
    icon: Video,
    image: '/images/landing/video_interview.png',
    color: 'blue',
    cta: 'Sign-up for free'
  },
  {
    title: 'AI Interviewers',
    subtitle: 'Next-gen interview experiences that feel live',
    description: 'Conversational, avatar-led interviews powered by agentic AI. Dynamic follow-up questions based on responses. Simulates real interviews like Zoom or Teams.',
    icon: Bot,
    image: '/images/landing/ai_avatar.png',
    color: 'indigo',
    cta: 'Find out more'
  },
  {
    title: 'University Admissions',
    subtitle: 'Fair, scalable, and structured admissions screening',
    description: 'AI video interviews for student admissions and evaluations. Consistent assessment across applicants. Reduces interviewer bias and administrative load.',
    icon: GraduationCap,
    image: '/images/landing/university_admissions.png',
    color: 'purple',
    cta: 'Learn more'
  },
  {
    title: 'AI Mock Interviews',
    subtitle: 'Empower your students to ace the real interviews',
    description: 'Designed for students, job seekers, and career switchers. AI-led simulations with instant feedback. Assess communication and confidence.',
    icon: PlayCircle,
    image: '/images/landing/mock_interview.png',
    color: 'orange',
    cta: 'Explore'
  }
];

const colorMap: any = {
  blue: 'bg-blue-600',
  indigo: 'bg-indigo-600',
  purple: 'bg-purple-600',
  orange: 'bg-orange-600',
};

const lightColorMap: any = {
  blue: 'bg-blue-50 text-blue-600',
  indigo: 'bg-indigo-50 text-indigo-600',
  purple: 'bg-purple-50 text-purple-600',
  orange: 'bg-orange-50 text-orange-600',
};

export default function Products() {
  return (
    <section className="py-24 bg-[#FFF8EE]" id="products">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-[#FF7F50] font-bold uppercase tracking-widest text-sm mb-4">Our Products</h3>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
            Explore Our Featured Products
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[40px] border border-[#f3e8d6] overflow-hidden hover:border-[#FF7F50]/50 hover:shadow-[0_40px_80px_-15px_rgba(255,127,80,0.1)] transition-all group flex flex-col h-full relative"
            >
              <div className="h-72 overflow-hidden relative p-4">
                <div className="w-full h-full rounded-[32px] overflow-hidden relative">
                    <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </div>

                {/* Realistic Floating Shapes */}
                <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-8 right-8 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-xl z-20"
                />
                <motion.div 
                    animate={{ rotate: [0, 90, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-8 left-8 w-8 h-8 bg-[#FFD700]/20 backdrop-blur-sm rounded-lg border border-[#FFD700]/30 z-20"
                />

                <div className={`absolute top-10 left-10 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg bg-white/90 backdrop-blur-md text-[#FF7F50] z-30`}>
                  <product.icon size={24} />
                </div>
              </div>
              
              <div className="p-10 pt-4 flex flex-col flex-grow">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">{product.title}</h4>
                <p className="text-[#FF7F50] font-bold mb-6 text-sm italic">{product.subtitle}</p>
                
                <p className="text-slate-600 mb-10 leading-relaxed flex-grow text-sm font-medium">
                  {product.description}
                </p>

                <Link 
                  href="/dashboard"
                  className="inline-flex items-center gap-2 font-black text-slate-900 hover:text-[#FF7F50] transition-colors group/link"
                >
                  {product.cta}
                  <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

