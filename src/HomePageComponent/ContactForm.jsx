import logo from "../../public/Logo.png";
import star from "../HomePagePhoto/star.png";
import icon1 from '../HomePagePhoto/icon1.png'
import icon2 from '../HomePagePhoto/icon2.png'
import icon3 from '../HomePagePhoto/icon3.png'
import icon4 from '../HomePagePhoto/icon4.png'
import icon5 from '../HomePagePhoto/icon5.png'
const ContactForm = () => {
  return (
    <div className=" p-8 md:p-12 lg:p-16 rounded-lg flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* Left Side Content */}
      <div className="rounded-[30px] p-6 md:p-8 lg:p-10 bg-gradient-to-r from-[#5C258D] to-[#4389A2] shadow-lg text-white flex-1 w-full">
        {/* Card Content */}
        <div className="flex justify-center mt-10 mb-7">
          <img src={logo} alt="" />
        </div>
        <h3 className="text-[50px] mb-7 font-semibold text-center" >Still Have A <br/> Questions?</h3>
       
        {/* Buttons or Actions */}
       
       <div className="flex items-center justify-evenly">
        <img src={icon1} alt="" />
        <img src={icon2} alt="" />
        <img src={icon3} alt="" />
        <img src={icon4} alt="" />
        <img src={icon5} alt="" />
       </div>
      </div>

      {/* Right Side Contact Form */}
      <form className="lg:w-1/2 space-y-4 flex-1 w-full">
        {/* Name and Email */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label
              htmlFor="name"
              className="block text-white mb-2 font-semibold text-xs"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name..."
              className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="email"
              className="block text-white mb-2 font-semibold text-xs"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email..."
              className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
        </div>

        {/* WhatsApp/Phone and Services */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label
              htmlFor="phone"
              className="block text-white mb-2 font-semibold text-xs"
            >
              WhatsApp/Phone
            </label>
            <input
              id="phone"
              type="text"
              placeholder="Enter your number..."
              className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="services"
              className="block text-white mb-2 font-semibold text-xs"
            >
              Which are You Looking for Support in?
            </label>
            <select
              id="services"
              className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="">Choose services</option>
              <option value="support">Support</option>
              <option value="inquiry">Inquiry</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Message Box */}
        <div>
          <label
            htmlFor="message"
            className="block text-white mb-2 font-semibold text-xs"
          >
            How Can We Help?
          </label>
          <textarea
            id="message"
            rows="7"
            placeholder="Message goes in here..."
            className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button className=" text-xl text-white font-semibold rounded-[100px] border-3 border-[#C16EFD] bg-[linear-gradient(105deg,_#6384FC_4.1%,_#C16EFD_54.8%,_#6384FC_92.38%)] py-1 px-32 flex items-center justify-center">
            <img src={star} alt="" />
            <div className="flex items-center gap-1">
              <p>Send </p>
              <p>Message</p>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
