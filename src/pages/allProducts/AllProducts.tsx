/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from "@/components/ProductCard";
import { useGetProductsQuery } from "@/redux/api/productApi";
import { setCurrentPage } from "@/redux/features/paginationSlice";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AllProducts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [allCategories, setAllCategories] = useState<string[]>([]);

  const {
    data: products,
    isLoading,
    isError,
  } = useGetProductsQuery({
    searchQuery,
    category: selectedCategory,
    sortOrder,
  });
  const dispatch = useDispatch();
  const currentPage = useSelector(
    (state: RootState) => state.pagination.currentPage
  );
  const productsPerPage = 16;

  useEffect(() => {
    if (products?.data) {
      const fullCategoryList = products.data.map(
        (product: { category: any }) => product.category
      );
      setAllCategories(Array.from(new Set(fullCategoryList)));
    }
  }, [products]);

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, [searchQuery, selectedCategory, sortOrder, dispatch]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products?.data?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

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
    <section className="py-12 min-h-screen flex flex-col items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center min-h-[200px] mb-8">
          <div
            className="text-center text-lg md:text-2xl text-gray-600 global-bg rounded-lg py-4 px-6 md:px-8 font-medium shadow-md font-heading"
            data-aos="fade-right"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-green-800 mb-4">
              🌿 Explore Our Lush Collection of Beautiful Plants!
            </h2>
            <p className="text-lg text-gray-600 mb-0">
              Find the perfect green companion for your home or garden.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between mb-6 space-y-4 md:space-y-0">
          {/* Filter and Sort Section */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-3">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="p-3 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 global-bg text-gray-600 mb-3 md:mb-0"
            >
              <option value="">All Categories</option>
              {allCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <select
              onChange={handleSortOrderChange}
              className="p-3 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 global-bg text-gray-600 mb-3 md:mb-0"
            >
              <option value="">Sort By</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>

          {/* Search Box */}
          <div className="flex-grow flex justify-end">
            <input
              type="text"
              placeholder="Search by name or description"
              value={searchQuery}
              onChange={handleSearchChange}
              className="p-3 w-full max-w-md  rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 global-bg text-gray-600"
            />
          </div>
        </div>

        {/* Product Grid */}
        {!isLoading && !isError && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full md:w-[90%] mx-auto">
            {currentProducts?.map((product: any) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg bg-green-500 text-white font-semibold transition duration-300 ${
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
            className={`px-4 py-2 rounded-lg bg-green-500 text-white font-semibold transition duration-300 ${
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
