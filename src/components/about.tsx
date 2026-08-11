"use client";

import { ArrowUpRight, MapPin } from "lucide-react";
import { motion, type Variants } from "motion/react";

/* ============================================================
   WORD REVEAL ANIMATION
============================================================ */

const revealContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

const revealWord: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ============================================================
   ANIMATED TEXT
============================================================ */

function AnimatedText({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  const words = children.split(" ");

  return (
    <motion.p
      variants={revealContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.25,
      }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={revealWord}
          className="mr-[0.28em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}

/* ============================================================
   ABOUT SECTION
============================================================ */

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background text-foreground"
    >
      <div className="mx-auto max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32 xl:px-20">
        {/* =====================================================
            MAIN GRID
        ====================================================== */}

        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          {/* =================================================
              LEFT — TITLE
          ================================================== */}

          <div>
            {/* Eyebrow */}

            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center gap-3"
            >
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                }}
                className="h-px bg-primary"
              />

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">
                About HOP
              </p>
            </motion.div>

            {/* Heading */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 55,
                filter: "blur(8px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.95,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7 max-w-4xl text-5xl font-black leading-[0.88] tracking-[-0.055em] sm:text-7xl lg:text-8xl"
            >
              YOUR VISION.
              <br />

              <motion.span
                initial={{
                  opacity: 0.15,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.55,
                }}
                className="text-foreground/30"
              >
                OUR CRAFT
                <motion.span
                  animate={{
                    opacity: [1, 0.4, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-primary"
                >
                  .
                </motion.span>
              </motion.span>
            </motion.h2>

            {/* Gold accent */}

            <motion.div
              initial={{
                opacity: 0,
                width: 0,
              }}
              whileInView={{
                opacity: 1,
                width: 90,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 h-[2px] bg-primary"
            />
          </div>

          {/* =================================================
              RIGHT — STORY
          ================================================== */}

          <div className="lg:pt-14">
            <AnimatedText
              className="
                text-base
                leading-8
                text-muted-foreground
                sm:text-lg
              "
            >
              HOP Fabrications Inc. is a Philippine-based company dedicated
              to delivering comprehensive business solutions tailored to the
              needs of the food cart industry.
            </AnimatedText>

            <div className="h-7" />

            <AnimatedText
              className="
                text-base
                leading-8
                text-muted-foreground
                sm:text-lg
              "
            >
              We provide innovative fabrication services that align with the
              unique requirements of our clients — turning ideas, concepts,
              and practical needs into functional structures built for
              business.
            </AnimatedText>

            {/* Location Card */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-12 border-t border-border pt-7"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="mb-3 flex items-center gap-2"
                  >
                    <motion.div
                      animate={{
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <MapPin
                        size={15}
                        strokeWidth={1.8}
                        className="text-primary"
                      />
                    </motion.div>

                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      Based in
                    </p>
                  </motion.div>

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.15,
                    }}
                    className="max-w-md text-sm font-medium leading-6 text-foreground"
                  >
                    Sitio Centro, Brgy. Balanti,
                    <br />
                    Tarlac, Philippines 2300
                  </motion.p>
                </div>

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.25,
                  }}
                  whileHover={{
                    scale: 1.08,
                    borderColor: "var(--primary)",
                  }}
                  className="
                    hidden
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-border
                    sm:flex
                  "
                >
                  <MapPin
                    size={17}
                    className="text-primary"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            BRAND STATEMENT
        ====================================================== */}

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
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-24 border-y border-border py-10 lg:mt-32 lg:py-14"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <motion.p
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="max-w-3xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl"
            >
              We build around your{" "}

              <motion.span
                initial={{
                  opacity: 0.2,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                }}
                className="text-foreground/30"
              >
                business,
              </motion.span>{" "}

              not the other way around

              <motion.span
                animate={{
                  opacity: [1, 0.4, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-primary"
              >
                .
              </motion.span>
            </motion.p>

            {/* CTA */}

            <motion.a
              href="#quote"
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.3,
              }}
              whileHover={{
                x: 4,
              }}
              className="
                group
                inline-flex
                shrink-0
                items-center
                gap-3
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-foreground
                transition-colors
                hover:text-primary
              "
            >
              Work With Us

              <span
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-border
                  transition-all
                  duration-300
                  group-hover:border-primary
                  group-hover:bg-primary
                  group-hover:text-primary-foreground
                "
              >
                <ArrowUpRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </span>
            </motion.a>
          </div>
        </motion.div>

        {/* =====================================================
            SMALL BRAND FOOTER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-7 flex items-center justify-between"
        >
          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
            HOP Fabrications Inc.
          </p>

          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
            Built in the Philippines
          </p>
        </motion.div>
      </div>
    </section>
  );
  
}