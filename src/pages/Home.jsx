import Banner from "../componenets/Header/Banner";
import Products from "../componenets/Products/Products";

const Home = () => {
    return (
        <div>
            <Banner/>
            <div className="my-10">
                <p className="text-center text-4xl text-green-500 mb-5">All Products</p>
                <Products/>
            </div>
            
        </div>
    );
};

export default Home;