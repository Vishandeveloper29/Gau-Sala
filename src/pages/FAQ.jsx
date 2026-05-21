import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChevronDown, ShieldCheck, Gavel, BadgeDollarSign } from "lucide-react";

const FAQ = () => {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      question: "How to donate?",
      answer:
        "You can donate securely online through our website using the Donate button located in the top navigation bar. We accept major credit cards, debit cards, and bank transfers. All donations directly support the care, feeding, and medical needs of the animals at Kaam Denu Gaushala.",
    },
    {
      question: "Can I visit?",
      answer:
        "Yes, visitors are welcome during visiting hours. Please contact us before coming so our team can guide you properly and make your visit comfortable.",
    },
    {
      question: "What animals do you rescue?",
      answer:
        "We mainly rescue cows, calves, bulls, and injured or abandoned bovines who need shelter, food, medical care, and long-term support.",
    },
    {
      question: "Are my donations tax-deductible?",
      answer:
        "Donation benefits depend on local rules and available registration documents. Please contact our team for the latest donation receipt and tax-related details.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7fbef] text-gray-900">
      <Navbar />
      <section className="bg-[#f7fbef]" />
      <section className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-[#e9f0e3] px-5 text-center">
        <div className="absolute inset-0 bg-white/50" />
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl font-black md:text-5xl">
            Help & Information
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-600 md:text-base">
            Find answers to common questions and review our organizational
            policies and commitments.
          </p>
        </div>
      </section>
      <section className="px-5 py-20 md:px-10 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          <div className="w-full lg:w-64">
            <div className="flex flex-col gap-2 lg:sticky lg:top-28">
              <a
                href="#faq"
                className="rounded-md border-l-4 border-green-700 bg-green-100 px-5 py-4 text-sm font-semibold text-green-800"
              >
                Frequently Asked Questions
              </a>
              <a
                href="#privacy"
                className="rounded-md px-5 py-4 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="rounded-md px-5 py-4 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800"
              >
                Terms of Service
              </a>
              <a
                href="#refund"
                className="rounded-md px-5 py-4 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800"
              >
                Refund Policy
              </a>
            </div>
          </div>
          <div className="flex-1">
            <section id="faq">
              <h2 className="text-3xl font-black md:text-4xl">
                Frequently Asked Questions
              </h2>
              <div className="mt-5 h-px w-full bg-gray-300" />
              <div className="mt-8 flex flex-col gap-5">
                {faqs.map((item, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-xl bg-white shadow-md"
                  >
                    <button
                      onClick={() => setOpen(open === index ? null : index)}
                      className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left"
                    >
                      <span className="text-xl font-black">
                        {item.question}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`text-green-700 transition ${open === index ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    {open === index && (
                      <div className="px-6 pb-7">
                        <p className="text-sm leading-7 text-gray-600">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
            <section className="mt-16 rounded-xl bg-white p-7 shadow-md md:p-12">
              <div id="privacy">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <ShieldCheck size={20} />
                  </div>
                  <h2 className="text-3xl font-black md:text-4xl">
                    Privacy Policy
                  </h2>
                </div>
                <p className="mt-8 text-sm leading-7 text-gray-600">
                  At Kaam Denu Gaushala, we are committed to protecting your
                  privacy and ensuring that your personal information is handled
                  securely and responsibly. This Privacy Policy outlines how we
                  collect, use, and safeguard the information you provide to us
                  through our website and related services.
                </p>
                <h3 className="mt-6 text-2xl font-black">
                  Information Collection
                </h3>
                <p className="mt-4 text-sm leading-7 text-gray-600">
                  We collect personal information such as your name, email
                  address, phone number, and billing details only when you
                  voluntarily provide it to us, such as when making a donation,
                  signing up for our newsletter, or contacting us for inquiries.
                </p>
                <h3 className="mt-6 text-2xl font-black">
                  Use of Information
                </h3>
                <p className="mt-4 text-sm leading-7 text-gray-600">
                  The information we collect is primarily used to process your
                  donations, issue tax receipts, communicate updates about our
                  activities, and respond to your requests.
                </p>
              </div>
              <div className="my-14 h-px w-full bg-gray-200" />
              <div id="terms">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <Gavel size={20} />
                  </div>
                  <h2 className="text-3xl font-black md:text-4xl">
                    Terms of Service
                  </h2>
                </div>
                <p className="mt-8 text-sm leading-7 text-gray-600">
                  By accessing and using the Kaam Denu Gaushala website, you
                  accept and agree to be bound by the terms and provisions of
                  this agreement. Furthermore, when using these particular
                  services, you shall be subject to any posted guidelines or
                  rules applicable to such services.
                </p>
                <p className="mt-5 text-sm leading-7 text-gray-600">
                  All content provided on this website is for informational
                  purposes only. The organization makes no representations as to
                  the accuracy or completeness of any information on this site.
                </p>
              </div>
              <div className="my-14 h-px w-full bg-gray-200" />
              <div id="refund">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <BadgeDollarSign size={20} />
                  </div>
                  <h2 className="text-3xl font-black md:text-4xl">
                    Refund Policy
                  </h2>
                </div>
                <p className="mt-8 text-sm leading-7 text-gray-600">
                  Kaam Denu Gaushala relies on the generosity of our donors to
                  maintain operations and care for the animals. As donations are
                  considered charitable contributions, they are generally
                  non-refundable.
                </p>
                <p className="mt-5 text-sm leading-7 text-gray-600">
                  However, if an error occurs during the transaction process,
                  such as a duplicate donation or incorrect amount, please
                  contact us within seven days of the transaction.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FAQ;