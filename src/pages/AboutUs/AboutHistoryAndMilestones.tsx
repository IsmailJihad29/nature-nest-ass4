import { useEffect } from "react";
import {
  FaChartBar,
  FaUser,
  FaFolderOpen,
  FaSearch,
  FaLaptop,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutHistoryAndMilestones = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const historyData = [
    {
      year: "2002",
      title: "Research Phase",
      description:
        "We began extensive research to identify challenges and opportunities in the market. It laid the foundation for future innovations.",
      icon: FaSearch,
      color: "bg-gradient-to-br from-purple-500 to-indigo-500",
    },
    {
      year: "2006",
      title: "Project Kickoff",
      description:
        "The official project started with a dedicated team of developers and planners focusing on building a solid base.",
      icon: FaFolderOpen,
      color: "bg-gradient-to-br from-teal-400 to-green-400",
    },
    {
      year: "2007",
      title: "Initial Growth",
      description:
        "Our project gained traction with increased user engagement and positive feedback. We expanded our team and resources.",
      icon: FaChartBar,
      color: "bg-gradient-to-br from-orange-500 to-yellow-500",
    },
    {
      year: "2014",
      title: "Community Focus",
      description:
        "We shifted our focus towards building a strong community, fostering connections, and creating value for our users.",
      icon: FaUser,
      color: "bg-gradient-to-br from-blue-600 to-indigo-600",
    },
    {
      year: "2018",
      title: "Tech Revolution",
      description:
        "Leveraging cutting-edge technologies, we revolutionized our platform to provide unmatched performance and user experience.",
      icon: FaLaptop,
      color: "bg-gradient-to-br from-green-400 to-teal-500",
    },
  ];

  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-12">
        {/* Title and Subtitle */}
        <div className="w-[70%] text-center mx-auto">
        <h2
          className="text-title "
          data-aos="fade-up"
        >
          Our Journey
        </h2>
        <p
          className="text-subtitle mb-16"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Discover the milestones that shaped our story. From humble beginnings
          to our transformation into a cutting-edge platform.
        </p>

        </div>
        {/* Journey Sections */}
        <div className="relative">
          {historyData.map((item, index) => (
            <div
              key={index}
              className={`relative  w-[60%] mx-auto py-10 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                index % 2 === 0
                  ? "shadow-md dark:bg-gray-800 "
                  : "shadow-md dark:bg-gray-700  "
              }`}
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
            >
              {/* Milestone Icon */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br rounded-full flex items-center justify-center  ${item.color} text-white text-3xl shadow-xl group-hover:scale-110 transition-transform duration-300`}
                style={{
                  top: "-40px",
                  zIndex: 10,
                }}
              >
                <item.icon />
              </div>

              {/* Milestone Content */}
              <div className="container mx-auto px-4 py-4 flex justify-center items-center ">
                <div
                  className={`w-3/4 md:w-2/3 text-center ${
                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                  }`}
                >
                  <h3 className="text-hero font-hero text-4xl">{item.year}</h3>
                  <p className="font-title text-xl text-gray-700 dark:text-white">
                    {item.title}
                  </p>
                  <p className="text-subtitle">{item.description}</p>
                </div>
              </div>

              
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default AboutHistoryAndMilestones;
