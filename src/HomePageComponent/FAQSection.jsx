import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services do you offer in digital marketing?",
      answer:
        "We provide SEO, social media management, email marketing, content marketing, PPC campaigns, and more.",
    },
    {
      question: "How can digital marketing help my business?",
      answer:
        "Digital marketing can improve your brand's online presence, reach your target audience effectively, and boost your ROI.",
    },
    {
      question: "How do you measure campaign success?",
      answer:
        "We track KPIs like traffic, conversions, ROI, and engagement rates to ensure your campaigns are performing effectively.",
    },
    {
      question: "Do you offer local SEO?",
      answer:
        "Yes, we specialize in local SEO to improve your visibility in local search results.",
    },
  ];

  return (
    <div className=" text-white p-8 min-h-screen lg:mb-[100px]">
      {/* Section Title */}

      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Side Menu */}

        <div className="flex-1 w-full  space-y-4">
          <div>
            <h1 className="lg:text-5xl font-semibold">
              Got Questions? <br /> We have got Answers
            </h1>
          </div>

          <div className="space-y-4">
            <div className=" text-[#9FA3AA] text-2xl font-semibold">
              • Digital Marketing
            </div>
            <div className=" text-[#9FA3AA] text-2xl font-semibold">
              • Web & Software Development
            </div>
            <div className=" text-[#9FA3AA] text-2xl font-semibold">
              • Graphic Design & Logo
            </div>
            <div className=" text-[#9FA3AA] text-2xl font-semibold">
              • Multimedia & Video Editing
            </div>
            <div className=" text-[#9FA3AA] text-2xl font-semibold">
              • Creative Writing Solutions
            </div>
            <div className=" text-[#9FA3AA] text-2xl font-semibold">
              • E-Commerce Solutions
            </div>
            <div className=" text-[#9FA3AA] text-2xl font-semibold">
              • Refund, Earn & Cancel Policies
            </div>
            <div className=" text-[#9FA3AA] text-2xl font-semibold">
              • Getting Started & General Info
            </div>
            <div className=" text-[#9FA3AA] text-2xl font-semibold">
              • General Policies & Customer Support
            </div>
          </div>
        </div>

        {/* Right Side Accordion */}
        <div className="w-full flex-1 lg:mt-20 md:mt-0 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700">
              <button
                className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg">{faq.question}</span>
                <span className="text-yellow-500">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </button>
              {openIndex === index && (
                <p className="text-gray-400 pb-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
