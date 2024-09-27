import Catagory from "./Catagory";
import Gallary from "./Gallary";
import Header from "./Header";
import ProductList from "./ProductList";

const Home = () => {
    return (
        <div className="">
            <Header/>
            <Catagory/>
            <ProductList/>
            <Gallary/>
        </div>
    );
};

export default Home;