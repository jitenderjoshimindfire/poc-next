"use client";
import React from "react";

const SuccessStories = () => {
  const stories = [
    {
      img: "/p1.jpg",
      title: "FinConnect",
      desc: "Customer Relationship Management (CRM)",
    },
    {
      img: "/p2.jpg",
      title: "HealthSync",
      desc: "Health Tracking App for Patients and Doctors",
    },
    {
      img: "/p3.jpg",
      title: "Commerce360",
      desc: "Online Store, Multivendor Marketplace & E-commerce Apps",
    },
    {
      img: "/p4.jpg",
      title: "PrintwithAI",
      desc: "Web-to-Print Software / Online Design Tool / Product Designer Tool",
    },
    {
      img: "/p5.jpg",
      title: "PM Insights",
      desc: "Project Management Tool (SaaS & Hosted)",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto mt-20 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        <div className="flex flex-col justify-center">
          <h2 className="text-white font-extrabold text-4xl sm:text-5xl mb-4 leading-tight">
            SUCCESS <br /> STORIES
          </h2>
          <p className="text-[#cfd8ed] text-base font-medium">
            Dummy ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>
        {stories.map((item, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl overflow-hidden group bg-[#ffffff0a] backdrop-blur-xl"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute top-4 left-4 bg-white/80 text-black text-xs px-3 py-1 rounded-lg">
              Success Stories
            </div>

            <button className="absolute top-4 right-4 bg-black/40 hover:bg-white/20 transition p-2 rounded-full">
              <span className="text-white text-lg">↗</span>
            </button>

            <div className="absolute bottom-0 left-0 right-4 bg-white rounded-tr-2xl p-4 shadow-lg">
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
