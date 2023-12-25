import banner from '../../assets/herobg.svg'
import banner2 from '../../assets/hero-img.png'
import './Home.css'
const Banner = () => {
    return (
        <div className="w-full relative">
            <div className=" hero relative w-full md:h-[700px]"
                style={{ backgroundImage: `url(${banner})`, backgroundSize: '100% 100%' }}>
                <div className="mt-24 mb-12 md:mt-0 md:mb-0 text-left flex gap-16">
                    <div className="flex flex-col  space-y-7 lg:mb-20">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-left text-white"><span>My-Task & Project </span>
                            <br />
                            <span className=''>Management System.</span>
                        </h2>
                        <p className="text-sm px-16 md:px-0 md:text-lg font-medium text-white text-left">This is a solution for everyone. Although it is at the heart of <br /> Scrum and is typically used by software development teams, <br /> it can be successfully applied to other businesses, as well as <br /> used for improving personal productivity.</p>
                        <div className="btn btn-five btn-style1 bg-transparent">
                            <span className='text-2xl'>Let&#39;s Explore</span>
                        </div>
                    </div>
                    <div>
                        <img src={banner2} className='w-[600px] h-[350px]' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;