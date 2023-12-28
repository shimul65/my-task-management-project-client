import { Link } from 'react-router-dom';
import img23 from '../../assets/banner/banner1.png'
import banner2 from '../../assets/hero-img.png'
import './Home.css'
import useAuth from '../../Hooke/useAuth';
const Banner = () => {
    const { user } = useAuth();
    // const location = useLocation();
    return (
        <div className="w-full relative">
            <div className=" md:pt-28 lg:pt-0 hero relative w-full md:h-[700px]"
                style={{ backgroundImage: `url(${img23})`, backgroundSize: '100% 100%' }}>
                <div className="mt-24 mb-12 md:mt-0 md:mb-0 text-left flex flex-col lg:flex-row gap-16">
                    <div className="flex flex-col  space-y-7 lg:mb-20">
                        <h2 className="text-3xl md:text-5xl font-extrabold lg:text-left text-center text-white"><span>My-Task & Project </span>
                            <br />
                            <span className='text-c'>Management System.</span>
                        </h2>
                        <p className="text-sm px-16 md:px-0 md:text-lg font-medium text-white text-center lg:text-left">This is a solution for everyone. Although it is at the heart of <br /> Scrum and is typically used by software development teams, <br /> it can be successfully applied to other businesses, as well as <br /> used for improving personal productivity.</p>
                        <Link state={"/dashboard/myTasks"} to={user ? `/dashboard/myTasks` : `/login`}>
                            <div className="btn flex mx-auto lg:mx-0 btn-five btn-style1 bg-transparent">
                                <span className='text-2xl text-black lg:text-white'>Let&#39;s Explore</span>
                            </div>
                        </Link>
                    </div>
                    <div className='hidden md:flex'>
                        <img src={banner2} className='w-[600px] h-[350px]' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;