import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import footerImg from '../../assets/footer-bg.svg'
import bg from '../../assets/dots.svg'
import Footer from "./Footer";


const Main = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: '' }}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className="border border-white" style={{ backgroundImage: `url(${footerImg})`, backgroundSize: '100% 100%' }}>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;