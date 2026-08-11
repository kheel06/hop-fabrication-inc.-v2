"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "Designs", href: "#designs" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "About", href: "#about" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/10 bg-[#f5f4ef]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        <a href="#home" className="flex items-center gap-3">
          {/* <img
            src="/logo.png"
            alt="HOP Fabrications Inc."
            className="h-11 w-11 rounded-full"
          /> */}

          <div className="hidden sm:block">
            <p className="text-sm font-bold tracking-tight">
              HOP FABRICATIONS INC.
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-black/50">
              Custom Food Carts & Kiosks
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-black/70 transition hover:text-black"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#quote"
            className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/80"
          >
            Get a Quote
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/10 bg-[#f5f4ef] px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="rounded-full bg-black px-5 py-3 text-center font-semibold text-white"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}