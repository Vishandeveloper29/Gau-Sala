import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Gallery = () => {
  const filterdata = [
    "All",
    "Rescues",
    "Medical Care",
    "Daily Life",
    "Events",
  ];

  const gallerydata = [
    "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e",
    "https://images.unsplash.com/photo-1500595046743-cd271d694d30",
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf",
    "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
  ];

  return (
    <div className="min-h-screen bg-[#f7fbf1] overflow-x-hidden">
      <Navbar />
      <section className="px-5 py-16 lg:px-20">
        <div className="flex flex-col items-center text-center gap-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-green-800">
            Glimpses of Peace
          </h1>
          <p className="max-w-2xl text-sm md:text-base leading-7 text-gray-600">
            Explore the daily life, compassionate rescues, and moments of joy at
            Kaam Denu Gaushala. Every image tells a story of care, healing, and
            hope.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            {filterdata.map((item, index) => (
              <button
                key={index}
                className={`px-5 py-2 rounded-full border text-sm font-medium transition ${index === 0 ? "bg-green-700 border-green-700 text-white": "bg-white border-gray-300 text-gray-700 hover:border-green-700 hover:text-green-700" }`}>
                {item}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-4 w-full">
            {gallerydata.map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-[48%] lg:w-[31.8%] rounded-3xl overflow-hidden bg-white">
                <img src={`${item}?auto=format&fit=crop&w=900&q=80`}alt="gallery" className="w-full h-[280px] object-cover hover:scale-105 transition duration-300"/>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Gallery;