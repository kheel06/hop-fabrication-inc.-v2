"use client";

import Image from "next/image";
import { motion } from "motion/react";

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
      staggerChildren: 0.07,
    },
  },
};

const gridItem = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
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
  return (
    <section
      id="clients"
      className="relative overflow-hidden border-t border-black/10 bg-[#f5f2ea] px-6 py-24 md:px-10 md:py-32 lg:px-16"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="mb-16 grid gap-10 md:mb-20 md:grid-cols-[1.2fr_0.8fr] md:items-end lg:mb-24">
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
              className="mb-6 flex items-center gap-4"
            >
              <span className="h-px w-10 bg-[#b18a2a]" />

              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#b18a2a]">
                Selected Clients
              </p>

              <span className="ml-1 text-[10px] tracking-[0.2em] text-[#8d8980]">
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
                className="font-serif text-6xl leading-[0.82] tracking-[-0.055em] text-[#171717] md:text-7xl lg:text-[7.5rem]"
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
            <p className="text-sm leading-7 text-[#66635d] md:text-base">
              From coffee shops and food concepts to growing local
              businesses, HOP Fabrications transforms ideas into physical
              spaces, carts, kiosks, and custom builds made for real business.
            </p>

            <div className="mt-7 flex items-center gap-4">
              <div className="h-px w-16 bg-black/20" />

              <span className="text-[10px] uppercase tracking-[0.25em] text-[#77736b]">
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
            amount: 0.12,
          }}
          className="grid grid-cols-2 border-l border-t border-black/10 sm:grid-cols-3 lg:grid-cols-4"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              variants={gridItem}
              className="group relative flex aspect-[1.45/1] items-center justify-center overflow-hidden border-b border-r border-black/10 bg-[#faf8f3] p-5 transition-colors duration-500 hover:bg-white sm:aspect-[1.7/1] sm:p-8 md:p-10"
            >
              {/* Client Number */}
              <span className="absolute left-3 top-3 text-[8px] tracking-[0.2em] text-black/20 transition-colors duration-500 group-hover:text-[#b18a2a] sm:left-4 sm:top-4 sm:text-[9px]">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 h-7 w-7 origin-bottom-right scale-0 bg-[#b18a2a]/10 transition-transform duration-500 group-hover:scale-100 sm:h-8 sm:w-8" />

              {/* Logo */}
              <motion.div
                whileHover={{
                  scale: 1.07,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative h-20 w-full max-w-[145px] sm:h-24 sm:max-w-[180px]"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  sizes="(max-width: 640px) 145px, 180px"
                  className="
                    object-contain
                    grayscale-0
                    opacity-100
                    transition-all
                    duration-500
                    md:grayscale
                    md:opacity-50
                    md:group-hover:grayscale-0
                    md:group-hover:opacity-100
                  "
                />
              </motion.div>

              {/* Client Name */}
              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-3
                  left-3
                  right-3
                  translate-y-2
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:translate-y-0
                  group-hover:opacity-100
                  sm:left-4
                  sm:right-4
                "
              >
                <p className="truncate text-[8px] font-medium uppercase tracking-[0.12em] text-[#77736b] sm:text-[9px] sm:tracking-[0.15em]">
                  {client.name}
                </p>
              </div>
            </motion.div>
          ))}
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
          className="mt-8 border-t border-black/10 pt-6 sm:mt-10"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <p className="text-[10px] uppercase tracking-[0.16em] text-[#77736b] sm:text-xs sm:tracking-[0.18em]">
              Trusted by businesses built to grow.
            </p>

            <div className="group flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.16em] text-[#b18a2a] sm:text-xs sm:tracking-[0.18em]">
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
                className="text-[#b18a2a]"
              >
                →
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =========================================================
          SEAMLESS INFINITE MARQUEE
      ========================================================= */}

      <div
        className="mt-16 w-full overflow-hidden border-y border-black/10 py-4 sm:mt-20"
        aria-label="HOP Fabrications services"
      >
        <motion.div
          className="flex w-max"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 22,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {/* FIRST COPY */}
          <div className="flex shrink-0 items-center">
            {marqueeItems.map((text, index) => (
              <div
                key={`marquee-first-${index}`}
                className="flex shrink-0 items-center"
              >
                <span className="mx-6 whitespace-nowrap text-[9px] uppercase tracking-[0.3em] text-[#8d8980] sm:mx-8 sm:text-[10px] sm:tracking-[0.35em]">
                  {text}
                </span>

                <span className="shrink-0 text-[10px] text-[#b18a2a]">
                  ✦
                </span>
              </div>
            ))}
          </div>

          {/* SECOND IDENTICAL COPY */}
          <div className="flex shrink-0 items-center">
            {marqueeItems.map((text, index) => (
              <div
                key={`marquee-second-${index}`}
                className="flex shrink-0 items-center"
              >
                <span className="mx-6 whitespace-nowrap text-[9px] uppercase tracking-[0.3em] text-[#8d8980] sm:mx-8 sm:text-[10px] sm:tracking-[0.35em]">
                  {text}
                </span>

                <span className="shrink-0 text-[10px] text-[#b18a2a]">
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