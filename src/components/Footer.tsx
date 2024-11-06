import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#2E7D32] text-[#EFE3D5] p-10 lg:p-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start font-text">
          {/* Logo and Tagline */}
          <aside className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
            <img 
              src="https://i.ibb.co/TvFMFTM/Firefly-Design-a-modern-minimalistic-logo-for-Nature-Nest-an-online-nursery-The-logo-should-fea-1-re.png" 
              alt="NatureNest Logo" 
              className="w-16 h-16 lg:w-20 lg:h-20 mb-4"
            />
            <p className="text-2xl font-bold font-heading text-center lg:text-left">NatureNest</p>
            <p className="text-center lg:text-left italic">
              "Where Nature Thrives, and Your Garden Blossoms."
            </p>
          </aside>

          {/* Links Sections */}
          <div className="flex flex-wrap justify-center lg:justify-between space-y-6 lg:space-y-0">
            {/* Services */}
            <nav className="text-center lg:text-left mx-4">
              <h6 className="text-xl font-semibold mb-3">Services</h6>
              <ul className="space-y-2">
                <li><a href="#plants" className="hover:underline">Plants</a></li>
                <li><a href="#plant-care" className="hover:underline">Plants Care</a></li>
                <li><a href="#growing-advice" className="hover:underline">Plants Growing Advice</a></li>
                <li><a href="#teaching" className="hover:underline">Plant Teaching</a></li>
              </ul>
            </nav>

            {/* Company */}
            <nav className="text-center lg:text-left mx-4">
              <h6 className="text-xl font-semibold mb-3">Company</h6>
              <ul className="space-y-2">
                <li><Link to={"/about-us"} className="hover:underline">About us</Link></li>
                <li><Link to={"/contact-us"} className="hover:underline">Contact us</Link></li>
                
              </ul>
            </nav>

          
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 text-center lg:text-left border-t border-green-300 pt-6">
          <p className="text-sm">&copy; {new Date().getFullYear()} NatureNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
