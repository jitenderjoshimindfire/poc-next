"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
  const [visibleCards, setVisibleCards] = useState(3);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      setConstraints({
        left: -((testimonials.length - visibleCards) * width) / visibleCards,
        right: 0,
      });
    }
  }, [visibleCards]);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const nextSlide = () =>
    setCurrent((prev) =>
      prev + 1 >= testimonials.length - visibleCards + 1 ? 0 : prev + 1
    );

  const prevSlide = () =>
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - visibleCards : prev - 1
    );

  return (
    <section className="w-full max-w-7xl mx-auto mt-16 px-4 sm:px-6 relative z-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-6">
        <div>
          <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-2">
            OUR HAPPY CLIENTS
          </h2>
          <p className="text-[#cfd8ed] text-sm sm:text-base">
            Dummy ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        <div className="flex gap-3 self-end sm:self-auto">
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.2, backgroundColor: "#2b2e52" }}
            className="bg-[#1d1f3b] p-3 rounded-full shadow-lg transition-colors"
          >
            <ChevronLeft className="text-white w-5 h-5" />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.2, backgroundColor: "#2b2e52" }}
            className="bg-[#1d1f3b] p-3 rounded-full shadow-lg transition-colors"
          >
            <ChevronRight className="text-white w-5 h-5" />
          </motion.button>
        </div>
      </div>

      <motion.div
        ref={carouselRef}
        className="overflow-hidden cursor-grab"
        drag="x"
        dragConstraints={constraints}
        dragElastic={0.1}
      >
        <motion.div
          className="flex gap-6"
          animate={{ x: -current * (100 / visibleCards) + "%" }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
        >
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              onHoverStart={() => setHoveredCard(idx)}
              onHoverEnd={() => setHoveredCard(null)}
              className="rounded-2xl border border-[#2f325a] bg-transparent p-6 sm:p-8 flex flex-col justify-between flex-shrink-0"
              style={{
                width:
                  visibleCards === 1
                    ? "100%"
                    : visibleCards === 2
                    ? "calc(50% - 0.75rem)"
                    : "calc(33.333% - 1rem)",
              }}
              animate={{
                scale: hoveredCard === idx ? 1.05 : 1,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.p
                className="text-sm sm:text-base mb-6 leading-relaxed italic font-bold"
                animate={{ color: hoveredCard === idx ? "#b6ff92" : "#cfd8ed" }}
                transition={{ duration: 0.2 }}
              >
                “{item.text}”
              </motion.p>

              <div className="flex flex-col items-end mb-4">
                <motion.h4
                  className="font-semibold text-lg"
                  animate={{ color: hoveredCard === idx ? "#b6ff92" : "#ffffff" }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                </motion.h4>
                <motion.p
                  className="text-sm"
                  animate={{ color: hoveredCard === idx ? "#b6ff92" : "#8ea0d1" }}
                  transition={{ duration: 0.2 }}
                >
                  {item.role}
                </motion.p>
              </div>

              <div className="flex flex-row items-center justify-between border-t border-[#22244d] py-6">
                <motion.div
                  className="flex flex-col gap-1 text-xs"
                  animate={{ color: hoveredCard === idx ? "#b6ff92" : "#a3b3d9" }}
                  transition={{ duration: 0.2 }}
                >
                  <span>Star Rating - {item.rating}</span>
                  <span>Project - {item.project}</span>
                  <span>Country - {item.country}</span>
                </motion.div>
                <motion.div
                  animate={{ color: hoveredCard === idx ? "#b6ff92" : "#ffffff" }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="font-bold text-sm tracking-tight">{item.brand}</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
