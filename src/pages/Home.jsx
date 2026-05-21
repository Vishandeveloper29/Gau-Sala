import React from "react";
import {
  HandCoins,
  Heart,
  MoveRight,
  BriefcaseMedical,
  Leaf,
  Book,
  HandHeart,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ourmission from "../assets/images/our-mission.png";
import heroimage from "../assets/images/hero-image.png";
import beforenandi from "../assets/images/befornandi.png";
import afternandi from "../assets/images/afternandi.png";

const Home = () => {
  const stats = [
    { value: "5000+", label: "Cows Rescued" },
    { value: "24/7", label: "Emergency Support" },
    { value: "20+", label: "Years of Experience" },
    { value: "100%", label: "Success Rate" },
  ];

  const helpcards = [
    {
      icon: <BriefcaseMedical size={28} />,
      title: "Medical Care",
      desc: "State-of-the-art veterinary facilities providing 24/7 care.",
    },
    {
      icon: <Heart size={28} />,
      title: "Nutritional Support",
      desc: "Balanced diets and supplements to promote optimal health.",
    },
    {
      icon: <Leaf size={28} />,
      title: "Environmental Care",
      desc: "Sustainable practices to ensure a healthy habitat for all animals.",
    },
    {
      icon: <HandCoins size={28} />,
      title: "Community Outreach",
      desc: "Educational programs and volunteer opportunities to engage the community.",
    },
  ];

  return (
    <section className="overflow-x-hidden bg-white">
      <Navbar />
      <section  className="relative min-h-screen flex items-center justify-center bg-cover bg-center px-5" style={{ backgroundImage: `url(${heroimage})` }}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-4xl">
          <span className="bg-white/15 border border-white/25 text-white px-5 py-2 rounded-full text-sm backdrop-blur-md">
            Welcome to Kam Denu Gaushala
          </span>
          <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-black leading-tight">
            Giving a Voice to the Voiceless
          </h1>
          <p className="text-gray-200 text-base sm:text-lg max-w-2xl leading-relaxed">
            Join Kam Denu Gaushala in our mission to rescue, rehabilitate, and
            provide a better future for rescued animals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 px-7 py-3 rounded-full text-black font-semibold transition">
              Donate Now
              <Heart size={17} />
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-black px-7 py-3 rounded-full font-semibold transition">
              Emergency Help
            </button>
          </div>
        </div>
      </section>
      <section className="relative z-10 -mt-10 px-5">
        <div className="max-w-7xl mx-auto bg-gray-100 rounded-[35px] p-5 sm:p-8 flex flex-wrap justify-center gap-5 shadow-xl">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white flex flex-col items-center justify-center gap-2 rounded-3xl shadow-md px-6 py-8 w-full sm:w-[45%] lg:w-[22%]" >
              <h2 className="text-3xl lg:text-4xl font-black text-green-700">
                {stat.value}
              </h2>
              <p className="text-gray-500 text-center">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="px-5 py-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <img src={ourmission} alt="Our Mission" className="w-full h-[330px] sm:h-[430px] object-cover rounded-[35px] shadow-lg" />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-5">
            <span className="text-green-700 bg-green-100 w-fit px-4 py-2 rounded-full text-sm font-semibold">
              Our Purpose
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-8">
              At Kam Denu Gaushala, we believe every life is sacred. Our
              sanctuary provides a permanent, loving home for cows that have
              been abandoned, injured, or rescued from harsh conditions.
            </p>
            <button className="w-fit flex items-center gap-2 bg-green-700 hover:bg-green-800 px-6 py-3 rounded-full text-white font-semibold transition">
              Read More
              <MoveRight size={18} />
            </button>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 px-5 py-20">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
          <div className="text-center flex flex-col items-center gap-4 max-w-2xl">
            <h2 className="text-3xl sm:text-5xl font-black text-green-700">
              How We Help
            </h2>
            <p className="text-gray-500">
              Comprehensive care models designed for holistic well-being and
              sustainability.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 w-full">
            {helpcards.map((item) => (
              <div key={item.title} className="bg-white rounded-3xl p-7 shadow-md hover:shadow-xl transition w-full sm:w-[45%] lg:w-[23%] flex flex-col gap-4" >
                <div className="bg-green-100 text-green-700 w-fit p-4 rounded-2xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-7 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 py-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 flex flex-col gap-5">
            <div className="flex items-center gap-2 px-4 py-2 bg-green-100 w-fit rounded-full">
              <Book className="text-green-700" size={16} />
              <span className="text-green-700 text-sm font-semibold">
                Rescue Story
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 leading-tight">
              Meet Nandini: A Journey from Neglect to Love
            </h2>
            <p className="text-gray-600 leading-8">
              When Nandini arrived at our gates, she was severely malnourished
              and struggling to stand. Our dedicated medical team worked around
              the clock with care and patience.
            </p>
            <p className="text-gray-600 leading-8">
              Today, Nandini is the playful matriarch of her herd. Her
              transformation is a testament to compassion and professional care.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col sm:flex-row lg:flex-col gap-5">
            <img src={beforenandi} alt="Nandini before rescue" className="w-full sm:w-1/2 lg:w-full h-72 object-cover rounded-3xl shadow-md" />
            <img
              src={afternandi} alt="Nandini after rescue" className="w-full sm:w-1/2 lg:w-full h-72 object-cover rounded-3xl shadow-md"  />
          </div>
        </div>
      </section>
      <section className="px-5 py-20 bg-green-700">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
          <h2 className="text-white text-3xl sm:text-5xl font-black leading-tight">
            Support Our Noble Cause
          </h2>
          <p className="text-green-100 leading-8 max-w-2xl">
            Your contribution directly funds medical supplies, high-quality
            fodder, and the expansion of our rescue operations. Every donation
            saves a life.
          </p>
          <button className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-semibold py-3 px-7 rounded-full transition">
            Donate Now
            <HandHeart size={20} />
          </button>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Home;