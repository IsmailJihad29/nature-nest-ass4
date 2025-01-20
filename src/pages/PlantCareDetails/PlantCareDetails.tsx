/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  FiDroplet,
  FiInfo,
  FiHeart,
  FiSunrise,
  FiThumbsUp,
} from "react-icons/fi";
import { useGetPlantsCareQuery } from "@/redux/api/productApi";
import Loading from "@/components/Loading";
import Heading from "@/components/Heading";

const PlantCareDetails = () => {
  const { data, error, isLoading } = useGetPlantsCareQuery(undefined);
  const plantData = data?.data;

  if (isLoading) {
    return (
      <Loading/>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center text-2xl text-red-500">
        Error loading data
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100 min-h-screen p-6 md:p-8">
      {/* Header Text spanning all columns */}
    <Heading heading=" Plant Care Tips for Thriving Greenery!" tag="  Discover the best practices to keep your plants healthy and vibrant."/>


      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
        {plantData?.map((plant: any, index: any) => (
          <div
            key={index}
            className="relative bg-transparent rounded-lg shadow-lg mb-5 transform transition duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-green-500"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Top Icon with Floating Effect */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-green-700 text-white rounded-full p-4 shadow-lg">
              <FiHeart className="text-5xl md:text-6xl animate-pulse" />
            </div>

            {/* Card Content */}
            <div className="p-6 pt-12 md:pt-16 flex flex-col items-start relative z-10 mt-5 font-text">
              <h2 className="text-xl md:text-2xl font-semibold text-green-800 mb-4 font-title">
                {plant.category}
              </h2>

              <div className="mb-4 w-full">
                <h3 className="text-md md:text-lg font-medium text-green-600 mb-2 flex items-center">
                  <FiSunrise className="mr-2 text-yellow-400" /> Quick Tips
                </h3>
                <ul className="list-none space-y-2 text-gray-700">
                  {plant.shortTips.map((tip: any, i: any) => (
                    <li key={i} className="flex items-start space-x-2">
                      <FiThumbsUp className="text-green-500 mt-1" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full">
                <h3 className="text-md md:text-lg font-medium text-green-600 mb-2 flex items-center">
                  <FiDroplet className="mr-2 text-blue-400" /> Detailed Care
                </h3>
                <ul className="list-none space-y-2 text-gray-600">
                  {plant.careDetails.map((detail: any, i: any) => (
                    <li key={i} className="flex items-start space-x-2">
                      <FiInfo className="text-blue-500 mt-1" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Special Animated Gradient Border on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-300 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantCareDetails;
