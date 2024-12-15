import vid from '../HomePagePhoto/vid.png';
import circle from '../HomePagePhoto/ycircle.png';
import play from '../HomePagePhoto/play.png';
import women from '../HomePagePhoto/women.png';
import calculation from '../HomePagePhoto/calculation.png';
import business from '../HomePagePhoto/business.png';
import meeting from '../HomePagePhoto/meeting.png';
import handshake from '../HomePagePhoto/handshake.png';
import hands from '../HomePagePhoto/hands.png';
const HowToWorks = () => {
  return (
    <div className="mt-24  text-white">
      <div className="text-center">
        <h2 className="text-6xl font-semibold text-white">How To Works?</h2>
        <p className="text-[#F3F3F4] text-lg font-normal mt-4 w-[40rem]]">
          Based on the description of Metro Solver and the image provided, here
          is a 6- <br />
          step process that Metro Solver uses to scale a customers business
        </p>
      </div>
      <div className="flex relative justify-center py-12">
        <img src={vid} alt="vid" />
        <div className="absolute border-8 mt-[270px] border-[#fff] rounded-full w-[120px] flex justify-center items-center ">
          <img src={circle} alt="circle" />
        </div>
        <div className="absolute mt-[300px] ml-3 flex justify-center items-center ">
          <img src={play} alt="play" />
        </div>
      </div>
      <div className="relative">
        <div className="bg-custom-gradient flex items-center h-[306px] rounded-2xl ">
          <img className="w-[25rem] h-[11rem] ml-6" src={women} alt="" />
          <div className="ml-20">
            <p className="text-4xl mb-6 font-medium">Book a Call</p>
            <p className="text2xl font-normal">
              The final product is delivered to the customer. Metro Solver
              provides ongoing support and 24/7 customer service to ensure that
              the customers business continues to thrive and scale effectively
            </p>
          </div>
        </div>
        <div className="bg-custom-gradient absolute top-[10rem] flex items-center h-[306px] rounded-2xl ">
          <img className="w-[25rem] h-[11rem] ml-6" src={calculation} alt="" />
          <div className="ml-20">
            <p className="text-4xl mb-6 font-medium">Requirement Analysis</p>
            <p className="text2xl font-normal">
              The final product is delivered to the customer. Metro Solver
              provides ongoing support and 24/7 customer service to ensure that
              the customers business continues to thrive and scale effectively
            </p>
          </div>
        </div>
        <div className="bg-custom-gradient absolute top-[20rem] flex items-center h-[306px] rounded-2xl ">
          <img className="w-[25rem] h-[11rem] ml-6" src={business} alt="" />
          <div className="ml-20">
            <p className="text-4xl mb-6 font-medium">Service Customisation</p>
            <p className="text2xl font-normal">
              The final product is delivered to the customer. Metro Solver
              provides ongoing support and 24/7 customer service to ensure that
              the customers business continues to thrive and scale effectively
            </p>
          </div>
        </div>
        <div className="bg-custom-gradient absolute top-[30rem] flex items-center h-[306px] rounded-2xl ">
          <img className="w-[25rem] h-[11rem] ml-6" src={meeting} alt="" />
          <div className="ml-20">
            <p className="text-4xl mb-6 font-medium">
              Implementation and Development
            </p>
            <p className="text2xl font-normal">
              The final product is delivered to the customer. Metro Solver
              provides ongoing support and 24/7 customer service to ensure that
              the customers business continues to thrive and scale effectively
            </p>
          </div>
        </div>
        <div className="bg-custom-gradient absolute top-[40rem] flex items-center h-[306px] rounded-2xl ">
          <img className="w-[25rem] h-[11rem] ml-6" src={hands} alt="" />
          <div className="ml-20">
            <p className="text-4xl mb-6 font-medium">Quality Assurance</p>
            <p className="text2xl font-normal">
              The final product is delivered to the customer. Metro Solver
              provides ongoing support and 24/7 customer service to ensure that
              the customers business continues to thrive and scale effectively
            </p>
          </div>
        </div>
        <div className="bg-custom-gradient absolute top-[50rem] flex items-center h-[306px] rounded-2xl ">
          <img className="w-[25rem] h-[11rem] ml-6" src={handshake} alt="" />
          <div className="ml-20">
            <p className="text-4xl mb-6 font-medium">Delivery and Support</p>
            <p className="text2xl font-normal">
              The final product is delivered to the customer. Metro Solver
              provides ongoing support and 24/7 customer service to ensure that
              the customers business continues to thrive and scale effectively
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToWorks;
