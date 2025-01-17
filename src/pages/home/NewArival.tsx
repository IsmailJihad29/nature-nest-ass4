/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGetNewArivalProductQuery } from "@/redux/api/productApi";
import { Link } from "react-router-dom";

const NewArival = () => {
  const { data, error, isLoading } = useGetNewArivalProductQuery(undefined);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading new arrivals.</p>;

  return (
    <section className="py-10 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-8" data-aos="fade-right">
        <h2 className="text-5xl font-bold text-green-700 font-heading">
          New Arrivals
        </h2>
        <p className="text-gray-600 font-title text-lg font-semibold">
          Discover our latest products, curated just for you!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-[80%] mx-auto">
        {data?.data.map((product: any) => (
          <div
            key={product._id}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-[270px] h-[350px]"
            data-aos="fade-up"
          >
            <div className="relative h-full w-full overflow-hidden group">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 group-hover:opacity-90"
              />

              {/* Color fade overlay covering the whole card */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-800 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>

              {/* Text overlay */}
              <div className="absolute bottom-0 p-4 text-white w-full  bg-gradient-to-t from-gray-500 to-transparent">
                <h3 className="text-lg font-title font-bold text-shadow-md">
                  {product.title}
                </h3>
                <p className="text-sm mb-2 font-text">{product.category}</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-300  text-lg font-text">
                    ${product.price.toFixed(2)}
                  </span>
                  <button className="primary-btn">
                    <Link to={`/products/${product._id}`}>View Details</Link>
                  </button>
                </div>
              </div>

              <div className="absolute top-0 right-0 bg-green-100 text-green-600 font-semibold text-xs px-2 py-1 rounded-bl-lg shadow-sm">
                New Arrival
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArival;
