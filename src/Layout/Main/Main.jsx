import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import footerImg from '../../assets/footer-bg.svg'
import bg from '../../assets/dots.svg'
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";


const Main = () => {

    const location = useLocation();
    const isLogin = location.pathname.includes('login');
    const isRegister = location.pathname.includes('register');

    return (
        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: '' }}>
            {
                isLogin || isRegister || <div> <Navbar></Navbar></div>
            }
            <Outlet></Outlet>
            {
                isLogin || isRegister || <div className="border border-white" style={{ backgroundImage: `url(${footerImg})`, backgroundSize: '100% 100%' }}>
                    <Footer></Footer>
                </div>
            }
            <Toaster></Toaster>
        </div>
    );
};

export default Main;