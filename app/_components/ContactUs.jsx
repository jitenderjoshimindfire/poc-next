"use client";
import React, { useState } from "react";
import { Phone, Mail, FileText, User, ChevronDown } from "lucide-react";

const IllustrationPlaceholder = () => (
  <div className="relative w-full h-80 flex justify-center items-end">
    <div
      className="absolute top-1/4 w-44 h-44 rounded-full bg-blue-500/50 shadow-xl overflow-hidden flex justify-center items-center"
      style={{ zIndex: 5, transform: "translateY(-10px)" }}
    ></div>
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
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1 sr-only"
      >
        {label}
      </label>
      {isTextarea ? (
        <textarea
          id={name}
          name={name}
          rows="5"
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
    <div className="w-full max-w-6xl mx-auto rounded-[3rem] shadow-2xl overflow-hidden bg-white/10 p-1">
      <div className="flex flex-col lg:flex-row bg-white rounded-[2.8rem] min-h-[700px]">
        <div
          className="lg:w-7/10 p-8 md:p-12 flex flex-col justify-between text-white rounded-t-[2.8rem] lg:rounded-l-[2.8rem] lg:rounded-tr-none relative overflow-hidden z-10"
          style={{
            backgroundImage: "url('/scene1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-blue-700/80 z-0" />

          <div className="relative z-10">
            <IllustrationPlaceholder />

            <div className="text-center mt-[-40px] mb-12 relative z-30">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                CONTACT US
              </h1>
              <p className="mt-4 text-gray-200 text-base max-w-sm mx-auto">
                Talk with us to know how we can make you a part of a thriving
                digital landscape.
              </p>
            </div>

            <div className="max-w-xs mx-auto mb-4 z-40">
              <div className="p-6 rounded-xl shadow-lg bg-green-600 text-white">
                <div className="flex justify-between items-center py-2">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6" />
                    <span className="text-base font-light">Phone</span>
                  </div>
                  <span className="text-lg font-semibold">+1 315 308 0901</span>
                </div>

                <div className="border-t border-white/40 my-2"></div>

                <div className="flex justify-between items-center py-2">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6" />
                    <span className="text-base font-light">Email</span>
                  </div>
                  <span className="text-lg font-semibold ml-6">
                    <a href="mailto:sales@chromezy.com">sales@chromezy.com</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-3/10 relative rounded-b-[2.8rem] lg:rounded-r-[2.8rem] lg:rounded-bl-none flex justify-start items-center p-8 lg:p-0">
          <div className="w-full lg:w-[150%] p-8 bg-blue-100 rounded-[2.5rem] shadow-2xl relative z-30 lg:-ml-[50%] m-15">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 pt-6">
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
                <label
                  htmlFor="lookingFor"
                  className="block text-sm font-medium text-gray-700 mb-1 sr-only"
                >
                  What are you looking for?
                </label>
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
                  className="w-full bg-black text-white font-semibold py-3 rounded-xl shadow-lg shadow-black/30 hover:shadow-xl hover:opacity-90 transition duration-200 focus:outline-none focus:ring-4 focus:ring-black focus:ring-opacity-50"
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
