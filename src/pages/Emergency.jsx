import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { TriangleAlert } from 'lucide-react'

const Emergency = () => {
  return (
    <div>
      <Navbar />
      <section className="mt-2 bg-red-700 py-3 px-4">
        <div className="flex items-center justify-center gap-3 text-white">
          <TriangleAlert size={22} className="animate-pulse" /><h1 className="text-sm md:text-base font-bold tracking-wide">EMERGENCY HELPLINE: +1234568790 — Call for Immediate Rescue</h1>
        </div>
      </section>
      <section className="bg-[#f6fbef] px-4 py-14 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <div>
            <h1 className="text-4xl font-black text-green-800 md:text-5xl">
              Report an Emergency
            </h1>
            <p className="mt-4 max-w-2xl text-gray-600">
              If you spot a cow in distress, injured, or abandoned, please notify us
              immediately. Every second counts in saving a life.
            </p>
          </div>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex flex-1 flex-col gap-8">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-700 text-lg font-bold text-white shadow-md">
                  1
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Report</h2>
                  <p className="mt-2 max-w-md leading-7 text-gray-600">
                    Call our emergency helpline immediately or fill out the form with
                    accurate details and photos to help us prepare.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-300 text-lg font-bold text-green-800 shadow-md">
                  2
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Secure</h2>
                  <p className="mt-2 max-w-md leading-7 text-gray-600">
                    If safe to do so, try to keep the animal away from traffic or
                    further danger. Do not force them to move if they are severely
                    injured.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-200 text-lg font-bold text-gray-800 shadow-md">
                  3
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Stay with them</h2>
                  <p className="mt-2 max-w-md leading-7 text-gray-600">
                    Wait near the animal until our rescue team arrives. Your presence
                    can help keep them calm and guide our team directly to the
                    location.
                  </p>
                </div>
              </div>
              <div className="max-w-md rounded-xl border border-red-200 bg-red-100 p-5">
                <h3 className="font-bold text-red-700">Important Notice</h3>
                <p className="mt-2 text-sm leading-6 text-red-700">
                  Please only use this form for immediate emergencies. For general
                  inquiries or non-urgent matters, please use our contact page.
                </p>
              </div>
            </div>
            <form className="flex-1 rounded-xl border border-gray-300 bg-white p-5 shadow-md md:p-8">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-5 md:flex-row">
                  <div className="flex flex-1 flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-800">
                      Your Name
                    </label>
                    <input
                      type="text" placeholder="Full Name" className="rounded-md border border-gray-300 bg-[#f3f8ed] px-4 py-3 outline-none focus:border-green-700" />
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-800">
                      Phone Number *
                    </label>
                    <input type="tel" placeholder="+91 00000 00000" className="rounded-md border border-gray-300 bg-[#f3f8ed] px-4 py-3 outline-none focus:border-green-700" />
                  </div>
                </div>
                <div className="flex flex-col gap-5 md:flex-row">
                  <div className="flex flex-1 flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-800">
                      Emergency Location *
                    </label>
                    <input type="text" placeholder="Address or specific landmarks" className="rounded-md border border-gray-300 bg-[#f3f8ed] px-4 py-3 outline-none focus:border-green-700" />
                  </div>
                  <button type="button" className="mt-auto rounded-md border border-gray-300 bg-[#e8ede2] px-5 py-3 text-sm font-semibold text-gray-800 hover:bg-green-700 hover:text-white" >
                    Detect Location
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-800">
                    Situation Details
                  </label>
                  <textarea
                    placeholder="Describe the animal's condition and the situation..."
                    className="min-h-28 resize-none rounded-md border border-gray-300 bg-[#f3f8ed] px-4 py-3 outline-none focus:border-green-700"
                  ></textarea>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-800">
                    Upload Photo
                  </label>
                  <div className="flex min-h-28 cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-300 text-center">
                    <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
                  </div>
                </div>
                <button type="submit" className="mt-4 rounded-lg bg-green-700 py-4 font-bold text-white shadow-md hover:bg-green-800">
                  Submit Emergency Report
                </button>
                <p className="text-center text-xs text-gray-500">
                  By submitting, you confirm the urgency of this report.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Emergency
