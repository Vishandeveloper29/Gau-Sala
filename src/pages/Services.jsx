import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import herobanner from '../assets/images/serviceHeroBanner.png'
import { BriefcaseMedical, Leaf, Ambulance, GraduationCap, Sprout, Phone, ShieldPlus, Trees } from "lucide-react";
const Services = () => {
  return (
    <div>
      <Navbar />
      <section className="relative">
        <div className="relative overflow-hidden p-5 lg:p-20">
          <img
            src={herobanner}
            alt="Service Hero Banner"
            className="h-[600px] w-full object-cover rounded-4xl"
          />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="text-center text-white max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold drop-shadow-lg">
                Holistic Care for Every Soul
              </h1>
              <p className="mt-4 text-sm md:text-base lg:text-lg text-white/90">
                Providing comprehensive sanctuary, medical treatment, and nutritional support
                for rescued and elderly bovines.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#eef1e7] px-5 lg:px-20 py-24">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Our Core Services
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-5 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <div className="w-fit p-3 rounded-2xl bg-green-100 mb-6">
              <BriefcaseMedical
                size={30}
                className="text-green-700"
              />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              24/7 Veterinary Care
            </h2>
            <p className="text-gray-600 leading-8">
              Round-the-clock medical attention from certified veterinarians.
              We provide emergency surgeries, routine checkups, and specialized
              treatments for injuries and chronic conditions.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <div className="w-fit p-3 rounded-2xl bg-green-100 mb-6">
              <Leaf
                size={30}
                className="text-green-700"
              />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Nutritious Fodder
            </h2>
            <p className="text-gray-600 leading-8">
              Customized dietary plans ensuring optimal nutrition. We source
              high-quality organic green fodder, grains, and essential mineral
              supplements tailored to each resident’s needs.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <div className="w-fit p-3 rounded-2xl bg-green-100 mb-6">
              <Ambulance
                size={30}
                className="text-green-700"
              />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Rescue Ambulance
            </h2>
            <p className="text-gray-600 leading-8">
              Rapid response fleet equipped to safely transport injured or abandoned
              animals from urban and rural areas directly to our medical facilities
              for immediate care.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:col-span-2 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-fit h-fit p-3 rounded-2xl bg-green-100">
                <GraduationCap
                  size={30}
                  className="text-green-700"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Goshala Education
                </h2>
                <p className="text-gray-600 leading-8">
                  Community outreach programs designed to educate farmers and local
                  communities on humane animal husbandry, sustainable practices,
                  and the ethical treatment of aging livestock.
                  We host regular workshops and school visits to foster a culture
                  of compassion and responsibility.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <div className="w-fit p-3 rounded-2xl bg-green-100 mb-6">
              <Sprout
                size={30}
                className="text-green-700"
              />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Bio-Gas & Farming
            </h2>
            <p className="text-gray-600 leading-8">
              Sustainable waste management converting cow dung into clean bio-gas
              energy and premium organic fertilizers to support local eco-friendly
              agriculture initiatives.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#eef1e7] px-5 lg:px-20 py-24 overflow-hidden">
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            Our Rescue Workflow
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A structured approach to ensure every animal receives timely
            and effective care.
          </p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-14 left-0 w-full h-[2px] bg-gray-300"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-28 h-28 rounded-full bg-white border-4 border-[#eef1e7] shadow-lg flex items-center justify-center mb-6 hover:-translate-y-2 transition duration-300">
                <Phone
                  size={36}
                  className="text-green-700"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                1. Report
              </h2>
              <p className="text-gray-600 leading-8 max-w-xs">
                Community members alert our helpline regarding
                animals in distress.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-28 h-28 rounded-full bg-white border-4 border-[#eef1e7] shadow-lg flex items-center justify-center mb-6 hover:-translate-y-2 transition duration-300">
                <Ambulance
                  size={36}
                  className="text-green-700"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                2. Rescue
              </h2>
              <p className="text-gray-600 leading-8 max-w-xs">
                Our trained ambulance team arrives on-site
                for immediate extraction.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-28 h-28 rounded-full bg-white border-4 border-[#eef1e7] shadow-lg flex items-center justify-center mb-6 hover:-translate-y-2 transition duration-300">
                <ShieldPlus
                  size={36}
                  className="text-green-700"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                3. Rehab
              </h2>
              <p className="text-gray-600 leading-8 max-w-xs">
                Intensive medical treatment, quarantine,
                and nutritional stabilization.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-28 h-28 rounded-full bg-white border-4 border-[#eef1e7] shadow-lg flex items-center justify-center mb-6 hover:-translate-y-2 transition duration-300">
                <Trees
                  size={36}
                  className="text-green-700"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                4. Sanctuary
              </h2>
              <p className="text-gray-600 leading-8 max-w-xs">
                Integration into the main herd for a peaceful,
                lifelong sanctuary stay.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Services
