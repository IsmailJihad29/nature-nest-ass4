import circle from "../../assets/circle.svg";
import grid from "../../assets/grid.svg";
import logo from "../../assets/logo.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SectionDevider from "../shared/SectionDevider";

type TTeamData = {
  name: string;
  position: string;
  about: string;
  photo: string;
};

const AboutTeamSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const teamData: TTeamData[] = [
    {
      name: "Ismail Hossen Jihad",
      position: "Founder & CEO",
      about:
        "A visionary leader committed to revolutionizing the sports booking experience through innovative technology and unwavering dedication.",
      photo: "https://i.ibb.co.com/g3FDnkM/FB-IMG-1713718624554.jpg",
    },
    {
      name: "Rohit Ahmed",
      position: "COO",
      about:
        "A strategic thinker focused on optimizing operations and enhancing user satisfaction.",
      photo: "https://i.ibb.co.com/0thFhYQ/1695301783645.jpg",
    },
    {
      name: "Rahim Khan",
      position: "CTO",
      about:
        "Driving innovation and ensuring our platform remains user-friendly and secure.",
      photo: "https://i.ibb.co.com/hHHdPCW/images.jpg",
    },
    {
      name: "Nina Begum",
      position: "Marketing Director",
      about:
        "Crafting creative strategies to expand our community and enhance brand visibility.",
      photo: "https://i.ibb.co.com/qB958tG/1623677348445.jpg",
    },
    {
      name: "Markus Hossain",
      position: "Customer Support Lead",
      about:
        "Dedicated to ensuring customer satisfaction through exceptional support and engagement.",
      photo: "https://i.ibb.co.com/RPdL4RR/Max-R-Headshot-1.jpg",
    },
  ];

  return (
    <div className="relative overflow-hidden dark:bg-gray-900 bg-white">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-gradient-to-br from-hero to-transparent rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-primary to-transparent rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto py-10 relative z-10">
        {/* Section Title */}
        <div className="mb-16 text-center" data-aos="fade-up">
          <h3 className="text-title text-4xl font-bold leading-tight tracking-wide text-gray-800 dark:text-white">
            Meet Our Visionary Team
          </h3>
          <div className="w-24 h-1 mx-auto my-4 bg-hero"></div>
          <p className="text-subtitle max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Our dedicated team blends expertise in{" "}
            <span className="text-hero font-semibold">sports</span> and{" "}
            <span className="text-hero font-semibold">technology</span> to create
            a seamless booking experience for everyone.
          </p>
        </div>

        {/* Cards Section */}
        <div
          className="flex flex-wrap justify-center items-center gap-8"
          data-aos="fade-up"
        >
          {teamData.map((item: TTeamData, index: number) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="relative w-[270px] transform transition duration-300 hover:scale-105"
            >
              <div className="group relative overflow-hidden w-[270px] h-[350px] bg-slate-300 rounded-3xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:rotate-1 hover:-translate-y-2">
                {/* Team Photo */}
                <img
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  src={item.photo ? item.photo : logo}
                  alt={item.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Details */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-white rounded-t-3xl translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-bold text-center text-xl font-hero text-hero">
                    {item.name}
                  </p>
                  <p className="text-gray-700 text-center font-title">
                    {item.position}
                  </p>
                </div>

                {/* Decorative Icons */}
                <img
                  className="absolute -left-10 -bottom-10 transform scale-75 opacity-50"
                  src={circle}
                  alt="circle"
                />
                <img
                  className="absolute -right-2 -top-4 w-9 opacity-50"
                  src={grid}
                  alt="grid"
                />
              </div>
            </div>
          ))}
        </div>
        
      </div>

      {/* Decorative Bottom Section */}
      <SectionDevider/>
    </div>
  );
};

export default AboutTeamSection;
