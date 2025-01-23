import Heading from "@/components/Heading";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

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
        "The driving force behind NatureNest, combining a passion for sustainable living with a commitment to connecting people with nature through plants.",
      photo: "https://i.ibb.co.com/g3FDnkM/FB-IMG-1713718624554.jpg",
    },
    {
      name: "Rohit Ahmed",
      position: "COO",
      about:
        "Ensures NatureNest's operations run smoothly, focusing on delivering a seamless experience for plant enthusiasts and eco-conscious customers.",
      photo: "https://i.ibb.co.com/0thFhYQ/1695301783645.jpg",
    },
    {
      name: "Rahim Khan",
      position: "CTO",
      about:
        "Spearheading technological advancements to ensure NatureNest's platform is both innovative and user-friendly for plant lovers everywhere.",
      photo: "https://i.ibb.co.com/hHHdPCW/images.jpg",
    },
    {
      name: "Nina Begum",
      position: "Marketing Director",
      about:
        "Developing creative strategies to promote NatureNest, inspiring people to embrace greenery and create thriving plant spaces.",
      photo: "https://i.ibb.co.com/qB958tG/1623677348445.jpg",
    },
    {
      name: "Markus Hossain",
      position: "Customer Support Lead",
      about:
        "Committed to ensuring every NatureNest customer feels supported in their journey of bringing nature closer to home.",
      photo: "https://i.ibb.co.com/RPdL4RR/Max-R-Headshot-1.jpg",
    },
  ];
  

  return (
    <div className="relative overflow-hidden global-bg">
      <div className="container mx-auto py-10 relative z-10">
        {/* Section Title */}
       <Heading heading="Meet Our Visionary Team" tag="Our dedicated team blends expertise in sports and technology to
            create a seamless booking experience for everyone."/>

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
              <div className="flex items-center justify-center">
                <div className="bg-white rounded-[40px] shadow-lg overflow-hidden w-80">
                  <div className="primary-bg h-32 relative  rounded-[40px]">
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                      <img
                        src={item.photo} // Replace with actual image URL
                        alt="Profile"
                        className="w-24 h-24 rounded-full border-4 border-white"
                      />
                    </div>
                  </div>
                  <div className="text-center mt-14 p-6">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-gray-500">{item.position}</p>
                    <div className="mt-4 border-t pt-4"></div>
                    <div className="mt-6 flex justify-center space-x-4 text-gray-600">
                      <a href="#!" className="hover:text-blue-500">
                        <FaFacebook />
                      </a>
                      <a href="#!" className="hover:text-blue-500">
                        <FaInstagram />
                      </a>
                      <a href="#!" className="hover:text-blue-700">
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Bottom Section */}
    </div>
  );
};

export default AboutTeamSection;
