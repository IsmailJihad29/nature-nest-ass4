const categories = [
    { name: 'Indoor Plants', image: 'https://i.ibb.co.com/tpzsnVB/1.jpg', link: '#indoor-plants' },
    { name: 'Medicinal Plants', image: 'https://i.ibb.co.com/kywtVhb/2.jpg', link: '#medicinal-plants' },
    { name: 'Herbs', image: 'https://i.ibb.co.com/HTjbMZ8/3.jpg', link: '#herbs' },
    { name: 'Flowering Plants', image: 'https://i.ibb.co.com/GxRh5sC/4.jpg', link: '#flowering-plants' },
    { name: 'Succulents', image: 'https://i.ibb.co.com/VxFxWs0/5.jpg', link: '#succulents' },
    { name: 'Climbers', image: 'https://i.ibb.co.com/YTQTrLQ/6.jpg', link: '#climbers' },
    { name: 'Fruit Plants', image: 'https://i.ibb.co.com/YTxsJ7H/7.jpg', link: '#fruit-plants' },
  ];
const Catagory = () => {
  return (
    <section className="py-12 bg-gray-100">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-center text-green-700 mb-8">
        Explore Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 ">
        {categories.map((category, index) => (
          <a
            key={index}
            href={category.link}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-32 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-green-700">
                {category.name}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Catagory;
