import { useAppSelector } from "@/redux/hooks";
import welcomeG from "../../assets/welcome.png";
import { selectCurrentUser } from "@/redux/features/userSlice";
import DashboardStatistic from "./DashboardStatistic";


const WeclomeToDashboard = () => {
  const { user } = useAppSelector(selectCurrentUser);
  const today = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });


  
  return (
    <div className="p-6">
      {/* Main Content Container */}
      <div className="dashboard-bg text-white flex flex-col lg:flex-row justify-between py-10 px-8 lg:px-16 rounded-lg shadow-lg">
        {/* Left Section: Welcome Message */}
        <div className="w-full lg:w-[50%] flex flex-col justify-center space-y-4">
          <p className="text-center lg:text-left text-fourth-color font-semibold font-primary text-sm">
            {today}
          </p>
          <div className="space-y-2">
            <h1 className="font-heading text-xl lg:text-4xl font-bold  text-green-700">
              Welcome back,
            </h1>
            <h1 className="font-hero text-title text-2xl lg:text-5xl font-bold font-heading text-green-700">
              {user?.name}!
            </h1>
            <p className="text-lg lg:text-xl font-primary text-gray-700 font-text">
              Your <span className="text-yellow-400">{user?.role}</span>{" "}
              dashboard is where your journey begins. Stay in control, stay
              ahead!
            </p>
            {user?.role === "admin" ? (
              <p className="font-text text-gray-700">
                You're at the helm of the platform. Manage users, generate
                reports, and oversee the operations to keep things running
                smoothly. Your leadership makes all the difference
              </p>
            ) : (
              <p className="font-text text-gray-700">
                Explore your profile, track your activities, and manage your
                preferences. We're here to make your experience seamless and
                enjoyable. Let's dive in!
              </p>
            )}
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-full lg:w-[45%] mt-6 lg:mt-0">
          <img
            className="h-80 md:h-96 w-full rounded-lg object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            src={welcomeG}
            alt="Welcome"
          />
        </div>
      </div>
      <div className="mt-10">
        <DashboardStatistic />
      </div>
    </div>
  );
};

export default WeclomeToDashboard;
