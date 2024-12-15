import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import star from "../HomePagePhoto/reviewsStar.png";
import line from '../HomePagePhoto/line.png';
import reviewsPerson from '../HomePagePhoto/reviewsPerson.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './reviewsSliderStyle.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { RiDoubleQuotesL } from 'react-icons/ri';
const ReviewsSlider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="pb-20 mt-20">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex">
            <div className="flex-1">
              <div className="flex flex-col items-center justify-start text-left">
                <div className="p-16">
                  {/* <img src={star} alt="" className="w-[90px] h-[70px]" /> */}
                  {/* Smaller Image */}
                  <p className="w-32 h-32  text-[#22dde4ce] text-7xl font-bold">
                    <RiDoubleQuotesL />
                  </p>

                  <p className="text-white text-[32px mb-6">
                    “Metro Solver with Mixer was the best solution. <br /> I am
                    very satisfied with the team and the work <br /> they did. I
                    am sincerely grateful for the work <br /> and effort.”
                  </p>

                  <div>
                    <div className="flex space-x-2 text-4xl">
                      {/* Star 1 */}
                      <input
                        type="radio"
                        name="rating"
                        id="star1"
                        className="hidden peer/star1"
                      />
                      <label
                        htmlFor="star1"
                        className="cursor-pointer text-orange-400 peer-hover/star1:text-orange-400 transition-colors"
                      >
                        ★
                      </label>

                      {/* Star 2 */}
                      <input
                        type="radio"
                        name="rating"
                        id="star2"
                        className="hidden peer/star2"
                        defaultChecked
                      />
                      <label
                        htmlFor="star2"
                        className="cursor-pointer text-orange-400 peer-hover/star2:text-orange-400 transition-colors"
                      >
                        ★
                      </label>

                      {/* Star 3 */}
                      <input
                        type="radio"
                        name="rating"
                        id="star3"
                        className="hidden peer/star3"
                      />
                      <label
                        htmlFor="star3"
                        className="cursor-pointer text-orange-400 peer-hover/star3:text-orange-400 transition-colors"
                      >
                        ★
                      </label>

                      {/* Star 4 */}
                      <input
                        type="radio"
                        name="rating"
                        id="star4"
                        className="hidden peer/star4"
                      />
                      <label
                        htmlFor="star4"
                        className="cursor-pointer text-orange-400 peer-hover/star4:text-orange-400 transition-colors"
                      >
                        ★
                      </label>

                      {/* Star 5 */}
                      <input
                        type="radio"
                        name="rating"
                        id="star5"
                        className="hidden peer/star5"
                      />
                      <label
                        htmlFor="star5"
                        className="cursor-pointer text-orange-400 peer-hover/star5:text-orange-400 transition-colors"
                      >
                        ★
                      </label>
                    </div>
                    <div className="mt-6">
                      <img src={line} alt="" />
                    </div>

                    <div className="flex gap-4 items-center mt-4">
                      <h1 className="text-2xl font-semibold text-white">
                        Katie Johnson
                      </h1>
                      <p className="text-[#E7E8EA] text-lg font-normal">|</p>
                      <p className="text-[#E7E8EA] text-lg font-normal">
                        Founder of Strava
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
            <div className="flex-1 object-cover w-[480px] h-[500px] overflow-hidden">
              <img
                src={reviewsPerson}
                alt="Review Person"
                className=" object-contain p-4 rounded-[30px]"
              />
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex">
            <div className="flex-1">
              <div className="flex flex-col items-center justify-start text-left">
                <div className="p-16">
                  {/* <img src={star} alt="" className="w-[90px] h-[70px]" /> */}
                  {/* Smaller Image */}
                  <p className="w-32 h-32  text-[#22dde4ce] text-7xl font-bold">
                    <RiDoubleQuotesL />
                  </p>

                  <p className="text-white text-[32px mb-6">
                    “Metro Solver with Mixer was the best solution. <br /> I am
                    very satisfied with the team and the work <br /> they did. I
                    am sincerely grateful for the work <br /> and effort.”
                  </p>

                  <div>
                    <div className="flex space-x-2 text-4xl">
                      {/* Star 1 */}
                      <input
                        type="radio"
                        name="rating"
                        id="star1"
                        className="hidden peer/star1"
                      />
                      <label
                        htmlFor="star1"
                        className="cursor-pointer text-orange-400 peer-hover/star1:text-orange-400 transition-colors"
                      >
                        ★
                      </label>

                      {/* Star 2 */}
                      <input
                        type="radio"
                        name="rating"
                        id="star2"
                        className="hidden peer/star2"
                        defaultChecked
                      />
                      <label
                        htmlFor="star2"
                        className="cursor-pointer text-orange-400 peer-hover/star2:text-orange-400 transition-colors"
                      >
                        ★
                      </label>

                      {/* Star 3 */}
                      <input
                        type="radio"
                        name="rating"
                        id="star3"
                        className="hidden peer/star3"
                      />
                      <label
                        htmlFor="star3"
                        className="cursor-pointer text-orange-400 peer-hover/star3:text-orange-400 transition-colors"
                      >
                        ★
                      </label>

                      {/* Star 4 */}
                      <input
                        type="radio"
                        name="rating"
                        id="star4"
                        className="hidden peer/star4"
                      />
                      <label
                        htmlFor="star4"
                        className="cursor-pointer text-orange-400 peer-hover/star4:text-orange-400 transition-colors"
                      >
                        ★
                      </label>

                      {/* Star 5 */}
                      <input
                        type="radio"
                        name="rating"
                        id="star5"
                        className="hidden peer/star5"
                      />
                      <label
                        htmlFor="star5"
                        className="cursor-pointer text-orange-400 peer-hover/star5:text-orange-400 transition-colors"
                      >
                        ★
                      </label>
                    </div>
                    <div className="mt-6">
                      <img src={line} alt="" />
                    </div>

                    <div className="flex gap-4 items-center mt-4">
                      <h1 className="text-2xl font-semibold text-white">
                        Katie Johnson
                      </h1>
                      <p className="text-[#E7E8EA] text-lg font-normal">|</p>
                      <p className="text-[#E7E8EA] text-lg font-normal">
                        Founder of Strava
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
            <div className="flex-1 object-cover w-[480px] h-[500px] overflow-hidden">
              <img
                src={reviewsPerson}
                alt="Review Person"
                className=" object-contain p-4 rounded-[30px]"
              />
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex">
            <div className="flex-1">
              <div className="flex flex-col items-center justify-start text-left">
                <div className="p-16">
                  {/* <img src={star} alt="" className="w-[90px] h-[70px]" /> */}
                  {/* Smaller Image */}
                  <p className="w-32 h-32  text-[#22dde4ce] text-7xl font-bold">
                    <RiDoubleQuotesL />
                  </p>

                  <p className="text-white text-[32px mb-6">
                    “Metro Solver with Mixer was the best solution. <br /> I am
                    very satisfied with the team and the work <br /> they did. I
                    am sincerely grateful for the work <br /> and effort.”
                  </p>

                  <div>
                    <div className="flex space-x-2 text-4xl">
                      {/* Star 1 */}
                      <input
                        type="radio"
                        name="rating"
                        id="star1"
                        className="hidden peer/star1"
                      />
                      <label
                        htmlFor="star1"
                        className="cursor-pointer text-orange-400 peer-hover/star1:text-orange-400 transition-colors"
                      >
                        ★
                      </label>

                      {/* Star 2 */}
                      <input
                        type="radio"
                        name="rating"
                        id="star2"
                        className="hidden peer/star2"
                        defaultChecked
                      />
                      <label
                        htmlFor="star2"
                        className="cursor-pointer text-orange-400 peer-hover/star2:text-orange-400 transition-colors"
                      >
                        ★
                      </label>

                      {/* Star 3 */}
                      <input
                        type="radio"
                        name="rating"
                        id="star3"
                        className="hidden peer/star3"
                      />
                      <label
                        htmlFor="star3"
                        className="cursor-pointer text-orange-400 peer-hover/star3:text-orange-400 transition-colors"
                      >
                        ★
                      </label>

                      {/* Star 4 */}
                      <input
                        type="radio"
                        name="rating"
                        id="star4"
                        className="hidden peer/star4"
                      />
                      <label
                        htmlFor="star4"
                        className="cursor-pointer text-orange-400 peer-hover/star4:text-orange-400 transition-colors"
                      >
                        ★
                      </label>

                      {/* Star 5 */}
                      <input
                        type="radio"
                        name="rating"
                        id="star5"
                        className="hidden peer/star5"
                      />
                      <label
                        htmlFor="star5"
                        className="cursor-pointer text-orange-400 peer-hover/star5:text-orange-400 transition-colors"
                      >
                        ★
                      </label>
                    </div>
                    <div className="mt-6">
                      <img src={line} alt="" />
                    </div>

                    <div className="flex gap-4 items-center mt-4">
                      <h1 className="text-2xl font-semibold text-white">
                        Katie Johnson
                      </h1>
                      <p className="text-[#E7E8EA] text-lg font-normal">|</p>
                      <p className="text-[#E7E8EA] text-lg font-normal">
                        Founder of Strava
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
            <div className="flex-1 object-cover w-[480px] h-[500px] overflow-hidden">
              <img
                src={reviewsPerson}
                alt="Review Person"
                className=" object-contain p-4 rounded-[30px]"
              />
            </div>
          </div>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default ReviewsSlider;
