import About from "./About";
import Banner from "./Banner";
import Management from "./Management";
import WhoBenefit from "./WhoBenefit";


const Home = () => {
    return (
        <div className="min-h-screen">
            <Banner></Banner>
            <Management></Management>
            <About></About>
            <WhoBenefit></WhoBenefit>
        </div>
    );
};

export default Home;