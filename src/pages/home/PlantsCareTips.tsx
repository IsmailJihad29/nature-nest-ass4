
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGetPlantsCareQuery } from "@/redux/api/productApi";
import { FaSeedling, FaTint, FaSun, FaLeaf } from "react-icons/fa"; // Import icons

const PlantsCareTips = () => {
  const { data, error, isLoading } = useGetPlantsCareQuery(undefined);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching plant care tips.</p>;

  const icons = [<FaSeedling className="text-5xl text-green-800" />, <FaTint className="text-5xl text-green-800" />, <FaSun className="text-5xl text-green-800" />, <FaLeaf className="text-5xl text-green-800" />]; // Define a list of icons

  return (
    <section className="my-12 px-6 md:px-12 lg:px-24 py-12">
      <div className="text-center mb-8">
        <h2 className="text-5xl font-extrabold text-green-800 font-heading">Plants Care Tips</h2>
        <p className="text-gray-600 text-lg font-title">Discover quick tips to keep your plants healthy and thriving.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[70%] mx-auto mt-20">
        {data?.data?.map((tip: any, index: any) => (
          <div
            key={index}
            className="relative text-green-700 rounded-lg p-6 pt-16 text-left shadow-lg transition-transform transform hover:scale-105 mx-auto mb-10 w-full"
          >
            {/* Floating icon container */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
              {icons[index % icons.length]} {/* Cycle through the icons */}
            </div>

            <h3 className="text-lg font-extrabold mt-8 font-title">{tip.category}</h3>
            <ul className="text-gray-600 mt-2 font-text">
              {tip.shortTips.map((shortTip: any, idx: any) => (
                <li key={idx} className="list-disc list-inside">
                  {shortTip}
                </li>
              ))}
            </ul>
          
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlantsCareTips;
