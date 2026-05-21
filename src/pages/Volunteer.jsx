import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import herobanner from "../assets/images/volunteerhero.png";
import { HandHeart, ClipboardCheck, CalendarCheck } from "lucide-react";

const Volunteer = () => {
  const roles = [
    {
      icon: <HandHeart size={24} />,
      title: "Caretaking",
      text: "Assist with daily feeding, grooming, and maintaining a clean, comfortable environment for our residents. Direct interaction and compassionate care.",
    },
    {
      icon: <ClipboardCheck size={24} />,
      title: "Admin Support",
      text: "Help us organize records, manage donor communications, and keep our operations running smoothly from the office. Vital behind-the-scenes work.",
    },
    {
      icon: <CalendarCheck size={24} />,
      title: "Event Planning",
      text: "Coordinate awareness campaigns, fundraising events, and community outreach programs. Bring people together for a noble cause.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7fbef] text-gray-900">
      <Navbar />
      <section className="relative h-[420px] overflow-hidden md:h-[520px]">
        <img src={herobanner} alt="Volunteer Hero" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-white/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f7fbef]/40 to-[#f7fbef]" />
        <div className="relative z-10 flex h-full items-center justify-center px-5 text-center">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-black md:text-5xl">
              Be a Part of the Miracle
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-700 md:text-base">
              Join our community of dedicated caregivers. Your time and
              compassion can transform lives, providing a safe haven for every
              soul that enters our gates.
            </p>
          </div>
        </div>
      </section>
      <section className="px-5 py-16 md:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-black">How You Can Help</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-600">
            Discover a role that fits your skills and passion. Every
            contribution creates a ripple of positive impact.
          </p>
          <div className="mt-12 flex flex-col gap-6 md:flex-row">
            {roles.map((role, index) => (
              <div
                key={index}
                className="flex flex-1 flex-col items-start rounded-xl border border-green-100 bg-[#fbfff7] p-8 text-left shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700">
                  {role.icon}
                </div>
                <h3 className="mt-8 text-xl font-bold">{role.title}</h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {role.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#eef5e9] px-5 py-20 md:px-10 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-col overflow-hidden rounded-xl bg-[#fbfff7] shadow-lg lg:flex-row">
          <div className="flex flex-1 flex-col justify-center p-7 md:p-12">
            <h2 className="text-3xl font-black">Join Our Team</h2>
            <p className="mt-3 text-sm text-gray-600">
              Fill out the form below and our volunteer coordinator will be in
              touch shortly.
            </p>
            <form className="mt-8 flex flex-col gap-5">
              <div className="flex flex-col gap-5 md:flex-row">
                <div className="flex flex-1 flex-col gap-2">
                  <label className="text-xs font-bold">First Name</label>
                  <input type="text" placeholder="Jane" className="h-12 bg-[#e4eadf] px-4 text-sm outline-none" />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <label className="text-xs font-bold">Last Name</label>
                  <input type="text" placeholder="Doe" className="h-12 bg-[#e4eadf] px-4 text-sm outline-none" />
                </div>
              </div>
              <div className="flex flex-col gap-5 md:flex-row">
                <div className="flex flex-1 flex-col gap-2">
                  <label className="text-xs font-bold">Email Address</label>
                  <input type="email" placeholder="jane@example.com" className="h-12 bg-[#e4eadf] px-4 text-sm outline-none" />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <label className="text-xs font-bold">Phone Number</label>
                  <input type="text" placeholder="(555) 123-4567" className="h-12 bg-[#e4eadf] px-4 text-sm outline-none" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold">Preferred Role</label>
                <select className="h-12 bg-[#e4eadf] px-4 text-sm outline-none">
                  <option>Caretaking</option>
                  <option>Admin Support</option>
                  <option>Event Planning</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold">
                  Why do you want to volunteer?
                </label>
                <textarea placeholder="Share a brief message..." className="h-32 resize-none bg-[#e4eadf] p-4 text-sm outline-none" />
              </div>
              <button type="button" className="mt-2 w-fit rounded-full bg-green-800 px-8 py-4 text-sm font-semibold text-white transition hover:bg-green-700" >
                Submit Application
              </button>
            </form>
          </div>
          <div className="flex flex-1">
            <img
              src={herobanner}
              alt="Volunteer Team"
              className="h-[420px] w-full object-cover lg:h-auto"
            />
          </div>
        </div>
      </section>
      <section className="px-5 py-20 md:px-10 lg:px-20 bg-[#f7fbef]">
        <div className="mx-auto max-w-6xl rounded-2xl bg-green-700 px-6 py-16 shadow-xl md:px-16 relative overflow-hidden">
          <div className="absolute left-6 top-4 text-[120px] font-black leading-none text-green-600 opacity-40">
            ”
          </div>
          <div className="relative z-10 flex flex-col items-center text-center">
            <h1 className="max-w-3xl text-xl font-semibold leading-10 text-[#f4f8ef] md:text-3xl md:leading-[52px]">
              "Volunteering here has been the most fulfilling experience of my
              life. The connection you build with these gentle creatures, and
              the supportive community around you, brings a sense of peace
              you can't find anywhere else."
            </h1>
            <div className="mt-10">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300"
                alt="Volunteer"
                className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-lg"
              />
            </div>
            <p className="mt-5 text-sm font-bold tracking-[3px] text-white uppercase">
              Sarah Jenkins
            </p>
            <span className="mt-1 text-sm text-green-100">
              Lead Caretaker Volunteer, 3 Years
            </span>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Volunteer;