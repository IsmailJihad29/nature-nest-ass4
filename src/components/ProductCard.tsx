/* eslint-disable @typescript-eslint/no-explicit-any */
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TProduct } from "@/utils/interface";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }: any) => {
  const dispatch = useAppDispatch();
  const handleAddToCart = (product: TProduct) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="bg-[#F5F5DC] rounded-lg">
      <Link to={`/products/${product._id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-green-700 mb-2">
            {product.title}
          </h3>
          <h3 className="text-lg font-bold ">{product.category}</h3>
          <h3 className="text-[#8b5e3c] text-lg mb-4 font-secondery font-bold">
            Price: ${product.price}
          </h3>
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {Array(Math.floor(product.rating))
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
              {product.rating % 1 !== 0 && <FaStarHalfAlt />}
            </div>
            <span className="text-sm text-gray-600 ml-2">
              ({product.rating.toFixed(1)})
            </span>
          </div>
        </div>
      </Link>
      <div className=" p-4">
        <button
          onClick={() => {
            handleAddToCart(product);
          }}
          className="w-full bg-[#2C5F2D] hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center transition-colors duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
