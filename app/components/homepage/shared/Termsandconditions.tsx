"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    id: 1,
    quote: "The results we've seen after partnering with Wexoraa are beyond our expectations. They not only understood our vision but also brought new ideas to the table that have taken our business to the next level.",
    name: "Covai Home Tech",
    role: "Home Appliances & Services",
    logo: "/assets/img/clientslogo/1.png", 
  },
  {
    id: 2,
    quote: "We've been working with them for years, and they continue to deliver outstanding results. Their team is proactive, responsive, and always goes the extra mile to ensure our needs are met.",
    name: "Gym Hack",
    role: "E-Commerce & Fitness",
    logo: "/assets/img/clientslogo/7.png", 
  },
  {
    id: 3,
    quote: "Working with Wexoraa has been a game-changer for our business. Their team's professionalism, attention to detail, and innovative solutions helped us streamline operations beautifully.",
    name: "Ayyappa Ghee",
    role: "Ghee Products",
    logo: "/assets/img/clientslogo/14.jpeg", 
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function TestimonialStickySection(): React.ReactElement {
  return (
    <section className="w-full py-20 md:py-32 bg-[#F8FAF8] font-['Manrope',_sans-serif]">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-12">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* ── LEFT COLUMN: Sticky Header ── */}
          <div className="lg:w-5/12 flex flex-col items-start relative">
            <div className="lg:sticky lg:top-32 flex flex-col items-start">
              
              <span className="inline-block text-[#86C232] border border-[#86C232]/80 bg-[#86C232]/10 px-[14px] py-[4px] rounded-[10px] text-[12px] md:text-[14px] font-extrabold tracking-[0.2em] uppercase mb-6 select-none">
                Client Stories
              </span>
              
              <h2 className="text-[#222629] text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.1] mb-6">
                Don't just take <br className="hidden lg:block" />
                <span className="text-[#86C232]">our word for it.</span>
              </h2>
              
              <p className="text-[#6B6E70] text-[16px] md:text-[18px] leading-[1.7] font-medium mb-10 max-w-md">
                We build digital solutions that drive real, measurable growth. Here is what our partners have to say about working with our team.
              </p>

              {/* Trust Badge */}
              <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-[10px] border border-black/5 mb-10">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="#86C232" className="text-[#86C232]" strokeWidth={0} />
                    ))}
                  </div>
                  <span className="text-[#222629] font-bold text-sm">4.9/5 Average Rating</span>
                </div>
              </div>

            </div>
          </div>

          {/* ── RIGHT COLUMN: Scrolling Cards ── */}
          <div className="lg:w-7/12 flex flex-col gap-8 md:gap-12 w-full">
            {TESTIMONIALS.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="bg-white rounded-[10px] p-8 md:p-12 border border-[#474B4F]/5 relative overflow-hidden group hover:border-[#86C232] hover:border-2 transition-all duration-300 w-full"
              >
                <Quote size={140} className="absolute -top-6 -right-6 text-[#86C232]/5 group-hover:text-[#86C232]/10 transition-colors duration-500 rotate-180 pointer-events-none" fill="currentColor" strokeWidth={0} />

                {/* Logo Container */}
                <div className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] bg-[#F8FAF8] rounded-[10px] flex items-center justify-center border border-black/5 mb-8 p-4">
                  <img
                    src={testimonial.logo}
                    alt={`${testimonial.name} Logo`}
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>

                {/* Quote Text */}
                <p className="text-[#222629] text-[18px] md:text-[22px] leading-[1.6] font-semibold mb-10 relative z-10">
                  "{testimonial.quote}"
                </p>

                {/* Footer Info */}
                <div className="relative z-10">
                  <h4 className="text-[#86C232] text-[17px] font-extrabold tracking-tight">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#6B6E70] text-[14px] font-medium mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}