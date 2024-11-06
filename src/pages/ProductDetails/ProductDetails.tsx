/* eslint-disable @typescript-eslint/no-unused-vars */
import ProductCard from "@/components/ProductCard";
import { useGetSingleProductsQuery, useGetProductsQuery } from "@/redux/api/productApi";
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TProduct } from "@/utils/interface";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { _id } = useParams();
  const { data: productData, isLoading: isLoadingProduct, isError: isErrorProduct } = useGetSingleProductsQuery(_id as string);
  const { data: allProductsData, isLoading: isLoadingAll, isError: isErrorAll } = useGetProductsQuery({});
  const dispatch = useAppDispatch();

  // Handle loading and error states
  if (isLoadingProduct || isLoadingAll) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-green-100">
        <div className="flex items-center space-x-2 text-green-700">
          <div className="w-8 h-8 border-4 border-green-700 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-2xl font-medium">Loading...</span>
        </div>
      </div>
    );
  }

  if (isErrorProduct || isErrorAll) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center text-2xl text-red-500">
        Error loading data
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
    <div className="container mx-auto   ">
      <div className="flex flex-col lg:flex-row gap-8 shadow-lg px-4 py-8 my-20 rounded-lg">
        {/* Product Image Section */}
        <div className="w-full lg:w-1/2 ">
          <img
            src={product.image}
            alt={product.title}
            className="w-[80%] mx-auto  object-cover rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => window.open(product.image, "_blank")}
          />
        </div>

        {/* Product Details Section */}
        <div className="w-full lg:w-1/2 flex flex-col px-5 font-text">
          <h1 className="text-4xl font-bold text-green-800 mb-4 transition-colors duration-300 hover:text-green-600 font-title">
            {product.title}
          </h1>
          <p className="text-2xl text-yellow-700 font-bold mb-4">${product.price}</p>
          <p className="text-xl text-green-600 font-bold mb-4">{product.quantity} In Stock</p>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-gray-800 font-semibold">Category:</span>
            <span className="text-green-600">{product.category}</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-gray-800 font-semibold">Rating:</span>
            <span className="text-yellow-500">{product.rating} / 5</span>
          </div>

          <p className="text-gray-600 mb-6 text-xl ">{product.description}</p>

          {/* Add to Cart Button */}
          <button
            className="primary-btn"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="mt-10 mx-auto mb-10">
          <h2 className="text-3xl font-bold text-green-800 mb-6 font-heading">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-[60%] ">
            {relatedProducts.slice(0, 3).map((relatedProduct: TProduct) => (
              <ProductCard product={relatedProduct} key={relatedProduct._id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
