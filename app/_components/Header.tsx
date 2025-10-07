"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", active: true },
  { name: "Explore AI" },
  { name: "Services" },
  { name: "E-commerce" },
  { name: "Products" },
  { name: "Blogs" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-6 py-3 flex items-center justify-between border-b border-[#312993] shadow-[0_0_9px_0_rgba(53,41,186,0.3)] bg-[#0f0f2e] relative">
      <div className="flex items-center gap-4 min-w-[180px]">
        <Image src="/favicon.ico" alt="Chromezy" width={32} height={32} />
        <span className="text-white font-bold text-[1.1rem]">Chromezy</span>
      </div>

      <nav className="hidden md:flex flex-1 justify-center items-center">
        <ul className="flex items-center gap-7">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={`text-sm ${
                link.active
                  ? "text-white font-bold pb-1 border-b-2 border-blue-500"
                  : "text-[#b2b8cc]"
              } cursor-pointer hover:text-white transition`}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </nav>

      <div className="hidden md:flex items-center gap-6">
        <span className="text-[#b2b8cc] text-sm cursor-pointer hover:text-white">
          About Us
        </span>
        <button className="bg-[#2196F3] hover:bg-[#217de0] transition text-white text-sm font-semibold px-6 py-1.5 rounded-full">
          Contact Us
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        {menuOpen ? (
          <X
            size={24}
            className="text-white cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <Menu
            size={24}
            className="text-white cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#14143b] border-t border-[#312993] z-50 shadow-lg">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className={`text-sm ${
                  link.active
                    ? "text-white font-bold border-b border-blue-500 pb-1"
                    : "text-[#b2b8cc]"
                } cursor-pointer hover:text-white transition`}
              >
                {link.name}
              </li>
            ))}
            <span className="text-[#b2b8cc] text-sm cursor-pointer hover:text-white">
              About Us
            </span>
            <button className="bg-[#2196F3] hover:bg-[#217de0] transition text-white text-sm font-semibold px-6 py-1.5 rounded-full">
              Contact Us
            </button>
          </ul>
        </div>
      )}
    </header>
  );
}
