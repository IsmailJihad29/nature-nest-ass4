import Heading from "@/components/Heading";
import {
  FaShieldAlt,
  FaStar,
  FaTrophy,
  FaHandHoldingHeart,
  FaLeaf,
  FaSeedling,
  FaHandHoldingUsd,
  FaSmile,
  FaShippingFast, // Added new icon
} from "react-icons/fa";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  return (
    <div className="mx-auto global-bg ">
     <Heading heading="   Why Choose Us" tag="Discover Why We Stand Out with Exceptional service quality and
          commitment to your success"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[70%] mx-auto">
        {/* Reason 1 */}
        <div
          className="flex items-center space-x-4 p-6 rounded-2xl shadow-lg  ease-in-out transform hover:scale-105 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-green-400"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="p-4 rounded-full bg-gradient-to-r from-green-400 to-green-600 group-hover:scale-110 transition-transform duration-300">
            <FaLeaf className="text-white text-4xl" />
          </div>
          <p className="text-primary  ">500+ plants and gardening supplies.</p>
        </div>

        {/* Reason 2 */}
        <div
          className="flex items-center space-x-4 p-6 rounded-2xl shadow-lg ease-in-out transform hover:scale-105 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-teal-400"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="p-4 rounded-full bg-gradient-to-r from-teal-400 to-teal-600 group-hover:scale-110 transition-transform duration-300">
            <FaSeedling className="text-white text-4xl" />
          </div>
          <p className="text-primary">
            Trusted by thousands of plant lovers.
          </p>
        </div>

        {/* Reason 3 */}
        <div
          className="flex items-center space-x-4 p-6 rounded-2xl shadow-lg ease-in-out transform hover:scale-105 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-lime-400"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="p-4 rounded-full bg-gradient-to-r from-lime-400 to-lime-600 group-hover:scale-110 transition-transform duration-300">
            <FaStar className="text-white text-4xl" />
          </div>
          <p className="text-primary">
            Rated 4.9/5 for quality and service.
          </p>
        </div>

        {/* Reason 4 */}
        <div
          className="flex items-center space-x-4 p-6 rounded-2xl shadow-lg ease-in-out transform hover:scale-105 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-yellow-400"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="p-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:scale-110 transition-transform duration-300 ">
            <FaHandHoldingUsd className="text-white text-4xl" />
          </div>
          <p className="text-primary">
            Affordable prices with exclusive offers.
          </p>
        </div>

        {/* Reason 5 */}
        <div
          className="flex items-center space-x-4 p-6 rounded-2xl shadow-lg  ease-in-out transform hover:scale-105 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-orange-400"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="p-4 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 group-hover:scale-110 transition-transform duration-300">
            <FaSmile className="text-white text-4xl" />
          </div>
          <p className="text-primary">
            Friendly customer support and expert advice.
          </p>
        </div>

        {/* Reason 6 */}
        <div
          className="flex items-center space-x-4 p-6 rounded-2xl shadow-lg  ease-in-out transform hover:scale-105 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-purple-400"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="p-4 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 group-hover:scale-110 transition-transform duration-300">
            <FaShieldAlt className="text-white text-4xl" />
          </div>
          <p className="text-primary">
            Secure payments and data privacy.
          </p>
        </div>

        {/* Reason 7 */}
        <div
          className="flex items-center space-x-4 p-6 rounded-2xl shadow-lg  ease-in-out transform hover:scale-105 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-blue-400"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <div className="p-4 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 group-hover:scale-110 transition-transform duration-300">
            <FaTrophy className="text-white text-4xl" />
          </div>
          <p className="text-primary">
            Recognized for sustainable gardening.
          </p>
        </div>

        {/* Reason 8 */}
        <div
          className="flex items-center space-x-4 p-6 rounded-2xl shadow-lg  ease-in-out transform hover:scale-105 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-pink-400"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div className="p-4 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 group-hover:scale-110 transition-transform duration-300">
            <FaShippingFast className="text-white text-4xl" />
          </div>
          <p className="text-primary">
            Fast and reliable nationwide delivery.
          </p>
        </div>

        {/* Reason 9 */}
        <div
          className="flex items-center space-x-4 p-6 rounded-2xl shadow-lg ease-in-out transform hover:scale-105 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-red-400"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <div className="p-4 rounded-full bg-gradient-to-r from-red-400 to-red-600 group-hover:scale-110 transition-transform duration-300">
            <FaHandHoldingHeart className="text-white text-4xl" />
          </div>
          <p className="text-primary">
            Supporting a greener and healthier planet.
          </p>
        </div>
      </div>

      <div className="container mx-auto mt-5 pb-5 text-center" data-aos="fade-up">
       <Link to={'/products'}>
       <button className="primary-btn  transition">
          Explore Plants
        </button>
       </Link>
      </div>
    </div>
  );
};

export default WhyChooseUs;
