import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { RiVerifiedBadgeFill, } from "react-icons/ri";
import { BriefcaseMedical, Toolbox, ShieldCog, FileText} from "lucide-react";

const Transparency = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-amber-50 py-32 px-6 md:px-16 lg:px-32">
        <div className="max-w-4xl mx-auto text-center">
          <span className="bg-green-100 py-2 px-5 rounded-full border-2 border-green-600 inline-block mb-5 text-sm md:text-base font-semibold tracking-widest uppercase text-green-700">
            Transparency & Care
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
            Our Commitment to Trust
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-8">
            Transparency is at the heart of everything we do. Every donation
            directly supports the comfort, medical care, nourishment, and
            dignity of the animals living in our sanctuary. We believe our
            supporters deserve complete clarity on how their kindness creates
            real change every single day.
          </p>
        </div>
      </section>
      <section className="bg-amber-50 py-20 px-5 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-5">
          <div className="bg-[#eef2e9] rounded-2xl shadow-sm p-6 lg:p-8 flex-1">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-10">
              Where Your Support Goes
            </h1>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-44 h-44 rounded-full border-[8px] border-green-700 flex items-center justify-center">
                <div className="absolute top-0 left-0 w-full h-full rounded-full border-[8px] border-green-200 border-r-transparent border-b-transparent rotate-[-35deg]" />
                <div className="text-center">
                  <h2 className="text-4xl font-black text-green-700">85%</h2>
                  <p className="text-gray-600 font-medium">Direct Care</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 flex-1 w-full">
                <div className="bg-white rounded-2xl p-5 flex items-center justify-between border-l-4 border-green-700">
                  <div className="flex items-center gap-4">
                    <BriefcaseMedical size={24} className="text-green-700" />
                    <div>
                      <h2 className="font-bold text-gray-900">
                        Animal Care & Health
                      </h2>
                      <p className="text-gray-500 text-sm">
                        Fodder, medicine, shelter
                      </p>
                    </div>
                  </div>
                  <span className="text-3xl font-black text-green-700">
                    85%
                  </span>
                </div>
                <div className="bg-white rounded-2xl p-5 flex items-center justify-between border-l-4 border-green-300">
                  <div className="flex items-center gap-4">
                    <Toolbox size={24} className="text-green-400" />
                    <div>
                      <h2 className="font-bold text-gray-900">
                        Facility Maintenance
                      </h2>
                      <p className="text-gray-500 text-sm">
                        Upkeep, clean water systems
                      </p>
                    </div>
                  </div>
                  <span className="text-3xl font-black text-green-300">
                    10%
                  </span>
                </div>
                <div className="bg-white rounded-2xl p-5 flex items-center justify-between border-l-4 border-gray-300">
                  <div className="flex items-center gap-4">
                    <ShieldCog size={24} className="text-gray-500" />
                    <div>
                      <h2 className="font-bold text-gray-900">
                        Administration
                      </h2>
                      <p className="text-gray-500 text-sm">
                        Compliance, staff, operations
                      </p>
                    </div>
                  </div>
                  <span className="text-3xl font-black text-gray-500">
                    5%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-700 rounded-2xl shadow-sm px-8 py-12 flex flex-col items-center justify-center text-center text-white lg:w-[360px]">
            <div className="bg-green-500/30 p-4 rounded-full mb-6">
              <RiVerifiedBadgeFill size={52} className="text-green-200" />
            </div>
            <h1 className="text-3xl font-black mb-4">
              Audited for Transparency
            </h1>
            <p className="text-green-100 leading-8 mb-8">
              Our financials are independently audited annually to
              ensure the highest standards of accountability and
              ethical stewardship.
            </p>
            <button className="bg-white text-green-700 font-semibold px-8 py-4 rounded-full hover:bg-green-100 transition">
              View Certificate
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#f5f7ef] py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900">
              Download Annual Reports
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm flex-1 p-6 flex flex-col items-center text-center hover:shadow-md transition">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <FileText size={22} className="text-gray-500" />
              </div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                Annual Impact Report 2023
              </h2>
              <p className="text-sm text-gray-500 leading-6 mb-5">
                Detailed overview of care initiatives, operations, and
                financial statements.
              </p>
              <button className="text-green-700 font-medium text-sm hover:text-green-800 transition">
                 Download PDF
              </button>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm flex-1 p-6 flex flex-col items-center text-center hover:shadow-md transition">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <FileText size={22} className="text-gray-500" />
              </div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                Financial Audit 2023
              </h2>
              <p className="text-sm text-gray-500 leading-6 mb-5">
                Independent auditor report for complete financial
                breakdown.
              </p>
              <button className="text-green-700 font-medium text-sm hover:text-green-800 transition">
                 Download PDF
              </button>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm flex-1 p-6 flex flex-col items-center text-center hover:shadow-md transition">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <FileText size={22} className="text-gray-500" />
              </div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                Annual Impact Report 2022
              </h2>
              <p className="text-sm text-gray-500 leading-6 mb-5">
                Historical data, care metrics, and past financial
                statements.
              </p>
              <button className="text-green-700 font-medium text-sm hover:text-green-800 transition">
                 Download PDF
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Transparency
