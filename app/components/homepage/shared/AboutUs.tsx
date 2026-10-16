"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Marquee from "../Marquee"; 
import { Home, ChevronRight, Box, Lightbulb, Trophy, Headphones, ArrowUpRight, ChevronsRight, Plus, Minus } from "lucide-react";

const FEATURES = [
  { id: 1, icon: Lightbulb, title: "Innovative Solutions", desc: "We stay ahead of the curve, leveraging cutting-edge technologies to keep you competitive." },
  { id: 2, icon: Trophy, title: "Award-Winning", desc: "Recognized by industry leaders, our team has a proven record of delivering excellence." },
  { id: 3, icon: Headphones, title: "Dedicated Support", desc: "Our team is always available to address your concerns and provide effective solutions." },
];

const MV = {
  mission: ["Innovation & Excellence", "Exceptional Customer", "Business Growth"],
  vision: ["Global Leadership", "Transformative Impact", "Sustainable Success"],
};

const FAQS = [
  { id: 1, q: "What services does Wexoraa offer?", a: "We offer Web Development, UI/UX Design, Custom Software, Mobile Apps, Digital Marketing, and AI Solutions." },
  { id: 2, q: "How do I get started?", a: "Simply reach out through our contact form. We'll schedule a consultation to discuss your project." },
  { id: 3, q: "How do you ensure success?", a: "We implement rigorous quality assurance, transparent communication, and data-driven analytics." },
  { id: 4, q: "How long will it take?", a: "Timelines vary depending on scope. We provide a detailed timeline during our initial consultation." },
  { id: 5, q: "Can I track the progress?", a: "Absolutely! We provide access to a dedicated dashboard to monitor milestones in real-time." },
];

// UPDATED CTA BUTTON TO MATCH NEW STYLE (Green Arrow by Default)
function CtaButton({ text, href = "#" }: { text: string; href?: string }) {
  return (
    <Link href={href} className="group inline-flex items-center justify-between bg-[#86C232] text-[#222629] rounded-full pl-7 pr-2 py-2 font-extrabold text-[15px] transition-all duration-300 select-none w-fit hover:bg-[#75ac28]">
      <div className="relative h-[24px] overflow-hidden mr-4">
        <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-1/2">
          <span className="h-[24px] flex items-center whitespace-nowrap tracking-tight">{text}</span>
          <span className="h-[24px] flex items-center whitespace-nowrap tracking-tight">{text}</span>
        </div>
      </div>
      {/* Changed text color here to #86C232 to match the screenshot */}
      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#222629] text-[#86C232] transition-all duration-300 group-hover:scale-105">
        <ArrowUpRight size={20} strokeWidth={2.5} className="transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:rotate-45" />
      </span>
    </Link>
  );
}

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const badgeCls = "flex items-center gap-2 text-[#86C232] text-[11px] md:text-[15px] font-extrabold uppercase tracking-[0.3em] mb-4 bg-[#86C232]/10 px-3 py-1.5 rounded-[4px] border border-[#86C232]/80 w-fit";

  return (
    <main className="w-full bg-[#f8f9fa] font-['Manrope',_sans-serif] overflow-hidden">
      
      {/* 1. HERO */}
      <section className="w-full pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8">
        <div className="relative w-full max-w-[1400px] mx-auto h-[350px] md:h-[450px] lg:h-[500px] rounded-[10px] flex items-center justify-center overflow-hidden shadow-sm">
          <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/photo-1552664730-d307ca884978.jpg')" }} />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#222629]/95 via-[#222629]/85 to-[#61892F]/60 mix-blend-multiply" />
          <div className="relative z-20 flex flex-col items-center text-center px-4">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">About Us</motion.h1>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex items-center gap-2 text-sm md:text-base font-medium text-white/80 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10">
              <Link href="/" className="flex items-center gap-1.5 hover:text-[#86C232] transition-colors"><Home size={16} /> Home</Link>
              <ChevronRight size={16} className="text-white/40 mx-1" />
              <span className="text-white font-bold">About Us</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CHOOSE THE BEST */}
      <section className="w-full py-20 md:py-28 max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={badgeCls}><Box size={16} strokeWidth={2.5} className="-mt-0.5" /> Choose The Best</motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#222629] leading-[1.2]">Empowering Business<br />with <span className="text-[#86C232]">Expertise.</span></motion.h2>
          </div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}><CtaButton text="Request a Call" /></motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map(({ id, icon: Icon, title, desc }, i) => (
            <motion.div key={id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group flex flex-col bg-white p-8 lg:p-10 rounded-[24px] border border-[#474B4F]/10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:-translate-y-2 hover:bg-[#61892F] hover:shadow-[0_20px_50px_rgba(97,137,47,0.25)] transition-all duration-300">
              <div className="w-[64px] h-[64px] rounded-full bg-[#f4f7f6] flex items-center justify-center text-[#86C232] mb-8 transition-colors group-hover:bg-white/10 group-hover:text-white"><Icon size={28} strokeWidth={1.5} /></div>
              <h3 className="text-xl lg:text-[1.35rem] font-extrabold text-[#222629] mb-4 transition-colors group-hover:text-white">{title}</h3>
              <p className="text-[15px] font-medium text-[#6B6E70] leading-[1.8] transition-colors group-hover:text-white/80">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. GET TO KNOW US */}
      <section className="w-full py-20 md:py-28 bg-[#f0f4f3]">
        <div className="max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative w-full h-[450px] md:h-[550px] rounded-[32px] overflow-hidden group">
            <img src="/assets/images/photo-1600880292203-757bb62b4baf.jpg" alt="Meeting" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:w-[320px] bg-[#222629]/85 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl">
              <h4 className="text-white text-lg font-extrabold mb-6">Business Progress</h4>
              {[{ l: "Revenue", v: "82%" }, { l: "Satisfaction", v: "90%" }].map((stat, i) => (
                <div key={i} className="mb-5 last:mb-0">
                  <div className="flex justify-between items-center mb-2"><span className="text-white/80 text-sm font-semibold">{stat.l}</span><span className="text-white font-bold text-sm">{stat.v}</span></div>
                  <div className="w-full h-1.5 bg-[#474B4F] rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} whileInView={{ width: stat.v }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 + i * 0.2 }} className="h-full bg-[#86C232] rounded-full" /></div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className={badgeCls}><Box size={16} strokeWidth={2.5} className="-mt-0.5" /> Get to know us</div>
            <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[2.8rem] font-extrabold text-[#222629] leading-[1.15] mb-10">Driving Innovation and Excellence for <br />Sustainable Corporate Success <span className="text-[#86C232]">Worldwide.</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
              {[ { t: "Our Mission", d: "Our mission is to empower businesses through innovative best solutions.", list: MV.mission }, { t: "Our Vision", d: "Our vision is to become a global leader in providing transformative solutions.", list: MV.vision } ].map((sec, i) => (
                <div key={i}>
                  <h3 className="text-xl font-extrabold text-[#222629] mb-3">{sec.t}</h3>
                  <p className="text-[#6B6E70] text-[15px] font-medium leading-[1.7] mb-5">{sec.d}</p>
                  <ul className="space-y-3">{sec.list.map((item, idx) => <li key={idx} className="flex items-center gap-2.5 text-[15px] text-[#222629] font-bold"><ChevronsRight size={16} strokeWidth={2.5} className="text-[#86C232]" />{item}</li>)}</ul>
                </div>
              ))}
            </div>
            <CtaButton text="Let's Build About Us" />
          </motion.div>
        </div>
      </section>

      {/* 4. MARQUEE & 5. FAQS */}
      <section className="relative w-full py-16 md:py-20 bg-[#f8f9fa] border-b border-[#474B4F]/10"><div className="w-full max-w-[1400px] mx-auto flex justify-center"><Marquee /></div></section>
      <section className="w-full py-20 md:py-28 bg-white max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        <div className="lg:col-span-4 flex flex-col">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={badgeCls}><Box size={16} strokeWidth={2.5} className="-mt-0.5" /> Common Questions</motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#222629] leading-[1.1] mb-6">Need <span className="text-[#86C232]">Help?</span><br />Start Here...</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[#6B6E70] text-[15px] leading-[1.8] font-medium mb-10">We stay ahead of the curve, leveraging cutting-edge technologies and strategies to keep you competitive.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><CtaButton text="Request a Call" /></motion.div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-4">
          {FAQS.map(({ id, q, a }) => (
            <motion.div key={id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`rounded-2xl transition-all duration-300 overflow-hidden ${openFaq === id ? "bg-[#86C232] shadow-[0_15px_30px_rgba(134,194,50,0.2)]" : "bg-white border border-[#474B4F]/10 shadow-sm"}`}>
              <button onClick={() => setOpenFaq(openFaq === id ? null : id)} className="w-full flex items-center justify-between p-6 sm:p-8 text-left outline-none group">
                <h4 className={`text-lg sm:text-[1.15rem] font-extrabold pr-4 transition-colors ${openFaq === id ? "text-white" : "text-[#222629] group-hover:text-[#86C232]"}`}>{q}</h4>
                <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all ${openFaq === id ? "border-[1.5px] border-white text-white" : "border-[1.5px] border-[#86C232] text-[#86C232] group-hover:bg-[#86C232] group-hover:text-white"}`}>
                  {openFaq === id ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
                </div>
              </button>
              <AnimatePresence>
                {openFaq === id && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 text-[15px] font-medium leading-[1.8] text-white/95">{a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
      </section>
    </main>
  );
}