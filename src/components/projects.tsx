"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    title: "Custom Food Kiosk",
    category: "Commercial Kiosk",
    image: "/images/project-1.png",
    large: true,
  },
  {
    title: "Food Cart",
    category: "Custom Fabrication",
    image: "/images/project-2.png",
  },
  {
    title: "Coffee Cart",
    category: "Food & Beverage",
    image: "/images/project-3.png",
  },
  {
    title: "Custom Business Kiosk",
    category: "Retail",
    image: "/images/project-4.png",
  },
];

export default function Projects() {
  return (
    <section
      id="designs"
      className="bg-[#f5f4ef] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-12">
        {/* ============================================================
            SECTION HEADER
        ============================================================ */}

        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-12 md:flex-row md:items-end">
          {/* LEFT CONTENT */}

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
                amount: 0.5,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-4 flex items-center gap-3"
            >
              <motion.span
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: 40,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-px bg-[#b88a16]"
              />

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/50 sm:text-xs">
                Selected Work
              </p>
            </motion.div>

            {/* ========================================================
                HEADING
            ======================================================== */}

            <h2
              className="
                max-w-3xl
                text-[clamp(2.75rem,6vw,6rem)]
                font-black
                leading-[0.88]
                tracking-[-0.05em]
                text-black
              "
            >
              {/* First line */}

              <motion.span
                initial={{
                  opacity: 0,
                  y: 45,
                  filter: "blur(8px)",
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
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                IDEAS TURNED INTO
              </motion.span>

              <br />

              {/* Second line */}

              <motion.span
                initial={{
                  opacity: 0,
                  y: 45,
                  filter: "blur(8px)",
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
                  duration: 0.8,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block text-black/30"
              >
                REALITY

                <motion.span
                  initial={{
                    opacity: 0,
                    scale: 0.5,
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
                    delay: 0.85,
                    ease: "backOut",
                  }}
                  className="text-[#b88a16]"
                >
                  .
                </motion.span>
              </motion.span>
            </h2>
          </div>

          {/* ========================================================
              DESCRIPTION
          ======================================================== */}

          <motion.p
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
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-sm text-sm leading-6 text-black/55 md:mb-1"
          >
            Explore some of our custom food carts, kiosks, and fabrication
            projects built around each client's brand and space.
          </motion.p>
        </div>

        {/* ============================================================
            PROJECTS GRID
        ============================================================ */}

        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 45,
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
                duration: 0.75,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              {/* ======================================================
                  IMAGE
              ====================================================== */}

              <div
                className="
                  relative
                  aspect-[4/3]
                  overflow-hidden
                  rounded-2xl
                  bg-black/10
                  sm:rounded-3xl
                "
              >
                {/* Image reveal */}

                <motion.div
                  initial={{
                    scale: 1.08,
                  }}
                  whileInView={{
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    loading={
                      project.image === "/images/project-3.png"
                        ? "eager"
                        : "lazy"
                    }
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.04]
                    "
                  />
                </motion.div>

                {/* Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/0
                    transition-colors
                    duration-500
                    group-hover:bg-black/10
                  "
                />

                {/* ==================================================
                    PROJECT NUMBER
                ================================================== */}

                <motion.span
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
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.45 + index * 0.12,
                  }}
                  className="
                    absolute
                    left-5
                    top-5
                    text-[10px]
                    font-bold
                    tracking-[0.2em]
                    text-white
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:opacity-100
                    md:opacity-0
                  "
                >
                  0{index + 1}
                </motion.span>

                {/* ==================================================
                    ARROW
                ================================================== */}

                <div
                  className="
                    absolute
                    bottom-5
                    right-5
                    flex
                    h-11
                    w-11
                    translate-y-2
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    opacity-0
                    shadow-lg
                    transition-all
                    duration-400
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  <ArrowUpRight
                    size={19}
                    strokeWidth={1.8}
                  />
                </div>
              </div>

              {/* ======================================================
                  PROJECT INFORMATION
              ====================================================== */}

              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  {/* Project title */}

                  <motion.h3
                    initial={{
                      opacity: 0,
                      y: 12,
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
                      duration: 0.5,
                      delay: 0.25 + index * 0.12,
                    }}
                    className="
                      text-base
                      font-bold
                      tracking-[-0.02em]
                      text-black
                      sm:text-lg
                    "
                  >
                    {project.title}
                  </motion.h3>

                  {/* Category */}

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 8,
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
                      duration: 0.45,
                      delay: 0.35 + index * 0.12,
                    }}
                    className="
                      mt-1
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-black/40
                      sm:text-xs
                    "
                  >
                    {project.category}
                  </motion.p>
                </div>

                {/* ==================================================
                    GOLD INDICATOR
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
                    delay: 0.55 + index * 0.12,
                    ease: "backOut",
                  }}
                  className="
                    mt-2
                    h-1.5
                    w-1.5
                    shrink-0
                    rounded-full
                    bg-[#b88a16]
                    transition-all
                    duration-300
                    group-hover:scale-125
                    group-hover:opacity-100
                  "
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

