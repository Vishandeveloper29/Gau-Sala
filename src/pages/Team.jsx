import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import leader1 from "../assets/images/leader1.png";
import leader2 from "../assets/images/leader2.png";
import trustee1 from "../assets/images/trustee1.png";
import trustee2 from "../assets/images/trustee2.png";
import doctor1 from "../assets/images/doctor1.png";
import doctor2 from "../assets/images/doctor2.png";

const leadershipData = [
  {
    id: 1,
    image: leader1,
    name: "Ramesh Patel",
    role: "Founder",
    description:
      "Leading the GauShala mission with dedication and compassion.",
  },
  {
    id: 2,
    image: leader2,
    name: "Mahesh Rabari",
    role: "Managing Director",
    description:
      "Handles operations and ensures smooth management.",
  },
];

const trusteesData = [
  {
    id: 1,
    image: trustee1,
    name: "Suresh Patel",
    role: "Trustee",
    description:
      "Supports social welfare and organization development.",
  },
  {
    id: 2,
    image: trustee2,
    name: "Ketan Joshi",
    role: "Trustee",
    description:
      "Contributes to fundraising and planning activities.",
  },
];

const medicalTeamData = [
  {
    id: 1,
    image: doctor1,
    name: "Dr. Priya Sharma",
    role: "Veterinary Doctor",
    description:
      "Provides treatment and healthcare for rescued animals.",
  },
  {
    id: 2,
    image: doctor2,
    name: "Dr. Amit Verma",
    role: "Animal Care Specialist",
    description:
      "Focuses on rehabilitation and preventive healthcare.",
  },
];

const TeamSection = ({ title, data }) => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 bg-amber-50">
            <div className="mb-12">
        <h1 className="inline-block border-b-4 border-green-800 pb-3 text-3xl md:text-4xl lg:text-5xl font-bold text-green-800">
          {title}
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {data.map((person) => (
          <div
            key={person.id}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-80 object-cover"
            />
            <div className="p-6 flex flex-col gap-3">
              <h2 className="text-2xl font-semibold text-green-900">
                {person.name}
              </h2>
              <span className="text-green-700 font-medium">
                {person.role}
              </span>
              <p className="text-gray-600 leading-relaxed">
                {person.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Team = () => {
  return (
    <div className="min-h-screen flex flex-col bg-amber-50">
      <Navbar />
      <section className="px-6 md:px-10 py-24 text-center flex flex-col items-center gap-6 bg-amber-50">
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-green-800 font-semibold">
          The Hearts Behind the Mission
        </h1>
        <p className="text-base md:text-lg text-green-800 max-w-xl md:max-w-2xl lg:max-w-3xl leading-relaxed">
          Meet the dedicated individuals who pour their passion,
          expertise, and compassion into providing a safe haven
          and quality care for our residents every single day.
        </p>
      </section>
      <TeamSection
        title="Leadership"
        data={leadershipData}
      />
      <TeamSection
        title="Trustees"
        data={trusteesData}
      />
      <TeamSection
        title="Medical Team"
        data={medicalTeamData}
      />
      <Footer />
    </div>
  );
};

export default Team;