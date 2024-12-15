import star from '../HomePagePhoto/star.png';
const WhyChoose = () => {
  return (
    <div className="mt-[900px] items-center flex text-white">
      <div>
        <h2 className="text-6xl font-semibold w-[425px] mb-4">
          Why You Choose Metro Solver?
        </h2>
        <p className="text-[#F3F3F4] text-lg font-normal w-[525px] mb-8">
          We are constantly growing or learning and improving.Enter your
          personal real estate sanctuary, where finding the ideal home is
          effortless and comfortable with our assistance.
        </p>
        <button className=" text-2xl text-white font-normal rounded-[100px] border-3 border-[#C16EFD] bg-[linear-gradient(105deg,_#6384FC_4.1%,_#C16EFD_54.8%,_#6384FC_92.38%)] py-4 px-9 flex items-center">
          <img className="w-8 h-8" src={star} alt="" />
          Book now
        </button>
      </div>
      <div className="ml-[8.8rem] space-y-24">
        <div className="group relative mx-auto flex h-10 w-max cursor-pointer justify-center">
          {/* Hover button */}
          <button className="text-5xl mb-7 origin-center rotate-[-8deg] text-white font-semibold rounded-[100px] border-3 border-[#C16EFD] bg-[linear-gradient(90deg,_#5C258D_0%,_#4389A2_100%)] py-10 px-14 flex items-center">
            Cancel Anytime
          </button>
          {/* Hover Text */}
          <div className="absolute -top-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-top-16 group-hover:opacity-100">
            <p className="h-fit rounded-md bg-[#0EA5E9] px-3 py-2 text-white shadow-[0px_0px_10px_0px_#0EA5E9]">
              Metro Solver offers round-the-clock customer service, ensuring
              that clients <br /> receive support whenever they need it. This
              level of availability is crucial for <br /> addressing urgent
              issues and maintaining client satisfaction.
            </p>
            <span className="absolute -bottom-2 left-[50%] h-0 w-0 -translate-x-1/2 rotate-[135deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-[#0EA5E9] shadow-[0px_0px_10px_0px_#0EA5E9]"></span>
          </div>
        </div>

        <div className="group relative mx-auto flex h-10 w-max cursor-pointer justify-center">
          {/* Hover button */}
          <button className="text-5xl font-medium origin-center rotate-[4deg] text-white font-semibold rounded-[100px] border-3 border-[#C16EFD] bg-[linear-gradient(90deg,_#5C258D_0%,_#4389A2_100%)] py-10 px-14 flex items-center">
            24/7 Customer Service
          </button>
          {/* Hover Text */}
          <div className="absolute -bottom-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-bottom-24 group-hover:opacity-100">
            <p className="rounded-md -z-10 bg-[#0EA5E9] px-3 py-2 text-white shadow-[0px_0px_10px_0px_#0EA5E9]">
              Metro Solver offers round-the-clock customer service, ensuring
              that clients <br /> receive support whenever they need it. This
              level of availability is crucial for <br /> addressing urgent
              issues and maintaining client satisfaction.
            </p>
            <span className="absolute -top-2 left-[50%] h-0 w-0 -translate-x-1/2 -rotate-[45deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-[#0EA5E9] shadow-[0px_0px_10px_0px_#0EA5E9]"></span>
          </div>
        </div>

        <div className="group relative mx-auto flex h-10 w-max cursor-pointer justify-center">
          {/* Hover button */}
          <button className="text-5xl mb-7 origin-center rotate-[-8deg] text-white font-semibold rounded-[100px] border-3 border-[#C16EFD] bg-[linear-gradient(90deg,_#5C258D_0%,_#4389A2_100%)] py-10 px-14 flex items-center">
            Book Now
          </button>
          {/* Hover Text */}
          <div className="absolute -top-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-top-16 group-hover:opacity-100">
            <p className="h-fit rounded-md bg-[#0EA5E9] px-3 py-2 text-white shadow-[0px_0px_10px_0px_#0EA5E9]">
              Metro Solver offers round-the-clock customer service, ensuring
              that clients <br /> receive support whenever they need it. This
              level of availability is crucial for <br /> addressing urgent
              issues and maintaining client satisfaction.
            </p>
            <span className="absolute -bottom-2 left-[50%] h-0 w-0 -translate-x-1/2 rotate-[135deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-[#0EA5E9] shadow-[0px_0px_10px_0px_#0EA5E9]"></span>
          </div>
        </div>

        <div className="group relative mx-auto flex h-10 w-max cursor-pointer justify-center">
          {/* Hover button */}
          <button className="text-5xl text-white font-semibold rounded-[100px] border-3 border-[#C16EFD] bg-[linear-gradient(90deg,_#5C258D_0%,_#4389A2_100%)] py-10 px-14 flex items-center">
            Money Back Guarantee
          </button>
          {/* Hover Text */}
          <div className="absolute -top-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-top-16 group-hover:opacity-100">
            <p className="h-fit rounded-md bg-[#0EA5E9] px-3 py-2 text-white shadow-[0px_0px_10px_0px_#0EA5E9]">
              Metro Solver offers round-the-clock customer service, ensuring
              that clients <br /> receive support whenever they need it. This
              level of availability is crucial for <br /> addressing urgent
              issues and maintaining client satisfaction.
            </p>
            <span className="absolute -bottom-2 left-[50%] h-0 w-0 -translate-x-1/2 rotate-[135deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-[#0EA5E9] shadow-[0px_0px_10px_0px_#0EA5E9]"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
