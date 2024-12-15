import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

// Image imports
import img from '../HomePagePhoto/image.png';
import img1 from '../HomePagePhoto/image (1).png';
import img2 from '../HomePagePhoto/image (2).png';
import img3 from '../HomePagePhoto/image (3).png';
import img4 from '../HomePagePhoto/image (4).png';
import img5 from '../HomePagePhoto/image (5).png';
import img6 from '../HomePagePhoto/image (6).png';
import img7 from '../HomePagePhoto/image (7).png';
import img8 from '../HomePagePhoto/image (8).png';
import img9 from '../HomePagePhoto/image (9).png';
import img10 from '../HomePagePhoto/image (10).png';
import img11 from '../HomePagePhoto/image (11).png';
import img12 from '../HomePagePhoto/image (12).png';
import img13 from '../HomePagePhoto/image (13).png';

const LatestWork = () => {
  return (
    <div className="text-center mt-28 space-y-4">
      {/* Section Title */}
      <h1 className="text-6xl text-white font-semibold">Our Latest Works</h1>
      <p className="text-[#F3F3F4] text-lg font-normal">
        Based on the description of Metro Solver and the image provided, here is
        a <br /> 6-step process that Metro Solver uses to scale a customer’s
        business
      </p>

      {/* Swiper Section */}
      <div className="pt-12 space-y-8 px-10">
        <Swiper
          slidesPerView={4.5}
          spaceBetween={20}
          autoplay={{ delay: 5000 }}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            320: { slidesPerView: 1.5, spaceBetween: 10 },
            640: { slidesPerView: 2.5, spaceBetween: 20 },
            1024: { slidesPerView: 3.5, spaceBetween: 20 },
            1440: { slidesPerView: 4.5, spaceBetween: 30 },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=" shadow-lg w-full h-[18.5rem] object-cover">
              <img src={img} alt="Work 5" className="rounded-3xl" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img1}
              alt="Work 2"
              className="rounded-xl shadow-lg w-full h-64 object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img2}
              alt="Work 3"
              className="rounded-xl shadow-lg w-full h-64 object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img3}
              alt="Work 4"
              className="rounded-xl shadow-lg w-full h-64 object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className=" shadow-lg w-full h-[18.5rem] object-cover">
              <img src={img4} alt="Work 5" className="rounded-3xl" />
            </div>
          </SwiperSlide>
        </Swiper>
        <Swiper
          slidesPerView={3.5}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            320: { slidesPerView: 1.5, spaceBetween: 10 },
            640: { slidesPerView: 2.5, spaceBetween: 20 },
            1024: { slidesPerView: 3.5, spaceBetween: 20 },
            1440: { slidesPerView: 4.5, spaceBetween: 30 },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=" shadow-lg w-[405px] h-[42.5rem] object-cover">
              <img src={img5} alt="Work 5" className="rounded-3xl" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" shadow-lg w-[405px] h-[42.5rem] object-cover">
              <img src={img6} alt="Work 5" className="rounded-3xl" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" shadow-lg w-full h-[42.5rem] object-cover">
              <img src={img7} alt="Work 5" className="rounded-3xl" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" shadow-lg w-full h-[42.5rem] object-cover">
              <img src={img8} alt="Work 5" className="rounded-3xl" />
            </div>
          </SwiperSlide>
        </Swiper>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            320: { slidesPerView: 1.5, spaceBetween: 10 },
            640: { slidesPerView: 2.5, spaceBetween: 20 },
            1024: { slidesPerView: 3.5, spaceBetween: 20 },
            1440: { slidesPerView: 4.5, spaceBetween: 30 },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=" shadow-lg w-full h-[18.5rem] object-cover">
              <img src={img13} alt="Work 5" className="rounded-3xl" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img10}
              alt="Work 2"
              className="rounded-xl shadow-lg w-full h-64 object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img11}
              alt="Work 3"
              className="rounded-xl shadow-lg w-full h-64 object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img12}
              alt="Work 4"
              className="rounded-xl shadow-lg w-full h-64 object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className=" shadow-lg w-full h-[18.5rem] object-cover">
              <img src={img9} alt="Work 5" className="rounded-3xl" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default LatestWork;
