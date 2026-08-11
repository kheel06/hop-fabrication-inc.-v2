"use client";

import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function AIChat() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! Welcome to HOP Fabrications. What are you looking to build?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    const userMessage = input.trim();

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

      if (!response.ok) {
        throw new Error("Failed to get AI response");
      }

      const data = await response.json();

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content:
            data.response || "Sorry, something went wrong.",
        },
      ]);
    } catch (error) {
      console.error("Chat error:", error);

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content:
            "Sorry, we're having trouble connecting. Please message HOP Fabrications directly.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* CHAT WINDOW */}
      {open && (
        <div
          className="
            fixed
            bottom-24
            right-6
            z-[9999]
            flex
            h-[560px]
            w-[380px]
            max-w-[calc(100vw-32px)]
            flex-col
            overflow-hidden
            rounded-2xl
            border
            border-black/10
            bg-[#f5f2eb]
            shadow-2xl
          "
        >
          {/* HEADER */}
          <div className="flex items-center justify-between border-b border-black/10 bg-black px-5 py-4 text-white">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/60">
                HOP Fabrications
              </p>

              <h3 className="mt-1 text-lg font-semibold">
                Project Assistant
              </h3>

              <div className="mt-1 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                <span className="text-[11px] text-white/60">
                  Online
                </span>
              </div>
            </div>

            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                text-lg
                text-white
                transition
                hover:bg-white
                hover:text-black
              "
            >
              ×
            </button>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.role === "user"
                    ? "ml-auto max-w-[82%] rounded-2xl rounded-br-md bg-black px-4 py-3 text-sm leading-relaxed text-white"
                    : "max-w-[82%] rounded-2xl rounded-bl-md border border-black/10 bg-white px-4 py-3 text-sm leading-relaxed text-black"
                }
              >
                {message.content}
              </div>
            ))}

            {loading && (
              <div className="w-fit rounded-2xl rounded-bl-md border border-black/10 bg-white px-4 py-3 text-sm text-black/50">
                <div className="flex items-center gap-1">
                  <span className="animate-bounce">•</span>
                  <span
                    className="animate-bounce"
                    style={{ animationDelay: "0.15s" }}
                  >
                    •
                  </span>
                  <span
                    className="animate-bounce"
                    style={{ animationDelay: "0.3s" }}
                  >
                    •
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* INPUT */}
          <div className="border-t border-black/10 bg-[#f5f2eb] p-3">
            <div className="flex items-center gap-2 rounded-xl border border-black/15 bg-white p-1.5">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
                placeholder="Tell us about your project..."
                className="
                  min-w-0
                  flex-1
                  bg-transparent
                  px-3
                  py-2.5
                  text-sm
                  text-black
                  outline-none
                  placeholder:text-black/40
                "
              />

              <button
                type="button"
                onClick={sendMessage}
                disabled={loading}
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-black
                  text-white
                  transition
                  hover:bg-black/80
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
                aria-label="Send message"
              >
                ↑
              </button>
            </div>

            <p className="mt-2 text-center text-[10px] text-black/35">
              HOP Fabrications Project Assistant
            </p>
          </div>
        </div>
      )}

      {/* FLOATING CHAT BUTTON */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="
          fixed
          bottom-6
          right-6
          z-[10000]
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-black
          text-white
          shadow-2xl
          transition-all
          duration-300
          hover:scale-105
          hover:bg-black/90
          active:scale-95
        "
      >
        {open ? (
          <span className="text-2xl font-light">×</span>
        ) : (
          <div className="relative flex items-center justify-center">
            {/* CHAT ICON */}
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 11.5C20 15.6421 16.4183 19 12 19C10.7227 19 9.52343 18.7255 8.46973 18.2397L4 20L5.2936 16.3214C4.47723 14.9827 4 13.4164 4 11.5C4 7.35786 7.58172 4 12 4C16.4183 4 20 7.35786 20 11.5Z"
                stroke="currentColor"
                strokeWidth="1.8"
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
            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-black bg-[#c99719]" />
          </div>
        )}
      </button>
    </>
  );
}