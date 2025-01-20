import {
  FaSeedling,
  FaTree,
  FaLeaf,
  FaRecycle,
  FaAward,
  FaQuoteRight,
  FaQuoteLeft,
  FaHandsHelping,
} from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Heading from "@/components/Heading";

const MissionStatementSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="global-bg py-20 px-4 sm:px-8 lg:px-20 relative overflow-hidden">
      {/* Heading */}
      <Heading
        heading="  Our Mission"
        tag=" Nurturing nature and building a sustainable future by connecting people
          to the beauty of plants and the environment. Together, let's grow, thrive,
          and protect our planet."
      />

      {/* Mission Cards */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[70%]">
        {/* Sustainability */}
        <div
          className=" rounded-2xl shadow-lg p-6 sm:p-8 text-center group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-green-500"
          data-aos="zoom-in"
        >
          <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
            <FaSeedling className="text-3xl sm:text-4xl" />
          </div>
          <h3 className="text-title  pb-2 group-hover:text-green-500 transition duration-300">
            Sustainability
          </h3>
          <p className="text-gray-700 font-text">
            Committed to eco-friendly practices, ensuring the long-term health
            of our planet.
          </p>
        </div>

        {/* Nurturing Growth */}
        <div
          className=" rounded-2xl shadow-lg p-6 sm:p-8 text-center group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-teal-500"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-teal-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
            <FaHandsHelping className="text-3xl sm:text-4xl" />
          </div>
          <h3 className="text-title pb-2   group-hover:text-teal-500 transition duration-300">
            Nurturing Growth
          </h3>
          <p className="text-gray-700 font-text leading-relaxed">
            Empowering individuals with the tools and knowledge to grow plants
            and connect with nature.
          </p>
        </div>

        {/* Quality */}
        <div
          className=" rounded-2xl shadow-lg p-6 sm:p-8 text-center group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-yellow-500"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
            <FaAward className="text-3xl sm:text-4xl" />
          </div>
          <h3 className="text-title group-hover:text-yellow-500 transition duration-300">
            Quality
          </h3>
          <p className="text-gray-700 font-text leading-relaxed">
            Offering only the highest quality plants, seeds, and gardening
            products to our customers.
          </p>
        </div>

        {/* Environmental Awareness */}
        <div
          className=" rounded-2xl shadow-lg p-6 sm:p-8 text-center group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-indigo-500"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
            <FaLeaf className="text-3xl sm:text-4xl" />
          </div>
          <h3 className="text-title group-hover:text-indigo-500 transition duration-300">
            Environmental Awareness
          </h3>
          <p className="text-gray-700 font-text leading-relaxed">
            Raising awareness on the importance of sustainability and
            conservation in gardening practices.
          </p>
        </div>

        {/* Community Engagement */}
        <div
          className=" rounded-2xl shadow-lg p-6 sm:p-8 text-center group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-red-500"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-red-400 to-red-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
            <FaRecycle className="text-3xl sm:text-4xl" />
          </div>
          <h3 className="text-title group-hover:text-red-500 transition duration-300">
            Community Engagement
          </h3>
          <p className="text-gray-700 font-text leading-relaxed">
            Building a community of passionate gardeners and nature lovers who
            care for our environment.
          </p>
        </div>

        {/* Innovation */}
        <div
          className=" rounded-2xl shadow-lg p-6 sm:p-8 text-center group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-blue-500"
          data-aos="zoom-in"
          data-aos-delay="700"
        >
          <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
            <FaTree className="text-3xl sm:text-4xl" />
          </div>
          <h3 className="text-title group-hover:text-blue-500 transition duration-300">
            Innovation
          </h3>
          <p className="text-gray-700 font-text leading-relaxed">
            Introducing new ideas and creative solutions for sustainable
            gardening practices.
          </p>
        </div>
      </div>

      {/* Quote Section */}
      <div className="w-[90%] md:w-[70%] mx-auto mt-14" data-aos="zoom-in">
        <div className="absolute -top-8 -left-8 w-36 h-36 bg-gradient-to-br from-blue-400 to-blue-500 opacity-20 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-gradient-to-br from-green-400 to-green-500 opacity-20 rounded-full blur-3xl -z-10 animate-pulse"></div>

        <div className="relative  rounded-3xl shadow-xl p-8 sm:p-12 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden ">
          <div className="flex flex-col items-center">
            <div className="text-6xl text-gray-700  mb-4">
              <FaQuoteLeft />
            </div>

            <blockquote className="text-heading leading-relaxed max-w-3xl mx-auto ">
              "The creation of a thousand forests is in one acorn."
            </blockquote>

            <div className="text-6xl text-gray-700  mt-4">
              <FaQuoteRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionStatementSection;
