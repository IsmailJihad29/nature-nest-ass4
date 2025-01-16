



import { Link } from "react-router-dom";
import { useState } from "react";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import pic1 from "../../assets/slider/pic1.jpg";
import pic2 from "../../assets/slider/pic2.jpg";
import pic3 from "../../assets/slider/pic3.jpg";
import pic4 from "../../assets/slider/pic4.jpg";
import pic5 from "../../assets/slider/pic5.jpg";

const Header = () => {
  const [bgImage, setBgImage] = useState(pic1);

  // Array of background images
  const backgrounds = [pic1, pic2, pic3, pic4, pic5];

  return (
    <section
      className="relative h-screen sm:py-24 overflow-hidden flex items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        transition: "background-image 0.6s ease-in-out",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="container mx-auto px-6 sm:px-12 relative z-10  ">
        {/* Hero Text */}
        <div className="flex flex-col-reverse lg:flex-row items-center ">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-right">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-white drop-shadow-md">
              Welcome to <span className="text-green-400">NatureNest</span>
            </h1>
            <div className="mt-4 text-gray-300 text-base md:text-lg drop-shadow-md w-full sm:w-[80%] lg:w-[70%] font-text">
              Discover a variety of indoor and outdoor plants, perfect for your home and garden. Let’s bring nature closer to you.
            </div>
            <p className="mt-4 text-gray-300 text-sm md:text-lg drop-shadow-md font-title">
              🌿 Explore rare plants <br />
              🌸 Best plant care tips <br />
              🛒 Shop with ease
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to={"/products"}>
                <button className="bg-green-500 text-white font-semibold px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
                  Shop Now
                </button>
              </Link>
              <Link to={"/"}>
                <button className="bg-white text-green-600 font-semibold px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
                  Learn Plant Care
                </button>
              </Link>
            </div>
          </div>

          <div
            className="w-full md:w-3/4 lg:w-[50%] animate-slider max-w-md lg:max-w-none"
            data-aos="fade-up"
          >
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="h-[60vw] md:h-[50vw] lg:h-[400px] shadow-lg rounded-lg overflow-hidden  w-[80%]"
              onSlideChange={(swiper) => setBgImage(backgrounds[swiper.activeIndex])}
            >
              {backgrounds.map((image, index) => (
                <SwiperSlide
                  key={index}
                  className="flex items-center justify-center rounded-2xl w-90 h-90 "
                >
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
