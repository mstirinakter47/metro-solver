import { useState } from "react";
import person1 from "../utilsPhoto/person1.png";
import person2 from "../utilsPhoto/person2.png";
import person3 from "../utilsPhoto/person3.png";
import person4 from "../utilsPhoto/person4.png";
import person5 from "../utilsPhoto/person5.png";
import person6 from "../utilsPhoto/person6.png";

const MeetOurAgents = () => {
  const [activeTab, setActiveTab] = useState("Creative");

  const tabs = [
    "All",
    "Agency",
    "Leadership",
    "Creative",
    "Grow Marketing",
    "Technology",
  ];
  return (
    <div className="lg:mb-[140px]">
      <div>
        <h1 className="text-white lg:text-6xl font-semibold text-center lg:mb-12">
          Meet Our Agents
        </h1>
        {/* Tabs Here */}
        <div className="lg:mb-12">
          <div className="flex items-center justify-center">
            <div className="flex gap-6  px-6 py-3 rounded-full shadow-lg">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 text-lg rounded-full transition duration-300 ${
                    activeTab === tab
                      ? "text-white border border-purple-500"
                      : "text-gray-400"
                  } ${
                    activeTab === tab ? "bg-gray-700" : "hover:text-gray-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Cards Here */}

        <div className="lg:mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative  md:w-[300px] rounded-2xl bg-gray-100 overflow-hidden shadow-lg border-2 border-blue-500 p-4">
            <div className="relative">
              <img
                src={person1}
                alt="Nayemul Karim"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="absolute bottom-4 left-4 bg-gray-900 text-white p-3 rounded-lg flex items-center gap-2 shadow-md">
              <div>
                <h2 className="lg:text-2xl font-semibold text-white">
                  Nayemul Karim
                </h2>
                <p className="text-[#F3F3F4] text-lg opacity-70">
                  Founder and Director
                </p>
              </div>

              <div className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-yellow-500">
                <span className="text-yellow-500 text-lg">✔</span>
              </div>
            </div>
          </div>

          <div className="relative  md:w-[300px] rounded-2xl bg-gray-100 overflow-hidden shadow-lg border-2 border-blue-500 p-4">
            <div className="relative">
              <img
                src={person6}
                alt="Nayemul Karim"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="absolute bottom-4 left-4 bg-gray-900 text-white p-3 rounded-lg flex items-center gap-2 shadow-md">
              <div>
                <h2 className="lg:text-2xl font-semibold text-white">
                  Shezan Mahmud
                </h2>
                <p className="text-[#F3F3F4] text-lg opacity-70">
                  Co-founder and COO
                </p>
              </div>

              <div className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-yellow-500">
                <span className="text-yellow-500 text-lg">✔</span>
              </div>
            </div>
          </div>

          <div className="relative  md:w-[300px] rounded-2xl bg-gray-100 overflow-hidden shadow-lg border-2 border-blue-500 p-4">
            <div className="relative">
              <img
                src={person2}
                alt="Nayemul Karim"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="absolute bottom-4 left-4 bg-gray-900 text-white p-3 rounded-lg flex items-center gap-2 shadow-md">
              <div>
                <h2 className="lg:text-2xl font-semibold text-white">
                  Mahbubul Karim
                </h2>
                <p className="text-[#F3F3F4] text-lg opacity-70">
                  Co-founder Group Manager
                </p>
              </div>

              <div className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-yellow-500">
                <span className="text-yellow-500 text-lg">✔</span>
              </div>
            </div>
          </div>

          <div className="relative  md:w-[300px] rounded-2xl bg-gray-100 overflow-hidden shadow-lg border-2 border-blue-500 p-4">
            <div className="relative">
              <img
                src={person5}
                alt="Nayemul Karim"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="absolute bottom-4 left-4 bg-gray-900 text-white p-3 rounded-lg flex items-center gap-2 shadow-md">
              <div>
                <h2 className="lg:text-2xl font-semibold text-white">
                  Ayesha Siddiqah
                </h2>
                <p className="text-[#F3F3F4] text-lg opacity-70">
                  Co-founder Innovation Leader
                </p>
              </div>

              <div className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-yellow-500">
                <span className="text-yellow-500 text-lg">✔</span>
              </div>
            </div>
          </div>

          <div className="relative  md:w-[300px] rounded-2xl bg-gray-100 overflow-hidden shadow-lg border-2 border-blue-500 p-4">
            <div className="relative">
              <img
                src={person3}
                alt="Nayemul Karim"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="absolute bottom-4 left-4 bg-gray-900 text-white p-3 rounded-lg flex items-center gap-2 shadow-md">
              <div>
                <h2 className="lg:text-2xl font-semibold text-white">
                  Latisha Miles
                </h2>
                <p className="text-[#F3F3F4] text-lg opacity-70">
                  Grow marketing
                </p>
              </div>

              <div className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-yellow-500">
                <span className="text-yellow-500 text-lg">✔</span>
              </div>
            </div>
          </div>

          <div className="relative  md:w-[300px] rounded-2xl bg-gray-100 overflow-hidden shadow-lg border-2 border-blue-500 p-4">
            <div className="relative">
              <img
                src={person4}
                alt="Nayemul Karim"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="absolute bottom-4 left-4 bg-gray-900 text-white p-3 rounded-lg flex items-center gap-2 shadow-md">
              <div>
                <h2 className="lg:text-2xl font-semibold text-white">
                  Robert Fox
                </h2>
                <p className="text-[#F3F3F4] text-lg opacity-70">Leadership</p>
              </div>

              <div className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-yellow-500">
                <span className="text-yellow-500 text-lg">✔</span>
              </div>
            </div>
          </div>
        </div>

        {/* View More button */}

        <div className="flex items-center justify-center">
          <button
            className="relative px-6 py-3 rounded-[42px] border border-[#6384FC] 
        text-white font-medium transition-all duration-300"
            style={{
              background:
                "linear-gradient(92deg, #1B1B31 0.24%, #2B1E36 56.45%, #1B1B31 99.83%)",
            }}
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <path
                  d="M34.9177 17.1215C32.1386 16.5389 29.9664 14.3667 29.3839 11.5876C29.3294 11.3276 29.1871 11.0943 28.9809 10.9268C28.7747 10.7594 28.5172 10.668 28.2516 10.668C27.986 10.668 27.7284 10.7594 27.5222 10.9268C27.3161 11.0942 27.1738 11.3275 27.1193 11.5875C26.5366 14.3667 24.3645 16.5388 21.5853 17.1214C21.3254 17.1759 21.0922 17.3183 20.9248 17.5244C20.7574 17.7306 20.666 17.9881 20.666 18.2537C20.666 18.5193 20.7574 18.7768 20.9248 18.9829C21.0922 19.1891 21.3254 19.3314 21.5853 19.386C24.3644 19.9686 26.5366 22.1408 27.1191 24.9199C27.1736 25.1799 27.3159 25.4132 27.5221 25.5807C27.7283 25.7481 27.9858 25.8395 28.2514 25.8395C28.517 25.8395 28.7746 25.7481 28.9808 25.5807C29.1869 25.4132 29.3292 25.1799 29.3837 24.9199C29.9664 22.1408 32.1386 19.9686 34.9177 19.3861C35.1776 19.3316 35.4109 19.1894 35.5784 18.9832C35.7459 18.777 35.8373 18.5195 35.8373 18.2539C35.8373 17.9882 35.7459 17.7307 35.5785 17.5245C35.411 17.3183 35.1777 17.176 34.9177 17.1215Z"
                  fill="white"
                />
                <path
                  d="M20.5632 9.60921C16.1993 8.69438 12.7883 5.28345 11.8736 0.919429C11.8191 0.659481 11.6768 0.426212 11.4706 0.258791C11.2644 0.0913699 11.0069 -8.24581e-06 10.7413 5.58093e-10C10.4756 8.24693e-06 10.2181 0.0914024 10.0119 0.258836C9.80576 0.42627 9.66346 0.659548 9.60894 0.919499C8.69417 5.28345 5.28324 8.69431 0.919296 9.609C0.659383 9.66356 0.426153 9.80588 0.25876 10.0121C0.091366 10.2182 0 10.4757 0 10.7413C0 11.0069 0.091366 11.2644 0.25876 11.4706C0.426153 11.6767 0.659383 11.8191 0.919296 11.8736C5.28317 12.7885 8.69396 16.1993 9.60872 20.5633C9.66322 20.8232 9.80551 21.0565 10.0117 21.224C10.2179 21.3914 10.4754 21.4828 10.741 21.4828C11.0067 21.4828 11.2642 21.3914 11.4704 21.224C11.6766 21.0565 11.8189 20.8232 11.8734 20.5633C12.7882 16.1993 16.1992 12.7885 20.5631 11.8738C20.8231 11.8194 21.0564 11.6771 21.2239 11.4709C21.3913 11.2647 21.4827 11.0072 21.4827 10.7416C21.4827 10.4759 21.3913 10.2184 21.2239 10.0122C21.0565 9.80601 20.8232 9.66371 20.5632 9.60921ZM18.6507 28.7215C16.5946 28.2906 14.9876 26.6835 14.5565 24.6273C14.502 24.3673 14.3597 24.134 14.1535 23.9665C13.9473 23.7991 13.6898 23.7077 13.4242 23.7077C13.1586 23.7077 12.901 23.799 12.6948 23.9665C12.4887 24.1339 12.3464 24.3672 12.2919 24.6272C11.8608 26.6833 10.2536 28.2904 8.19755 28.7214C7.93764 28.776 7.70441 28.9183 7.53702 29.1245C7.36962 29.3307 7.27826 29.5882 7.27826 29.8537C7.27826 30.1193 7.36962 30.3768 7.53702 30.583C7.70441 30.7892 7.93764 30.9315 8.19755 30.986C10.2536 31.4171 11.8607 33.0242 12.2917 35.0803C12.3462 35.3403 12.4885 35.5736 12.6947 35.7411C12.9009 35.9085 13.1584 35.9999 13.424 35.9999C13.6896 35.9999 13.9472 35.9085 14.1534 35.7411C14.3595 35.5736 14.5018 35.3403 14.5563 35.0803C14.9874 33.0242 16.5946 31.4171 18.6507 30.9861C18.9106 30.9316 19.1438 30.7892 19.3112 30.5831C19.4786 30.3769 19.57 30.1194 19.57 29.8538C19.57 29.5882 19.4786 29.3307 19.3112 29.1246C19.1438 28.9184 18.9106 28.7761 18.6507 28.7215Z"
                  fill="url(#paint0_linear_2039_1886)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2039_1886"
                    x1="0"
                    y1="18"
                    x2="21.4827"
                    y2="18"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F7F0AC" />
                    <stop offset="0.5" stopColor="#ACF7F0" />
                    <stop offset="1" stopColor="#F0ACF7" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-white text-2xl ">View More</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetOurAgents;
