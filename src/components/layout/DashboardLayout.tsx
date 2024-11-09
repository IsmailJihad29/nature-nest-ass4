import AdminDashboard from "@/pages/Dashboard/AdminDashboard/AdminDashboard";
import UserDashboard from "@/pages/Dashboard/UserDashboard.tsx/UserDashboard";
import { selectCurrentUser } from "@/redux/features/userSlice";
import { useAppSelector } from "@/redux/hooks";
import { Link } from "react-router-dom";

const DashboardLayout = () => {
  const { user } = useAppSelector(selectCurrentUser);
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col lg:flex-row h-screen primary-bg">
      {/* Sidebar */}
      <div className="lg:w-1/6 w-full  text-white p-6 lg:block flex-none">
        <nav>
          <ul>
            {user?.role === "admin" ? (
              <>
                <li className="font-title mb-4">
                <Link
                  to="/dashboard"
                  className={`font-bold text-xl ${
                    isActive("/dashboard")
                      ? "border-b-2 border-green-500"
                      : "text-white"
                  }`}
                >
                 Dashobard
                </Link>
                </li>
                <li className="font-title mb-4">
                <Link
                  to="/dashboard/product-manage"
                  className={`font-bold text-xl ${
                    isActive("/dashboard/product-manage")
                      ? "border-b-2 border-green-500"
                      : "text-white"
                  }`}
                >
                  Manage Products
                </Link>
                </li>
              </>
            ) : (
              <>
                <li>Profile</li>
                <li>Activities</li>
              </>
            )}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 global-bg p-6 overflow-y-auto">
        {/* Render Content Based on Role */}
        {user?.role === "admin" ? <AdminDashboard /> : <UserDashboard />}
      </div>
    </div>
  );
};

export default DashboardLayout;
