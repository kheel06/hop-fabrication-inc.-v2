"use client";

import {
  MessageSquareText,
  PencilRuler,
  Hammer,
  ShieldCheck,
  Truck,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "motion/react";

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We start by understanding your business, products, space, budget, and the type of cart or kiosk you need.",
    icon: MessageSquareText,
  },
  {
    number: "02",
    title: "Design & Planning",
    description:
      "Your requirements are translated into a practical design with the right layout, dimensions, materials, and functionality.",
    icon: PencilRuler,
  },
  {
    number: "03",
    title: "Fabrication",
    description:
      "Once the design is approved, our team begins fabrication using carefully selected materials and construction methods.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Finishing & Quality Check",
    description:
      "We complete the finishing details, inspect the structure, and make sure everything is ready for actual business use.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Delivery & Installation",
    description:
      "Your finished cart or kiosk is prepared for delivery and installation, ready to become part of your business.",
    icon: Truck,
  },
];

const headingWords = ["FROM", "IDEA", "TO", "REALITY."];

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 45,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-background text-foreground"
    >
      <div className="mx-auto max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32 xl:px-20">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-5 flex items-center gap-3"
            >
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-px bg-primary"
              />

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">
                How It Works
              </p>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                staggerChildren: 0.1,
                delayChildren: 0.1,
              }}
              className="
                max-w-4xl
                text-5xl
                font-black
                leading-[0.9]
                tracking-[-0.055em]
                sm:text-6xl
                lg:text-8xl
              "
            >
              <span className="block overflow-hidden">
                <motion.span
                  variants={wordVariants}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                >
                  FROM
                </motion.span>
              </span>

              <span className="block overflow-hidden">
                <motion.span
                  variants={wordVariants}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                >
                  IDEA
                </motion.span>
              </span>

              <span className="block overflow-hidden">
                <motion.span
                  variants={wordVariants}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 1, 1],
                  }}
                  className="inline-block"
                >
                  TO
                </motion.span>
              </span>

              <span className="block overflow-hidden">
                <motion.span
                  variants={wordVariants}
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block text-foreground/30"
                >
                  REALITY
                  <span className="text-primary">.</span>
                </motion.span>
              </span>
            </motion.h2>
          </div>

          {/* Description */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
              filter: "blur(6px)",
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
              duration: 0.8,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-md lg:pb-2"
          >
            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              Every project follows a clear process — from understanding your
              idea to fabricating and delivering a finished solution built
              around your business.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            PROCESS STEPS
        ====================================================== */}

        <div className="relative">

          {/* Connecting line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              transformOrigin: "top",
            }}
            className="
              absolute
              left-5
              top-0
              hidden
              h-full
              w-px
              bg-border
              lg:left-1/2
              lg:block
            "
          />

          <div className="space-y-0">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.article
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    group
                    relative
                    border-t
                    border-border
                    py-10
                    lg:py-14
                  "
                >
                  <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">

                    {/* =================================================
                        TEXT CONTENT
                    ================================================== */}

                    <div
                      className={`flex items-start gap-6 ${
                        isEven
                          ? "lg:justify-end lg:text-right"
                          : "lg:order-2 lg:text-left"
                      }`}
                    >
                      <div
                        className={`max-w-xl ${
                          isEven ? "lg:order-1" : ""
                        }`}
                      >

                        {/* Step number */}
                        <motion.div
                          initial={{
                            opacity: 0,
                            x: isEven ? 20 : -20,
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
                            delay: 0.1,
                          }}
                          className={`mb-4 flex items-center gap-3 ${
                            isEven ? "lg:justify-end" : ""
                          }`}
                        >
                          <span className="text-[10px] font-bold tracking-[0.25em] text-primary">
                            STEP {step.number}
                          </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h3
                          initial={{
                            opacity: 0,
                            y: 25,
                            filter: "blur(6px)",
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
                            duration: 0.7,
                            delay: 0.15,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="
                            text-2xl
                            font-bold
                            tracking-tight
                            sm:text-3xl
                            lg:text-4xl
                          "
                        >
                          {step.title}
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
                            delay: 0.28,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="
                            mt-4
                            text-sm
                            leading-7
                            text-muted-foreground
                            sm:text-base
                          "
                        >
                          {step.description}
                        </motion.p>
                      </div>
                    </div>

                    {/* =================================================
                        ICON / VISUAL
                    ================================================== */}

                    <div
                      className={`flex items-center ${
                        isEven
                          ? "lg:order-2 lg:justify-start"
                          : "lg:order-1 lg:justify-end"
                      }`}
                    >
                      <motion.div
                        initial={{
                          opacity: 0,
                          scale: 0.7,
                          rotate: -10,
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
                          duration: 0.7,
                          delay: 0.12,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative"
                      >
                        {/* Outer pulse */}
                        <motion.div
                          initial={{
                            opacity: 0,
                            scale: 0.7,
                          }}
                          whileInView={{
                            opacity: [0, 0.25, 0],
                            scale: [0.7, 1.35, 1.35],
                          }}
                          viewport={{
                            once: true,
                            amount: 0.3,
                          }}
                          transition={{
                            duration: 1.2,
                            delay: 0.25,
                            ease: "easeOut",
                          }}
                          className="
                            pointer-events-none
                            absolute
                            inset-0
                            rounded-full
                            border
                            border-primary
                          "
                        />

                        {/* Icon circle */}
                        <div
                          className="
                            relative
                            flex
                            h-20
                            w-20
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-border
                            bg-background
                            transition-all
                            duration-500
                            group-hover:border-primary
                            group-hover:bg-primary
                            sm:h-24
                            sm:w-24
                          "
                        >
                          <Icon
                            size={30}
                            strokeWidth={1.5}
                            className="
                              transition-all
                              duration-500
                              group-hover:scale-110
                              group-hover:text-primary-foreground
                            "
                          />
                        </div>

                        {/* Step number badge */}
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
                            amount: 0.3,
                          }}
                          transition={{
                            duration: 0.45,
                            delay: 0.4,
                            type: "spring",
                            stiffness: 300,
                            damping: 18,
                          }}
                          className="
                            absolute
                            -right-2
                            -top-2
                            flex
                            h-7
                            w-7
                            items-center
                            justify-center
                            rounded-full
                            bg-foreground
                            text-[9px]
                            font-bold
                            text-background
                          "
                        >
                          {step.number}
                        </motion.span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Progress line */}
                  <div className="mt-8 h-px w-full overflow-hidden bg-border">
                    <motion.div
                      initial={{
                        width: "0%",
                      }}
                      whileInView={{
                        width: "100%",
                      }}
                      viewport={{
                        once: true,
                        amount: 0.3,
                      }}
                      transition={{
                        duration: 1,
                        delay: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="h-px bg-primary"
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-12
            flex
            flex-col
            items-start
            justify-between
            gap-6
            border-t
            border-border
            pt-8
            sm:flex-row
            sm:items-center
          "
        >
          <div>
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
                duration: 0.5,
                delay: 0.15,
              }}
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-muted-foreground
              "
            >
              Ready to get started?
            </motion.p>

            <motion.p
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
              }}
              transition={{
                duration: 0.6,
                delay: 0.25,
              }}
              className="mt-2 text-lg font-bold"
            >
              Tell us what you want to build.
            </motion.p>
          </div>

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
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-foreground
              px-6
              py-4
              text-sm
              font-bold
              text-background
              transition-colors
              duration-300
              hover:bg-primary
              hover:text-primary-foreground
            "
          >
            Start Your Project

            <ArrowUpRight
              size={17}
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

