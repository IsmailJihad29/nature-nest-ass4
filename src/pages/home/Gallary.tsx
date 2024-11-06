


import  { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import { useGetProductsQuery } from "@/redux/api/productApi";

type Product = {
  _id: string;
  title: string;
  image: string;
};

// Custom Hook to Check Screen Size
const useResponsive = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = () => setMatches(mediaQueryList.matches);

    listener();
    mediaQueryList.addEventListener("change", listener);
    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query]);

  return matches;
};

// Main Gallery Component for Large Devices
const MainGallery = ({ products }: { products: Product[] }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 auto-rows-[200px]">
    {products.map((product, index) => (
      <div
        key={product._id}
        className={`relative rounded-lg overflow-hidden shadow-lg ${
          index % 9 === 0
            ? "col-span-2 row-span-2"
            : index % 8 === 0
            ? "col-span-2 row-span-1"
            : index % 7 === 0
            ? "col-span-1 row-span-1"
            : index % 6 === 0
            ? "col-span-1 row-span-2"
            : index % 5 === 0
            ? "col-span-2 row-span-2"
            : index % 4 === 0
            ? "col-span-1 row-span-1"
            : index % 3 === 0
            ? "col-span-1 row-span-1"
            : index % 2 === 0
            ? "col-span-2 row-span-1"
            : "col-span-1 row-span-1"
        }`}
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <h3 className="text-white text-lg font-semibold">{product.title}</h3>
        </div>
      </div>
    ))}
  </div>
);

// Small Gallery Component for Small Devices with Mosaic Style
const SmallGallery = ({ products }: { products: Product[] }) => (
  <div className="grid grid-cols-3 gap-2 auto-rows-[100px] sm:auto-rows-[150px]">
    {products.map((product, index) => (
      <div
        key={product._id}
        className={`relative overflow-hidden rounded ${
          index % 6 === 0
            ? "col-span-2 row-span-2"
            : index % 5 === 0
            ? "col-span-1 row-span-2"
            : "col-span-1 row-span-1"
        }`}
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <h3 className="text-white text-xs font-semibold">{product.title}</h3>
        </div>
      </div>
    ))}
  </div>
);

// Main Gallery Component with Dynamic Rendering
const Gallery = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery("");
  const isLargeScreen = useResponsive("(min-width: 768px)");

  // Shuffle and get 14 random products
  const getRandomProducts = (productsList: Product[], count: number) => {
    if (!productsList) return [];

    const shuffled = [...productsList].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomProducts = getRandomProducts(products?.data, 14);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-heading font-extrabold text-green-700 text-center mb-4">
          Discover Our Finest Picks
        </h2>
        <p className="text-lg font-title text-gray-600 text-center mb-8">
          A curated collection of top products, handpicked for you.
        </p>

        {/* Loading State */}
        {isLoading && <Loading />}

        {/* Error State */}
        {isError && (
          <div className="flex justify-center items-center h-64">
            <div className="text-red-600 text-lg font-semibold">
              Error loading products. Please try again.
            </div>
          </div>
        )}

        {/* Conditionally Render Gallery */}
        {isLargeScreen ? (
          <MainGallery products={randomProducts} />
        ) : (
          <SmallGallery products={randomProducts} />
        )}
      </div>
    </section>
  );
};

export default Gallery;
