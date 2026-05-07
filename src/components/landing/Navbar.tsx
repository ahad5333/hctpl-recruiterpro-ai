'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Video, ChevronDown } from 'lucide-react';

const navLinks = [
  { name: 'Company', href: '#company' },
  { name: 'How it works', href: '#how-it-works' },
  { name: 'Products', href: '#products' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Help Center', href: '#help' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#FF7F50] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#FF7F50]/20 group-hover:scale-110 transition-transform">
            <Video size={20} />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
            HCTPL RecruitPro
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-[#FF7F50] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Auth CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-semibold text-slate-700 hover:text-[#FF7F50] px-4 py-2"
          >
            Log in
          </Link>
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-[#FF7F50] px-4 py-2">
              Sign up as <ChevronDown size={14} />
            </button>
            {/* Dropdown would go here if needed */}
          </div>
          <Link
            href="/dashboard"
            className="bg-[#FF7F50] text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-[#E67245] hover:shadow-lg hover:shadow-[#FF7F50]/20 transition-all active:scale-95"
          >
            Start free trial
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-slate-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-slate-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-slate-100" />
              <Link href="/login" className="text-lg font-medium text-slate-700">
                Log in
              </Link>
              <Link
                href="/dashboard"
                className="bg-[#FF7F50] text-white text-center font-bold py-3 rounded-xl"
              >
                Start free trial
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
