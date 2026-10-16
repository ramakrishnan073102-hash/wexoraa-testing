"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const LOGOS = Array.from({ length: 17 }, (_, index) => {
  const number = index + 1;
  const extension = number === 13 || number === 15 ? "jpeg" : "png";

  return {
    name: `Client logo ${number}`,
    src: `/assets/img/clientslogo/${number}.${extension}`,
  };
});

export default function ClientMarquee(): React.ReactElement {
  const prefersReducedMotion = useReducedMotion();
  
  // Duplicating the array 4 times ensures a flawless infinite loop on any screen size
  const logos = prefersReducedMotion ? LOGOS : [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section className="w-full overflow-hidden bg-[#f8f9fa] py-10 md:py-14 flex items-center">
      <div className="relative w-full overflow-hidden flex items-center">
        
        {/* Fade Edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#f8f9fa] to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#f8f9fa] to-transparent md:w-40" />

        <div className="flex w-max">
          <motion.div
            className="flex w-max items-center gap-12 px-6 md:gap-24"
            animate={prefersReducedMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={
              prefersReducedMotion
                ? undefined
                : { repeat: Infinity, ease: "linear", duration: 80 }
            }
          >
            {logos.map((logo, index) => (
              <div
                key={`${logo.src}-${index}`}
                className="flex h-20 min-w-[120px] shrink-0 items-center justify-center md:min-w-[160px]"
              >
                <img
                  src={logo.src}
                  alt={index < LOGOS.length ? logo.name : ""}
                  aria-hidden={index >= LOGOS.length}
                  // Added grayscale and lowered default opacity to match the video
                  className="max-h-[45px] w-auto object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:max-h-[60px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}