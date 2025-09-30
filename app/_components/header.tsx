import Image from "next/image";
import React from "react";

const navLinks = [
  { name: "Home", active: true },
  { name: "Explore AI" },
  { name: "Services" },
  { name: "E-commerce" },
  { name: "Products" },
  { name: "Blogs" },
];

export default function Header() {
  return (
    <header className="w-full h-12 px-6 flex items-center justify-between border-b border-[#312993] shadow-[0_0_9px_0_rgba(53,41,186,0.3)] relative">
      <div className="flex items-center gap-4 min-w-[220px]">
        <Image src="/favicon.ico" alt="Chromezy" width={32} height={32} />
        <span className="text-white font-bold text-[1.09rem]">Chromezy</span>
        <div className="hidden md:block ml-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="rounded bg-[#191949] text-[#b2b8cc] text-sm px-8 py-1.5 placeholder-[#767B9C] border-none focus:outline-none"
              style={{ minWidth: 120 }}
            />
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[#767b9c]">
              <svg
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M11.742 10.344h-.79l-.28-.27A6.471 6.471 0 0 0 12.5 7a6.5 6.5 0 1 0-6.5 6.5c1.61 0 3.09-.59 4.25-1.57l.27.29v.78l5 4.99c.41.41 1.07.41 1.48 0 .41-.41.41-1.07 0-1.48l-4.99-5zm-6.242 0c-1.61 0-3-1.39-3-3s1.39-3 3-3 3 1.39 3 3-1.39 3-3 3z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <nav className="flex-1 flex justify-center items-center">
        <ul className="flex items-center gap-7">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={`text-sm ${
                link.active
                  ? "text-white font-bold pb-1 border-b-2 border-blue-500"
                  : "text-[#b2b8cc]"
              } cursor-pointer`}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-8">
        <span className="text-[#b2b8cc] text-sm">About Us</span>
        <button className="bg-[#2196F3] hover:bg-[#217de0] transition text-white text-sm font-semibold px-6 py-1.5 rounded-full">
          Contact Us
        </button>
      </div>
    </header>
  );
}
