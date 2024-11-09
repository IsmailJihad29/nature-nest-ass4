import { Outlet } from "react-router-dom";
import CustomHeader from "../CustomHeader";


const AdminDashboard = () => {
  return (
    <div className="p-6">
     <CustomHeader/>
      <Outlet/>
    
    </div>
  );
};

export default AdminDashboard;
