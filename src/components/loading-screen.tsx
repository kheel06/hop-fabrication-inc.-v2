"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className={`fixed inset-0 z-[99999] overflow-hidden ${
        open ? "pointer-events-none" : "pointer-events-auto"
      }`}
      animate={{
        opacity: open ? 0 : 1,
      }}
      transition={{
        opacity: {
          duration: 0.2,
          delay: 1.2,
          ease: "linear",
        },
      }}
    >
      {/* ============================================================
          LEFT CURTAIN
      ============================================================ */}
      <motion.div
        className="absolute inset-y-0 left-0 w-1/2 bg-[#171717]"
        initial={{ x: "0%" }}
        animate={{
          x: open ? "-100%" : "0%",
        }}
        transition={{
          duration: 1.2,
          ease: [0.76, 0, 0.24, 1],
        }}
      />

      {/* ============================================================
          RIGHT CURTAIN
      ============================================================ */}
      <motion.div
        className="absolute inset-y-0 right-0 w-1/2 bg-[#171717]"
        initial={{ x: "0%" }}
        animate={{
          x: open ? "100%" : "0%",
        }}
        transition={{
          duration: 1.2,
          ease: [0.76, 0, 0.24, 1],
        }}
      />

      {/* ============================================================
          CENTER SLICING LINE
      ============================================================ */}
      <motion.div
        className="absolute left-1/2 top-1/2 z-20 h-screen w-[1px] -translate-x-1/2 -translate-y-1/2 bg-white"
        initial={{
          scaleY: 0,
          opacity: 1,
        }}
        animate={{
          scaleY: 1,
          opacity: open ? 0 : 1,
        }}
        transition={{
          /* Slicing animation stays the same */
          scaleY: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
          },

          /* Fade immediately when curtains start opening */
          opacity: {
            duration: 0.15,
            delay: 0,
            ease: "easeOut",
          },
        }}
      />
    </motion.div>
  );
}

