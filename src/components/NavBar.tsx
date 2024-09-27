import { useAppSelector } from '@/redux/hooks';
import { useState } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const cartItems = useAppSelector((store) => store.cart.products);
  return (
    <nav className="bg-[#6D9F6D] shadow-lg ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-[#EFE3D5]">
        <div className="flex justify-between items-center h-16">
        <div className='flex items-center space-x-3'>
        <img src="https://i.ibb.co.com/Zmn3jG2/logo.jpg" alt="" className='max-w-[60px]'/>
          <div className="flex-shrink-0">
            <Link to={'/'}  className="text-3xl font-bold text-green-700">
              NatureNest
            </Link>
          </div>
        </div>

          {/* Navbar Links */}
          <div className="hidden lg:flex space-x-6">
           <Link to={"/"} className='font-bold text-xl '>Home</Link>
           <Link to={"/products"} className='font-bold text-xl '>Products</Link>
           <Link to={"/products/manage"} className='font-bold text-xl '>Products Manage</Link>
          
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-4">
          

            <li className="relative">
            <Link
              className="rounded-lg backdrop-blur-[2px] p-1 inline-block"
              to={"/cart"}
            >
              <FaShoppingCart size={24} />
            </Link>
            <span className="rounded-full absolute top-[-10px] left-[20px] bg-green-600 text-white text-center size-[25px]">
              {cartItems.length}
            </span>
          </li>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-gray-800 hover:text-green-600">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden mt-4 space-y-4 ${isOpen ? 'block' : 'hidden'}`}
        >
          <a href="#products" className="block text-gray-800 hover:text-green-600">
            Products
          </a>
          <a href="#categories" className="block text-gray-800 hover:text-green-600">
            Categories
          </a>
          <a href="#about" className="block text-gray-800 hover:text-green-600">
            About Us
          </a>
          <a href="#contact" className="block text-gray-800 hover:text-green-600">
            Contact
          </a>
     

          {/* Cart Icon for Mobile */}
          <li className="relative">
            <Link
              className="rounded-lg backdrop-blur-[2px] p-1 inline-block"
              to={"/cart"}
            >
              <FaShoppingCart size={24} />
            </Link>
            <span className="rounded-full absolute top-[-10px] left-[20px] bg-primary text-white text-center size-[25px]">
              {cartItems.length}
            </span>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;