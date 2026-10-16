"use client";

import React from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────
const CLIENT_LOGOS = Array.from({ length: 17 }, (_, index) => {
  const number = index + 1;
  const extension = [13, 14, 15].includes(number) ? "jpeg" : "png";
  return {
    name: `Client logo ${number}`,
    src: `/assets/img/clientslogo/${number}.${extension}`,
  };
});

// ─── Component ────────────────────────────────────────────────────────────────
export default function ClientMarqueeSection(): React.ReactElement {
  return (
    <>
      <style>{`
        /* Seamless infinite scroll */
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          /* Increased from 80s to 130s to make the scrolling significantly slower and smoother */
          animation: marquee-scroll 130s linear infinite;
        }
        /* Pause on hover */
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section className="w-full py-16 md:py-24 bg-[#ffffff] overflow-hidden font-['Manrope',_sans-serif]">
        
        {/* ── Heading ── */}
        <header className="mb-10 md:mb-14 text-center px-5">
          <h2 className="text-[1.8rem] md:text-[2.2rem] lg:text-[2.5rem] font-extrabold text-[#222629] tracking-tight">
            Brands We’re Proud to Work With
          </h2>
        </header>

        {/* ── Marquee Container ── */}
        <div
          className={[
            "relative w-full flex items-center justify-center",
            /* Left & Right fade edges */
            "before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0",
            "before:w-[60px] md:before:w-[150px] before:z-[5] before:pointer-events-none",
            "before:bg-gradient-to-r before:from-[#ffffff] before:to-transparent",
            "after:content-[''] after:absolute after:top-0 after:bottom-0 after:right-0",
            "after:w-[60px] md:after:w-[150px] after:z-[5] after:pointer-events-none",
            "after:bg-gradient-to-l after:from-[#ffffff] after:to-transparent",
          ].join(" ")}
        >
          {/* ── Scrolling track ── */}
          <div className="marquee-track flex w-max relative z-[1] gap-2 md:gap-2">
            {/* Duplicating the array multiple times ensures a flawless loop on wide screens */}
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, index) => (
              <div
                key={index}
                className={[
                  "flex-shrink-0 w-[140px] md:w-[180px] h-[90px] md:h-[100px]",
                  "flex items-center justify-center",
                  "transition-all duration-250 ease-in-out group cursor-pointer",
                ].join(" ")}
              >
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="max-h-[60px] md:max-h-[75px] max-w-[120px] md:max-w-[150px] w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 ease-out"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  );
}