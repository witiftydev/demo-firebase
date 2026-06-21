"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Navbar */}
      <nav className="fixed top-6 left-1/2 z-50 w-[95%] max-w-6xl -translate-x-1/2 rounded-full ">
        <div className="flex items-center justify-between rounded-full">
          {/* Logo */}
          <Link href="/" className="text-xl font-black">
            Demo-
            <span className="text-red-500">Firebase</span>
          </Link>

          {/* Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition hover:scale-105"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-white transition ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-40 flex items-center justify-center bg-black text-white transition-all duration-500 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="space-y-8 text-center">
          {navItems.map((item, index) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="group text-5xl font-bold transition hover:text-blue-400"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Background Number */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="text-[25vw] font-black text-white/[0.03]">MENU</span>
        </div>
      </div>
    </>
  );
}
