"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Users, TrendingUp, Wallet, ShieldCheck, CheckCircle2 } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────
const WHY_US_DATA = [
  {
    id: 1,
    title: "Complete Solutions",
    desc: "Everything handled in one place. From websites and mobile apps to SaaS, graphic design, and digital marketing.",
    icon: Layers,
    colSpan: "lg:col-span-8",
  },
  {
    id: 2,
    title: "Proven Experience",
    desc: "2 years of expertise with 25+ completed websites and active ad campaigns for 10+ companies.",
    icon: TrendingUp,
    colSpan: "lg:col-span-4",
  },
  {
    id: 3,
    title: "100% In-House Team",
    desc: "Every project is entirely designed and developed by our own dedicated team. We never outsource your vision.",
    icon: Users,
    colSpan: "lg:col-span-4",
  },
  {
    id: 4,
    title: "Flexible Pricing",
    desc: "We provide the best possible solutions tailored to your specific requirements, no matter your budget.",
    icon: Wallet,
    colSpan: "lg:col-span-4",
  },
  {
    id: 5,
    title: "Result-Driven",
    desc: "Our primary goal is to take your business to the next level with high-quality work and measurable ROI.",
    icon: ShieldCheck,
    colSpan: "lg:col-span-4",
  }
];

export default function WhyWexoraaSection(): React.ReactElement {
  return (
    <section className="relative w-full py-20 md:py-28 bg-white font-['Manrope',_sans-serif] overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#86C232]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="inline-block text-[#86C232] border border-[#86C232]/80 bg-[#86C232]/10 px-[14px] py-[4px] rounded-[4px] text-[12px] md:text-[14px] font-extrabold tracking-[0.2em] uppercase mb-4 select-none">
              Why Wexoraa
            </span>
            <h2 className="text-[#222629] text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.15]">
              We deliver complete digital solutions with <span className="text-[#86C232]">proven results.</span>
            </h2>
          </div>
          <p className="text-[#6B6E70] text-[15px] md:text-[17px] font-medium leading-[1.7] max-w-md">
            No matter what stage your business is in, our goal is to take it to the next level. We give our best — you can trust us.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {WHY_US_DATA.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className={`
                  group relative rounded-[10px] p-8 md:p-10 transition-all duration-300 overflow-hidden
                  bg-[#F8FAF8] border border-[#474B4F]/5
                  hover:border-[#86C232] hover:border-2 hover:-translate-y-1
                  ${item.colSpan}
                `}
              >
                {/* Icon Box */}
                <div className="relative z-10 w-14 h-14 rounded-[10px] bg-white border border-black/5 flex items-center justify-center text-[#86C232] mb-6 group-hover:scale-110 group-hover:bg-[#86C232] group-hover:text-white transition-all duration-500">
                  <Icon size={26} strokeWidth={2} />
                </div>
                
                {/* Text Content */}
                <h3 className="relative z-10 text-[#222629] text-xl md:text-2xl font-extrabold mb-3 tracking-tight">
                  {item.title}
                </h3>
                
                <p className="relative z-10 text-[#6B6E70] text-[15px] md:text-[16px] leading-[1.7] font-medium group-hover:text-[#222629] transition-colors duration-500">
                  {item.desc}
                </p>

                {/* Decorative Check Icon in background */}
                <div className="absolute -bottom-6 -right-6 text-[#86C232]/5 group-hover:text-[#86C232]/20 group-hover:scale-110 transition-all duration-700 pointer-events-none">
                  <CheckCircle2 size={160} strokeWidth={1} />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}