"use client";

import {
  Box,
  Building2,
  Lightbulb,
  Settings2,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    number: "01",
    title: "Custom Food Carts",
    description:
      "Food carts designed and fabricated around your products, workflow, branding, and available space.",
    icon: Box,
  },
  {
    number: "02",
    title: "Food Kiosks",
    description:
      "Modern kiosk solutions designed for commercial and retail environments.",
    icon: Building2,
  },
  {
    number: "03",
    title: "Custom Fabrication",
    description:
      "Turn your concept, reference, or requirements into a functional fabricated structure.",
    icon: Settings2,
  },
  {
    number: "04",
    title: "Business Solutions",
    description:
      "Fabrication solutions tailored to the unique requirements of food-cart businesses.",
    icon: Lightbulb,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-background text-foreground"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="mb-10 grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
          <div>
            {/* ==================================================
                EYEBROW
            ================================================== */}

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
                amount: 0.4,
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
                className="h-px bg-primary"
              />

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">
                What We Do
              </p>
            </motion.div>

            {/* ==================================================
                MAIN HEADING
            ================================================== */}

            <h2
              className="
                max-w-4xl
                overflow-hidden
                text-[clamp(2.8rem,6vw,6.5rem)]
                font-black
                leading-[0.88]
                tracking-[-0.055em]
              "
            >
              {/* Line 1 */}

              <motion.span
                initial={{
                  opacity: 0,
                  y: "100%",
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
                  duration: 0.85,
                  delay: 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block"
              >
                FABRICATION
              </motion.span>

              {/* Line 2 */}

              <motion.span
                initial={{
                  opacity: 0,
                  y: "100%",
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
                  duration: 0.85,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block"
              >
                BUILT AROUND
              </motion.span>

              {/* Line 3 */}

              <motion.span
                initial={{
                  opacity: 0,
                  y: "100%",
                  filter: "blur(8px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block text-foreground/30"
              >
                YOUR BUSINESS
                <motion.span
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: 0.9,
                    ease: "backOut",
                  }}
                  className="text-primary"
                >
                  .
                </motion.span>
              </motion.span>
            </h2>
          </div>

          {/* ==================================================
              DESCRIPTION
          ================================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
              filter: "blur(5px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-sm
              text-[13px]
              leading-6
              text-muted-foreground
              sm:text-sm
              lg:pb-1
            "
          >
            From the first idea to the finished structure, we create
            practical fabrication solutions designed around how your
            business operates.
          </motion.p>
        </div>

        {/* =====================================================
            SERVICES GRID
        ====================================================== */}

        <div className="grid border-l border-border md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  relative
                  min-h-[290px]
                  overflow-hidden
                  border-b
                  border-r
                  border-t
                  border-border
                  p-6
                  transition-colors
                  duration-500
                  hover:bg-foreground

                  sm:min-h-[310px]
                  sm:p-8

                  lg:min-h-[330px]
                  lg:p-10
                "
              >
                {/* ==================================================
                    GOLD HOVER GLOW
                ================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-primary/10
                    opacity-0
                    blur-3xl
                    transition-opacity
                    duration-700
                    group-hover:opacity-100
                  "
                />

                {/* ==================================================
                    GOLD TOP LINE
                ================================================== */}

                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: 24,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.35 + index * 0.1,
                  }}
                  className="
                    absolute
                    left-0
                    top-0
                    h-[2px]
                    bg-primary
                    transition-all
                    duration-700
                    group-hover:w-16
                  "
                />

                {/* ==================================================
                    TOP ROW
                ================================================== */}

                <div className="relative flex items-start justify-between">
                  {/* Number */}

                  <motion.span
                    initial={{
                      opacity: 0,
                      x: -15,
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
                      delay: 0.25 + index * 0.1,
                    }}
                    className="
                      text-[10px]
                      font-bold
                      tracking-[0.2em]
                      text-muted-foreground
                      transition-colors
                      duration-500
                      group-hover:text-white/40
                    "
                  >
                    {service.number}
                  </motion.span>

                  {/* Icon */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                      rotate: -8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.35 + index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
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
                      duration-500
                      group-hover:border-primary
                      group-hover:bg-primary

                      sm:h-11
                      sm:w-11
                    "
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className="
                        transition-colors
                        duration-500
                        group-hover:text-primary-foreground
                      "
                    />
                  </motion.div>
                </div>

                {/* ==================================================
                    CONTENT
                ================================================== */}

                <div className="relative mt-14 sm:mt-16">
                  {/* Service title */}

                  <motion.h3
                    initial={{
                      opacity: 0,
                      y: 20,
                      filter: "blur(5px)",
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
                      duration: 0.6,
                      delay: 0.35 + index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      max-w-sm
                      text-xl
                      font-bold
                      tracking-tight
                      transition-colors
                      duration-500
                      group-hover:text-white
                      sm:text-2xl
                    "
                  >
                    {service.title}
                  </motion.h3>

                  {/* Description */}

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
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.48 + index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      mt-3
                      max-w-md
                      text-[13px]
                      leading-6
                      text-muted-foreground
                      transition-colors
                      duration-500
                      group-hover:text-white/50
                      sm:text-sm
                    "
                  >
                    {service.description}
                  </motion.p>
                </div>

                {/* ==================================================
                    BOTTOM ROW
                ================================================== */}

                <div
                  className="
                    absolute
                    bottom-6
                    left-6
                    right-6
                    flex
                    items-end
                    justify-between

                    sm:bottom-8
                    sm:left-8
                    sm:right-8

                    lg:bottom-9
                    lg:left-10
                    lg:right-10
                  "
                >
                  {/* Brand */}

                  <motion.span
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
                      duration: 0.5,
                      delay: 0.6 + index * 0.1,
                    }}
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-muted-foreground/40
                      transition-colors
                      duration-500
                      group-hover:text-primary
                    "
                  >
                    HOP Fabrications
                  </motion.span>

                  {/* Arrow */}

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      translate-y-1
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-border
                      opacity-0
                      transition-all
                      duration-500
                      group-hover:translate-y-0
                      group-hover:border-primary
                      group-hover:opacity-100
                    "
                  >
                    <ArrowUpRight
                      size={16}
                      className="text-primary"
                    />
                  </div>
                </div>

                {/* ==================================================
                    BOTTOM PROGRESS LINE
                ================================================== */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0
                    bg-primary
                    transition-all
                    duration-700
                    group-hover:w-full
                  "
                />
              </motion.article>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-9
            flex
            flex-col
            justify-between
            gap-5
            border-t
            border-border
            pt-6
            sm:flex-row
            sm:items-center
          "
        >
          <motion.p
            initial={{
              opacity: 0,
              x: -15,
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
              delay: 0.25,
            }}
            className="
              max-w-xl
              text-[13px]
              leading-6
              text-muted-foreground
              sm:text-sm
            "
          >
            Every project starts with understanding your business,
            your space, and what you need the finished fabrication to
            accomplish.
          </motion.p>

          <motion.a
            href="#quote"
            initial={{
              opacity: 0,
              x: 15,
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
              delay: 0.35,
            }}
            className="
              group
              inline-flex
              shrink-0
              items-center
              gap-3
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              transition-colors
              hover:text-primary
              sm:text-xs
            "
          >
            Start a Conversation

            <ArrowUpRight
              size={15}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

