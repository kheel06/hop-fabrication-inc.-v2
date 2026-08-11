"use client";

import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { motion } from "motion/react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Designs", href: "#designs" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "FAQ", href: "#faq" },
];

const smoothEase = [0.22, 1, 0.36, 1] as const;

const textReveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-foreground text-white">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Gold glow */}
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/[0.07] blur-3xl" />

        {/* Top structural line */}
        <div className="absolute left-0 top-0 h-px w-full bg-white/10" />

        {/* Center structural line */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px bg-white/[0.04] lg:block" />

        {/* Horizontal structural line */}
        <div className="absolute left-0 top-1/2 hidden h-px w-full bg-white/[0.03] lg:block" />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-20 sm:px-10 lg:px-16 lg:py-24 xl:px-20">
        {/* =====================================================
            TOP BRAND STATEMENT
        ====================================================== */}
        <div className="grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          {/* =================================================
              BRAND
          ================================================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              staggerChildren: 0.12,
            }}
          >
            {/* Small label */}
            <motion.div
              variants={textReveal}
              transition={{
                duration: 0.7,
                ease: smoothEase,
              }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-10 bg-primary" />

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
                HOP Fabrications Inc.
              </p>
            </motion.div>

            {/* Large statement */}
            <motion.h2
              variants={textReveal}
              transition={{
                duration: 0.9,
                ease: smoothEase,
              }}
              className="mt-7 max-w-4xl text-4xl font-black leading-[0.9] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl"
            >
              BUILT AROUND
              <br />

              <span className="text-white/25">
                YOUR BUSINESS
                <span className="text-primary">.</span>
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={textReveal}
              transition={{
                duration: 0.7,
                ease: smoothEase,
              }}
              className="mt-7 max-w-lg text-sm leading-7 text-white/40"
            >
              Custom food carts, kiosks, and fabrication solutions
              designed and built around your business.
            </motion.p>
          </motion.div>

          {/* =================================================
              CTA
          ================================================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              staggerChildren: 0.12,
              delayChildren: 0.15,
            }}
            className="flex flex-col justify-end lg:items-end"
          >
            <motion.p
              variants={textReveal}
              transition={{
                duration: 0.7,
                ease: smoothEase,
              }}
              className="max-w-sm text-sm leading-6 text-white/40 lg:text-right"
            >
              Have a concept in mind? Let&apos;s turn your idea into
              something built for your space and your business.
            </motion.p>

            <motion.a
              variants={textReveal}
              transition={{
                duration: 0.7,
                ease: smoothEase,
              }}
              href="#quote"
              className="group mt-6 inline-flex w-fit items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,0,0,0.25)]"
            >
              Start Your Project

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10">
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* =====================================================
            MAIN FOOTER GRID
        ====================================================== */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          {/* =================================================
    CONTACT
================================================= */}
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{
    once: true,
    amount: 0.15,
  }}
  transition={{
    staggerChildren: 0.1,
  }}
>
  <motion.p
    variants={textReveal}
    transition={{
      duration: 0.6,
      ease: smoothEase,
    }}
    className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30"
  >
    Contact
  </motion.p>

  <motion.div
    variants={textReveal}
    transition={{
      duration: 0.7,
      ease: smoothEase,
    }}
    className="mt-6 space-y-5"
  >
    {/* EMAIL */}
    <a
      href="mailto:hopfabricationsinc24@gmail.com"
      className="group flex items-start gap-4"
    >
      {/* Icon */}
      <span
        className="
          mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center
          rounded-full border border-white/10
          text-white/50
          transition-all duration-300 ease-out
          group-hover:border-primary
          group-hover:bg-primary/10
          group-hover:text-primary
          group-hover:scale-105
        "
      >
        <Mail
          size={17}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </span>

      {/* Text */}
      <span
        className="
          pt-2 text-sm text-white/60
          transition-all duration-300 ease-out
          group-hover:text-primary
          group-hover:translate-x-1
        "
      >
        hopfabricationsinc24@gmail.com
      </span>
    </a>

    {/* LOCATION */}
    <div className="group flex items-start gap-4 cursor-default">
      {/* Icon */}
      <span
  className="
    mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center
    rounded-full border border-white/10
    text-white/50
    transition-all duration-300 ease-out
    group-hover:border-primary
    group-hover:bg-primary/10
    group-hover:text-primary
    group-hover:scale-105
  "
>
  <MapPin
    size={17}
    className="transition-transform duration-300 group-hover:scale-110"
  />
</span>

      {/* Address */}
      <span
        className="
          pt-2 text-sm leading-6 text-white/60
          transition-all duration-300 ease-out
          group-hover:text-primary
          group-hover:translate-x-1
        "
      >
        Sitio Centro, Brgy. Balanti,
        <br />
        Tarlac, Philippines 2300
      </span>
    </div>
  </motion.div>
</motion.div>

          {/* =================================================
              NAVIGATE
          ================================================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              staggerChildren: 0.08,
            }}
          >
            <motion.p
              variants={textReveal}
              transition={{
                duration: 0.6,
                ease: smoothEase,
              }}
              className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30"
            >
              Navigate
            </motion.p>

            <nav className="mt-6 flex flex-col gap-3">
              {navigation.map((item, index) => (
                <motion.a
                  key={item.name}
                  variants={textReveal}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.03,
                    ease: smoothEase,
                  }}
                  href={item.href}
                  className="group flex w-fit items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
                >
                  <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />

                  {item.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* =================================================
              SERVICES
          ================================================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              staggerChildren: 0.08,
            }}
          >
            <motion.p
              variants={textReveal}
              transition={{
                duration: 0.6,
                ease: smoothEase,
              }}
              className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30"
            >
              Services
            </motion.p>

            <div className="mt-6 flex flex-col gap-3 text-sm text-white/55">
              {[
                "Custom Food Carts",
                "Food Kiosks",
                "Custom Fabrication",
                "Business Solutions",
              ].map((service) => (
                <motion.span
                  key={service}
                  variants={textReveal}
                  transition={{
                    duration: 0.5,
                    ease: smoothEase,
                  }}
                  className="block"
                >
                  {service}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            COPYRIGHT
        ====================================================== */}
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
            ease: smoothEase,
          }}
          className="mt-4 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-[9px] font-bold uppercase tracking-[0.2em] text-white/25 sm:flex-row"
        >
          <p>© 2026 HOP Fabrications Inc. All rights reserved.</p>

          <p>Philippines</p>
        </motion.div>
      </div>
    </footer>
  );
}