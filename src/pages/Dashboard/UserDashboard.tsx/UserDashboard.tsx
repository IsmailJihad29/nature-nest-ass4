import CustomHeader from "../CustomHeader";
import WeclomeToDashboard from "../WeclomeToDashboard";



const UserDashboard = () => {
  return (
    <div className="p-6">
     <CustomHeader/>
      {/* User-specific components and stats */}
      <WeclomeToDashboard/>
    </div>
  );
};

export default UserDashboard;
