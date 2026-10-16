"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ChevronRight, MapPin, Mail, Phone, MessageSquareText, ArrowUpRight, Box } from "lucide-react";

const CONTACT_INFO = [
  { id: 1, title: "Our Location", icon: MapPin, details: ["SVT Nagar, Nava India, Peelamedu, Coimbatore - 641004"] },
  { id: 2, title: "Email us", icon: Mail, details: ["wexoraainfotech@gmail.com"] },
  { id: 3, title: "Call us", icon: Phone, details: ["(+91) 9360375338"] },
  { id: 4, title: "Live chat", icon: MessageSquareText, details: ["livechat@wexoraa.com"], link: { text: "Need help?", href: "#" } },
];

export default function ContactPage() {
  const inputCls = "w-full bg-transparent border-b-2 border-[#474B4F]/20 pb-3 text-[#222629] font-medium placeholder:text-[#6B6E70] outline-none focus:border-[#86C232] transition-colors";

  return (
    <main className="w-full bg-[#f8f9fa] font-['Manrope',_sans-serif]">
      
      {/* 1. HERO SECTION */}
      <section className="w-full pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8">
        <div className="relative w-full max-w-[1400px] mx-auto h-[320px] md:h-[200px] lg:h-[500px] rounded-[10px] flex items-center justify-center overflow-hidden shadow-sm">
          <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/photo-1600880292203-757bb62b4baf.jpg')" }} />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#222629]/95 via-[#222629]/85 to-[#61892F]/60 mix-blend-multiply" />
          <div className="relative z-20 flex flex-col items-center text-center px-4">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">Contact Us</motion.h1>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex items-center gap-2 text-sm md:text-base font-medium text-white/80 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10">
              <Link href="/" className="flex items-center gap-1.5 hover:text-[#86C232] transition-colors"><Home size={16} /> Home</Link>
              <ChevronRight size={16} className="text-white/40 mx-1" />
              <span className="text-white font-bold">Contact Us</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CONTACT INFO CARDS */}
      <section className="w-full pt-16 pb-20 md:pt-24 md:pb-28 max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-14 md:mb-16">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-2 text-[#86C232] text-xs font-black uppercase tracking-[0.2em] mb-4 bg-[#86C232]/10 px-3 py-1.5 rounded-sm border border-[#86C232]/20"><Box size={14} strokeWidth={2.5} /> Contact Info</motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#222629] tracking-tight"><span className="text-[#86C232]">Reach Out</span> to Us</motion.h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {CONTACT_INFO.map(({ id, title, icon: Icon, details, link }, i) => (
            <motion.div key={id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group flex flex-col items-center text-center bg-white p-8 md:p-10 rounded-[10px] border border-[#474B4F]/10 shadow-[0_10px_40px_rgba(34,38,41,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(134,194,50,0.12)] transition-all duration-300">
              <div className="w-[72px] h-[72px] rounded-full bg-[#f4f7f6] flex items-center justify-center text-[#86C232] mb-6 transition-colors duration-300 group-hover:bg-[#86C232] group-hover:text-white"><Icon size={28} strokeWidth={1.8} /></div>
              <h3 className="text-xl font-extrabold text-[#222629] mb-4 group-hover:text-[#86C232] transition-colors">{title}</h3>
              <div className="flex flex-col gap-1 text-[15px] font-medium text-[#6B6E70]">{details.map((l, idx) => <p key={idx}>{l}</p>)}</div>
              {link && <Link href={link.href} className="mt-2 text-[15px] font-bold text-[#86C232] hover:text-[#61892F] transition-colors">{link.text}</Link>}
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. FORM & MAP SECTION */}
      <section className="w-full py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full">
            <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[2.8rem] font-extrabold text-[#222629] leading-[1.15] tracking-tight mb-10 max-w-lg">Feel Free to Get in Touch or Visit our Location.</h2>
            <form className="w-full flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <input type="text" placeholder="Full Name*" required className={inputCls} />
                <input type="email" placeholder="Email Address*" required className={inputCls} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <input type="tel" placeholder="Phone number*" required className={inputCls} />
                <div className="relative">
                  <select required defaultValue="" className={`${inputCls} appearance-none cursor-pointer text-[#6B6E70]`}>
                    <option value="" disabled hidden>Choose an option</option>
                    {["Web Development", "UI/UX Design", "Custom Software", "Mobile Apps", "Digital Marketing", "AI Solutions"].map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  <ChevronRight size={18} className="absolute right-0 top-1 pointer-events-none text-[#6B6E70] rotate-90" />
                </div>
              </div>
              <textarea placeholder="Type message*" rows={1} required className={`${inputCls} resize-y min-h-[40px]`} />
              
              {/* Submit Button with exact Wexoraa style button and green arrow color */}
              <button
                type="submit"
                className="group inline-flex items-center justify-between bg-[#86C232] text-[#222629] rounded-full pl-7 pr-2 py-2 font-extrabold text-[15px] transition-all duration-300 select-none w-fit hover:bg-[#75ac28]"
              >
                <span className="mr-6 tracking-tight">Submit Now</span>
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#222629] text-[#86C232] transition-transform duration-300 group-hover:scale-105">
                  <ArrowUpRight size={20} strokeWidth={2.5} className="transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:rotate-45" />
                </span>
              </button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-[10px] overflow-hidden shadow-[0_20px_60px_rgba(34,38,41,0.1)] border-4 border-white relative isolate">
            <iframe src="https://maps.google.com/maps?q=SVT%20Nagar,%20Nava%20India,%20Peelamedu,%20Coimbatore%20641004&t=&z=16&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 w-full h-full object-cover filter contrast-100" />
          </motion.div>

        </div>
      </section>
    </main>
  );
}