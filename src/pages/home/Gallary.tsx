import Loading from "@/components/Loading";
import { useGetProductsQuery } from "@/redux/api/productApi";

type Product = {
  _id: string;
  title: string;
  image: string;
  // Add any other relevant fields like price, description, etc.
};

const Gallary = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery("");

  // Shuffle and get 10 random products
  const getRandomProducts = (productsList: Product[], count: number) => {
    if (!productsList) return [];

    const shuffled = [...productsList].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomProducts = getRandomProducts(products?.data, 14);
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-green-700 text-center mb-8">
          Product Image Gallery
        </h2>
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

        <div className="grid grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-4 auto-rows-[200px]">
          {randomProducts.map((product, index) => (
            <div
              key={product._id}
              className={`relative rounded-lg overflow-hidden shadow-lg ${
                index % 9 === 0
                  ? "col-span-2 row-span-2" // Tall item for index divisible by 8
                  : index % 8 === 0
                  ? "col-span-2 row-span-1"
                  : index % 7 === 0
                  ? "col-span-1 row-span-1"
                  : // Wide block for index divisible by 7
                  index % 6 === 0
                  ? "col-span-1 row-span-2" // Large block item for index divisible by 6
                  : index % 5 === 0
                  ? "col-span-2 row-span-2" // Tall item for index divisible by 5
                  : index % 4 === 0
                  ? "col-span-1 row-span-1" // Wide item for index divisible by 4
                  : index % 3 === 0
                  ? "col-span-1 row-span-1" // Regular size block for index divisible by 3
                  : index % 2 === 0
                  ? "col-span-2 row-span-1" // Slightly wide item for index divisible by 2
                  : "col-span-1 row-span-1" // Default size for all others
              }`}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold">
                  {product.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallary;
