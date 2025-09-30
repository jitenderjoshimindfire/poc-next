import Image from "next/image";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-8 pb-20 relative"
      style={{
        backgroundImage: "url(/background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
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
          <div className="text-center">
            <div className="text-[#5ed0fa] font-bold text-xl">200%</div>
            <div className="text-[#b7c6ed] text-xs">Revenue Growth</div>
          </div>
          <div className="text-center">
            <div className="text-[#5ed0fa] font-bold text-xl">4X</div>
            <div className="text-[#b7c6ed] text-xs">Speed to Market</div>
          </div>
          <div className="text-center">
            <div className="text-[#5ed0fa] font-bold text-xl">73%</div>
            <div className="text-[#b7c6ed] text-xs">New Orders</div>
          </div>
          <div className="text-center">
            <div className="text-[#5ed0fa] font-bold text-xl">10K+</div>
            <div className="text-[#b7c6ed] text-xs">Active Users</div>
          </div>
        </div>
      </main>

      <div className="absolute left-0 right-0 bottom-0 py-7 border-t border-[#22244d] flex flex-wrap justify-center items-center bg-transparent gap-6">
        <span
          className="brand-logo font-bold text-white text-lg tracking-tight"
          style={{ fontFamily: "sans-serif" }}
        >
          MASTERSTUDY
        </span>
        <span
          className="brand-logo font-serif italic text-white text-xl"
          style={{ fontFamily: "Cormorant, serif" }}
        >
          Orofill
        </span>
        <span
          className="brand-logo font-sans font-semibold text-white text-lg"
          style={{ letterSpacing: "2px" }}
        >
          CAMPION
        </span>
        <span
          className="brand-logo font-bold text-white text-2xl"
          style={{ fontFamily: "monospace" }}
        >
          kiri
        </span>
        <span
          className="brand-logo font-script text-white text-xl"
          style={{ fontFamily: "cursive" }}
        >
          fonnia
        </span>
        <span
          className="brand-logo font-semibold text-white text-lg"
          style={{ fontFamily: "sans-serif" }}
        >
          comall
        </span>
        <span
          className="brand-logo font-bold text-white text-lg"
          style={{ fontFamily: "sans-serif" }}
        >
          Modernize
        </span>
      </div>
    </div>
  );
}
