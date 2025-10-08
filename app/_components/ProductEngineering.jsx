"use client";
import { motion } from "framer-motion";

export default function ProductEngineering() {
  const services = [
    {
      title: "MVP",
      category: "Our Services",
      description:
        "We specialize in custom MVP development, focusing on tailored prototyping services to meet diverse client needs and ensure rapid market launch.",
      bg: "#232a55",
      textColor: "#70caff",
      btnBg: "#1d2845",
      btnHover: "#203364",
      btnText: "Talk to a Product Expert →",
    },
    {
      title: "SaaS",
      category: "Our Services",
      description:
        "Take your business to new heights with our all-inclusive SaaS development services, delivering seamless and platform-agnostic experiences tailored to your customers’ needs.",
      bg: "#52172e",
      textColor: "#ef97d7",
      btnBg: "#3b1122",
      btnHover: "#5f1a42",
      btnText: "Talk to a Product Expert →",
    },
    {
      title: "AI",
      category: "Our Services",
      description:
        "We develop tailored AI solutions, leveraging ML, NLP, and computer vision to automate and enhance decision-making processes.",
      bg: "#464219",
      textColor: "#fbc366",
      btnBg: "#352e11",
      btnHover: "#695b25",
      btnText: "Talk to a Product Expert →",
    },
    {
      title: "B2B & B2C Commerce Transformation",
      category: "Our Services",
      description:
        "We elevate commerce with Shopify, Prestashop, Magento, and WooCommerce to boost online orders and enhance customer shopping experiences.",
      bg: "#18472e",
      textColor: "#79d8b6",
      btnBg: "#11301c",
      btnHover: "#17683e",
      btnText: "Talk to an Ecom Expert →",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.15,
      },
    }),
    exit: { opacity: 0, y: 40, scale: 0.95, transition: { duration: 0.3 } },
  };

  return (
    <section className="w-full max-w-7xl mx-auto mt-12 flex flex-col gap-8 z-10 border-t border-[#22244d] py-10 px-6 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-2"
      >
        PRODUCT ENGINEERING
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-[#cfd8ed] max-w-3xl text-base font-medium mb-6"
      >
        Discover the impact of bespoke digital solutions tailored precisely to
        your business’s distinct requirements. Our experienced team of
        professionals ensures you receive outstanding results that consistently
        exceed your expectations.
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.3 }} // animate in & out
            className="rounded-2xl p-6 flex flex-col justify-between shadow-lg transition-transform hover:scale-[1.02]"
            style={{ backgroundColor: service.bg }}
          >
            <div>
              <div
                className="font-semibold mb-2"
                style={{ color: service.textColor }}
              >
                {service.category}
              </div>
              <div className="text-white font-bold text-xl mb-2">
                {service.title}
              </div>
              <div className="text-[#b7c6ed] text-sm mb-6">
                {service.description}
              </div>
            </div>
            <button
              className="font-semibold py-2 rounded-lg mt-auto w-full transition-all"
              style={{
                backgroundColor: service.btnBg,
                color: service.textColor,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = service.btnHover)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = service.btnBg)
              }
            >
              {service.btnText}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
