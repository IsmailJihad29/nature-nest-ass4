

import { useAppSelector } from '@/redux/hooks';
import { useState } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current route

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const cartItems = useAppSelector((store) => store.cart.products);

  // Function to check if the link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="primary-bg shadow-lg text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img
              src="https://i.ibb.co.com/TvFMFTM/Firefly-Design-a-modern-minimalistic-logo-for-Nature-Nest-an-online-nursery-The-logo-should-fea-1-re.png"
              alt=""
              className="max-w-[60px]"
            />
            <div className="flex-shrink-0">
              <Link to="/" className="text-3xl font-bold font-heading">
                NatureNest
              </Link>
            </div>
          </div>

          {/* Navbar Links */}
          <div className="hidden lg:flex space-x-6 font-heading">
            <Link
              to="/"
              className={`font-bold text-xl ${
                isActive('/') ? ' border-b-2 border-green-500' : 'text-white'
              }`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`font-bold text-xl ${
                isActive('/products') ? ' border-b-2 border-green-500' : 'text-white'
              }`}
            >
              Products
            </Link>
            <Link
              to="/products/manage"
              className={`font-bold text-xl ${
                isActive('/products/manage') ? ' border-b-2 border-green-500' : 'text-white'
              }`}
            >
              Products Manage
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-4">
            <li className="relative">
              <Link className="rounded-lg backdrop-blur-[2px] p-1 inline-block" to="/cart">
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
        <div className={`lg:hidden mt-4 space-y-4 ${isOpen ? 'block' : 'hidden'}`}>
          <Link
            to="/products"
            className={`block text-gray-800 hover:text-green-600 ${
              isActive('/products') ? ' border-b-2 border-green-500' : ''
            }`}
          >
            Products
          </Link>
          <Link
            to="/categories"
            className={`block text-gray-800 hover:text-green-600 ${
              isActive('/categories') ? ' border-b-2 border-green-500' : ''
            }`}
          >
            Categories
          </Link>
          <Link
            to="/about"
            className={`block text-gray-800 hover:text-green-600 ${
              isActive('/about') ? ' border-b-2 border-green-500' : ''
            }`}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`block text-gray-800 hover:text-green-600 ${
              isActive('/contact') ? ' border-b-2 border-green-500' : ''
            }`}
          >
            Contact
          </Link>

          {/* Cart Icon for Mobile */}
          <li className="relative">
            <Link className="rounded-lg backdrop-blur-[2px] p-1 inline-block" to="/cart">
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
