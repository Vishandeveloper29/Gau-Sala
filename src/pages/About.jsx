import React from "react";
import { Heart, BadgeCheck, Eye, Handshake } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroimage from "../assets/images/aboutheroBanner.png";
import aboutimg from "../assets/images/Caringhands.png";
import peopleimg from "../assets/images/people.png";

const About = () => {
  const principles = [
    {
      icon: <Heart size={24} />,
      title: "Mission",
      items: [
        "Provide immediate care and shelter for rescued animals",
        "Promote animal welfare and conservation",
        "Foster community awareness and education",
        "Implement sustainable practices for environmental responsibility",
      ],
    },
    {
      icon: <Eye size={24} />,
      title: "Vision",
      items: [
        "A society where stray cattle are no longer neglected or abused",
        "To be a model sanctuary demonstrating sustainable, ethical care",
        "Inspiring a global movement of compassion towards all beings",
        "Implement sustainable practices for environmental responsibility",
      ],
    },
    {
      icon: <Handshake size={24} />,
      title: "Values",
      items: [
        "Compassion: We treat every animal with kindness and empathy",
        "Integrity: We operate with transparency and accountability",
        "Community: We believe in the power of collective action and education",
        "Sustainability: We are committed to eco-friendly practices that support our mission",
      ],
    },
  ];

  const journey = [
    {
      year: "2010",
      title: "Founded",
      desc: "Started in a small shelter with the first 5 rescued calves, laying the foundation of our mission.",
    },
    {
      year: "2015",
      title: "First Hospital",
      desc: "Inaugurated a fully equipped on-site veterinary hospital to provide critical care and surgeries.",
    },
    {
      year: "2023",
      title: "Global Outreach",
      desc: "Expanded our educational programs internationally, promoting ethical treatment and sustainability.",
    },
  ];

  return (
    <div className="overflow-x-hidden bg-white">
      <Navbar />
      <section className="relative min-h-screen flex items-center justify-center px-5">
        <img src={heroimage} alt="about us"  className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="relative z-10 max-w-4xl flex flex-col items-center text-center gap-6">
          <span className="bg-white/15 border border-white/25 text-white px-5 py-2 rounded-full text-sm backdrop-blur-md">
            About Kam Denu Gaushala
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
            Our Legacy of Compassion
          </h1>
          <p className="text-gray-200 text-base sm:text-lg max-w-2xl leading-8">
            Kam Denu Gaushala began with a simple belief: every life is sacred
            and deserving of care. For over a decade, we have dedicated
            ourselves to rescuing, rehabilitating, and providing a lifelong
            sanctuary for stray, abandoned, and injured cows.
          </p>
        </div>
      </section>
      <section className="px-5 py-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
          <div className="w-full lg:w-1/2">
            <img
              src={aboutimg}
              alt="caring hands"
              className="w-full h-[320px] sm:h-[420px] object-cover rounded-[32px] shadow-xl"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <span className="bg-green-100 text-green-700 w-fit px-4 py-2 rounded-full text-sm font-semibold">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 leading-tight">
              Built on Care, Trust and Service
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-8">
              Our journey started in a small shed with just five rescued calves.
              Today, our expansive sanctuary spans across acres of lush pasture,
              equipped with modern veterinary facilities and a dedicated team of
              caregivers.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-8">
              Beyond immediate rescue, we are deeply committed to community
              education and sustainable practices. The gaushala operates as an
              eco-system, where organic farming and renewable energy initiatives
              support our daily operations.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 px-5 py-24">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
          <div className="max-w-2xl flex flex-col items-center text-center gap-4">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              What Guides Us
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-green-800">
              Our Guiding Principles
            </h2>
            <p className="text-gray-500 leading-7">
              Every decision we make is rooted in compassion, transparency, and
              long-term care for the animals we serve.
            </p>
          </div>
          <div className="w-full flex flex-wrap justify-center gap-6">
            {principles.map((principle) => (
              <div key={principle.title} className="bg-white w-full sm:w-[47%] lg:w-[31%] rounded-[30px] p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col gap-5" >
                <div className="bg-green-100 text-green-700 p-4 rounded-2xl w-fit">
                  {principle.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {principle.title}
                </h3>
                <div className="flex flex-col gap-4">
                  {principle.items.map((item, index) => (
                    <div  key={index} className="flex items-start gap-3 text-gray-600 text-sm leading-7"  >
                      <BadgeCheck size={17} className="text-green-700 shrink-0 mt-1" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#f5f7ee] px-5 py-24">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-16">
          <div className="text-center flex flex-col items-center gap-4 max-w-2xl">
            <span className="bg-white text-green-700 px-5 py-2 rounded-full text-sm font-semibold shadow-sm">
              Timeline
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-green-700">
              Our Journey
            </h2>
            <p className="text-gray-500 leading-7">
              From a small shelter to a growing sanctuary, each milestone reflects
              years of service, compassion, and care.
            </p>
          </div>
          <div className="relative w-full flex flex-col gap-8">
            <div className="hidden lg:block absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-green-200 rounded-full" />
            {journey.map((item, index) => (
              <div key={item.year} className={`relative flex flex-col lg:flex-row items-center gap-6 ${index % 2 === 0 ? "lg:justify-start" : "lg:justify-end" }`} >
                <div className={`bg-white w-full lg:w-[46%] rounded-[32px] p-7 sm:p-8 shadow-md hover:shadow-xl transition duration-300 flex flex-col gap-4 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left" }`}>
                  <div className={`flex items-center gap-3 ${index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"}`} >
                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-black text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 leading-7">{item.desc}</p>
                </div>
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-green-700 text-white items-center justify-center text-sm font-black shadow-xl border-4 border-white">
                  {item.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-100 px-5 py-24">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-amber-50 to-white p-8 lg:p-12 rounded-[36px] shadow-xl flex flex-col lg:flex-row items-center gap-10">
          <img src={peopleimg} alt="people" className="w-full sm:w-[420px] h-[280px] sm:h-[360px] object-cover rounded-[30px] shadow-md shrink-0"/>
          <div className="flex flex-col gap-5">
            <div className="text-6xl sm:text-7xl text-green-700 leading-none"> "</div>
            <p className="text-xl sm:text-2xl lg:text-4xl text-gray-900 leading-relaxed font-semibold">
              The true measure of a society is found in how it treats its most
              vulnerable. Our work here is not just about animal rescue; it is
              about awakening the humanity within ourselves and restoring
              dignity to gentle beings.
            </p>
            <p className="text-green-700 text-base sm:text-lg italic">
              - Jane Doe,{" "}
              <span className="text-gray-500">Founder and CEO</span>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;