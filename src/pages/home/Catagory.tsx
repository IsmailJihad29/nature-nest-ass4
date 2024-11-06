import { Link } from 'react-router-dom';
import leapBg from '../../assets/leap3.png';

const categories = [
  { name: 'Indoor Plants', image: 'https://i.ibb.co/tpzsnVB/1.jpg', icon: '🌿' },
  { name: 'Medicinal Plants', image: 'https://i.ibb.co/kywtVhb/2.jpg', icon: '💊' },
  { name: 'Herbs', image: 'https://i.ibb.co/HTjbMZ8/3.jpg', icon: '🌱' },
  { name: 'Flowering Plants', image: 'https://i.ibb.co/GxRh5sC/4.jpg', icon: '🌸' },
  { name: 'Succulents', image: 'https://i.ibb.co/VxFxWs0/5.jpg', icon: '🌵' },
  { name: 'Climbers', image: 'https://i.ibb.co/YTQTrLQ/6.jpg', icon: '🌿' },
  { name: 'Fruit Plants', image: 'https://i.ibb.co/YTxsJ7H/7.jpg', icon: '🍓' },
];

const Category = () => {
  return (
    <section
      className="flex justify-center py-20"
      style={{
        backgroundImage: `url(${leapBg})`,
        backgroundColor: "global-bg",
        backgroundSize: 'contain',
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'left',
      }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Heading with Subtitle */}
        <div className="text-center mb-8" data-aos="fade-right">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-2 font-heading">
            Discover the Beauty of Nature
          </h2>
          <p className="text-base md:text-lg text-gray-700 font-title">
            Explore our diverse plant categories for every environment
          </p>
        </div>

        {/* Responsive Grid of Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-5xl mx-auto "  style={{
                backgroundImage: `url(${leapBg})`,
                backgroundColor: "global-bg", // Adjust the opacity as needed
                backgroundSize: 'cover',
                backgroundRepeat: "no-repeat",
                backgroundPosition: 'right',
                
              }}>
          {categories.map((category, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="relative bg-white rounded-lg overflow-hidden shadow-md group transform transition-transform duration-300 hover:scale-105"
             
            >
             <Link to={`/category/${category.name}`} >
              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 rounded-lg"
              />

              {/* Fading Green Overlay on Hover */}
              <div className="absolute inset-0 global-bg opacity-0 group-hover:opacity-80 transition-opacity duration-500 rounded-lg"></div>

              {/* Fading Slide-Up Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-opacity-90 p-4 text-center transform translate-y-full group-hover:translate-y-0 transition-all duration-500 rounded-b-lg">
                <span className="text-3xl mb-2">{category.icon}</span>
                <h3 className="text-lg md:text-xl font-bold text-green-700 font-title">{category.name}</h3>
              </div>
             </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
