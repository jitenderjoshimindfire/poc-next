"use client";
import Image from "next/image";
import OurHappyClients from "./_components/OurHappyClients";
import SuccessStories from "./_components/SuccessStories";
import ProductEngineering from "./_components/ProductEngineering";
import InnovativeTech from "./_components/InnovativeTech";
import FeaturedInsights from "./_components/FeaturedInsights";
import ContactUs from "./_components/ContactUs";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  const sphereX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["75vw", "40vw", "5vw"]
  );
  const sphereYBase = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["70vh", "10vh", "75vh"]
  );
  const sphereY = useTransform(sphereYBase, (v) => `calc(${v} - 290px)`);

  const sphereOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.9, 0]);

  const pyramidY = useTransform(scrollYProgress, [0, 1], ["0vh", "90vh"]);
  const pyramidOpacity = useTransform(
    scrollYProgress,
    [0, 0.9, 1],
    [1, 0.9, 0]
  );

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden px-8 pb-20 relative bg-slate-900">
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          x: sphereX,
          y: sphereY,
          opacity: sphereOpacity,
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.4, 1]), // smooth size change
          zIndex: 0, // sits *under* UI, above background
          pointerEvents: "none",
          filter: "drop-shadow(0 0 30px rgba(94, 208, 250, 0.4))",
          background: "transparent",
        }}
      >
        <Image
          src="/fm2.png"
          alt="Animated Sphere"
          width={240}
          height={240}
          priority
          style={{ backgroundColor: "transparent" }}
        />
      </motion.div>

      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          y: pyramidY,
          opacity: pyramidOpacity,
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.3, 1]),
          zIndex: 0,
          pointerEvents: "none",
          filter: "blur(20px)",
          background: "transparent",
        }}
      >
        <Image
          src="/fm1.png"
          alt="Animated Pyramid"
          width={440}
          height={440}
          priority
          style={{ backgroundColor: "transparent" }}
        />
      </motion.div>

      <main className="flex flex-col gap-10 items-center max-w-3xl w-full z-10">
        <div className="text-sm text-[#A3B3D9] font-medium tracking-wide mt-10 mb-4 flex items-center gap-2">
          <span>✨</span> Introducing AI Automation
        </div>

        <h1 className="text-center font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-2">
          <span className="text-white">from </span>
          <span className="bg-gradient-to-r from-[#22D5FF] to-[#198EFF] text-transparent bg-clip-text">
            CONCEPT
          </span>
          <span className="text-white"> to </span>
          <span className="bg-gradient-to-r from-[#286BDB] via-[#7C41F6] to-[#2460F9] text-transparent bg-clip-text">
            REALITY
          </span>
        </h1>

        <div className="text-center text-[#80c4a4] font-semibold text-lg mb-2">
          We Engineer your Software Success &amp; Digital Transformation.
        </div>

        <div className="text-[#cfd8ed] text-base text-center max-w-xl mx-auto font-medium mb-5">
          At Chromezy, we translate your ideas into market-ready solutions
          quickly and precisely. Leveraging the power of technology and
          prioritizing user needs, we deliver products that are both
          cutting-edge and user-centric.
        </div>

        <div className="flex gap-12 justify-center items-center mt-2 mb-10 flex-wrap">
          {[
            { value: "200%", label: "Revenue Growth" },
            { value: "4X", label: "Speed to Market" },
            { value: "73%", label: "New Orders" },
            { value: "10K+", label: "Active Users" },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="text-[#5ed0fa] font-bold text-xl">
                {item.value}
              </div>
              <div className="text-[#b7c6ed] text-xs">{item.label}</div>
            </div>
          ))}
        </div>
      </main>

      <div className="py-7 border-t border-[#22244d] flex flex-wrap justify-between items-center bg-transparent gap-6 w-full max-w-7xl mx-auto ">
        {[
          "MASTERSTUDY",
          "Orofill",
          "CAMPION",
          "kiri",
          "fonnia",
          "comall",
          "Modernize",
        ].map((brand, i) => (
          <span
            key={i}
            className="brand-logo font-bold text-white text-lg tracking-tight"
            style={{
              fontFamily:
                i === 1
                  ? "Cormorant, serif"
                  : i === 3
                  ? "monospace"
                  : "sans-serif",
              fontStyle: i === 1 ? "italic" : "normal",
              fontWeight: i === 5 ? 600 : "bold",
            }}
          >
            {brand}
          </span>
        ))}
      </div>

      <ProductEngineering />
      <OurHappyClients />
      <SuccessStories />
      <InnovativeTech />
      <FeaturedInsights />
      <ContactUs />
    </div>
  );
}
