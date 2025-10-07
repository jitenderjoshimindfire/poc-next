"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Highly responsive with keen attention to detail. Assisted in building my e-commerce platform, mapping transformative areas, resulting in exceptional customer experience.",
    name: "BRANDON LAU",
    role: "CEO, Kiri Journey",
    company: "kiri",
    rating: "5/5",
    project: "E-commerce Development",
    country: "Hong Kong",
    brand: "kiri",
  },
  {
    text: "They are swift to respond and implement faster. Thanks to Chromezy for providing expert developers and on-time delivery to help scale our Cloud-based ERP SaaS solution that helped us automate workflows.",
    name: "MARC DOLLON",
    role: "CTO, MasterStudy",
    company: "MasterStudy",
    rating: "5/5",
    project: "SaaS Based Cloud ERP",
    country: "United States",
    brand: "MASTERSTUDY",
  },
  {
    text: "I'm thrilled with Chromezy's work. They developed inventory management, AI-powered demand forecasting, and smart route optimization on time and affordably.",
    name: "JEET OBERAI",
    role: "Entrepreneur, PayLoan",
    company: "PayLoan",
    rating: "4.8/5",
    project: "Product Development",
    country: "Singapore",
    brand: "Orofill",
  },
  {
    text: "Chromezy’s dedication and delivery speed are unmatched. They handled complex integrations smoothly and improved our digital transformation outcomes.",
    name: "SOPHIA KIM",
    role: "Founder, TechNova",
    company: "TechNova",
    rating: "5/5",
    project: "Digital Transformation",
    country: "South Korea",
    brand: "CAMPION",
  },
];

export default function OurHappyClients() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1 >= testimonials.length - 2 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));

  return (
    <section className="w-full max-w-7xl mx-auto mt-16 px-6 relative z-10">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-3">
            OUR HAPPY CLIENTS
          </h2>
          <p className="text-[#cfd8ed] text-base">
            Dummy ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            className="bg-[#1d1f3b] p-3 rounded-full shadow-lg hover:bg-[#2b2e52] transition"
          >
            <ChevronLeft className="text-white w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-[#1d1f3b] p-3 rounded-full shadow-lg hover:bg-[#2b2e52] transition"
          >
            <ChevronRight className="text-white w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500"
          style={{ transform: `translateX(-${current * (100 / 3)}%)` }}
        >
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#2f325a] bg-transparent p-8 flex flex-col justify-between w-[calc(100%/3-1rem)] flex-shrink-0"
            >
              <p className="text-[#cfd8ed] text-sm mb-6 leading-relaxed italic font-bold">
                “{item.text}”
              </p>
              <div>
                <div className="flex flex-col items-end">
                  <h4 className="text-white font-semibold text-lg">
                    {item.name}
                  </h4>
                  <p className="text-[#8ea0d1] text-sm mb-4">{item.role}</p>
                </div>
                <div className="flex flex-row items-center justify-between border-t border-[#22244d] py-6">
                  <div className="flex flex-col gap-1 text-xs text-[#a3b3d9]">
                    <span>Star Rating - {item.rating}</span>
                    <span>Project - {item.project}</span>
                    <span>Country - {item.country}</span>
                  </div>
                  <div>
                    <span
                      className="brand-logo font-bold text-white text-sm tracking-tight"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      {item.brand}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
