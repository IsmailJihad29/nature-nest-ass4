import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Slider from "@/components/Slider/Slider";

const Header = () => {
  return (
    <section className="relative global-bg py-12 sm:py-24 overflow-hidden">
      {/* Decorative Elements */}

      <div className="container mx-auto px-6 sm:px-12 relative z-10">
        {/* Hero Text */}
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <h1 className="font-heading text-5xl lg:text-7xl font-bold text-green-900 drop-shadow-md">
              Welcome to <span className="text-green-700">NatureNest</span>
            </h1>
            <div className="mt-4 text-gray-700 text-lg drop-shadow-md w-[70%] font-text">
              Discover a variety of indoor and outdoor plants, perfect for your
              home and garden. Let’s bring nature closer to you.
            </div>
            <p className="mt-4 text-gray-700 text-lg drop-shadow-md font-title">
              🌿 Explore rare plants <br />
              🌸 Best plant care tips <br />
              🛒 Shop with ease
            </p>

            <div className="mt-8">
              <Link to={"/products"}>
                <button className="primary-btn ">Shop Now</button>
              </Link>
              <Link to={"/"}>
                <button className="secondary-btn">Learn Plant Care</button>
              </Link>
            </div>
          </div>
          {/* Hero Image */}
          {/* <div data-aos="fade-left" className="w-full lg:w-1/2 mb-8 lg:mb-0 transform transition duration-500 hover:scale-105">
            <img
              src="https://i.ibb.co.com/BZ22FqK/DALL-E-2024-09-13-10-39-34-A-vibrant-and-welcoming-hero-image-for-an-online-plant-nursery-website-Na.webp"
              alt="NatureNest Plants"
              className="w-[80%] rounded-lg shadow-2xl"
            />
          </div> */}
          \
          <div className="w-full md:w-[50%] animate-slider max-w-md md:max-w-none"
          data-aos="fade-up">
            <Slider/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
