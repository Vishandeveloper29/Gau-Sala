import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import herobanner from "../assets/images/herobannersupport.png";
import qrCode from "../assets/images/qrcode.png";

import {
  BriefcaseMedical,
  Wheat,
  Fence,
  Heart,
  Wallet,
  ShieldCheck,
} from "lucide-react";

const donationBenefits = [
  {
    id: 1,
    logo: <BriefcaseMedical size={28} />,
    title: "Medical Aid",
    description:
      "Providing necessary veterinary care, medicines, and emergency treatments for rescued cows.",
  },

  {
    id: 2,
    logo: <Wheat size={28} />,
    title: "Nutritious Fodder",
    description:
      "Ensuring a daily supply of fresh, high-quality grass, grains, and supplements.",
  },

  {
    id: 3,
    logo: <Fence size={28} />,
    title: "Infrastructure",
    description:
      "Improving living conditions and building sustainable facilities for rescued cows.",
  },

  {
    id: 4,
    logo: <Heart size={28} />,
    title: "Lifelong Sanctuary",
    description:
      "Providing a safe and loving home for cows rescued from neglect, abuse, or slaughter.",
  },
];

const Support = () => {
  return (
    <>
      <Navbar />
      <section className="relative min-h-screen overflow-hidden">
        <img
          src={herobanner}
          alt="Support Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6 text-center">
          <div className="max-w-4xl flex flex-col items-center gap-8">
            <span className="text-green-300 uppercase tracking-[5px] text-sm md:text-base font-semibold">
              Support Our Mission
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
              Your Small Act,
              <br />
              Their New Life
            </h1>
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl">
              Every contribution directly supports the wellbeing,
              medical care, nourishment, and lifelong sanctuary
              of rescued cows.
            </p>
            <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:scale-105 transition-all duration-300">
              Make an Impact Today
            </button>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-amber-50 via-white to-green-50 py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="text-center flex flex-col items-center gap-6">
            <span className="text-green-600 uppercase tracking-[4px] font-semibold text-sm">
              Why Donate
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 leading-tight">
              Why Your Donation Matters
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              Your support translates directly into tangible care,
              improved facilities, nutritious food, and medical
              attention for rescued cows living in our sanctuary.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {donationBenefits.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-3xl p-8 border border-green-100 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-green-100 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-all duration-500"></div>

                <div className="relative z-10 w-16 h-16 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                  {item.logo}
                </div>

                <h2 className="relative z-10 text-2xl font-bold text-green-900 mb-4">
                  {item.title}
                </h2>

                <p className="relative z-10 text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 py-16 bg-[#f1f3ed]">
        <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-6">
          <div className="flex-1 bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-100">
              <Wallet size={18} className="text-green-700" />
              <h2 className="text-xl font-semibold text-gray-800">
                Direct Transfer Details
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-[280px] flex flex-col items-center justify-center p-8 border-b lg:border-b-0 lg:border-r border-gray-100">
                <div className="relative w-48 h-48 rounded-2xl border-2 border-dashed border-gray-300 bg-[#f5f6f1] flex items-center justify-center">
                  <span className="absolute top-2 left-2 w-7 h-7 border-l-[3px] border-t-[3px] border-green-700 rounded-tl-lg"></span>
                  <span className="absolute top-2 right-2 w-7 h-7 border-r-[3px] border-t-[3px] border-green-700 rounded-tr-lg"></span>
                  <span className="absolute bottom-2 left-2 w-7 h-7 border-l-[3px] border-b-[3px] border-green-700 rounded-bl-lg"></span>
                  <span className="absolute bottom-2 right-2 w-7 h-7 border-r-[3px] border-b-[3px] border-green-700 rounded-br-lg"></span>
                  <img
                    src={qrCode}
                    alt="QR Code"
                    className="w-24 h-24 object-contain opacity-70"
                  />
                </div>
                <p className="mt-5 text-sm text-gray-500 text-center">
                  Scan to Pay via any UPI App
                </p>
              </div>
              <div className="flex-1 p-8 flex flex-col gap-8">
                <div>
                  <p className="text-xs uppercase tracking-[3px] text-gray-400 mb-3">
                    UPI ID
                  </p>
                  <div className="bg-[#f5f6f1] border border-gray-200 rounded-xl px-5 py-4 text-gray-800 text-base">
                    kaamdenu.donate@okbank
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[3px] text-gray-400 mb-2">
                      Bank Name
                    </p>
                    <h3 className="text-xl font-medium text-gray-800">
                      State Bank of India
                    </h3>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[3px] text-gray-400 mb-2">
                      Account Name
                    </p>
                    <h3 className="text-xl font-medium text-gray-800">
                      Kaam Denu Gaushala Trust
                    </h3>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[3px] text-gray-400 mb-2">
                      Account Number
                    </p>
                    <h3 className="text-xl font-medium text-gray-800">
                      3123 4567 8901
                    </h3>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[3px] text-gray-400 mb-2">
                      IFSC Code
                    </p>
                    <h3 className="text-xl font-medium text-gray-800">
                      SBIN0001234
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[380px] bg-[#eef2e8] border border-[#cfd8c8] rounded-3xl p-8 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <ShieldCheck size={22} className="text-green-700" />
              </div>
              <h2 className="text-3xl font-semibold text-gray-800">
                Our Promise to You
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              We believe in complete transparency. Every rupee
              you donate is meticulously tracked and allocated
              to ensure maximum impact.
            </p>
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 text-lg">
                    Direct Animal Care
                  </span>
                  <span className="text-green-700 font-semibold text-lg">
                    85%
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-[85%] h-full bg-green-700 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 text-lg">
                    Facility Maintenance
                  </span>
                  <span className="text-green-600 font-semibold text-lg">
                    10%
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-[10%] h-full bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 text-lg">
                    Administrative
                  </span>
                  <span className="text-green-500 font-semibold text-lg">
                    5%
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-[5%] h-full bg-green-400 rounded-full"></div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 italic pt-2">
              * Annual audit reports are available upon request
              for sustained donors.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Support;