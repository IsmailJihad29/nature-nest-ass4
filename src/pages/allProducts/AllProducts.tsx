/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from "@/components/ProductCard";
import { useGetProductsQuery } from "@/redux/api/productApi";

const AllProducts = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useGetProductsQuery({});

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-green-100">
        <div className="flex items-center space-x-2 text-green-700">
          <div className="w-8 h-8 border-4 border-green-700 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-2xl font-medium">Loading...</span>
        </div>
      </div>
    );
  }
      
  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center text-2xl text-red-500">
        Error loading data
      </div>
    );
  }

  return (
    <section className="py-12 min-h-screen flex flex-col items-center bg-gradient-to-r from-green-50 to-green-100">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full mx-auto">
          {products?.data?.map((product: any) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
