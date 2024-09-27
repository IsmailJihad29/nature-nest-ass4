import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-50 to-green-100 py-12 sm:py-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-green-200 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-300 rounded-full opacity-50 blur-3xl"></div>

      <div className="container mx-auto px-6 sm:px-12 relative z-10">
        {/* Hero Text */}
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <div className="w-full lg:w-1/2">
            <h1 className="text-5xl lg:text-7xl font-bold text-green-900 drop-shadow-md">
              Welcome to <span className="text-green-700">NatureNest</span>
            </h1>
            <p className="mt-4 text-gray-700 text-lg drop-shadow-md">
              Discover a variety of indoor and outdoor plants, perfect for your
              home and garden. Let’s bring nature closer to you.
            </p>
            <p className="mt-4 text-gray-700 text-lg drop-shadow-md">
              🌿 Explore rare plants <br />
              🌸 Best plant care tips <br />
              🛒 Shop with ease
            </p>

            <div className="mt-8">
             <Link to={'/products'}>
             <Button   className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-500 transform hover:-translate-y-1 hover:scale-105 transition duration-300 ease-in-out">Shop Now</Button>
             </Link>
              <a
                href="#care-tips"
                className="ml-4 text-green-600 px-6 py-3 rounded-lg border border-green-600 hover:bg-green-600 hover:text-white transform hover:-translate-y-1 hover:scale-105 transition duration-300 ease-in-out"
              >
                Learn Plant Care
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 transform transition duration-500 hover:scale-105">
            <img
              src="https://i.ibb.co.com/BZ22FqK/DALL-E-2024-09-13-10-39-34-A-vibrant-and-welcoming-hero-image-for-an-online-plant-nursery-website-Na.webp"
              alt="NatureNest Plants"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    //     <section className="bg-green-50 py-12 sm:py-24">
    //     <div className="container mx-auto px-6 sm:px-12">
    //       {/* Hero Text */}
    //       <div className="flex flex-col-reverse lg:flex-row items-center">
    //         <div className="w-full lg:w-1/2">
    //           <h1 className="text-4xl lg:text-6xl font-bold text-green-900">
    //             Welcome to <span className="text-green-600">NatureNest</span>
    //           </h1>
    //           <p className="mt-4 text-gray-700 text-lg">
    //             Discover a variety of indoor and outdoor plants, perfect for your home and garden. Let’s bring nature closer to you.
    //           </p>
    //           <p className="mt-4 text-gray-700 text-lg">
    //             🌿 Explore rare plants <br />
    //             🌸 Best plant care tips <br />
    //             🛒 Shop with ease
    //           </p>

    //           <div className="mt-8">
    //             <a
    //               href="#products"
    //               className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-500 transition duration-300"
    //             >
    //               Shop Now
    //             </a>
    //             <a
    //               href="#care-tips"
    //               className="ml-4 text-green-600 px-6 py-3 rounded-lg border border-green-600 hover:bg-green-600 hover:text-white transition duration-300"
    //             >
    //               Learn Plant Care
    //             </a>
    //           </div>
    //         </div>

    //         {/* Hero Image */}
    //         <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
    //           <img
    //             src="https://i.ibb.co.com/BZ22FqK/DALL-E-2024-09-13-10-39-34-A-vibrant-and-welcoming-hero-image-for-an-online-plant-nursery-website-Na.webp"
    //             alt="NatureNest Plants"
    //             className="w-full rounded-lg shadow-lg"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </section>
  );
};

export default Header;
