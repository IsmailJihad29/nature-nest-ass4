import { FaSeedling, FaHome, FaGift, FaLeaf } from "react-icons/fa";

const WhoCanUse = () => {
    return (
        <section className=" px-6 md:px-12 lg:px-24 py-12 " >
      <div className="text-center mb-8" data-aos="fade-right">
        <h2 className="text-5xl font-extrabold text-green-800 font-heading">Who's It For?</h2>
        <p className="text-gray-600 text-lg font-title">Nature Nest caters to a diverse audience.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-[70%] mx-auto mt-20 " data-aos="fade-up">
        {[
          {
            icon: <FaSeedling className="text-5xl text-green-800" />,
            title: "Plant Enthusiasts",
            description: "Whether you're a seasoned gardener or just starting out, explore unique species and find perfect additions for your home or garden.",
          },
          {
            icon: <FaHome className="text-5xl text-green-800" />,
            title: "Homeowners & Renters",
            description: "Transform your living spaces with beautiful plants that enhance aesthetics and air quality.",
          },
          {
            icon: <FaGift className="text-5xl text-green-800" />,
            title: "Gift Shoppers",
            description: "Looking for a unique gift? Our plants bring joy and beauty to your loved ones' homes.",
          },
          {
            icon: <FaLeaf className="text-5xl text-green-800" />,
            title: "Eco-Conscious Consumers",
            description: "Join the sustainable lifestyle with eco-friendly options and resources for conscious choices.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative bg-white text-green-700 rounded-lg p-6 pt-16 text-center shadow-lg transition-transform transform hover:scale-105 w-60 h-66 mx-auto mb-10"
          >
            {/* Floating icon container */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 global-bg rounded-full flex items-center justify-center shadow-md">
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

export default WhoCanUse;