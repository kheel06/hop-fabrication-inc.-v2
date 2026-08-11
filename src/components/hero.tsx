"use client";

import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useEffect, useState } from "react";

export default function Hero() {
  /* ============================================================
     TYPING / CHANGING HEADLINE
  ============================================================ */

  const words = ["BUSINESS", "BRAND", "CONCEPT", "SPACE"];

  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < currentWord.length) {
      // Typing speed
      timeout = setTimeout(() => {
        setDisplayText(
          currentWord.slice(0, displayText.length + 1)
        );
      }, 110);
    } else if (!isDeleting && displayText.length === currentWord.length) {
      // Pause after completing the word
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayText.length > 0) {
      // Delete speed
      timeout = setTimeout(() => {
        setDisplayText(
          currentWord.slice(0, displayText.length - 1)
        );
      }, 65);
    } else if (isDeleting && displayText.length === 0) {
      // Move to next word
      setIsDeleting(false);

      setWordIndex((previous) =>
        (previous + 1) % words.length
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  /* ============================================================
     MOUSE PARALLAX
  ============================================================ */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glowX = useSpring(mouseX, {
    stiffness: 35,
    damping: 25,
  });

  const glowY = useSpring(mouseY, {
    stiffness: 35,
    damping: 25,
  });

  const gridX = useSpring(mouseX, {
    stiffness: 20,
    damping: 30,
  });

  const gridY = useSpring(mouseY, {
    stiffness: 20,
    damping: 30,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x =
        (event.clientX / window.innerWidth - 0.5) * 2;

      const y =
        (event.clientY / window.innerHeight - 0.5) * 2;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        w-full
        flex-col
        overflow-hidden
        border-b
        border-border
        bg-background
      "
    >
      {/* ============================================================
          BACKGROUND
      ============================================================ */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main gold glow */}

        <motion.div
          style={{
            x: glowX,
            y: glowY,
          }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.18, 0.26, 0.18],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[55vh]
            w-[55vh]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-primary/20
            blur-[120px]
          "
        />

        {/* Secondary glow */}

        <motion.div
          animate={{
            x: ["-8%", "8%", "-8%"],
            y: ["-5%", "5%", "-5%"],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            top-1/4
            h-[35vh]
            w-[35vh]
            rounded-full
            bg-primary/10
            blur-[100px]
          "
        />

        {/* ========================================================
            ARCHITECTURAL GRID
        ======================================================== */}

        <motion.div
          style={{
            x: gridX,
            y: gridY,
          }}
          className="
            absolute
            -inset-[100px]
            opacity-[0.035]
          "
        >
          <div
            className="
              absolute
              inset-0
              bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
              bg-[size:80px_80px]
              text-foreground
            "
          />
        </motion.div>

        {/* ========================================================
            LARGE ARCHITECTURAL FRAME
        ======================================================== */}

        <motion.div
          animate={{
            rotate: [0, 0.4, 0],
            scale: [1, 1.01, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[76vh]
            w-[92vw]
            max-w-[1600px]
            -translate-x-1/2
            -translate-y-1/2
            border
            border-primary/[0.08]
          "
        >
          {/* Inner frame */}

          <div
            className="
              absolute
              inset-8
              border
              border-foreground/[0.035]
            "
          />

          {/* Horizontal center line */}

          <div
            className="
              absolute
              left-0
              top-1/2
              h-px
              w-full
              bg-primary/[0.07]
            "
          />

          {/* Vertical center line */}

          <div
            className="
              absolute
              left-1/2
              top-0
              h-full
              w-px
              bg-primary/[0.07]
            "
          />

          {/* Top-left corner */}

          <div
            className="
              absolute
              -left-1
              -top-1
              h-4
              w-4
              border-l
              border-t
              border-primary/25
            "
          />

          {/* Top-right corner */}

          <div
            className="
              absolute
              -right-1
              -top-1
              h-4
              w-4
              border-r
              border-t
              border-primary/25
            "
          />

          {/* Bottom-left corner */}

          <div
            className="
              absolute
              -bottom-1
              -left-1
              h-4
              w-4
              border-b
              border-l
              border-primary/25
            "
          />

          {/* Bottom-right corner */}

          <div
            className="
              absolute
              -bottom-1
              -right-1
              h-4
              w-4
              border-b
              border-r
              border-primary/25
            "
          />
        </motion.div>

        {/* ========================================================
            MOVING HORIZONTAL LINES
        ======================================================== */}

        <motion.div
          animate={{
            x: ["-10%", "10%", "-10%"],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-0
            top-[36%]
            h-px
            w-[120%]
            bg-primary/[0.12]
          "
        />

        <motion.div
          animate={{
            x: ["10%", "-10%", "10%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-0
            top-[64%]
            h-px
            w-[120%]
            bg-foreground/[0.05]
          "
        />

        {/* Additional guide lines */}

        <div
          className="
            absolute
            left-0
            top-1/4
            h-px
            w-full
            bg-border/30
          "
        />

        <div
          className="
            absolute
            bottom-1/4
            left-0
            h-px
            w-full
            bg-border/30
          "
        />
      </div>

      {/* ============================================================
          MAIN CONTENT
      ============================================================ */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1600px]
          flex-1
          flex-col
          items-center
          justify-center
          px-6
          py-24
          text-center
          sm:px-10
          sm:py-28
          lg:px-16
          lg:py-32
          xl:px-20
        "
      >
        {/* ========================================================
            EYEBROW
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="
            mb-5
            flex
            items-center
            justify-center
            gap-4
            sm:mb-6
            lg:mb-7
          "
        >
          <span
            className="
              h-px
              w-10
              bg-primary
              sm:w-16
              lg:w-20
            "
          />

          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.3em]
              text-muted-foreground
              sm:text-xs
              lg:text-sm
            "
          >
            HOP Fabrications Inc.
          </span>

          <span
            className="
              h-px
              w-10
              bg-primary
              sm:w-16
              lg:w-20
            "
          />
        </motion.div>

        {/* ========================================================
            MAIN HEADING
        ======================================================== */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 60,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            w-full
            max-w-[1250px]
            font-black
            leading-[0.78]
            tracking-[-0.065em]
            text-[clamp(4.5rem,13vh,12rem)]
          "
        >
          {/* BUILT FOR */}

          <span className="block">
            BUILT FOR
          </span>

          {/* YOUR */}

          <span className="block">
            YOUR
          </span>

          {/* ======================================================
              ANIMATED WORD
          ====================================================== */}

          <span
            className="
              relative
              block
              min-h-[0.78em]
              text-foreground/30
            "
          >
            <span className="inline-flex items-baseline">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{
                    opacity: 0,
                    y: 12,
                    filter: "blur(8px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -12,
                    filter: "blur(8px)",
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                >
                  {displayText}
                </motion.span>
              </AnimatePresence>

              {/* Typing cursor */}

              <motion.span
                animate={{
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  ml-2
                  inline-block
                  h-[0.72em]
                  w-[0.035em]
                  translate-y-[0.03em]
                  bg-primary
                "
              />

              {/* Gold dot */}

              <motion.span
                className="text-primary"
                animate={{
                  opacity: [1, 0.6, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                .
              </motion.span>
            </span>

            {/* Light sweep */}

            <motion.span
              initial={{
                x: "-120%",
                opacity: 0,
              }}
              animate={{
                x: "120%",
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 1.5,
                delay: 1.5,
              }}
              className="
                pointer-events-none
                absolute
                inset-y-0
                left-0
                w-1/3
                bg-gradient-to-r
                from-transparent
                via-primary/20
                to-transparent
                blur-xl
              "
            />
          </span>
        </motion.h1>

        {/* ========================================================
            GOLD DIVIDER
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            width: 0,
          }}
          animate={{
            opacity: 1,
            width: 90,
          }}
          transition={{
            duration: 0.7,
            delay: 0.5,
          }}
          className="
            my-6
            h-[3px]
            bg-primary
            sm:my-7
          "
        />

        {/* ========================================================
            DESCRIPTION
        ======================================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.55,
          }}
          className="
            max-w-3xl
            px-4
            text-sm
            leading-6
            text-muted-foreground
            sm:text-base
            sm:leading-7
            lg:text-lg
            lg:leading-8
          "
        >
          Custom food carts and kiosks fabricated around your{" "}
          <span className="font-medium text-foreground">
            brand, concept, space,
          </span>{" "}
          and business requirements.
        </motion.p>

        {/* ========================================================
            BUTTONS
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.65,
          }}
          className="
            mt-8
            flex
            items-center
            justify-center
            gap-3
            sm:mt-9
            sm:gap-4
            lg:mt-10
          "
        >
          {/* View Designs */}

          <a
            href="#designs"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-foreground
              px-6
              py-3
              text-xs
              font-bold
              text-background
              transition-all
              duration-300
              hover:bg-primary
              hover:text-primary-foreground
              sm:px-7
              sm:py-3.5
              sm:text-sm
              lg:px-8
              lg:py-4
              lg:text-base
            "
          >
            View Our Designs

            <ArrowUpRight
              size={17}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
            />
          </a>

          {/* Request Quote */}

          <a
            href="#quote"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-border
              bg-background/70
              px-6
              py-3
              text-xs
              font-bold
              text-foreground
              backdrop-blur-sm
              transition-all
              duration-300
              hover:border-primary
              hover:bg-primary
              hover:text-primary-foreground
              sm:px-7
              sm:py-3.5
              sm:text-sm
              lg:px-8
              lg:py-4
              lg:text-base
            "
          >
            Request a Quote

            <ArrowDownRight
              size={17}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:translate-y-1
              "
            />
          </a>
        </motion.div>
      </div>

      {/* ============================================================
          SCROLL INDICATOR
      ============================================================ */}

      <motion.a
        href="#designs"
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.2,
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          bottom-12
          left-1/2
          z-30
          -translate-x-1/2
          flex
          flex-col
          items-center
          justify-center
          gap-2
          text-[10px]
          font-bold
          uppercase
          tracking-[0.3em]
          text-foreground/70
          transition-colors
          duration-300
          hover:text-primary
          sm:bottom-14
        "
      >
        <span className="whitespace-nowrap">
          Scroll to explore
        </span>

        <motion.div
          animate={{
            y: [0, 5, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown
            size={15}
            strokeWidth={1.6}
          />
        </motion.div>
      </motion.a>

      {/* ============================================================
          RIGHT DECORATIVE DOT
      ============================================================ */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 1,
          duration: 0.5,
        }}
        className="
          absolute
          right-8
          top-1/2
          hidden
          h-2.5
          w-2.5
          rounded-full
          bg-primary
          lg:block
          xl:right-12
        "
      />

      {/* ============================================================
          LEFT DECORATIVE DOT
      ============================================================ */}

      <motion.div
        animate={{
          y: [0, -8, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[10%]
          top-[32%]
          hidden
          h-1.5
          w-1.5
          rounded-full
          bg-primary
          lg:block
        "
      />
    </section>
  );
}
