import icon1 from '../../assets/icon-laravel.svg'
import icon2 from '../../assets/bootstrap.png'
import icon3 from '../../assets/boilerplat.svg'
import icon4 from '../../assets/authorization.svg'
import icon5 from '../../assets/user-managment.svg'
import icon6 from '../../assets/role-managment.svg'
import icon7 from '../../assets/skeleton.svg'
import icon8 from '../../assets/w3c.png'
import icon9 from '../../assets/sass.png'
import icon10 from '../../assets/responsive.png'

const About = () => {
    return (
        <div className="container mx-auto">
            <div className="pb-16">
                <div className="mb-12">
                    <div className='flex border2 flex-col mx-auto text-center w-fit ' style={{
                        fontFamily: 'Inter'
                    }}>
                        <h2 className='px-6 border-gray-300 py-5 text-3xl md:text-5xl font-extrabold text-[#484c7f] text-center'>&rdquo; Why Choose My-Task &rdquo;</h2>
                        <p className="text-gray-500 mb-3">Best Feature Available in My-Task App</p>
                    </div >
                </div>
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 mb-14 mx-2">
                        <div className="flex items-center flex-col items- justify-center">
                            <img className="p-10 rounded-tl-3xl rounded-br-3xl bg-white border shadow-xl" src={icon1} alt="" />
                            <p className="mt-6 text- text-xl font-semibold text-[#484c7f]">
                                Project Management
                            </p>
                        </div>
                        <div className="flex items-center flex-col items- justify-center">
                            <img className="p-10 rounded-tl-3xl rounded-br-3xl bg-white border shadow-xl" src={icon2} alt="" />
                            <p className="mt-6 text- text-xl font-semibold text-[#484c7f]">
                                Bootstrap 5x
                            </p>
                        </div>
                        <div className="flex items-center flex-col items- justify-center">
                            <img className="p-10 rounded-tl-3xl rounded-br-3xl w-[65%] bg-white border shadow-xl" src={icon3} alt="" />
                            <p className="mt-6 text- text-xl font-semibold text-[#484c7f]">
                                Boilerplate
                            </p>
                        </div>
                        <div className="flex items-center flex-col items- justify-center">
                            <img className="p-10 rounded-tl-3xl rounded-br-3xl bg-white border shadow-xl" src={icon4} alt="" />
                            <p className="mt-6 text- text-xl font-semibold text-[#484c7f]">
                                Authorization
                            </p>
                        </div>
                        <div className="flex items-center flex-col items- justify-center">
                            <img className="p-10 rounded-tl-3xl rounded-br-3xl bg-white border shadow-xl" src={icon5} alt="" />
                            <p className="mt-6 text- text-xl font-semibold text-[#484c7f]">
                                User Management

                            </p>
                        </div>
                        <div className="flex items-center flex-col items- justify-center">
                            <img className="p-10 rounded-tl-3xl rounded-br-3xl bg-white border shadow-xl" src={icon6} alt="" />
                            <p className="mt-6 text- text-xl font-semibold text-[#484c7f]">
                                Role Management

                            </p>
                        </div>
                        <div className="flex items-center flex-col items- justify-center">
                            <img className="p-10 rounded-tl-3xl rounded-br-3xl bg-white border shadow-xl" src={icon7} alt="" />
                            <p className="mt-6 text- text-xl font-semibold text-[#484c7f]">
                                Skeleton
                            </p>
                        </div>
                        <div className="flex items-center flex-col items- justify-center">
                            <img className="p-10 rounded-tl-3xl rounded-br-3xl w-[65%] bg-white border shadow-xl" src={icon8} alt="" />
                            <p className="mt-6 text- text-xl font-semibold text-[#484c7f]">
                                W3C Validated

                            </p>
                        </div>
                        <div className="flex items-center flex-col items- justify-center">
                            <img className="p-10 rounded-tl-3xl rounded-br-3xl bg-white border shadow-xl" src={icon9} alt="" />
                            <p className="mt-6 text- text-xl font-semibold text-[#484c7f]">
                                Sass
                            </p>
                        </div>
                        <div className="flex md:hidden lg:flex items-center flex-col items- justify-center">
                            <img className="p-10 rounded-tl-3xl rounded-br-3xl w-[65%] bg-white border shadow-xl" src={icon10} alt="" />
                            <p className="mt-6 text- text-xl font-semibold text-[#484c7f]">
                                Fully responsive

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;