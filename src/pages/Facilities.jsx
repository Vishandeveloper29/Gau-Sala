import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import heroimage from '../assets/images/Herobackgroundfacility.png'
import hospitalImg from '../assets/images/ModernHospital.png'
import feedImg from '../assets/images/feed.png'
import shelterImg from '../assets/images/shelter.png'
import biogasImg from '../assets/images/biogas.png'

import {
  Biohazard,
  BriefcaseMedical,
  Leaf,
  Zap,
  BadgeCheck,
} from 'lucide-react'

const facilitiesdata = [
  {
    id: 1,
    category: 'Healthcare',
    title: 'Modern Hospital',
    image: hospitalImg,

    description:
      'Our on-site medical facility is equipped to handle everything from routine check-ups to complex surgical procedures. With five dedicated operation theatres and intensive care recovery zones, we ensure every resident receives prompt, specialized medical attention.',

    points: [
      '24/7 emergency veterinary care',
      'Advanced diagnostic imaging center',
      'Quarantine and specialized recovery wards',
    ],
  },

  {
    id: 2,
    category: 'Nutrition',
    title: 'Organic Feed Units',
    image: feedImg,

    description:
      'Nutrition is the foundation of health. We cultivate our own organic fodder across acres of dedicated farmland, ensuring a chemical-free, nutrient-rich diet tailored to the specific needs of different animal groups.',

    points: [
      'Pesticide-free hydroponic grass cultivation',
      'Custom feed formulation and mixing plant',
      'Automated hygienic distribution systems',
    ],
  },

  {
    id: 3,
    category: 'Shelter',
    title: 'Sustainable Housing',
    image: shelterImg,

    description:
      'Our enclosures are designed to mimic natural habitats while providing safety from the elements. Utilizing sustainable building materials and passive cooling techniques, we ensure maximum comfort year-round.',

    points: [
      'Spacious, free-roaming zones',
      'Temperature-controlled indoor shelters',
      'Soft, non-slip flooring to protect hooves and joints',
    ],
  },

  {
    id: 4,
    category: 'Energy',
    title: 'Bio-Gas Plant',
    image: biogasImg,

    description:
      'We believe in a circular economy. Our state-of-the-art bio-gas plant converts organic waste into clean, renewable energy that powers our facilities, significantly reducing our carbon footprint.',

    points: [
      'Powers 80% of our daily electricity needs',
      'Produces nutrient-rich organic fertilizer as a byproduct',
      'Zero-waste management system',
    ],
  },
]

const Facilities = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#f6f7ef]">

      <Navbar />
      <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-screen flex items-center justify-center">
        <img
          src={heroimage}
          alt="Facilities Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center text-center px-4 gap-4 max-w-4xl">
          <span className="bg-green-100 text-green-700 border border-green-300 px-5 py-2 rounded-full text-sm font-medium">
            Our Facilities
          </span>
          <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            State of the Art Sanctuary
          </h1>
          <p className="text-gray-200 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed">
            Designed with compassion and sustainability at its core, our sanctuary
            provides the highest standard of care through modern infrastructure
            and organic practices.
          </p>
        </div>
      </section>
      <section className="relative z-20 px-4 sm:px-6 lg:px-10 -mt-14 lg:-mt-20">
        <div className="max-w-7xl mx-auto bg-[#eef3e6] rounded-3xl shadow-lg p-6 sm:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center gap-3 shadow-md hover:shadow-xl transition duration-300">
              <div className="bg-green-100 p-4 rounded-full">
                <Biohazard size={28} className="text-green-700" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800">
                200+
              </h1>
              <p className="text-gray-600 font-medium">
                Animal Care
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center gap-3 shadow-md hover:shadow-xl transition duration-300">
              <div className="bg-green-100 p-4 rounded-full">
                <BriefcaseMedical size={28} className="text-green-700" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800">
                5+
              </h1>
              <p className="text-gray-600 font-medium">
                Operation Centers
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center gap-3 shadow-md hover:shadow-xl transition duration-300">
              <div className="bg-green-100 p-4 rounded-full">
                <Leaf size={28} className="text-green-700" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800">
                100%
              </h1>
              <p className="text-gray-600 font-medium">
                Organic Feed
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center gap-3 shadow-md hover:shadow-xl transition duration-300">

              <div className="bg-green-100 p-4 rounded-full">
                <Zap size={28} className="text-green-700" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800">
                24/7
              </h1>
              <p className="text-gray-600 font-medium">
                Support Services
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-28">
          {facilitiesdata.map((facility, index) => (
            <div
              key={facility.id}
              className={`flex flex-col lg:flex-row items-center gap-14 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
            >
              <div className="flex-1">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full rounded-2xl shadow-lg object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col gap-5">
                <span className="bg-green-100 text-green-700 border border-green-300 px-4 py-1 rounded-full text-xs font-medium w-fit">
                  {facility.category}
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  {facility.title}
                </h1>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {facility.description}
                </p>
                <div className="flex flex-col gap-4 pt-2">
                  {facility.points.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3"
                    >
                      <BadgeCheck
                        size={18}
                        className="text-green-700 mt-1"
                      />
                      <p className="text-gray-700 text-sm sm:text-base">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section> </section>
      <Footer />
    </div>
  )
}

export default Facilities