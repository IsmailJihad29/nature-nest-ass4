/* eslint-disable @typescript-eslint/no-explicit-any */
import Loading from "@/components/Loading";
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
      <Loading/>
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
    <section className="py-12 min-h-screen flex flex-col items-center global-bg">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full mx-auto">
          {products?.data?.map((product: any) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
