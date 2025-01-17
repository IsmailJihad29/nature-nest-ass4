

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Loading from "@/components/Loading";
import ProductCard from "@/components/ProductCard";
import { setCurrentPage } from "@/redux/features/paginationSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useGetProductsQuery } from "@/redux/api/productApi"


const ProductList = () => {
  const [category,] = useState("");
  const { data: products, isLoading, isError } = useGetProductsQuery(category);

  // Pagination state
  const dispatch = useDispatch();
  const currentPage = useSelector(
    (state: RootState) => state.pagination.currentPage
  );
  const productsPerPage = 10;

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

  return (
    <section className="py-12 mt-10 global-bg "

    >
      <div className="text-center mb-14" data-aos="fade-right">
        <h2 className="text-5xl font-extrabold text-green-700 font-heading">
          Discover Our Best Products
        </h2>
        <p className="text-lg text-gray-600 mt-2 font-title font-semibold">
          Handpicked selections just for you!
        </p>
      </div>
      <div className="container mx-auto  px-4 sm:px-6 lg:px-8 ">
      

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
{/* data-aos="fade-up" */}
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 items-center  w-[80%] lg:w-full mx-auto" >
          {currentProducts?.map((product: any) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>

        {/* Pagination Controls */}
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

export default ProductList;
