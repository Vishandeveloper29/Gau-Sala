import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroimage from "../assets/images/contacthero.png";
import mapimage from "../assets/images/map.png";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#f6fbef] overflow-x-hidden">
      <Navbar />
      <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-[#f6fbef]">
        <img
          src={heroimage}
          alt="Contact Hero Banner"
          className="absolute top-0 left-0 w-full h-[420px] object-cover opacity-25"
        />
        <div className="absolute top-0 left-0 w-full h-[420px] bg-gradient-to-b from-white/40 to-[#f6fbef]" />
        <div className="relative z-10 px-5 py-24 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Get in Touch
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-gray-700 leading-7">
            We'd love to hear from you. Whether you have a question, want to
            volunteer, or wish to support our cause, our team is here to help.
          </p>
        </div>
      </section>
      <section className="px-5 lg:px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-3xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Send a Message
            </h2>

            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-[#f6fbef] border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-600"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-[#f6fbef] border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-600"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="bg-[#f6fbef] border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-600"
              />
              <textarea
                rows="6"
                placeholder="Write your message..."
                className="bg-[#f6fbef] border border-gray-200 rounded-xl px-4 py-3 outline-none resize-none focus:border-green-600"
              ></textarea>
              <button className="bg-green-700 hover:bg-green-800 transition text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-semibold text-gray-900">
              Contact Information
            </h2>
            <p className="text-gray-600 leading-7">
              Reach out directly using the information below. We aim to respond
              to all inquiries as soon as possible.
            </p>
            <div className="bg-white rounded-2xl p-5 shadow-sm flex gap-4">
              <div className="bg-green-100 text-green-700 p-3 rounded-full h-fit">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Location</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Kamdhenu Gaushala, Gandhidham, Gujarat
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm flex gap-4">
              <div className="bg-green-100 text-green-700 p-3 rounded-full h-fit">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600 text-sm mt-1">+91 98765 43210</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm flex gap-4">
              <div className="bg-green-100 text-green-700 p-3 rounded-full h-fit">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600 text-sm mt-1">
                  contact@kamdhenugaushala.org
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm flex gap-4">
              <div className="bg-green-100 text-green-700 p-3 rounded-full h-fit">
                <Clock size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Working Hours</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Monday - Sunday, 8:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-24 px-5 lg:px-20">
        <div className="rounded-4xl overflow-hidden shadow-2xl border border-gray-200">
          <iframe
            title="Kamdhenu Gaushala Location"
            src="https://www.google.com/maps?q=Kamdhenu%20Gau%20Seva%20Trust%20Gandhidham%20Gujarat&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[500px] border-0"
          ></iframe>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;