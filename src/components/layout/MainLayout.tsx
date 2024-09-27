import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import NavBar from "../NavBar";

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;