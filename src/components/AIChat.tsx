"use client";

import { useState } from "react";

type Message = {
  id: number;
  role: "assistant" | "user";
  content: string;
};

const quickOptions = [
  "Coffee Cart",
  "Food Cart",
  "Kiosk",
  "Custom Project",
];

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content:
        "Hello. Have an idea for a custom cart, kiosk, or fabrication project? Tell me what you're imagining and I'll help you get started.",
    },
  ]);

  async function sendMessage(customMessage?: string) {
    const message = (customMessage || input).trim();

    if (!message || loading) return;

    setInput("");

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: message,
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          conversation: messages.map((item) => item.content),
        }),
      });

      const data = await response.json();

      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content:
          data.response ||
          "Thanks. Let me connect you with our team.",
      };

      setMessages([...updatedMessages, assistantMessage]);
    } catch (error) {
      console.error(error);

      setMessages([
        ...updatedMessages,
        {
          id: Date.now() + 1,
          role: "assistant",
          content:
            "I'm having trouble connecting right now. You can continue directly with HOP Fabrications through Messenger.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {/* CHAT WINDOW */}
      {open && (
        <div className="fixed bottom-24 right-5 z-[9999] flex h-[min(680px,calc(100vh-120px))] w-[390px] max-w-[calc(100vw-24px)] flex-col overflow-hidden border border-black/10 bg-[#f5f2ea] shadow-[0_25px_80px_rgba(0,0,0,0.22)]">

          {/* HEADER */}
          <div className="relative bg-[#0b0b0b] px-6 pb-6 pt-5 text-white">

            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center text-white/60 transition hover:text-white"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M4 4L14 14M14 4L4 14"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
              </svg>
            </button>

            <div className="mb-6 flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c9a84d]/50">
                <span className="text-sm text-[#d5b55c]">
                  H
                </span>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.28em] text-white/50">
                  HOP Fabrications
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.12em]">
                  Project Assistant
                </p>
              </div>

            </div>

            <div className="max-w-[280px]">

              <p className="mb-2 text-[9px] uppercase tracking-[0.3em] text-[#d5b55c]">
                START YOUR PROJECT
              </p>

              <h3 className="font-serif text-[27px] leading-[0.95] tracking-[-0.03em]">
                LET&apos;S BUILD
                <br />
                SOMETHING
                <br />
                GREAT.
              </h3>

            </div>

          </div>


          {/* MESSAGES */}
          <div className="flex-1 space-y-5 overflow-y-auto px-5 py-6">

            {messages.map((message) => (
              <div
                key={message.id}
                className={
                  message.role === "user"
                    ? "flex justify-end"
                    : "flex justify-start"
                }
              >

                <div
                  className={
                    message.role === "user"
                      ? "max-w-[82%] bg-[#111111] px-4 py-3 text-[13px] leading-relaxed text-white"
                      : "max-w-[88%]"
                  }
                >

                  {message.role === "assistant" && (
                    <div className="mb-2 flex items-center gap-2">

                      <span className="h-1.5 w-1.5 rounded-full bg-[#c9a84d]" />

                      <span className="text-[8px] uppercase tracking-[0.22em] text-black/40">
                        HOP ASSISTANT
                      </span>

                    </div>
                  )}

                  <p
                    className={
                      message.role === "assistant"
                        ? "text-[13px] leading-[1.7] text-black/70"
                        : "text-[13px] leading-relaxed"
                    }
                  >
                    {message.content}
                  </p>

                </div>

              </div>
            ))}


            {/* QUICK OPTIONS */}
            {messages.length === 1 && (
              <div className="pt-1">

                <p className="mb-3 text-[8px] uppercase tracking-[0.25em] text-black/35">
                  QUICK START
                </p>

                <div className="grid grid-cols-2 gap-2">

                  {quickOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => sendMessage(option)}
                      className="group border border-black/10 bg-white/50 px-3 py-3 text-left text-[11px] transition hover:border-black/30 hover:bg-white"
                    >
                      <span>{option}</span>

                      <span className="ml-2 text-black/25 transition group-hover:text-[#b7953f]">
                        →
                      </span>
                    </button>
                  ))}

                </div>

              </div>
            )}


            {/* LOADING */}
            {loading && (
              <div className="flex items-center gap-2">

                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#c9a84d]" />

                <span className="text-[9px] uppercase tracking-[0.2em] text-black/35">
                  Thinking...
                </span>

              </div>
            )}

          </div>


          {/* MESSENGER HANDOFF */}
          {messages.length >= 4 && (
            <div className="border-t border-black/10 px-5 py-4">

              <button
                onClick={() =>
                  window.open(
                    "https://m.me/100076836283363",
                    "_blank"
                  )
                }
                className="flex w-full items-center justify-between bg-[#111111] px-4 py-3 text-left text-white transition hover:bg-black"
              >

                <div>
                  <p className="text-[8px] uppercase tracking-[0.22em] text-[#d5b55c]">
                    READY TO TALK?
                  </p>

                  <p className="mt-1 text-[11px]">
                    Continue with HOP on Messenger
                  </p>
                </div>

                <span className="text-[#d5b55c]">
                  →
                </span>

              </button>

            </div>
          )}


          {/* INPUT */}
          <div className="border-t border-black/10 bg-[#f5f2ea] p-4">

            <div className="flex items-center border border-black/15 bg-white">

              <input
                value={input}
                onChange={(event) =>
                  setInput(event.target.value)
                }
                onKeyDown={handleKeyDown}
                placeholder="Tell us about your project..."
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-[12px] outline-none placeholder:text-black/30"
              />

              <button
                onClick={() => sendMessage()}
                disabled={!input.trim() || loading}
                aria-label="Send message"
                className="mr-1 flex h-9 w-9 items-center justify-center bg-black text-white transition hover:bg-[#252525] disabled:cursor-not-allowed disabled:opacity-20"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M2 7.5H12M8 3.5L12 7.5L8 11.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </button>

            </div>

            <p className="mt-3 text-center text-[7px] uppercase tracking-[0.2em] text-black/25">
              HOP FABRICATIONS · PROJECT ASSISTANT
            </p>

          </div>

        </div>
      )}


      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Open HOP project assistant"
        className="group fixed bottom-5 right-5 z-[9998] flex items-center gap-3 bg-[#0b0b0b] px-4 py-3 text-white shadow-[0_10px_35px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5"
      >

        <span className="relative flex h-7 w-7 items-center justify-center border border-[#c9a84d]/60">

          <span className="text-[11px] text-[#d5b55c]">
            H
          </span>

          {!open && (
            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#c9a84d]" />
          )}

        </span>

        <span className="hidden text-left sm:block">

          <span className="block text-[8px] uppercase tracking-[0.25em] text-[#d5b55c]">
            HOP FABRICATIONS
          </span>

          <span className="mt-0.5 block text-[10px] uppercase tracking-[0.12em]">
            {open ? "Close Assistant" : "Project Assistant"}
          </span>

        </span>

      </button>
    </>
  );
}