"use client";

export default function InnovativeTechno() {
  const techSections = [
    {
      number: "01",
      title: "Web App Development",
      technologies: [
        "React",
        "Node",
        "Angular",
        "Vue",
        "ExpressJS",
        "AdobeXD",
        "Figma",
        "Whimsical",
      ],
    },
    {
      number: "02",
      title: "Mobile App Development",
      technologies: [
        "Flutter",
        "Kotlin",
        "Swift",
        "React Native",
        "AdobeXD",
        "Figma",
      ],
    },
    {
      number: "03",
      title: "E-commerce",
      technologies: ["Shopify", "WooCommerce", "Prestashop"],
    },
    {
      number: "04",
      title: "Analytics",
      technologies: [
        "Python",
        "PowerBi",
        "Tableau",
        "Amazon QuickSight",
        "Apache Spark",
      ],
    },
    {
      number: "05",
      title: "Data & Cloud",
      technologies: [
        "Azure",
        "AWS",
        "Docker",
        "Kubernetes",
        "Google Cloud",
        "Ola Krutrim",
      ],
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row my-20 lg:my-40 px-4 sm:px-6 gap-12">
      <section className="flex flex-col items-center text-center lg:text-left gap-10 py-10 px-6 border border-white/20 rounded-3xl lg:max-w-xl bg-white/5">
        <div className="flex-1">
          <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-5 leading-tight">
            INNOVATIVE TECHNOLOGIES KEEPING US AHEAD
          </h2>
          <p className="text-[#cfd8ed] text-base sm:text-lg font-medium mb-8 max-w-lg mx-auto lg:mx-0">
            Discover the impact of bespoke digital solutions tailored precisely
            to your business's distinct requirements.
          </p>
        </div>

        <div className="flex-1 w-full">
          <div className="w-full h-52 sm:h-64 md:h-72 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-400/30 flex items-center justify-center">
            <div className="text-white/70 text-center">
              <div className="text-3xl sm:text-4xl mb-2">🚀</div>
              <div className="text-sm sm:text-base">
                Technology Illustration
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex-1 py-10 px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:gap-8">
          {techSections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 group hover:bg-white/5 p-5 sm:p-6 rounded-2xl transition-all"
            >
              <div className="flex-shrink-0 flex justify-center sm:justify-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-400/30 group-hover:bg-blue-500/30 transition-colors">
                  <span className="text-blue-300 font-bold text-base sm:text-lg">
                    {section.number}
                  </span>
                </div>
              </div>

              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-white font-bold text-lg sm:text-xl mb-3">
                  {section.title}
                </h3>

                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  {section.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 rounded-full text-[#cfd8ed] text-xs sm:text-sm border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
