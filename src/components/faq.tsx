"use client";

import { useState } from "react";
import { ArrowDownRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "Can you customize the design?",
    answer:
      "Yes. Our fabrication services are designed around the unique requirements of each client, including your concept, branding, workflow, available space, and business needs.",
  },
  {
    question: "Do you build food kiosks?",
    answer:
      "Yes. HOP Fabrications works on food cart and kiosk fabrication projects for different commercial and retail environments.",
  },
  {
    question: "Where are you located?",
    answer:
      "HOP Fabrications Inc. is based in Sitio Centro, Brgy. Balanti, Tarlac, Philippines.",
  },
  {
    question: "How can I request a quotation?",
    answer:
      "Use the quote form on this website or contact HOP Fabrications directly through the available contact channels. Tell us about your project and we'll help you determine the next steps.",
  },
];

/* ============================================================
   WORD REVEAL COMPONENT
============================================================ */

function AnimatedWords({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.3,
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.035,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={{
            hidden: {
              opacity: 0,
              y: 12,
              filter: "blur(4px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className="mr-[0.28em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-background text-foreground"
    >
      <div className="mx-auto max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32 xl:px-20">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
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
          >
            {/* Eyebrow */}
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
                duration: 0.5,
              }}
              className="flex items-center gap-3"
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
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-px bg-primary"
              />

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">
                FAQ
              </p>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 35,
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
                duration: 0.85,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 text-5xl font-black leading-[0.9] tracking-[-0.05em] sm:text-6xl lg:text-7xl"
            >
              QUESTIONS
              <motion.span
                animate={{
                  opacity: [1, 0.35, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-primary"
              >
                ?
              </motion.span>
            </motion.h2>
          </motion.div>

          {/* RIGHT DESCRIPTION */}
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base lg:justify-self-end"
          >
            <AnimatedWords
              text="Have questions about our fabrication services? Here are some of the things clients commonly ask before starting a project with HOP Fabrications."
            />
          </motion.p>
        </div>

        {/* =====================================================
            FAQ LIST
        ====================================================== */}

        <div className="mt-16 border-t border-border">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.09,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group border-b border-border"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="relative flex w-full items-center gap-5 py-7 text-left sm:py-9"
                >
                  {/* Number */}

                  <motion.span
                    animate={{
                      x: isOpen ? 4 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="w-8 shrink-0 text-[10px] font-bold tracking-[0.2em] text-muted-foreground transition-colors duration-300 group-hover:text-primary sm:w-12"
                  >
                    0{index + 1}
                  </motion.span>

                  {/* Question */}

                  <motion.span
                    animate={{
                      x: isOpen ? 6 : 0,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`pr-4 text-xl font-bold tracking-tight transition-colors duration-300 sm:text-2xl lg:text-3xl ${
                      isOpen
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {faq.question}
                  </motion.span>

                  {/* Plus button */}

                  <motion.span
                    animate={{
                      rotate: isOpen ? 45 : 0,
                      scale: isOpen ? 1.05 : 1,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-500 sm:h-12 sm:w-12 ${
                      isOpen
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-foreground group-hover:border-primary group-hover:text-primary"
                    }`}
                  >
                    <span className="text-xl font-light leading-none">
                      +
                    </span>
                  </motion.span>

                  {/* Gold hover line */}

                  <motion.span
                    initial={false}
                    animate={{
                      width: isOpen ? "100%" : "0%",
                    }}
                    className="absolute bottom-0 left-0 h-[2px] bg-primary"
                  />

                  {/* Hover line */}

                  {!isOpen && (
                    <span
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[2px]
                        w-0
                        bg-primary
                        transition-all
                        duration-500
                        group-hover:w-12
                      "
                    />
                  )}
                </button>

                {/* =================================================
                    ANSWER
                ================================================== */}

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-[2rem_1fr] gap-5 pb-8 sm:grid-cols-[3rem_1fr]">

                        <div />

                        <motion.p
                          initial={{
                            opacity: 0,
                            y: 12,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 0.45,
                            delay: 0.12,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base"
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM CTA
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
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-md text-xs leading-6 text-muted-foreground">
            <AnimatedWords
              text="Still have a question? Tell us about your project and we'll be happy to discuss your requirements."
            />
          </p>

          <motion.a
            href="#quote"
            whileHover={{
              x: 5,
            }}
            transition={{
              duration: 0.25,
            }}
            className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:text-primary"
          >
            Ask About Your Project

            <motion.span
              whileHover={{
                scale: 1.08,
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
            >
              <ArrowDownRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}

