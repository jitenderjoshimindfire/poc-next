"use client";

const insights = [
  {
    image: "/px1.jpg",
    title: "Successful MVP Launches That Changed the Game.",
    description:
      "Discover the secrets behind game-changing MVP launches! From lean startups to industry giants, explore how these innovative launches disrupted markets and paved the way for success. Click to uncover the strategies that revolutionized product development.",
    link: "#",
  },
  {
    image: "/px2.jpg",
    title: "How Our AI Product Development Company is Pioneering Innovation?",
    description:
      "Discover how our product development company pioneers innovation. From groundbreaking technologies to creative strategies, we're shaping the future. Click to explore our journey and join us in revolutionizing industries.",
    link: "#",
  },
  {
    image: "/px3.jpg",
    title:
      "Optimizing E-commerce Sales with AI-Driven Product Recommendations.",
    description:
      "Boost your e-commerce sales with AI-powered product recommendations. Learn how smart algorithms can enhance customer experience and drive conversions. Read our blog for actionable insights!",
    link: "#",
  },
];

export default function FeaturedInsights() {
  return (
    <section className="w-full max-w-7xl mx-auto flex flex-col gap-8 px-6 py-16">
      <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-2">
        FEATURED INSIGHTS
      </h2>
      <div className="text-[#cfd8ed] text-lg font-medium mb-8">
        Were you looking to explore a specific topic? You’re in the right spot.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {insights.map((insight, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-[#1a1b26] flex flex-col shadow-lg border border-white/10 pb-6 transition-transform hover:scale-[1.02]"
            style={{ minHeight: 430 }}
          >
            <div className="h-56 w-full overflow-hidden rounded-t-2xl">
              <img
                src={insight.image}
                alt={insight.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="px-6 mt-6 flex flex-col flex-1">
              <div className="flex flex-row items-start justify-between">
                <div className="text-white font-bold text-lg mb-2 leading-snug">
                  {insight.title}
                </div>
                <div>
                  <a
                    href={insight.link}
                    aria-label="Read more"
                    className="h-9 w-9 flex items-center justify-center rounded-full bg-[#23243b] hover:bg-[#31325c] transition-colors"
                  >
                    <span className="text-2xl text-white">↗</span>
                  </a>
                </div>
              </div>

              <div className="text-[#cfd8ed] text-base font-normal flex-1">
                {insight.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
