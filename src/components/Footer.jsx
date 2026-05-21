import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-10">
      <div className="mx-4 md:mx-10 lg:mx-20 rounded-3xl bg-white px-6 py-10 shadow-sm">
        <div className="flex flex-col gap-10 md:flex-row md:flex-wrap lg:flex-nowrap lg:justify-between">
          <div className="w-full md:w-[45%] lg:w-[32%]">
            <h1 className="font-bricolage text-2xl font-semibold text-green-800">
              Kam Denu GauShala
            </h1>
            <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500">
              Compassionate care for cows, nurturing a better world. We provide
              safe shelter, medical support, and dignity for rescued animals.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-green-800">Organization</h2>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <a href="/about" className="text-gray-500 hover:text-green-700">
                About Us
              </a>
              <a href="/impact" className="text-gray-500 hover:text-green-700">
                Impact Report
              </a>
              <a href="/gallery" className="text-gray-500 hover:text-green-700">
                Gallery
              </a>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-green-800">Support</h2>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <a href="/donate" className="text-gray-500 hover:text-green-700">
                Donate
              </a>
              <a href="/volunteer" className="text-gray-500 hover:text-green-700">
                Volunteer
              </a>
              <a href="/sponsorship" className="text-gray-500 hover:text-green-700">
                Sponsorship
              </a>
            </div>
          </div>
          <div className="w-full md:w-[45%] lg:w-[28%]">
            <h2 className="font-semibold text-green-800">Contact</h2>
            <div className="mt-3 flex flex-col gap-3 text-sm text-gray-500">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 text-green-700" size={20} strokeWidth={1.5} />
                <span>123 Farm Road, Animal Town</span>
              </p>
              <p className="flex items-start gap-3 break-all">
                <Mail className="mt-0.5 text-green-700" size={20} strokeWidth={1.5} />
                <span>info@kamdenugaushala.org</span>
              </p>
              <p className="flex items-start gap-3">
                <Phone className="mt-0.5 text-green-700" size={20} strokeWidth={1.5} />
                <span>(123) 456-7890</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="px-4 py-5 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Kam Denu GauShala. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;