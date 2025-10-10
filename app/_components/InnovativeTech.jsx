"use client";

import { motion } from "framer-motion";

export default function InnovativeTechno() {
  const techSections = [
    {
      number: "01",
      title: "Web App Development",
      technologies: [
        {
          name: "React",
          icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        },
        {
          name: "Node",
          icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
        },
        {
          name: "Angular",
          icon: "https://upload.wikimedia.org/wikipedia/commons/3/39/Angular_logo_2022.svg",
        },
        {
          name: "Vue",
          icon: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
        },
        {
          name: "ExpressJS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
        },
        {
          name: "AdobeXD",
          icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",
        },
        {
          name: "Figma",
          icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
        },
        {
          name: "Whimsical",
          icon: "https://assets.whimsical.com/favicon/favicon-32x32.png",
        },
      ],
    },
    {
      number: "02",
      title: "Mobile App Development",
      technologies: [
        {
          name: "Flutter",
          icon: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png",
        },
        {
          name: "Kotlin",
          icon: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
        },
        {
          name: "Swift",
          icon: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg",
        },
        {
          name: "React Native",
          icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        },
        {
          name: "AdobeXD",
          icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",
        },
        {
          name: "Figma",
          icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
        },
      ],
    },
    {
      number: "03",
      title: "E-commerce",
      technologies: [
        {
          name: "Shopify",
          icon: "https://cdn.shopify.com/static/shopify-favicon.png",
        },
        {
          name: "WooCommerce",
          icon: "https://logo.svgcdn.com/l/woocommerce-icon.svg",
        },
        {
          name: "Prestashop",
          icon: "https://upload.wikimedia.org/wikipedia/commons/a/ad/PrestaShop_Logo.svg",
        },
      ],
    },
    {
      number: "04",
      title: "Analytics",
      technologies: [
        {
          name: "Python",
          icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
        },
        {
          name: "PowerBi",
          icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
        },
        {
          name: "Tableau",
          icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png",
        },
        {
          name: "Amazon QuickSight",
          icon: "https://quicksight.aws.amazon.com/favicon.ico",
        },
        {
          name: "Apache Spark",
          icon: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg",
        },
      ],
    },
    {
      number: "05",
      title: "Data & Cloud",
      technologies: [
        {
          name: "Azure",
          icon: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
        },
        {
          name: "AWS",
          icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
        },
        {
          name: "Docker",
          icon: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
        },
        {
          name: "Kubernetes",
          icon: "https://logo.svgcdn.com/l/kubernetes.svg",
        },
        {
          name: "Google Cloud",
          icon: "https://upload.wikimedia.org/wikipedia/commons/5/57/Google_Cloud_logo.svg",
        },
        {
          name: "Ola Krutrim",
          icon: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg",
        },
      ],
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row my-20 lg:my-40 px-4 sm:px-6 gap-20">
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center lg:text-left gap-10 py-10 px-6 border border-white/20 rounded-3xl lg:max-w-md w-full bg-white/5"
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: [0.9, 1.05, 1] }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
        >
          <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-5 leading-tight">
            INNOVATIVE TECHNOLOGIES KEEPING US AHEAD
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[#cfd8ed] text-base sm:text-lg font-medium mb-8 max-w-lg mx-auto lg:mx-0"
        >
          Discover the impact of bespoke digital solutions tailored precisely to
          your business's distinct requirements.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full h-52 sm:h-64 md:h-72 bg-transparent rounded-2xl flex items-center justify-center"
        >
          <img
            src="/innovate.png"
            alt="Technology Illustration"
            className="w-full h-full object-contain opacity-80"
            style={{ mixBlendMode: "lighten" }}
          />
        </motion.div>
      </motion.section>

      <section className="flex-1 py-10 px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:gap-8">
          {techSections.map((section, index) => (
            <motion.div
              key={section.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 group hover:bg-white/5 p-5 sm:p-6 rounded-2xl transition-all"
            >
              <div className="flex-shrink-0 flex justify-center sm:justify-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-400/30 group-hover:bg-blue-500/30 transition-colors"
                >
                  <span className="text-blue-300 font-bold text-base sm:text-lg">
                    {section.number}
                  </span>
                </motion.div>
              </div>

              <div className="flex-1 text-center sm:text-left">
                <motion.h3
                  whileInView={{ scale: [0.95, 1.05, 1] }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  className="text-white font-bold text-lg sm:text-xl mb-3"
                >
                  {section.title}
                </motion.h3>

                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  {section.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="px-3 py-1 bg-white/10 rounded-full text-[#cfd8ed] text-xs sm:text-sm border border-white/10 flex items-center gap-2"
                    >
                      <img
                        src={tech.icon}
                        alt={`${tech.name} logo`}
                        className="w-4 h-4 sm:w-5 sm:h-5 mr-1"
                        loading="lazy"
                        style={{
                          minWidth: "16px",
                          minHeight: "16px",
                          background: "transparent",
                          borderRadius: "2px",
                        }}
                        onError={(e) => (e.target.style.display = "none")}
                      />
                      {tech.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
