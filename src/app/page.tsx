'use client';

import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Partners from "@/components/landing/Partners";
import WhatWeDo from "@/components/landing/WhatWeDo";
import Products from "@/components/landing/Products";
import Pricing from "@/components/landing/Pricing";
import GlobalTrust from "@/components/landing/GlobalTrust";
import HowItWorks from "@/components/landing/HowItWorks";
import WhoItsFor from "@/components/landing/WhoItsFor";
import WhyUs from "@/components/landing/WhyUs";
import Integrations from "@/components/landing/Integrations";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Partners />
      <WhatWeDo />
      <Products />
      <Pricing />
      <GlobalTrust />
      <HowItWorks />
      <WhoItsFor />
      <WhyUs />
      <Integrations />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
