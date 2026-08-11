"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function Quote() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  // Reusable text animation
  const textReveal = {
    initial: {
      opacity: 0,
      y: 25,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      amount: 0.25,
    },
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  };

  return (
    <section
      id="quote"
      className="relative overflow-hidden bg-foreground text-background"
    >
      {/* =====================================================
          BACKGROUND DETAILS
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gold glow */}
        <div className="absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/[0.08] blur-3xl" />

        {/* Grid lines */}
        <div className="absolute left-0 top-1/3 h-px w-full bg-white/[0.06]" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.04]" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32 xl:px-20">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">

          {/* =================================================
              LEFT SIDE
          ================================================== */}
          <div>
            {/* Eyebrow */}
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
              className="flex items-center gap-3"
            >
              <span className="h-px w-10 bg-primary" />

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
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 sm:text-xs"
              >
                Start Your Project
              </motion.p>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 55,
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
                duration: 0.9,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 text-5xl font-black leading-[0.87] tracking-[-0.055em] sm:text-6xl lg:text-8xl"
            >
              <motion.span
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                LET&apos;S BUILD
              </motion.span>

              <br />

              <motion.span
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                SOMETHING
              </motion.span>

              <br />

              <motion.span
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block text-white/25"
              >
                GREAT
                <span className="text-primary">.</span>
              </motion.span>
            </motion.h2>

            {/* Description */}
            <motion.p
              {...textReveal}
              transition={{
                duration: 0.7,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 max-w-md text-sm leading-7 text-white/50 sm:text-base"
            >
              Tell us about your business and what you have in mind.
              We&apos;ll help you turn your concept into a custom
              fabrication built around your needs.
            </motion.p>

            {/* Gold divider */}
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
              }}
              transition={{
                duration: 0.8,
                delay: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 h-[2px] bg-primary"
            />

            {/* Contact information */}
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
              }}
              transition={{
                duration: 0.7,
                delay: 0.65,
              }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-8"
            >
              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.7,
                }}
                className="flex items-center gap-3"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10">
                  <Phone
                    size={14}
                    className="text-primary"
                  />
                </div>

                <span className="text-xs text-white/50">
                  Get in touch
                </span>
              </motion.div>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.8,
                }}
                className="flex items-center gap-3"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10">
                  <Mail
                    size={14}
                    className="text-primary"
                  />
                </div>

                <span className="text-xs text-white/50">
                  Request a quote
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* =================================================
              FORM
          ================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.98,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* Gold offset frame */}
            <div className="absolute -right-2 -top-2 h-full w-full rounded-[1.7rem] border border-primary/30 sm:-right-3 sm:-top-3" />

            <div className="relative rounded-[1.5rem] bg-background p-6 text-foreground shadow-2xl sm:p-8 lg:p-10">

              {submitted ? (
                /* =================================================
                    SUCCESS STATE
                ================================================== */
                <div className="flex min-h-[520px] items-center justify-center text-center">
                  <div>
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.7,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                      className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground"
                    >
                      <Check
                        size={28}
                        strokeWidth={2.5}
                      />
                    </motion.div>

                    <motion.h3
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: 0.15,
                      }}
                      className="mt-7 text-3xl font-black tracking-tight"
                    >
                      THANK YOU<span className="text-primary">.</span>
                    </motion.h3>

                    <motion.p
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: 0.25,
                      }}
                      className="mx-auto mt-4 max-w-sm text-sm leading-6 text-muted-foreground"
                    >
                      Your project request has been submitted
                      successfully. We&apos;ll review the details and
                      get back to you as soon as possible.
                    </motion.p>

                    <motion.button
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: 0.35,
                      }}
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-foreground transition-colors hover:text-primary"
                    >
                      Submit another request
                    </motion.button>
                  </div>
                </div>
              ) : (
                <>
                  {/* Form header */}
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
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2,
                    }}
                    className="mb-8"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <motion.span
                        initial={{
                          width: 0,
                          opacity: 0,
                        }}
                        whileInView={{
                          width: 28,
                          opacity: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: 0.3,
                        }}
                        className="h-px bg-primary"
                      />

                      <motion.p
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
                          delay: 0.35,
                        }}
                        className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground"
                      >
                        Get a Quote
                      </motion.p>
                    </div>

                    <motion.h3
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
                      }}
                      transition={{
                        duration: 0.6,
                        delay: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="text-2xl font-black tracking-tight sm:text-3xl"
                    >
                      Tell us about your project
                      <span className="text-primary">.</span>
                    </motion.h3>

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
                        duration: 0.5,
                        delay: 0.5,
                      }}
                      className="mt-2 text-sm text-muted-foreground"
                    >
                      Fill out the form and let&apos;s discuss what you
                      want to build.
                    </motion.p>
                  </motion.div>

                  {/* Form */}
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Name + Business */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <motion.div
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
                          duration: 0.5,
                          delay: 0.25,
                        }}
                      >
                        <label
                          htmlFor="name"
                          className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground"
                        >
                          Full Name
                        </label>

                        <input
                          id="name"
                          required
                          name="name"
                          placeholder="Juan Dela Cruz"
                          className="mt-2 w-full border-b border-border bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/40 focus:border-primary"
                        />
                      </motion.div>

                      <motion.div
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
                          duration: 0.5,
                          delay: 0.32,
                        }}
                      >
                        <label
                          htmlFor="business"
                          className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground"
                        >
                          Business Name
                        </label>

                        <input
                          id="business"
                          name="business"
                          placeholder="Your business"
                          className="mt-2 w-full border-b border-border bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/40 focus:border-primary"
                        />
                      </motion.div>
                    </div>

                    {/* Phone + Email */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <motion.div
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
                          duration: 0.5,
                          delay: 0.39,
                        }}
                      >
                        <label
                          htmlFor="phone"
                          className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground"
                        >
                          Contact Number
                        </label>

                        <input
                          id="phone"
                          required
                          name="phone"
                          type="tel"
                          placeholder="+63 9XX XXX XXXX"
                          className="mt-2 w-full border-b border-border bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/40 focus:border-primary"
                        />
                      </motion.div>

                      <motion.div
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
                          duration: 0.5,
                          delay: 0.46,
                        }}
                      >
                        <label
                          htmlFor="email"
                          className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground"
                        >
                          Email
                        </label>

                        <input
                          id="email"
                          required
                          name="email"
                          type="email"
                          placeholder="you@email.com"
                          className="mt-2 w-full border-b border-border bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/40 focus:border-primary"
                        />
                      </motion.div>
                    </div>

                    {/* Project Type */}
                    <motion.div
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
                        duration: 0.5,
                        delay: 0.53,
                      }}
                    >
                      <label
                        htmlFor="type"
                        className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground"
                      >
                        Project Type
                      </label>

                      <select
                        id="type"
                        name="type"
                        defaultValue="Food Cart"
                        className="mt-2 w-full border-b border-border bg-background py-3 text-sm outline-none transition-colors focus:border-primary"
                      >
                        <option>Food Cart</option>
                        <option>Food Kiosk</option>
                        <option>Custom Fabrication</option>
                        <option>Business Solution</option>
                        <option>Other</option>
                      </select>
                    </motion.div>

                    {/* Message */}
                    <motion.div
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
                        duration: 0.5,
                        delay: 0.6,
                      }}
                    >
                      <label
                        htmlFor="message"
                        className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground"
                      >
                        Project Details
                      </label>

                      <textarea
                        id="message"
                        required
                        name="message"
                        rows={4}
                        placeholder="Tell us what you want to build..."
                        className="mt-2 w-full resize-none border-b border-border bg-transparent py-3 text-sm leading-6 outline-none transition-colors placeholder:text-muted-foreground/40 focus:border-primary"
                      />
                    </motion.div>

                    {/* Submit */}
                    <motion.button
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
                        delay: 0.67,
                      }}
                      type="submit"
                      className="group flex w-full items-center justify-between rounded-full bg-foreground px-6 py-4 text-sm font-bold text-background transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                    >
                      <span>REQUEST A QUOTE</span>

                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowUpRight size={16} />
                      </span>
                    </motion.button>

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
                        duration: 0.5,
                        delay: 0.75,
                      }}
                      className="text-center text-[10px] text-muted-foreground"
                    >
                      We&apos;ll review your project and contact you
                      shortly.
                    </motion.p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM BRAND LINE
        ====================================================== */}
        <motion.div
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
            delay: 0.15,
          }}
          className="mt-16 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row"
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
              duration: 0.5,
              delay: 0.2,
            }}
            className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30"
          >
            HOP Fabrications Inc.
          </motion.p>

          <motion.p
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
              duration: 0.5,
              delay: 0.25,
            }}
            className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30"
          >
            Built around your business
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}