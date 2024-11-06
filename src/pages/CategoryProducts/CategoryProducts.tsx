import { useParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { useGetProductsQuery } from "@/redux/api/productApi";
import { TProduct } from "@/utils/interface";

const CategoryProducts = () => {
  const { category } = useParams(); // Get the category from the URL parameters
  const { data: allProductsData, isLoading, isError } = useGetProductsQuery({});

  // Handle loading and error states
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

  // Filter products based on the selected category
  const allProducts = allProductsData?.data || [];
  const categoryProducts = allProducts.filter(
    (product: TProduct) => product.category === category
  );

  return (
    <div className="container mx-auto px-4 py-8   ">
      <div className="container mx-auto  flex items-center justify-center min-h-[200px]">
        <div
          className="text-center text-lg md:text-2xl text-gray-600 global-bg rounded-lg py-4 px-6 md:px-8 font-medium shadow-md font-heading"
          data-aos="fade-right"
        >
          <h1 className="text-5xl font-extrabold text-green-800 mb-4">
            {category
              ? `Explore Our Collection of ${category} Plants 🌱`
              : "Discover All Our Plant Varieties 🌿"}
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[80%] mx-auto">
        {categoryProducts.length > 0 ? (
          categoryProducts.map((product: TProduct) => (
            <ProductCard product={product} key={product._id} />
          ))
        ) : (
          <p className="text-xl text-center col-span-full">
            No products found in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;
