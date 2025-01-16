import { FaLeaf, FaShoppingCart, FaTruck, FaStar } from "react-icons/fa";

const OurService = () => {
    return (
        <section className=" px-6 md:px-12 lg:px-24 py-12">
      <div className="text-center mb-8">
        <h2 className="text-5xl font-extrabold text-green-800 font-heading">Our Services</h2>
        <p className="text-gray-600 text-lg font-title">Discover the services we offer to enhance your plant experience.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-[70%] mx-auto mt-20">
        {[
          {
            icon: <FaLeaf className="text-5xl text-green-800" />,
            title: "Diverse Plant Selection",
            description: "Explore a wide range of indoor and outdoor plants to beautify your spaces.",
          },
          {
            icon: <FaShoppingCart className="text-5xl text-green-800" />,
            title: "Easy Online Ordering",
            description: "Shop conveniently from home with our user-friendly online store.",
          },
          {
            icon: <FaTruck className="text-5xl text-green-800" />,
            title: "Fast Delivery Service",
            description: "Enjoy prompt delivery right to your doorstep, ensuring your plants arrive fresh.",
          },
          {
            icon: <FaStar className="text-5xl text-green-800" />,
            title: "Expert Gardening Tips",
            description: "Receive guidance and tips from our experts to care for your plants effectively.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative text-green-700 rounded-lg p-6 pt-16 text-center shadow-lg transition-transform transform hover:scale-105 w-60 h-66 mx-auto mb-10"
          >
            {/* Floating icon container */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
              {item.icon}
            </div>
            <h3 className="text-lg font-extrabold mt-8 font-title">{item.title}</h3>
            <p className="text-gray-600 mt-2 font-text">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
    );
};

export default OurService;