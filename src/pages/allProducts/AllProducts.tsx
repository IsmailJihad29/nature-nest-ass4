/* eslint-disable @typescript-eslint/no-explicit-any */
import Loading from "@/components/Loading";
import ProductCard from "@/components/ProductCard";
import { useGetProductsQuery } from "@/redux/api/productApi";
import { setCurrentPage } from "@/redux/features/paginationSlice";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AllProducts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(""); // Category filter
  const [sortOrder, setSortOrder] = useState(""); // Sort by price

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

  // NEW STATE: Store all categories separately
  const [allCategories, setAllCategories] = useState<string[]>([]);

  // This effect runs once when products are loaded
  useEffect(() => {
    if (products?.data) {
      // Extract unique categories from the full product list
      const fullCategoryList = products.data.map((product: { category: any; }) => product.category);

      setAllCategories(Array.from(new Set(fullCategoryList))); // Store all unique categories
    }
  }, [products]);

  useEffect(() => {
    dispatch(setCurrentPage(1)); // Reset pagination to the first page on any filter change
  }, [searchQuery, selectedCategory, sortOrder, dispatch]);

  const currentPage = useSelector(
    (state: RootState) => state.pagination.currentPage
  );
  // const totalPages = useSelector((state: RootState) => state.pagination.totalPages);
  const productsPerPage = 16;

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

  //* Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  //* Handle category change
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  //* Handle price sort order change
  const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  return (
    <section className="py-12  bg-[#EFE3D5] ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-green-700 text-center mb-8">
          Our Featured Products
        </h2>

        <div className="flex  mb-4">
          {/* Category Filter */}
          <div className=" space-x-3">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Categories</option>
              {allCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {/* Sort by Price */}
            <select
              onChange={handleSortOrderChange}
              className="p-3 border rounded-lg"
            >
              <option value="">Sort By</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>

          <div className="flex-grow flex justify-end mb-4">
            <input
              type="text"
              placeholder="Search by name or description"
              value={searchQuery}
              onChange={handleSearchChange}
              className="p-3 xl:my-0 my-3 w-full max-w-md border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 "
            />
          </div>
        </div>

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

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentProducts?.map((product: any) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>

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
