import Lottie from "lottie-react";
import loadingAnnimations from "../assets/annimations/Animation - 1736847892846.json";

const LoadingUI = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center global-bg  backdrop-blur-md z-50">
      <div className="flex flex-col items-center  text-center">
        <Lottie 
          animationData={loadingAnnimations} 
          loop={true} 
          className="w-40 h-40 md:w-72 md:h-72" 
        />
        <h1 className="text-lg font-bold font-heading text-green-600 md:text-2xl">
          Loading NatureNest...
        </h1>
        {/* <p className="text-sm text-green-600 md:text-base">
          Bringing nature closer to you. Please wait!
        </p> */}
      </div>
    </div>
  );
};

export default LoadingUI;
