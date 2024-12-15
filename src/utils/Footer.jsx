import star from "../HomePagePhoto/star.png";
import mail from "../utilsPhoto/mail.png";
import metro from "../utilsPhoto/metro.png";

const Footer = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl mb-3 font-semibold text-white">
          Subscribe to Our Newsletter
        </h1>
        <p className="text-2xl mb-10 text-[#F3F3F4]">
          Join the 25000+ client, in our company
        </p>
      </div>
      <div className="relative flex w-[600px] h-[88px] mx-auto justify-center items-center lg:mb-[72px]">
        <input
          className="bg-[#fff] rounded-[100px] w-full h-20 px-5 mt-5"
          type="text"
          placeholder="Enter your email"
        />
        <button className="absolute right-3 mt-5 text-2xl text-white font-normal rounded-[100px] border-3 border-[#C16EFD] bg-[linear-gradient(105deg,_#6384FC_4.1%,_#C16EFD_54.8%,_#6384FC_92.38%)] py-4 px-9 flex items-center ">
          <img className="w-8 h-8" src={star} alt="" />
          Subscribe
        </button>
      </div>
      <div className="container text-white mt-10 w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Section */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Company</h3>
          <ul>
            {[
              "Home",
              "About us",
              "Team",
              "User Profile",
              "White Labelling",
              "Careers",
              "Start Earning",
            ].map((item) => (
              <li
                key={item}
                className="mb-2 hover:text-yellow-500 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Services</h3>
          <ul>
            {[
              "Digital Marketing",
              "Creative Writing Solution",
              "Web & Software",
              "E-Commerce Solution",
              "Graphic Design",
              "Multimedia & Video Editing",
              "Buy & Sell",
              "Merchandise",
              "Special Combo",
            ].map((item) => (
              <li
                key={item}
                className="mb-2 hover:text-yellow-500 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>

          <div className="flex gap-14">
            <div>
              <div className="mb-4">
                <p className="text-yellow-500 font-semibold mb-2">Mail:</p>
                <ul>
                  <li className="mb-1 flex gap-2">
                    <img src={mail} alt="" />
                    <a
                      href="mailto:official@metrosolver.com"
                      className="hover:text-yellow-500"
                    >
                      official@metrosolver.com
                    </a>
                  </li>
                  <li className="flex gap-2">
                    <img src={mail} alt="" />
                    <a
                      href="mailto:hello@metrosolver.com"
                      className="hover:text-yellow-500"
                    >
                      hello@metrosolver.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="text-yellow-500 font-semibold mb-2">
                  Information:
                </p>
                <p className="flex gap-2">
                  <img src={mail} alt="" />
                  <a
                    href="mailto:info@metrosolver.com"
                    className="hover:text-yellow-500"
                  >
                    info@metrosolver.com
                  </a>
                </p>
              </div>

              <div className="mb-4">
                <p className="text-yellow-500 font-semibold mb-2">Job apply:</p>
                <p className="flex gap-2">
                  <img src={mail} alt="" />
                  <a
                    href="mailto:career@metrosolver.com"
                    className="hover:text-yellow-500"
                  >
                    career@metrosolver.com
                  </a>
                </p>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <p className="text-yellow-500 font-semibold mb-2">
                  Directions:
                </p>
                <ul>
                  <li className="mb-1 flex gap-2">
                    <img src={mail} alt="" />
                    <a
                      href="mailto:akarim@metrosolver.com"
                      className="hover:text-yellow-500"
                    >
                      akarim@metrosolver.com
                    </a>
                  </li>
                  <li className="flex gap-2">
                    <img src={mail} alt="" />
                    <a
                      href="mailto:nkarim@metrosolver.com"
                      className="hover:text-yellow-500"
                    >
                      nkarim@metrosolver.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="text-yellow-500 font-semibold mb-2">
                  White levelling related:
                </p>
                <p className="flex gap-2">
                  <img src={mail} alt="" />
                  <a
                    href="mailto:white@metrosolver.com"
                    className="hover:text-yellow-500"
                  >
                    white@metrosolver.com
                  </a>
                </p>
              </div>

              <div>
                <p className="text-yellow-500 font-semibold mb-2">
                  Service related:
                </p>
                <p className="flex gap-2">
                  <img src={mail} alt="" />
                  <a
                    href="mailto:service@metrosolver.com"
                    className="hover:text-yellow-500"
                  >
                    service@metrosolver.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
     

      <div className="flex items-center justify-center">
        <div className="flex lg:flex-row flex-col justify-end items-center gap-14 p-8  rounded-lg shadow-lg">
          {/* Image Container */}
          <div className="flex-1">
            <img
              className="w-[458px] h-[245px] object-contain"
              src={metro}
              alt="Metro Solver Logo"
            />
          </div>
          {/* Text Container */}
          <div className="text-white flex-1">
            <h1 className="lg:text-7xl md:text-5xl text-4xl flex items-center gap-2"><p>METRO</p> <p>SOLVER</p> </h1>
            <h2 className="lg:text-5xl md:text-4xl text-2xl  mt-2">
              your it partner
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
