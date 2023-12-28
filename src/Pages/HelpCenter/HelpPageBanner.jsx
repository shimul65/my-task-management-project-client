import { Link } from 'react-router-dom';
import banner from '../../assets/wave1.png'
import useAuth from '../../Hooke/useAuth';

const HelpPageBanner = () => {
    const { user } = useAuth();
    return (
        <div className="w-full relative">
            <div className=" hero relative w-full md:h-[750px]"
                style={{ backgroundImage: `url(${banner})`, backgroundSize: '' }}>

                <div className="mt-24 md:-mt-24 lg:mt-0 mb-12  md:mb-0 text-left flex gap-16">
                    <div className="flex flex-col items-center space-y-7 lg:mb-20">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-white"><span>My-Task & Project </span>
                            <br />
                            <span className=''>Management System</span>
                        </h2>
                        <p className="text-sm px-16 md:px-0 md:text-lg font-medium text-white text-center">This is a solution for everyone. Although it is at the heart of <br /> Scrum and is typically used by software development teams, <br /> it can be successfully applied to other businesses, as well as <br /> used for improving personal productivity.</p>
                        <Link state={"/dashboard/myTasks"} to={user ? `/dashboard/myTasks` : `/login`}>
                            <div className="btn  btn-five btn-style1 bg-transparent">
                                <span className='text-2xl text-gray-600
                                 md:text-white'>Let&#39;s Explore</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpPageBanner;