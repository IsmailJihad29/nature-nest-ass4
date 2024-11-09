import { selectCurrentUser } from "@/redux/features/userSlice";
import { useAppSelector } from "@/redux/hooks";


const DashboardStatistic = () => {
    const { user } = useAppSelector(selectCurrentUser);

    // Sample data (replace these with actual data from your API)
    const adminStats = {
      totalUsers: 150, // Example number of users
      totalBookings: 45, // Example number of bookings
      totalProducts: 200, // Example number of products
    };

    const userStats = {
      totalOrders: 5, // Example number of orders the user has placed
      totalCartItems: 3, // Example number of products in the user's cart
    };
    return (
        <div>
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {user?.role === 'admin' ? (
            <>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">Total Users</h4>
                <p className="text-2xl font-bold">{adminStats.totalUsers}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">Total Bookings</h4>
                <p className="text-2xl font-bold">{adminStats.totalBookings}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">Total Products</h4>
                <p className="text-2xl font-bold">{adminStats.totalProducts}</p>
              </div>
            </>
          ) : (
            <>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">Total Orders</h4>
                <p className="text-2xl font-bold">{userStats.totalOrders}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">Products in Cart</h4>
                <p className="text-2xl font-bold">{userStats.totalCartItems}</p>
              </div>
            </>
          )}
        </div>
        </div>
    );
};

export default DashboardStatistic;