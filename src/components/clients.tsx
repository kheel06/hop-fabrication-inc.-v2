"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";

const clients = [
  {
    name: "Lumiché",
    logo: "/clients/lumiche.jpg",
  },
  {
    name: "Sugarcane & Beyond",
    logo: "/clients/sugarcane-beyond.jpg",
  },
  {
    name: "Aldo Bueno Coffee & Dessert",
    logo: "/clients/aldo-bueno.jpg",
  },
  {
    name: "Sip & Stories",
    logo: "/clients/sip-and-stories.jpg",
  },
  {
    name: "Owls Cafe",
    logo: "/clients/owls-cafe.jpg",
  },
  {
    name: "Antipolo Grill & Chill",
    logo: "/clients/antipolo-grill.jpg",
  },
  {
    name: "C&M Coffee",
    logo: "/clients/cm-coffee.jpg",
  },
  {
    name: "Alas Tres Kape + Pandesal",
    logo: "/clients/alas-tres.jpg",
  },
  {
    name: "Mr. Macchiato",
    logo: "/clients/mr-macchiato.jpg",
  },
  {
    name: "Client 10",
    logo: "/clients/client-10.jpg",
  },
  {
    name: "Juu Juu",
    logo: "/clients/juujuu.jpg",
  },
  {
    name: "R. Lapids",
    logo: "/clients/r-lapids.jpg",
  },
];

const marqueeItems = [
  "FABRICATION",
  "DESIGN",
  "BUILT TO LAST",
  "CUSTOM SPACES",
  "HOP FABRICATIONS",
];

const gridContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
    },
  },
};

const gridItem = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const headlineItem = {
  hidden: {
    opacity: 0,
    y: 90,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Clients() {
  const [activeClient, setActiveClient] = useState<number | null>(null);

  const handleClientClick = (index: number) => {
    setActiveClient((current) => (current === index ? null : index));
  };

  return (
    <section
      id="clients"
      className="relative overflow-hidden border-t border-black/10 bg-[#f5f2ea] px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32 lg:px-16 lg:py-36"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="mb-12 grid gap-10 sm:mb-16 md:mb-20 md:grid-cols-[1.15fr_0.85fr] md:items-end lg:mb-24">
          {/* LEFT */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-6 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <span className="h-px w-8 bg-[#b18a2a] sm:w-10" />

              <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-[#b18a2a] sm:text-[10px] sm:tracking-[0.3em]">
                Selected Clients
              </p>

              <span className="ml-0 text-[9px] tracking-[0.18em] text-[#8d8980] sm:ml-1 sm:text-[10px] sm:tracking-[0.2em]">
                01 — 12
              </span>
            </motion.div>

            {/* Headline */}
            <div className="overflow-hidden">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                transition={{
                  staggerChildren: 0.12,
                }}
                className="font-serif text-[4.1rem] leading-[0.82] tracking-[-0.055em] text-[#171717] sm:text-6xl md:text-7xl lg:text-[7.5rem]"
              >
                <motion.span
                  variants={headlineItem}
                  className="block"
                >
                  BUILT
                </motion.span>

                <motion.span
                  variants={headlineItem}
                  className="block"
                >
                  FOR
                </motion.span>

                <motion.span
                  variants={headlineItem}
                  className="block text-[#aaa69d]"
                >
                  BRANDS.
                </motion.span>
              </motion.h2>
            </div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-md md:ml-auto"
          >
            <p className="text-[13px] leading-7 text-[#66635d] sm:text-sm md:text-base">
              From coffee shops and food concepts to growing local
              businesses, HOP Fabrications transforms ideas into physical
              spaces, carts, kiosks, and custom builds made for real business.
            </p>

            <div className="mt-6 flex items-center gap-4 sm:mt-7">
              <div className="h-px w-12 bg-black/20 sm:w-16" />

              <span className="text-[9px] uppercase tracking-[0.22em] text-[#77736b] sm:text-[10px] sm:tracking-[0.25em]">
                Real businesses. Real builds.
              </span>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            CLIENT GRID
        ========================================================= */}

        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="grid grid-cols-2 overflow-hidden border-l border-t border-black/[0.10] sm:grid-cols-3 lg:grid-cols-4"
        >
          {clients.map((client, index) => {
            const isActive = activeClient === index;

            return (
              <motion.button
                key={client.name}
                type="button"
                variants={gridItem}
                onClick={() => handleClientClick(index)}
                aria-label={`View ${client.name}`}
                aria-pressed={isActive}
                className={`
                  group relative flex aspect-[1.25/1] cursor-pointer
                  items-center justify-center overflow-hidden
                  border-b border-r border-black/[0.10]
                  bg-[#faf8f3]
                  text-left
                  outline-none
                  transition-all
                  duration-700
                  ease-[cubic-bezier(.22,1,.36,1)]
                  hover:bg-white
                  focus-visible:z-20
                  focus-visible:ring-1
                  focus-visible:ring-inset
                  focus-visible:ring-[#b18a2a]
                  sm:aspect-[1.45/1]
                  md:aspect-[1.55/1]
                  lg:aspect-[1.6/1]
                  ${isActive ? "bg-white" : ""}
                `}
              >
                {/* =================================================
                    NUMBER
                ================================================= */}

                <span
                  className={`
                    absolute left-3 top-3 z-20
                    text-[7px] tracking-[0.22em]
                    transition-all duration-500
                    sm:left-4 sm:top-4 sm:text-[8px]
                    md:text-[9px]
                    ${
                      isActive
                        ? "text-[#b18a2a]"
                        : "text-black/20 group-hover:text-[#b18a2a]"
                    }
                  `}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* =================================================
                    ACTIVE INDICATOR
                ================================================= */}

                <span
                  className={`
                    absolute right-3 top-3 z-20
                    flex h-5 w-5 items-center justify-center
                    text-[10px] text-[#b18a2a]
                    transition-all duration-500
                    sm:right-4 sm:top-4
                    ${
                      isActive
                        ? "translate-x-0 opacity-100"
                        : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }
                  `}
                >
                  ↗
                </span>

                {/* =================================================
                    SUBTLE CORNER DETAIL
                ================================================= */}

                <motion.div
                  initial={false}
                  animate={{
                    scale: isActive ? 1 : 0,
                  }}
                  className="absolute bottom-0 right-0 h-10 w-10 origin-bottom-right bg-[#b18a2a]/[0.08] sm:h-12 sm:w-12"
                />

                {/* =================================================
                    LOGO STAGE
                ================================================= */}

                <div
                  className={`
                    relative z-10
                    flex h-[76px] w-[76%]
                    max-w-[150px]
                    items-center justify-center
                    transition-transform
                    duration-700
                    ease-[cubic-bezier(.22,1,.36,1)]
                    sm:h-[88px]
                    sm:max-w-[175px]
                    md:h-[100px]
                    md:max-w-[190px]
                    ${
                      isActive
                        ? "scale-[1.04] -translate-y-2"
                        : "group-hover:scale-[1.04] group-hover:-translate-y-2"
                    }
                  `}
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    sizes="
                      (max-width: 640px) 120px,
                      (max-width: 1024px) 170px,
                      190px
                    "
                    className={`
                      object-contain
                      transition-all
                      duration-700
                      ease-[cubic-bezier(.22,1,.36,1)]
                      ${
                        isActive
                          ? "grayscale-0 opacity-100"
                          : "grayscale opacity-[0.48] group-hover:grayscale-0 group-hover:opacity-100"
                      }
                    `}
                  />
                </div>

                {/* =================================================
                    CLIENT INFORMATION
                ================================================= */}

                <div
                  className={`
                    absolute
                    bottom-3
                    left-3
                    right-3
                    z-20
                    transition-all
                    duration-600
                    ease-[cubic-bezier(.22,1,.36,1)]
                    sm:bottom-4
                    sm:left-4
                    sm:right-4
                    ${
                      isActive
                        ? "translate-y-0 opacity-100"
                        : "translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                    }
                  `}
                >
                  <div className="flex items-end justify-between gap-3 border-t border-black/10 pt-2.5 sm:pt-3">
                    <p className="min-w-0 truncate text-[7px] font-medium uppercase tracking-[0.12em] text-[#5f5b54] sm:text-[8px] sm:tracking-[0.15em] md:text-[9px]">
                      {client.name}
                    </p>

                    <span className="shrink-0 text-[8px] uppercase tracking-[0.12em] text-[#b18a2a] sm:text-[9px]">
                      Build
                    </span>
                  </div>
                </div>

                {/* =================================================
                    DESKTOP HOVER OVERLAY
                ================================================= */}

                <div
                  className={`
                    pointer-events-none absolute inset-0
                    bg-gradient-to-t
                    from-[#f5f2ea]/50
                    via-transparent
                    to-transparent
                    transition-opacity
                    duration-700
                    ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }
                  `}
                />

                {/* =================================================
                    TOUCH / MOBILE ACTIVE BAR
                ================================================= */}

                <motion.div
                  initial={false}
                  animate={{
                    scaleX: isActive ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-[#b18a2a]"
                />
              </motion.button>
            );
          })}
        </motion.div>

        {/* =========================================================
            BOTTOM STATEMENT
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-8 border-t border-black/10 pt-6 sm:mt-10 sm:pt-7"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <div>
              <p className="text-[9px] uppercase tracking-[0.16em] text-[#77736b] sm:text-[10px] sm:tracking-[0.18em]">
                Trusted by businesses built to grow.
              </p>
            </div>

            <button
              type="button"
              className="group flex w-fit items-center gap-3 outline-none"
            >
              <span className="text-[9px] uppercase tracking-[0.16em] text-[#b18a2a] transition-colors duration-300 group-hover:text-[#8d6c1d] sm:text-[10px] sm:tracking-[0.18em]">
                More builds. More stories.
              </span>

              <motion.span
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-sm text-[#b18a2a]"
              >
                →
              </motion.span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* =========================================================
    SEAMLESS INFINITE MARQUEE
    - Fully continuous on desktop + mobile
    - No blank gaps
    - No visible restart
========================================================= */}

<div
  className="mt-14 w-full overflow-hidden border-y border-black/10 py-4 sm:mt-20"
  aria-label="HOP Fabrications services"
>
  <motion.div
    className="flex w-max"
    animate={{
      x: ["0%", "-50%"],
    }}
    transition={{
      duration: 28,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    }}
    style={{
      willChange: "transform",
    }}
  >
    {/* =====================================================
        SEQUENCE A
        Repeated enough times to always cover the viewport
    ===================================================== */}
    <div className="flex shrink-0 items-center">
      {[...marqueeItems, ...marqueeItems].map((text, index) => (
        <div
          key={`marquee-a-${index}`}
          className="flex shrink-0 items-center"
        >
          <span className="mx-5 whitespace-nowrap text-[8px] uppercase tracking-[0.28em] text-[#8d8980] sm:mx-8 sm:text-[10px] sm:tracking-[0.35em]">
            {text}
          </span>

          <span className="shrink-0 text-[9px] text-[#b18a2a] sm:text-[10px]">
            ✦
          </span>
        </div>
      ))}
    </div>

    {/* =====================================================
        SEQUENCE B
        Identical copy creates seamless looping
    ===================================================== */}
    <div className="flex shrink-0 items-center">
      {[...marqueeItems, ...marqueeItems].map((text, index) => (
        <div
          key={`marquee-b-${index}`}
          className="flex shrink-0 items-center"
        >
          <span className="mx-5 whitespace-nowrap text-[8px] uppercase tracking-[0.28em] text-[#8d8980] sm:mx-8 sm:text-[10px] sm:tracking-[0.35em]">
            {text}
          </span>

          <span className="shrink-0 text-[9px] text-[#b18a2a] sm:text-[10px]">
            ✦
          </span>
        </div>
      ))}
    </div>

    {/* =====================================================
        SEQUENCE C
        Extra coverage for very wide desktop screens
    ===================================================== */}
    <div className="flex shrink-0 items-center">
      {[...marqueeItems, ...marqueeItems].map((text, index) => (
        <div
          key={`marquee-c-${index}`}
          className="flex shrink-0 items-center"
        >
          <span className="mx-5 whitespace-nowrap text-[8px] uppercase tracking-[0.28em] text-[#8d8980] sm:mx-8 sm:text-[10px] sm:tracking-[0.35em]">
            {text}
          </span>

          <span className="shrink-0 text-[9px] text-[#b18a2a] sm:text-[10px]">
            ✦
          </span>
        </div>
      ))}
    </div>

    {/* =====================================================
        SEQUENCE D
        Ensures no empty viewport on ultra-wide screens
    ===================================================== */}
    <div className="flex shrink-0 items-center">
      {[...marqueeItems, ...marqueeItems].map((text, index) => (
        <div
          key={`marquee-d-${index}`}
          className="flex shrink-0 items-center"
        >
          <span className="mx-5 whitespace-nowrap text-[8px] uppercase tracking-[0.28em] text-[#8d8980] sm:mx-8 sm:text-[10px] sm:tracking-[0.35em]">
            {text}
          </span>

          <span className="shrink-0 text-[9px] text-[#b18a2a] sm:text-[10px]">
            ✦
          </span>
        </div>
      ))}
    </div>
  </motion.div>
</div>
    </section>
  );
}