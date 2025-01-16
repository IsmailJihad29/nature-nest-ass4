


import { Link } from "react-router-dom";

const categories = [
  {
    name: "Indoor Plants",
    image: "https://i.ibb.co/tpzsnVB/1.jpg",
    icon: "🌿",
  },
  {
    name: "Medicinal Plants",
    image: "https://i.ibb.co/kywtVhb/2.jpg",
    icon: "💊",
  },
  { name: "Herbs", image: "https://i.ibb.co/HTjbMZ8/3.jpg", icon: "🌱" },
  {
    name: "Flowering Plants",
    image: "https://i.ibb.co/GxRh5sC/4.jpg",
    icon: "🌸",
  },
  { name: "Succulents", image: "https://i.ibb.co/VxFxWs0/5.jpg", icon: "🌵" },
  { name: "Climbers", image: "https://i.ibb.co/YTQTrLQ/6.jpg", icon: "🌿" },
  { name: "Fruit Plants", image: "https://i.ibb.co/YTxsJ7H/7.jpg", icon: "🍓" },
];

const Category = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-green-100">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12" data-aos="fade-right">
          <h2 className="text-3xl md:text-5xl font-extrabold text-green-700 mb-2 font-heading">
            Explore Plant Categories
          </h2>
          <p className="text-gray-600 font-title text-lg font-semibold">
            Find the perfect plant to brighten up your space!
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6  w-[80%] mx-auto">
          {categories.map((category, index) => (
            <Link
              to={`/category/${category.name}`}
              key={index}
              className="group relative bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 "
              data-aos="fade-up"
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Icon and Name */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                <span className="text-5xl mb-2 text-white">{category.icon}</span>
                <h3 className="text-lg font-bold text-white">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
