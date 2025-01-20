// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { addToCart } from "@/redux/features/cartSlice";
// import { useAppDispatch } from "@/redux/hooks";
// import { TProduct } from "@/utils/interface";
// import { FaStar, FaStarHalfAlt, FaShoppingCart, FaInfoCircle, FaTag, FaDollarSign, FaBoxOpen } from "react-icons/fa"; // Updated icons
// import { Link } from "react-router-dom";
// import grid from "../assets/grid.svg";
// import circle from "../assets/circle.svg";

// const ProductCard = ({ product }: any) => {
//   const dispatch = useAppDispatch();
//   const handleAddToCart = (product: TProduct) => {
//     dispatch(addToCart(product));
//   };

//   // Function to get the first two words of the title
//   const getShortTitle = (title: string) => {
//     const words = title.split(" ");
//     return words.slice(0, 2).join(" "); // Join the first two words
//   };

//   return (
//     <div className="w-[270px] relative transform transition duration-300 hover:scale-105">
//       <div className="group relative overflow-hidden w-[270px] h-[350px] bg-slate-300 rounded-3xl shadow-lg hover:shadow-2xl transform transition-all duration-300  hover:-translate-y-2">
//         <img
//           className="absolute inset-0 w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity duration-300"
//           src={product.image}
//           alt={product.title}
//         />

//         <div className="absolute bottom-0 left-0 right-0 p-6 global-bg rounded-t-3xl translate-y-full group-hover:translate-y-0 transition-transform duration-500">
//           <h3 className="font-bold text-left font-title text-green-700 text-xl mb-2 flex items-center">
//             <FaBoxOpen className="mr-2" /> {getShortTitle(product.title)} {/* Display the short title */}
//           </h3>
//           <h3 className="text-lg font-bold text-left font-text text-gray-700 flex items-center mb-2">
//             <FaTag className="mr-2" /> {product.category} {/* Changed icon for category */}
//           </h3>
//           <h3 className="text-lg mb-4 font-semibold text-left font-text text-yellow-700 flex items-center">
//             <FaDollarSign className="mr-2" /> Price: ${product.price} {/* Changed icon for price */}
//           </h3>
//           <div className="flex items-center justify-start mb-4">
//             <div className="flex text-yellow-400">
//               {Array(Math.floor(product.rating))
//                 .fill(0)
//                 .map((_, i) => (
//                   <FaStar key={i} />
//                 ))}
//               {product.rating % 1 !== 0 && <FaStarHalfAlt />}
//             </div>
//             <span className="text-sm text-gray-600 ml-2">
//               ({product.rating.toFixed(1)})
//             </span>
//           </div>
//           <div className="flex items-center justify-start space-x-2">
//             <button
//               onClick={() => {
//                 handleAddToCart(product);
//               }}
//               className="primary-btn flex items-center space-x-1"
//             >
//               <FaShoppingCart /> <span>Add to Cart</span>
//             </button>
//               <Link to={`/products/${product._id}`}>
//             <button className="secondary-btn flex justify-between items-center space-x-1">
//             <FaInfoCircle /> Details
//             </button>
//               </Link>
//           </div>
//         </div>

//         {/* Decorative Icons */}
//         <img
//           className="absolute -left-10 -bottom-10 transform scale-75 opacity-50"
//           src={circle}
//           alt="circle"
//         />
//         <img
//           className="absolute -right-2 -top-4 w-9 opacity-50"
//           src={grid}
//           alt="grid"
//         />
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

/* eslint-disable @typescript-eslint/no-explicit-any */
// import { addToCart } from "@/redux/features/cartSlice";
// import { useAppDispatch } from "@/redux/hooks";
// import { TProduct } from "@/utils/interface";
// import { FaShoppingCart, FaInfoCircle, FaStar, FaStarHalfAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const ProductCard = ({ product }: any) => {
//   const dispatch = useAppDispatch();

//   const handleAddToCart = (product: TProduct) => {
//     dispatch(addToCart(product));
//   };

//   return (
//     <div className="relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 max-w-sm  group">
//       {/* Image Section */}
//       <div className="relative w-full h-[240px] bg-gray-100">
//         <img
//           className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
//           src={product.image}
//           alt={product.title}
//         />
//         <div className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
//           ${product.price.toFixed(2)}
//         </div>
//       </div>

//       {/* Details Section */}
//       <div className="p-4">
//         {/* Title */}
//         <h3 className="text-lg font-semibold text-gray-800 truncate mb-1">{product.title}</h3>
//         {/* Category */}
//         <p className="text-sm text-gray-500 truncate mb-3">{product.category}</p>

//         {/* Rating */}
//         <div className="flex items-center space-x-1 mb-4">
//           <div className="flex text-yellow-400">
//             {Array(Math.floor(product.rating))
//               .fill(0)
//               .map((_, i) => (
//                 <FaStar key={i} />
//               ))}
//             {product.rating % 1 !== 0 && <FaStarHalfAlt />}
//           </div>
//           <span className="text-sm text-gray-600 ml-1">({product.rating.toFixed(1)})</span>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex justify-between items-center mt-3">
//           <button
//             onClick={() => handleAddToCart(product)}
//             className="flex items-center justify-center bg-green-500 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-green-600 transition-all"
//           >
//             <FaShoppingCart className="mr-2" />
//             Add to Cart
//           </button>
//           <Link to={`/products/${product._id}`}>
//             <button className="flex items-center justify-center text-green-500 border border-green-500 text-sm font-medium px-4 py-2 rounded-lg hover:bg-green-100 transition-all">
//               <FaInfoCircle className="mr-2" />
//               Details
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* Badge or Decorative Shape */}
//       <div className="absolute top-0 right-0 bg-green-100 text-green-600 font-semibold text-xs px-2 py-1 rounded-bl-lg shadow-sm">
//         New Arrival
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TProduct } from "@/utils/interface";
import {
  FaShoppingCart,
  FaInfoCircle,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }: any) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (product: TProduct) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="relative bg-white   rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300   w-72  group">
      {/* Decorative Abstract Patterns */}

      {/* Image Section */}
      <div className="relative w-full h-[240px] bg-gray-100 overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
          src={product.image}
          alt={product.title}
        />
        {/* <div className="absolute top-3 left-3 bg-green-600 text-white font-bold text-md px-3 py-1 rounded-3xl">
         
        </div> */}

        <div className="absolute top-0 right-0 bg-green-100 text-green-600 font-bold text-sm px-4 py-1 rounded-bl-lg shadow-sm">
          ${product.price.toFixed()}
        </div>
      </div>

      {/* Details Section */}
      <div className="p-4 relative z-10">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 truncate mb-1">
          {product.title}
        </h3>
        {/* Category */}
        <p className="text-sm text-gray-500 truncate mb-3">
          {product.category}
        </p>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-4">
          <div className="flex text-yellow-400">
            {Array(Math.floor(product.rating))
              .fill(0)
              .map((_, i) => (
                <FaStar key={i} />
              ))}
            {product.rating % 1 !== 0 && <FaStarHalfAlt />}
          </div>
          <span className="text-sm text-gray-600 ml-1">
            ({product.rating.toFixed(1)})
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-3">
          <button
            onClick={() => handleAddToCart(product)}
            className="flex items-center justify-center bg-green-500 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-green-600 transition-all"
          >
            <FaShoppingCart className="mr-2" />
            Add to Cart
          </button>
          <Link to={`/products/${product._id}`}>
            <button className="flex items-center justify-center text-green-500 border border-green-500 text-sm font-medium px-4 py-2 rounded-lg hover:bg-green-100 transition-all">
              <FaInfoCircle className="mr-2" />
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
