"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Monitor, Paintbrush, Settings, Smartphone, TrendingUp, Bot } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  { num: "01", title: "Web Development", desc: "Websites built with purpose to strengthen your brand, generate leads, and grow your business.", icon: Monitor, img: "/assets/img/ourservices/web.jpeg" },
  { num: "02", title: "UI/UX Design", desc: "Thoughtful design that turns every click into a better experience.", icon: Paintbrush, img: "/assets/img/ourservices/uiux.jpeg" },
  { num: "03", title: "Custom Software", desc: "Custom-built solutions that simplify, automate, and scale your business.", icon: Settings, img: "/assets/img/ourservices/crm.jpeg" },
  { num: "04", title: "Mobile Apps", desc: "Powerful, user-friendly mobile apps built to connect with customers and grow your business.", icon: Smartphone, img: "/assets/img/ourservices/mobileapp.jpeg" },
  { num: "05", title: "Digital Marketing", desc: "SEO, social media marketing and performance marketing built to reach, engage, and convert.", icon: TrendingUp, img: "/assets/img/ourservices/digital.jpeg" },
  { num: "06", title: "AI Solutions", desc: "Smarter automation and AI-powered solutions designed to save time, simplify operations, and accelerate business growth.", icon: Bot, img: "/assets/img/ourservices/ai.jpeg" },
];

export default function ServiceSection() {
  const stackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState<"before" | "active" | "after">("before");

  useEffect(() => {
    let current = 0, target = 0, frame: number;

    const update = () => {
      if (!stackRef.current) return;
      const { top, bottom, height } = stackRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      if (top > 0) { setMode("before"); target = 0; }
      else if (bottom < vh) { setMode("after"); target = 1; }
      else { setMode("active"); target = Math.max(0, Math.min(-top / (height - vh), 1)); }
    };

    const animate = () => {
      current += (target - current) * 0.08;
      setProgress(current);
      frame = requestAnimationFrame(animate);
    };

    update(); animate();
    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);

    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);

  const layerStyles = {
    before: { position: "absolute", top: 0, left: 0 },
    active: { position: "fixed", top: 0, left: 0, zIndex: 20 },
    after: { position: "absolute", bottom: 40, left: 0 }
  } as const;

  return (
    <section className="bg-white text-[#222629] relative pb-10 font-['Manrope',_sans-serif]">
      
      {/* Header */}
      <div className="pt-12 md:pt-16 pb-6 md:pb-8 text-center px-6 flex flex-col items-center">
        <span className="inline-block text-[#86C232] border border-[#86C232]/80 px-[14px] py-[4px] rounded-[4px] text-[11px] md:text-[15px] font-extrabold tracking-[0.3em] uppercase mb-3 md:mb-4">Services</span>
        <h2 className="text-[#222629] text-4xl md:text-5xl lg:text-[4rem] font-extrabold tracking-tight max-w-4xl leading-[1.1]">Ideas to Digital Growth</h2>
      </div>

      {/* Stacked Cards */}
      <div ref={stackRef} className="relative" style={{ height: `${SERVICES.length * 82}vh` }}>
        <div style={{ ...layerStyles[mode], width: "100%", height: "100vh" }} className="overflow-hidden bg-white">
          {SERVICES.map((srv, i) => {
            const Icon = srv.icon;
            const total = SERVICES.length - 1;
            const start = i === 0 ? 0 : (i - 1) / total;
            const end = i === 0 ? 0 : i / total;
            
            let y = 0, scale = 1, opacity = 1;

            if (i > 0) {
              if (progress < start) { y = 120; opacity = 0.9; }
              else if (progress >= end) { y = i * 1.8; scale = 1 - (i * 0.008); }
              else {
                const ease = 1 - Math.pow(1 - ((progress - start) / (end - start)), 3);
                y = 120 - ease * (120 - i * 1.8);
                scale = 0.98 + ease * 0.02;
                opacity = 0.92 + ease * 0.08;
              }
            }

            return (
              <div key={srv.title} className="absolute inset-0 flex items-center justify-center px-4 sm:px-6" style={{ zIndex: i + 1, transform: `translate3d(0, ${y}vh, 0) scale(${scale})`, opacity, willChange: "transform, opacity" }}>
                <div className="group w-full max-w-[1200px] rounded-[10px] shadow-[0_15px_50px_rgba(0,0,0,0.15)] overflow-hidden grid grid-cols-1 lg:grid-cols-[55%_45%] min-h-[400px] lg:min-h-[480px] border border-black/5 bg-[#1b1b1f]">
                  
                  {/* Left: Content Side */}
                  <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#86C232] mb-6 md:mb-8 shadow-sm">
                      <Icon size={28} strokeWidth={1.5} className="md:w-8 md:h-8" />
                    </div>
                    <span className="block text-[#86C232] text-[14px] md:text-[15px] font-bold tracking-[0.05em] mb-3">{srv.num}.</span>
                    <h3 className="text-white text-3xl md:text-4xl lg:text-[2.6rem] font-medium leading-[1.1] mb-4 tracking-tight">{srv.title}</h3>
                    <p className="text-white/70 text-[15px] md:text-[1.05rem] leading-[1.7] mb-8 max-w-xl font-normal">{srv.desc}</p>
                    <Link href="/services" className="group/btn inline-flex items-center gap-3 bg-[#86C232] hover:bg-[#61892F] transition-colors duration-300 rounded-full pl-6 pr-2 py-2 w-fit shadow-lg">
                      <span className="text-[#222629] font-bold text-sm md:text-[15px]">Let's Build</span>
                      <span className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#222629] text-[#86C232] flex items-center justify-center transition-transform duration-300 group-hover/btn:rotate-45">
                        <ArrowUpRight size={18} strokeWidth={2.5} />
                      </span>
                    </Link>
                  </div>

                  {/* Right: Image Side */}
                  <div className="relative h-[250px] sm:h-[350px] lg:h-full overflow-hidden border-t lg:border-t-0 lg:border-l border-white/5 bg-[#111]">
                    <img src={srv.img} alt={srv.title} className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}