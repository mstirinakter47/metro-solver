import map from "../utilsPhoto/map.png";

const ContactMap = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center p-4 lg:mb-[100px]">
      {/* Background Map */}
      <div
        className="relative w-full max-w-6xl h-[500px] bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${map})` }} // Correct way to use the image
      >
        {/* Location Markers */}
        <div className="absolute top-1/4 left-1/4">
          <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-md"></div>
        </div>
        <div className="absolute top-1/2 left-1/2">
          <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-md"></div>
        </div>
        <div className="absolute bottom-1/4 left-[70%]">
          <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-md"></div>
        </div>
        <div className="absolute bottom-[15%] left-[25%]">
          <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-md"></div>
        </div>

        {/* Contact Information Card */}
        <div className="absolute top-[15%] right-[10%] w-[485px] bg-gray-800 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold  text-white">#1 Metro Solver</h3>
          <p className="text-[#F3F3F4] text-lg mt-2 ">
          Head office: Metro Solver Limited Grantham Road, London E12 5LX, United Kingdom
          </p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 text-lg">
              <span className="text-yellow-500">📞</span>
              <span className="text-white">+447936 455446</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <span className="text-yellow-500">📞</span>
              <span className="text-white">+447464850205</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <span className="text-yellow-500">📞</span>
              <span className="text-white">02064844</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
