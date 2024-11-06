

/* eslint-disable @typescript-eslint/no-explicit-any */
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TProduct } from "@/utils/interface";
import { FaStar, FaStarHalfAlt, FaShoppingCart, FaInfoCircle, FaTag, FaDollarSign, FaBoxOpen } from "react-icons/fa"; // Updated icons
import { Link } from "react-router-dom";
import grid from "../assets/grid.svg";
import circle from "../assets/circle.svg";

const ProductCard = ({ product }: any) => {
  const dispatch = useAppDispatch();
  const handleAddToCart = (product: TProduct) => {
    dispatch(addToCart(product));
  };

  // Function to get the first two words of the title
  const getShortTitle = (title: string) => {
    const words = title.split(" ");
    return words.slice(0, 2).join(" "); // Join the first two words
  };

  return (
    <div className="w-[270px] relative transform transition duration-300 hover:scale-105">
      <div className="group relative overflow-hidden w-[270px] h-[350px] bg-slate-300 rounded-3xl shadow-lg hover:shadow-2xl transform transition-all duration-300  hover:-translate-y-2">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity duration-300"
          src={product.image}
          alt={product.title}
        />

        <div className="absolute bottom-0 left-0 right-0 p-6 global-bg rounded-t-3xl translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="font-bold text-left font-title text-green-700 text-xl mb-2 flex items-center">
            <FaBoxOpen className="mr-2" /> {getShortTitle(product.title)} {/* Display the short title */}
          </h3>
          <h3 className="text-lg font-bold text-left font-text text-gray-700 flex items-center mb-2">
            <FaTag className="mr-2" /> {product.category} {/* Changed icon for category */}
          </h3>
          <h3 className="text-lg mb-4 font-semibold text-left font-text text-yellow-700 flex items-center">
            <FaDollarSign className="mr-2" /> Price: ${product.price} {/* Changed icon for price */}
          </h3>
          <div className="flex items-center justify-start mb-4">
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
          <div className="flex items-center justify-start space-x-2">
            <button
              onClick={() => {
                handleAddToCart(product);
              }}
              className="primary-btn flex items-center space-x-1"
            >
              <FaShoppingCart /> <span>Add to Cart</span>
            </button>
              <Link to={`/products/${product._id}`}>
            <button className="secondary-btn flex justify-between items-center space-x-1">
            <FaInfoCircle /> Details
            </button>
              </Link>
          </div>
        </div>

        {/* Decorative Icons */}
        <img
          className="absolute -left-10 -bottom-10 transform scale-75 opacity-50"
          src={circle}
          alt="circle"
        />
        <img
          className="absolute -right-2 -top-4 w-9 opacity-50"
          src={grid}
          alt="grid"
        />
      </div>
    </div>
  );
};

export default ProductCard;
