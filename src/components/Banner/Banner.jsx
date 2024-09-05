import { IoIosStarOutline } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Banner = () => {
  return (
    <div className="flex items-center md:flex-row flex-col-reverse">
      {/* text */}
      <div className="w-1/3">
        {/* stars  */}
        <div className="flex gap-1 text-yellow-500 text-lg font-medium">
          <IoIosStarOutline />
          <IoIosStarOutline />
          <IoIosStarOutline />
          <IoIosStarOutline />
          <IoIosStarOutline />
        </div>
        <div>
          <p className="mt-3 text-lg font-medium">18,000+ TRUST CUSTOMERS</p>
          <h2 className="mt-7 text-3xl font-semibold">
            Discover Your{" "}
            {/* <Typed
              strings={["Paradise", "Desires", "Residence"]}
              typeSpeed={100}
              backSpeed={50}
              // loop
            /> */}
            Home
          </h2>
          <p className="my-7">
            Modern, responsive real estate template designed to showcase
            properties elegantly and attract potential buyers effortlessly.
          </p>
          <div className="flex gap-4 text-white">
            <button className="bg-[#FA4A4A] border-none px-5 py-3 rounded-md hover:bg-slate-700">
              Exlpore
            </button>
            <button className="bg-[#FA4A4A] border-none px-5 py-3 rounded-md hover:bg-slate-700">
              Demos
            </button>
          </div>
        </div>
      </div>
      {/* swiper  */}
      <div className="w-2/3">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          // pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <div className="p-20 border">
            <SwiperSlide className="my-10">
              <img
                src="https://risingtheme.com/html/demo-newvilla/assets/img/other/hero-layer-img.png"
                alt="Slide 1"
              />
            </SwiperSlide>
            <SwiperSlide className="my-10">
              <img
                src="https://risingtheme.com/html/demo-newvilla/assets/img/other/hero-layer-img2.png"
                alt="Slide 2"
              />
            </SwiperSlide>
            {/* Add more slides as needed */}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
