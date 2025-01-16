


import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout, selectCurrentUser } from "../redux/features/userSlice";
import { Avatar, Dropdown, MenuProps } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const cartItems = useAppSelector((store) => store.cart.products);
  const { user } = useAppSelector(selectCurrentUser);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Successfully logged out.");
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const menuItems: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div
          className="flex gap-2 items-center p-2 hover:bg-primary hover:text-white rounded"
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
              src="https://i.ibb.co/TvFMFTM/Firefly-Design-a-modern-minimalistic-logo-for-Nature-Nest-an-online-nursery-The-logo-should-fea-1-re.png"
              alt="NatureNest Logo"
              className="max-w-[60px]"
            />
            <Link to="/" className="text-3xl font-bold font-heading">
              NatureNest
            </Link>
          </div>

          {/* Cart and Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-4">
            {/* Cart Icon */}
            <Link to="/cart" className="relative group">
              <FaShoppingCart size={24} />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {cartItems.length}
                </span>
              )}
              <div className="absolute hidden group-hover:block bg-gray-700 text-white text-sm rounded-lg py-1 px-2 -top-10 right-0">
                View Cart
              </div>
            </Link>
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop Navbar */}
          <div className="hidden lg:flex space-x-6 font-heading items-center">
            {["Products", "Plant Care", "About Us", "Contact Us"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className={`font-bold text-xl ${
                  isActive(`/${item.toLowerCase().replace(/\s+/g, "-")}`)
                    ? "border-b-2 border-green-500"
                    : "text-white"
                }`}
              >
                {item}
              </Link>
            ))}

            {/* Dynamic Categories */}
            <div className="dropdown dropdown-hover">
              <div
                tabIndex={0}
                role="button"
                className="cursor-pointer font-bold text-xl"
              >
                Category
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu primary-bg rounded-box z-[1] w-36 mt-1 p-2"
              >
                {[
                  "Herbs",
                  "Indoor Plants",
                  "Medicinal Plants",
                  "Flowering Plants",
                  "Succulents",
                  "Climbers",
                  "Fruit Plants",
                ].map((category) => (
                  <li key={category}>
                    <Link to={`/category/${category}`}>{category}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>

          {/* User Avatar or Login */}
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
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
                  {user.name[0]}
                </Avatar>
              </Dropdown>
            ) : (
              <Link to="/login" className="font-bold font-heading text-xl">
                Login
              </Link>
            )}

<Link to="/cart" className="relative group">
              <FaShoppingCart size={24} />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {cartItems.length}
                </span>
              )}
              <div className="absolute hidden group-hover:block bg-gray-700 text-white text-sm rounded-lg py-1 px-2 -top-10 right-0">
                View Cart
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden text-white py-4 px-4">
            <ul className="space-y-4">
              {["Home", "Products", "Plant Care", "About Us", "Contact Us"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block text-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
              <li>
                <div className="font-bold">Categories</div>
                <ul className="space-y-2 pl-4">
                  {[
                    "Herbs",
                    "Indoor Plants",
                    "Medicinal Plants",
                    "Flowering Plants",
                    "Succulents",
                    "Climbers",
                    "Fruit Plants",
                  ].map((category) => (
                    <li key={category}>
                      <Link
                        to={`/category/${category}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              {user && (
                <li>
                  <button
                    onClick={handleLogout}
                    className="block text-lg text-red-500"
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
