/* eslint-disable @typescript-eslint/no-unused-vars */
import grid from "../../assets/grid.svg";
import circle from "../../assets/circle.svg";
import MissionStatementSection from "./MissionStatementSection ";
import AboutTeamSection from "./AboutTeamSection";

const teamMembers = [
  {
    name: "Jane Doe",
    role: "Founder & CEO",
    imageUrl:
      "https://i.ibb.co/g6ZPpGH/FB-IMG-1713718624554-removebg-preview-1.png",
    description:
      "Jane is the visionary behind NatureNest, with a passion for sustainable living and a deep love for plants.",
  },
  {
    name: "John Smith",
    role: "Head of Operations",
    imageUrl:
      "https://i.ibb.co/g6ZPpGH/FB-IMG-1713718624554-removebg-preview-1.png",
    description:
      "John ensures everything runs smoothly, from plant selection to delivery, bringing his expertise in operations to NatureNest.",
  },
  {
    name: "Emily Green",
    role: "Plant Specialist",
    imageUrl:
      "https://i.ibb.co/g6ZPpGH/FB-IMG-1713718624554-removebg-preview-1.png",
    description:
      "Emily is our resident plant expert, helping customers find the perfect plant and offering top-notch care advice.",
  },
];

const AboutUs = () => {
  return (
    <div>
      <MissionStatementSection/>
      <AboutTeamSection />
    </div>
    // <div className=" text-gray-700 global-bg font-sans leading-relaxed ">
    //   {/* Hero Section */}
    //   <div
    //     className="container mx-auto px-4 py-20   rounded-lg shadow-lg mb-12"
    //     data-aos="fade-up"
    //   >
    //     <h1 className="text-5xl font-extrabold text-green-700 mb-8 text-center font-heading">
    //       About NatureNest
    //     </h1>
    //     <p className="text-lg md:text-xl  text-gray-700 font-text">
    //       NatureNest was born from a simple idea: to bring the calming, natural
    //       beauty of plants into people's lives. The team behind NatureNest saw a
    //       gap in the market—many people wanted to introduce plants into their
    //       homes but found it intimidating or overwhelming. With a mission to
    //       make plant care accessible and fun, NatureNest was created. Our goal
    //       is to empower people to care for plants and experience the joy of
    //       watching them thrive, creating green spaces that promote peace and
    //       sustainability in everyday life. Our founder, Jane, started NatureNest
    //       with a passion for sustainable living and a belief that everyone
    //       should have the opportunity to care for something that helps the
    //       planet. With the support of our team, NatureNest has grown into a
    //       community of plant lovers dedicated to sharing knowledge, products,
    //       and experiences that inspire others to embrace nature in their own
    //       spaces.
    //     </p>
    //   </div>

    //   {/* Our Story Section */}

    //   <div
    //     className="container mx-auto px-4 py-20   rounded-lg shadow-lg mb-12"
    //     data-aos="fade-up"
    //   >
    //     <h1 className="text-5xl font-extrabold text-green-700 mb-8 text-center font-heading">
    //       Our Story
    //     </h1>
    //     <p className="text-lg md:text-xl  text-gray-700 font-text">
    //       From our humble beginnings, NatureNest has grown into a platform that
    //       not only offers a wide variety of plants and gardening products but
    //       also serves as a resource for plant care knowledge. Our journey began
    //       with a small group of passionate individuals who shared a vision: to
    //       make plants a central part of every home. Our team works tirelessly to
    //       source high-quality plants from trusted growers, ensuring each plant
    //       is healthy, vibrant, and ready to thrive in any environment. We
    //       believe in sustainability and environmental consciousness, which is
    //       why we only offer eco-friendly and ethically sourced products. Our
    //       commitment to education ensures that our customers receive expert
    //       guidance on how to nurture their plants and create a greener living
    //       space. Today, NatureNest is more than just a plant shop—it's a
    //       community. We host events, provide plant care workshops, and connect
    //       like-minded individuals who share our love for nature. Whether you're
    //       a seasoned gardener or a beginner looking for your first plant,
    //       NatureNest is here to help you grow.
    //     </p>
    //   </div>

    //   {/* Team Section */}
    //   <section className="container mx-auto px-6 py-16 rounded-xl shadow-xl mb-12">
    //     <div className="text-center mb-12">
    //       <h2 className="text-4xl font-bold text-green-700 mb-4 font-heading">
    //         Meet Our Team 🌱
    //       </h2>
    //       <p className="text-lg text-gray-700 mb-8 font-text">
    //         The dedicated team bringing NatureNest to life.
    //       </p>
    //     </div>

    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-[70%] mx-auto" data-aos="fade-right">
    //       {teamMembers.map((member) => (
    //         <div className="w-[270px] relative transform transition duration-300 hover:scale-105">
    //           <div className="group relative overflow-hidden w-[270px] h-[350px] bg-white rounded-3xl shadow-lg hover:shadow-2xl transform transition-all duration-300  hover:-translate-y-2">
    //             <img
    //               className="absolute inset-0 w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity duration-300"
    //               src={member.imageUrl}
    //             />

    //             <div className="absolute bottom-0 left-0 right-0 p-6 global-bg rounded-t-3xl translate-y-full group-hover:translate-y-0 transition-transform duration-500">
    //               <h3 className="font-bold text-green-700 text-xl mb-2">
    //                 {member.name}
    //               </h3>
    //               <p className="text-lg font-semibold text-gray-700">
    //                 {member.role}
    //               </p>
    //               <p className="text-sm text-gray-600 mt-4">
    //                 {member.description}
    //               </p>

    //               <div className="flex items-center justify-start space-x-2"></div>
    //             </div>

    //             {/* Decorative Icons */}
    //             <img
    //               className="absolute -left-10 -bottom-10 transform scale-75 opacity-50"
    //               src={circle}
    //               alt="circle"
    //             />
    //             <img
    //               className="absolute -right-2 -top-4 w-9 opacity-50"
    //               src={grid}
    //               alt="grid"
    //             />
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </section>

    //   {/* Vision & Mission Section */}

    //   <div
    //     className="container mx-auto px-4 py-20   rounded-lg shadow-lg mb-12"
    //     data-aos="fade-up"
    //   >
    //     <h1 className="text-5xl font-extrabold text-green-700 mb-8 text-center font-heading">
    //       Our Mission
    //     </h1>
    //     <p className="text-lg md:text-xl  text-gray-700 font-text">
    //       NatureNest is committed to making plant care accessible, enjoyable,
    //       and fulfilling. We provide high-quality plants, expert advice, and
    //       sustainable practices to help you cultivate your green space, whether
    //       it's a small apartment or a sprawling garden.
    //     </p>
    //   </div>
    //   <div
    //     className="container mx-auto px-4 py-20   rounded-lg shadow-lg "
    //     data-aos="fade-up"
    //   >
    //     <h1 className="text-5xl font-extrabold text-green-700  text-center font-heading">
    //       Our Vision
    //     </h1>
    //     <p className="text-lg md:text-xl  text-gray-700 font-text">
    //       To create a world where everyone can experience the joy of caring for
    //       plants and living in harmony with nature. We envision a future where
    //       every home is a little greener and every heart a little closer to the
    //       earth.
    //     </p>
    //   </div>
    // </div>
  );
};

export default AboutUs;
