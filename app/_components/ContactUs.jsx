"use client";
import React, { useState } from "react";
import { Phone, Mail, ChevronDown } from "lucide-react";
const IllustrationPlaceholder = () => (
  <div className="relative w-full h-56 sm:h-72 md:h-80 flex justify-center items-end">
    <div
      className="absolute top-1/4 w-32 sm:w-40 md:w-44 h-32 sm:h-40 md:h-44 rounded-full bg-blue-500/50 shadow-xl overflow-hidden flex justify-center items-center"
      style={{ zIndex: 5, transform: "translateY(-10px)" }}
    >
      <img
        src="avatar.jpg"
        alt="Avatar"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
);

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    lookingFor: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const FormInput = ({ label, name, type = "text", isTextarea = false }) => (
    <div className="mb-4">
      {isTextarea ? (
        <textarea
          id={name}
          name={name}
          rows="4"
          required
          placeholder={label}
          value={formData[name]}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out resize-none shadow-inner placeholder-gray-500"
        ></textarea>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          required
          placeholder={label}
          value={formData[name]}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out shadow-inner placeholder-gray-500"
        />
      )}
    </div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto rounded-[3rem] shadow-2xl overflow-hidden bg-white/10 p-2">
      <div className="flex flex-col lg:flex-row bg-white rounded-[2.8rem] min-h-[600px]">
        <div
          className="w-full lg:w-7/10 p-6 sm:p-8 md:p-12 flex flex-col justify-between text-white rounded-t-[2.8rem] lg:rounded-l-[2.8rem] lg:rounded-tr-none relative overflow-hidden z-10"
          style={{
            backgroundImage: "url('/scene1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-blue-700/80 z-0" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <IllustrationPlaceholder />

            <div className="mt-[-30px] mb-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                CONTACT US
              </h1>
              <p className="mt-3 text-gray-200 text-sm sm:text-base max-w-xs sm:max-w-sm mx-auto">
                Talk with us to know how we can make you a part of a thriving
                digital landscape.
              </p>
            </div>

            <div className="max-w-xs mx-auto w-full mb-4">
              <div className="p-5 sm:p-6 rounded-xl shadow-lg bg-green-600 text-white">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-5 h-5" />
                      <span className="text-sm font-light">Phone</span>
                    </div>
                    <span className="text-base font-semibold">
                      +1 315 308 0901
                    </span>
                  </div>

                  <div className="border-t border-white/40 my-2"></div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-5 h-5" />
                      <span className="text-sm font-light">Email</span>
                    </div>
                    <a
                      href="mailto:sales@chromezy.com"
                      className="text-base font-semibold break-all"
                    >
                      sales@chromezy.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-3/10 flex justify-center items-center p-6 sm:p-8 lg:p-0">
          <div className="w-full lg:w-[140%] p-6 sm:p-8 bg-blue-100 rounded-[2.5rem] shadow-2xl relative z-30 lg:-ml-[45%]">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Let's Talk!
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <FormInput label="What's your name?" name="name" />
              <FormInput
                label="What's your email address?"
                name="email"
                type="email"
              />
              <FormInput
                label="What's your phone number?"
                name="phone"
                type="tel"
              />

              <div className="mb-4">
                <div className="relative">
                  <input
                    id="lookingFor"
                    name="lookingFor"
                    required
                    placeholder="What are you looking for?"
                    value={formData.lookingFor}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out shadow-inner pr-10 placeholder-gray-500"
                  />
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <FormInput
                label="How can we help you?"
                name="message"
                isTextarea={true}
              />

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-black text-white font-semibold py-3 rounded-xl shadow-lg shadow-black/30 hover:opacity-90 transition duration-200 focus:outline-none focus:ring-4 focus:ring-black focus:ring-opacity-50"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
