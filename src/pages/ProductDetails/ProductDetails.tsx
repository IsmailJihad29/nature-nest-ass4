/* eslint-disable @typescript-eslint/no-unused-vars */
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { useGetSingleProductsQuery } from "@/redux/api/productApi";
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TProduct } from "@/utils/interface";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { _id } = useParams();
  const { data: productData, isLoading } = useGetSingleProductsQuery(
    _id as string
  );

  //! have to do somthing

  const product = productData?.data;
  console.log(product);
  if (isLoading) {
    return <Loading />;
  }

  const dispatch = useAppDispatch();

  const handleAddToCart = (product: TProduct) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="container mx-auto px-4 py-8 my-20">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Image on Left */}
        <div className="w-full lg:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Product Details on Right */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h1 className="text-3xl font-bold text-green-700 mb-4">
            {product.title}
          </h1>
          <p className="text-xl text-yellow-700 font-bold mb-4">
            ${product.price}
          </p>
          <p className="text-xl text-green-600 font-bold mb-4">
            {product.quantity} In Stock
          </p>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-gray-800 font-semibold">Category:</span>
            <span className="text-green-600">{product.category}</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-gray-800 font-semibold">Rating:</span>
            <span className="text-yellow-500">{product.rating} / 5</span>
          </div>
          <p className="text-gray-600 mb-6 text-xl font-semibold">
            {product.description}
          </p>

          {/* Add to Cart Button */}
          <Button
            className="w-full lg:w-auto bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
            onClick={() => {
              handleAddToCart(product);
            }}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
