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
    <div className="w-full max-w-7xl mx-auto flex flex-row my-40">
      <section className="flex flex-col items-center gap-12 py-16 px-6 border-b border-[#22244d] border border-white/40 rounded-4xl max-w-xl">
        <div className="flex-1 text-left">
          <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-6">
            INNOVATIVE TECHNOLOGIES KEEPING US AHEAD
          </h2>
          <div className="text-[#cfd8ed] text-lg font-medium mb-8 max-w-2xl mx-auto">
            Discover the impact of bespoke digital solutions
            <br />
            tailored precisely to your business's distinct
            <br /> requirements.
          </div>
        </div>

        <div className="flex-1 flex text-left w-full">
          <div className="w-full max-w-md h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-400/30 flex items-center justify-center">
            <div className="text-white/60 text-center">
              <div className="text-4xl mb-2">🚀</div>
              <div>Technology Illustration</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="flex flex-col gap-8">
          {techSections.map((section, index) => (
            <div
              key={index}
              className="flex gap-6 group hover:bg-white/5 p-6 rounded-2xl transition-all"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-400/30 group-hover:bg-blue-500/30 transition-colors">
                  <span className="text-blue-300 font-bold text-lg">
                    {section.number}
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-4">
                  {section.title}
                </h3>

                {Array.isArray(section.technologies[0]) ||
                typeof section.technologies[0] === "object" ? (
                  <div className="space-y-4">
                    {section.technologies.map((category, catIndex) => (
                      <div key={catIndex}>
                        <div className="text-blue-300 font-semibold text-sm mb-2">
                          {category.category}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {category.items.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-white/10 rounded-full text-[#cfd8ed] text-sm border border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {section.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 rounded-full text-[#cfd8ed] text-sm border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
