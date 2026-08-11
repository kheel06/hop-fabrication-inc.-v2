"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 13000,
    display: "13K+",
    label: "Facebook Followers",
    type: "number",
  },
  {
    value: 0,
    display: "PH",
    label: "Philippine Based",
    type: "text",
  },
  {
    value: 100,
    display: "100%",
    label: "Custom Solutions",
    type: "number",
  },
  {
    value: 0,
    display: "HOP",
    label: "Fabrications Inc.",
    type: "text",
  },
];

function CountUp({
  value,
  display,
  type,
}: {
  value: number;
  display: string;
  type: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.7,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || type === "text") return;

    const duration = 1600;
    const startTime = performance.now();

    let animationFrame: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out
      const eased =
        1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(value * eased));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isInView, value, type]);

  if (type === "text") {
    return <span ref={ref}>{display}</span>;
  }

  if (display === "13K+") {
    return (
      <span ref={ref}>
        {count >= 1000
          ? `${Math.floor(count / 1000)}K+`
          : count}
      </span>
    );
  }

  if (display === "100%") {
    return (
      <span ref={ref}>
        {count}%
      </span>
    );
  }

  return <span ref={ref}>{count}</span>;
}

export default function Stats() {
  return (
    <section className="border-y border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
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
                amount: 0.3,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                group
                relative
                flex
                min-h-[145px]
                flex-col
                justify-center
                border-b
                border-border
                px-5
                py-7
                transition-colors
                duration-500

                first:border-r
                even:border-r-0

                md:min-h-[165px]
                md:border-b-0
                md:border-r
                md:px-8
                md:py-8

                md:last:border-r-0
              "
            >
              {/* ==================================================
                  GOLD TOP INDICATOR
              ================================================== */}

              <motion.div
                initial={{
                  width: 0,
                  opacity: 0,
                }}
                whileInView={{
                  width: 48,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  left-5
                  top-0
                  h-[2px]
                  bg-primary
                  md:left-8
                "
              />

              {/* ==================================================
                  MAIN VALUE
              ================================================== */}

              <div className="flex items-start justify-between gap-4">
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 20,
                    filter: "blur(6px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  viewport={{
                    once: true,
                    amount: 0.5,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2 + index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    text-3xl
                    font-black
                    leading-none
                    tracking-[-0.05em]
                    text-foreground
                    sm:text-4xl
                    lg:text-5xl
                  "
                >
                  <CountUp
                    value={stat.value}
                    display={stat.display}
                    type={stat.type}
                  />
                </motion.p>

                {/* ==================================================
                    GOLD DOT
                ================================================== */}

                <motion.span
                  initial={{
                    scale: 0,
                    opacity: 0,
                  }}
                  whileInView={{
                    scale: 1,
                    opacity: 0.6,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.5,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.65 + index * 0.12,
                    ease: "backOut",
                  }}
                  className="
                    mt-1
                    h-1.5
                    w-1.5
                    shrink-0
                    rounded-full
                    bg-primary
                    transition-all
                    duration-300
                    group-hover:scale-125
                    group-hover:opacity-100
                  "
                />
              </div>

              {/* ==================================================
                  LABEL
              ================================================== */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 10,
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
                  duration: 0.55,
                  delay: 0.5 + index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  mt-3
                  max-w-[170px]
                  text-[9px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.18em]
                  text-muted-foreground
                  sm:text-[10px]
                  sm:leading-5
                "
              >
                {stat.label}
              </motion.p>

              {/* ==================================================
                  BOTTOM HOVER LINE
              ================================================== */}

              <div
                className="
                  absolute
                  bottom-0
                  left-5
                  h-px
                  w-0
                  bg-primary
                  transition-all
                  duration-700
                  group-hover:w-[calc(100%-2.5rem)]
                  md:left-8
                  md:group-hover:w-[calc(100%-4rem)]
                "
              />

              {/* ==================================================
                  HOVER GLOW
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                  bg-[radial-gradient(circle_at_20%_50%,hsl(var(--primary)/0.06),transparent_45%)]
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

