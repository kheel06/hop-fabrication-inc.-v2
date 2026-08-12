"use client";

import { useEffect, useRef, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

/*
 * HOP FABRICATIONS FACEBOOK PAGE
 *
 * This intentionally uses Facebook.com instead of m.me
 * so the CTA sends the visitor to Facebook's messaging
 * interface rather than directly to messenger.com.
 */
const FACEBOOK_MESSENGER_URL =
  "https://www.facebook.com/messages/t/100076836283363";

const quickOptions = [
  "Custom food cart",
  "Food kiosk",
  "Mobile food concept",
  "Other project",
];

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm the HOP Project Assistant. What are you looking to build?",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /*
   * Scroll to newest message.
   */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  /*
   * Focus input when chat opens.
   */
  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 250);

    return () => clearTimeout(timer);
  }, [open]);

  /*
   * Send message to your AI API.
   */
  async function sendMessage(customMessage?: string) {
    const userMessage = (customMessage ?? input).trim();

    if (!userMessage || loading) return;

    setInput("");

    const updatedMessages: Message[] = [
      ...messages,
      {
        role: "user",
        content: userMessage,
      },
    ];

    setMessages(updatedMessages);
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          conversation: messages,
        }),
      });

      /*
       * Parse JSON even when the API returns an error.
       * This makes debugging much easier.
       */
      const data = await response.json();

      if (!response.ok) {
        console.error("AI API ERROR:", data);

        throw new Error(
          data?.details ||
            data?.error ||
            "Failed to get AI response"
        );
      }

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content:
            data.response ||
            "Sorry, I couldn't generate a response.",
        },
      ]);
    } catch (error) {
      console.error("Chat error:", error);

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting right now. You can continue directly with the HOP team on Facebook Messenger.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  /*
   * Quick project options.
   */
  function handleQuickOption(option: string) {
    sendMessage(option);
  }

  /*
   * Open HOP Facebook Messenger conversation.
   *
   * IMPORTANT:
   * We intentionally use facebook.com instead of m.me.
   */
  function openFacebookMessenger() {
    window.location.href = FACEBOOK_MESSENGER_URL;
  }

  return (
    <>
      {/* =====================================================
          CHAT WINDOW
      ===================================================== */}

      <div
        className={`
          fixed
          bottom-[82px]
          right-4

          sm:bottom-[90px]
          sm:right-6

          z-[9999]

          w-[calc(100vw-32px)]
          max-w-[350px]

          h-[480px]
          max-h-[calc(100vh-105px)]

          flex
          flex-col

          overflow-hidden
          rounded-[22px]

          border
          border-black/[0.08]

          bg-[#f6f3ed]

          shadow-[0_20px_60px_rgba(0,0,0,0.20)]

          transition-all
          duration-300
          ease-out

          ${
            open
              ? "translate-y-0 scale-100 opacity-100 pointer-events-auto"
              : "translate-y-4 scale-95 opacity-0 pointer-events-none"
          }
        `}
        aria-hidden={!open}
      >
        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="shrink-0 bg-black px-4 py-3.5 text-white">
          <div className="flex items-center justify-between">

            {/* HOP BRAND */}

            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  bg-white/10
                "
              >
                <span className="text-[11px] font-semibold tracking-[0.15em]">
                  H
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <p className="text-[13px] font-semibold tracking-tight">
                    HOP Assistant
                  </p>

                  <span className="h-1.5 w-1.5 rounded-full bg-[#c99719]" />
                </div>

                <div className="mt-0.5 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />

                  <span className="text-[9px] uppercase tracking-[0.15em] text-white/45">
                    Online
                  </span>
                </div>
              </div>
            </div>

            {/* CLOSE */}

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close HOP Assistant"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                text-white/60
                transition
                hover:bg-white/10
                hover:text-white
              "
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />

                <path
                  d="M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <p className="mt-3 max-w-[260px] text-[10px] leading-relaxed text-white/45">
            Tell us about your project and we'll help you figure out the next
            step.
          </p>
        </div>

        {/* ===================================================
            MESSAGES
        =================================================== */}

        <div className="min-h-0 flex-1 overflow-y-auto px-3.5 py-4">
          <div className="space-y-3">

            {messages.map((message, index) => {
              const isUser = message.role === "user";

              return (
                <div
                  key={`${index}-${message.role}`}
                  className={`flex ${
                    isUser
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`
                      max-w-[86%]
                      rounded-[17px]
                      px-3.5
                      py-2.5

                      text-[12px]
                      leading-[1.55]

                      ${
                        isUser
                          ? `
                            rounded-br-[5px]
                            bg-black
                            text-white
                          `
                          : `
                            rounded-bl-[5px]
                            border
                            border-black/[0.07]
                            bg-white
                            text-black/80
                            shadow-sm
                          `
                      }
                    `}
                  >
                    {message.content}
                  </div>
                </div>
              );
            })}

            {/* QUICK OPTIONS */}

            {messages.length === 1 && !loading && (
              <div className="pt-1">
                <p className="mb-2 px-1 text-[9px] font-medium uppercase tracking-[0.14em] text-black/35">
                  Start with
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {quickOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() =>
                        handleQuickOption(option)
                      }
                      className="
                        rounded-full
                        border
                        border-black/10
                        bg-white
                        px-3
                        py-1.5
                        text-[10px]
                        font-medium
                        text-black/70
                        transition
                        hover:border-black/25
                        hover:bg-black
                        hover:text-white
                      "
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* TYPING INDICATOR */}

            {loading && (
              <div className="flex justify-start">
                <div
                  className="
                    flex
                    items-center
                    gap-1

                    rounded-[17px]
                    rounded-bl-[5px]

                    border
                    border-black/[0.07]

                    bg-white

                    px-3.5
                    py-3

                    shadow-sm
                  "
                >
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-black/30" />

                  <span
                    className="h-1.5 w-1.5 animate-bounce rounded-full bg-black/30"
                    style={{
                      animationDelay: "120ms",
                    }}
                  />

                  <span
                    className="h-1.5 w-1.5 animate-bounce rounded-full bg-black/30"
                    style={{
                      animationDelay: "240ms",
                    }}
                  />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* ===================================================
            BOTTOM
        =================================================== */}

        <div className="shrink-0 border-t border-black/[0.07] bg-[#f6f3ed] p-3">

          {/* =================================================
              FACEBOOK MESSENGER CTA
          ================================================= */}

          <button
            type="button"
            onClick={openFacebookMessenger}
            className="
              mb-2.5
              flex
              w-full
              items-center
              justify-between

              rounded-xl

              border
              border-black/10

              bg-white

              px-3.5
              py-2.5

              text-left

              transition

              hover:border-black/20
              hover:bg-black
              hover:text-white

              active:scale-[0.99]
            "
          >
            <div className="flex items-center gap-2.5">

              {/* FACEBOOK / MESSENGER ICON */}

              <div
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#1877F2]
                  text-white
                "
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.477 2 2 6.145 2 11.256c0 2.91 1.454 5.51 3.73 7.3V22l3.42-1.88c.91.25 1.86.39 2.85.39 5.523 0 10-4.145 10-9.254C22 6.145 17.523 2 12 2Zm1.02 12.45-2.55-2.72-4.98 2.72 5.48-5.82 2.61 2.72 4.91-2.72-5.47 5.82Z" />
                </svg>
              </div>

              <div>
                <p className="text-[10px] font-semibold">
                  Continue with HOP
                </p>

                <p className="mt-0.5 text-[9px] opacity-45">
                  Chat with us on Facebook Messenger
                </p>
              </div>
            </div>

            <span className="text-sm">
              →
            </span>
          </button>

          {/* =================================================
              INPUT
          ================================================= */}

          <div
            className="
              flex
              items-center
              gap-1.5

              rounded-xl

              border
              border-black/10

              bg-white

              p-1

              transition

              focus-within:border-black/25
              focus-within:shadow-sm
            "
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              disabled={loading}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) => {
                if (
                  e.key === "Enter" &&
                  !e.shiftKey
                ) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Tell us about your project..."
              className="
                min-w-0
                flex-1

                bg-transparent

                px-2.5
                py-2

                text-[11px]
                text-black

                outline-none

                placeholder:text-black/30

                disabled:opacity-40
              "
            />

            <button
              type="button"
              onClick={() => sendMessage()}
              disabled={
                loading ||
                !input.trim()
              }
              aria-label="Send message"
              className="
                flex
                h-8
                w-8
                shrink-0

                items-center
                justify-center

                rounded-lg

                bg-black
                text-white

                transition

                hover:bg-black/80

                disabled:cursor-not-allowed
                disabled:opacity-20
              "
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                <path
                  d="M13 6L19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <p className="mt-2 text-center text-[8px] tracking-wide text-black/25">
            HOP Fabrications · Project Assistant
          </p>
        </div>
      </div>

      {/* =====================================================
          FLOATING CHAT BUTTON
      ===================================================== */}

      <button
        type="button"
        onClick={() =>
          setOpen((previous) => !previous)
        }
        aria-label={
          open
            ? "Close HOP Project Assistant"
            : "Open HOP Project Assistant"
        }
        aria-expanded={open}
        className="
          fixed

          bottom-4
          right-4

          sm:bottom-6
          sm:right-6

          z-[10000]

          flex

          h-14
          w-14

          items-center
          justify-center

          rounded-full

          bg-black
          text-white

          shadow-[0_10px_30px_rgba(0,0,0,0.22)]

          transition-all
          duration-300

          hover:scale-105
          hover:shadow-[0_14px_35px_rgba(0,0,0,0.28)]

          active:scale-95
        "
      >
        {open ? (
          /* CLOSE ICON */

          <svg
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 6L18 18"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />

            <path
              d="M18 6L6 18"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          /* CHAT ICON */

          <div className="relative">
            <svg
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 11.5C20 15.6421 16.4183 19 12 19C10.7227 19 9.52343 18.7255 8.46973 18.2397L4 20L5.2936 16.3214C4.47723 14.9827 4 13.4164 4 11.5C4 7.35786 7.58172 4 12 4C16.4183 4 20 7.35786 20 11.5Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M8 12H8.01"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />

              <path
                d="M12 12H12.01"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />

              <path
                d="M16 12H16.01"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            {/* NOTIFICATION DOT */}

            <span
              className="
                absolute
                -right-1
                -top-1

                h-2.5
                w-2.5

                rounded-full

                border-2
                border-black

                bg-[#c99719]
              "
            />
          </div>
        )}
      </button>
    </>
  );
}