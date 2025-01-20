/* eslint-disable @typescript-eslint/no-explicit-any */
import Loading from "@/components/Loading";
import ProductCard from "@/components/ProductCard";
import { useGetProductsQuery } from "@/redux/api/productApi";
import { setCurrentPage } from "@/redux/features/paginationSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

const AllProducts = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useGetProductsQuery({});

  const dispatch = useDispatch();
  const currentPage = useSelector(
    (state: RootState) => state.pagination.currentPage
  );
  const productsPerPage = 12;

  // Logic for displaying products for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products?.data?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Logic for pagination controls
  const totalPages = Math.ceil(products?.data?.length / productsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };
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
          {currentProducts?.map((product: any) => (
            <ProductCard product={product} key={product._id} />
          ))}
           
        </div>
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`secondary-btn ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-green-600"
            }`}
          >
            Previous
          </button>
          <span className="text-lg font-semibold text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`primary-btn ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-green-600"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
