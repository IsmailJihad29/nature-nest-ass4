import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout, selectCurrentUser } from "../redux/features/userSlice";
import { Avatar, Dropdown, MenuProps } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const cartItems = useAppSelector((store) => store.cart.products);
  const { user } = useAppSelector(selectCurrentUser); // Assuming user state has login info
  const navigate = useNavigate();
  // Check if the link is active
  const isActive = (path: string) => location.pathname === path;

  // Toggle category dropdown in mobile menu
  const toggleCategoryDropdown = () => setIsCategoryOpen(!isCategoryOpen);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isCategoryOpen) setIsCategoryOpen(false); // Close category dropdown when closing mobile menu
  };
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    toast.success("Successfully Logout.");
  };
  const menuItems: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div
          className="flex gap-2 items-center p-2 hover:bg-primary  hover:text-white rounded"
          onClick={() => navigate(`/dashboard`)}
        >
          <UserOutlined />
          <p>My Profile</p>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div
          className="flex gap-2 items-center p-2 hover:bg-error hover:text-white rounded"
          onClick={handleLogout}
        >
          <LogoutOutlined />
          <p>Logout</p>
        </div>
      ),
    },
  ];

  return (
    <nav className="primary-bg shadow-lg text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="https://i.ibb.co.com/TvFMFTM/Firefly-Design-a-modern-minimalistic-logo-for-Nature-Nest-an-online-nursery-The-logo-should-fea-1-re.png"
              alt="NatureNest Logo"
              className="max-w-[60px]"
            />
            <Link to="/" className="text-3xl font-bold font-heading">
              NatureNest
            </Link>
          </div>

          {/* Mobile Cart Icon and Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <FaShoppingCart size={24} />
              {cartItems.length > 0 && (
                <span className="rounded-full absolute -top-2 -right-2 bg-green-600 text-white text-center w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Navbar Links (Desktop) */}
          <div className="hidden lg:flex space-x-6 font-heading items-center">
            <Link
              to="/"
              className={`font-bold text-xl ${
                isActive("/") ? "border-b-2 border-green-500" : "text-white"
              }`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`font-bold text-xl ${
                isActive("/products")
                  ? "border-b-2 border-green-500"
                  : "text-white"
              }`}
            >
              Products
            </Link>
            {/* <button className="font-bold text-xl" onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
              Category
            </button> */}
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="">
                Category
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu primary-bg rounded-box z-[1] w-36 mt-1 p-2 "
              >
                <li>
                  <Link to={`/category/Herbs`}> Herbs </Link>
                </li>
                <li>
                  <Link to={`/category/Indoor Plants`}>Indoor Plants </Link>
                </li>
              </ul>
            </div>

            {/* Category Dropdown */}
            {isCategoryOpen && (
              <div className="absolute mt-2 w-56 bg-primary-bg font-heading  rounded-lg p-3 global-bg text-green-700">
                {[
                  "Herbs",
                  "Indoor Plants",
                  "Medicinal Plants",
                  "Flowering Plants",
                  "Succulents",
                  "Climbers",
                  "Fruit Plants",
                ].map((category) => (
                  <Link
                    to={`/category/${category}`}
                    key={category}
                    className="block px-4 py-2 hover:bg-green-500 rounded"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            )}

            <Link
              to="/plant-care"
              className={`font-bold text-xl ${
                isActive("/plant-care")
                  ? "border-b-2 border-green-500"
                  : "text-white"
              }`}
            >
              Plant Care
            </Link>
            <Link
              to="/about-us"
              className={`font-bold text-xl ${
                isActive("/about-us")
                  ? "border-b-2 border-green-500"
                  : "text-white"
              }`}
            >
              About Us
            </Link>
            <Link
              to="/contact-us"
              className={`font-bold text-xl ${
                isActive("/contact-us")
                  ? "border-b-2 border-green-500"
                  : "text-white"
              }`}
            >
              Contact Us
            </Link>

            {/* Admin Only: Products Management */}
          </div>

          {/* User Avatar or Login/Register Link */}
          <div className="hidden lg:flex items-center space-x-4">
            {user && user?.role ? (
              <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
                <Avatar
                  style={{
                    backgroundColor: "#2e4763",
                    verticalAlign: "middle",
                    cursor: "pointer",
                  }}
                  size={30}
                  gap={4}
                >
                  {user?.name[0]}
                </Avatar>
              </Dropdown>
            ) : (
              <div className="space-x-4 ">
                <Link to="/login" className="  font-bold font-heading text-xl">
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden flex flex-col space-y-4 mt-4 font-heading items-center text-center">
            <Link
              to="/"
              className={`font-bold text-xl ${
                isActive("/") ? "border-b-2 border-green-500" : "text-white"
              }`}
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`font-bold text-xl ${
                isActive("/products")
                  ? "border-b-2 border-green-500"
                  : "text-white"
              }`}
              onClick={toggleMobileMenu}
            >
              Products
            </Link>

            {/* Mobile Category Dropdown */}
            <div className="relative">
              <button
                className="font-bold text-xl text-white"
                onClick={toggleCategoryDropdown}
              >
                Category
              </button>
              {isCategoryOpen && (
                <div className="flex flex-col space-y-2 mt-2 bg-primary-bg p-3 rounded-lg text-white">
                  {[
                    "Herbs",
                    "Indoor Plants",
                    "Medicinal Plants",
                    "Flowering Plants",
                    "Succulents",
                    "Climbers",
                    "Fruit Plants",
                  ].map((category) => (
                    <Link
                      to={`/category/${category}`}
                      key={category}
                      onClick={() => toggleMobileMenu()}
                      className="block px-4 py-2 hover:bg-green-500 rounded"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/plant-care"
              className={`font-bold text-xl ${
                isActive("/plant-care")
                  ? "border-b-2 border-green-500"
                  : "text-white"
              }`}
              onClick={toggleMobileMenu}
            >
              Plant Care
            </Link>
            <Link
              to="/about-us"
              className={`font-bold text-xl ${
                isActive("/about-us")
                  ? "border-b-2 border-green-500"
                  : "text-white"
              }`}
              onClick={toggleMobileMenu}
            >
              About Us
            </Link>
            <Link
              to="/contact-us"
              className={`font-bold text-xl ${
                isActive("/contact-us")
                  ? "border-b-2 border-green-500"
                  : "text-white"
              }`}
              onClick={toggleMobileMenu}
            >
              Contact Us
            </Link>

            {/* Admin Only: Products Management */}
            {user?.role === "admin" && (
              <Link
                to="/products/manage"
                className={`font-bold text-xl ${
                  isActive("/products/manage")
                    ? "border-b-2 border-green-500"
                    : "text-white"
                }`}
                onClick={toggleMobileMenu}
              >
                Manage Products
              </Link>
            )}

            {/* User Avatar or Login/Register Link */}
            {user && user?.role ? (
              <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
                <Avatar
                  style={{
                    backgroundColor: "#2e4763",
                    verticalAlign: "middle",
                    cursor: "pointer",
                  }}
                  size={30}
                  gap={4}
                >
                  {user?.name[0]}
                </Avatar>
              </Dropdown>
            ) : (
              <div className="space-x-4 ">
                <Link to="/login" className=" font-bold font-heading text-xl">
                  Login
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
