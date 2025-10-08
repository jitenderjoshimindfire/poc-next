"use client";
import React from "react";
import {
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#28282B] text-gray-400 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div className="col-span-1 md:col-span-3 lg:col-span-2">
          <div className="flex items-center mb-4">
            <img
              src="/cromezy.png"
              alt="Chromezy Logo"
              className="h-8 w-8 mr-2"
            />
            <span className="text-white text-2xl font-semibold">Chromezy</span>
          </div>
          <div className="px-8">
            <p className="text-gray-400 mb-6 max-w-sm">
              Not just about software & Product development; we're your tech
              partners, crafting modern digital solutions for next-gen
              excellence!
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy
              </a>
            </div>
            <div className="flex items-center mb-2">
              <Phone className="w-5 h-5 mr-2 text-blue-500" />
              <span className="text-white">+1 315 308 0901</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2 text-blue-500" />
              <span className="text-white">sales@chromezy.com</span>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <ul className="space-y-3">
            {["Home", "About Us", "Career", "Case Study"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white flex items-center justify-between"
                >
                  {item}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <div className="border-t border-white/10 my-2"></div>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-400 font-semibold mt-6 inline-flex items-center space-x-2"
          >
            <span>Join the Team</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="col-span-1">
          <ul className="space-y-3">
            {["AI", "MVP", "SaaS", "E-commerce"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white flex items-center justify-between"
                >
                  {item}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <div className="border-t border-white/10 my-2"></div>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-400 font-semibold mt-6 inline-flex items-center space-x-2"
          >
            <span>Work with us</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <p>Copyright © 2024</p>
          <p>Donk Designs, All Rights Reserved</p>
          <p className="text-blue-500">Designed by Debasish Naik</p>
        </div>
        <div className="flex items-center space-x-4">
          <p>Connect with us:</p>
          <a href="#" className="text-gray-400 hover:text-white">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
