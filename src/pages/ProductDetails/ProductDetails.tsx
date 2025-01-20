/* eslint-disable @typescript-eslint/no-unused-vars */
import Loading from "@/components/Loading";
import ProductCard from "@/components/ProductCard";
import { useGetSingleProductsQuery, useGetProductsQuery } from "@/redux/api/productApi";
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TProduct } from "@/utils/interface";
import { useParams } from "react-router-dom";
import { useState } from "react";

const ProductDetails = () => {
  const { _id } = useParams();
  const { data: productData, isLoading: isLoadingProduct, isError: isErrorProduct } = useGetSingleProductsQuery(_id as string);
  const { data: allProductsData, isLoading: isLoadingAll, isError: isErrorAll } = useGetProductsQuery({});
  const dispatch = useAppDispatch();

  const [activeTab, setActiveTab] = useState("description");

  if (isLoadingProduct || isLoadingAll) {
    return <Loading />;
  }

  if (isErrorProduct || isErrorAll) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl text-red-600">
        Failed to load data.
      </div>
    );
  }

  const product = productData?.data;
  const allProducts = allProductsData?.data || [];

  if (!product) return null;

  const relatedProducts = allProducts.filter(
    (p: TProduct) => p.category === product.category && p._id !== product._id
  );

  const handleAddToCart = (product: TProduct) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="min-h-screen global-bg">
      {/* Product Details Section */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-4 py-12">
        {/* Product Image */}
        <div className="lg:w-1/2 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-md object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800  font-title">{product.title}</h1>
          <p className="text-2xl font-semibold text-green-600 font-text">${product.price}</p>
          
          <p className="text-lg font-medium text-gray-700  font-text">
            <span className="font-bold">Category:</span> {product.category}
          </p>
          <p className="text-lg font-medium text-yellow-600 font-text mb-4">
            <span className="font-bold ">Rating:</span> {product.rating} / 5
          </p>

          {/* Add to Cart */}
          <button
            className="primary-btn"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>

          {/* Tabs */}
          <div className="mt-8">
            <div className="flex gap-4 border-b mb-4">
              {["description", "reviews", "specifications"].map((tab) => (
                <button
                  key={tab}
                  className={`pb-2 text-lg font-medium ${
                    activeTab === tab ? "border-b-2 border-green-600 text-green-600" : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="text-gray-700">
              {activeTab === "description" && <p>{product.description}</p>}
              {activeTab === "reviews" && <p>No reviews yet.</p>}
              {activeTab === "specifications" && <p>Specifications will be added soon.</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className=" py-10">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Related Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct: TProduct) => (
                <div
                  key={relatedProduct._id}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition"
                >
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.title}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {relatedProduct.title}
                    </h3>
                    <p className="text-green-600 font-bold">${relatedProduct.price}</p>
                    <button
                      className="mt-4 w-full px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition"
                      onClick={() => handleAddToCart(relatedProduct)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
