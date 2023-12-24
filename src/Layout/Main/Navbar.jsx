import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { RiContactsLine } from "react-icons/ri";
// import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineContacts } from "react-icons/md";
import Login from "../../Pages/Login/Login";
// import { PiStarOfDavid } from "react-icons/pi";
import profile from '../../assets/profile.png'


const Navbar = () => {

    const [scrolling, setScrolling] = useState(false);
    const user = false;

    useEffect(() => {
        const handleScroll = () => {
            const navbar2 = document.querySelector('.navbar2');

            if (navbar2) {
                setScrolling(window.scrollY > 100);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = <>
        <li className="py-2"><NavLink className={'flex gap-2 items-center'} to='/'>
            <IoHomeOutline className="text-2xl text-blue-800"></IoHomeOutline>
            <p>Home</p>
        </NavLink></li>
        <li className="py-2"><NavLink className={'flex gap-2 items-center'} to='/surveys'>
            <MdOutlineContacts className="text-2xl text-blue-800"></MdOutlineContacts>
            <p>Surveys</p>
        </NavLink></li>
        <li className="py-2"><NavLink className={'flex gap-2 items-center'} to='/about'>
            <MdOutlineContacts className="text-2xl text-blue-800"></MdOutlineContacts>
            <p>About US</p>
        </NavLink></li>
        <li className="py-2"><NavLink className={'flex gap-2 items-center'} to='/contact'>
            <RiContactsLine className="text-2xl text-blue-800"></RiContactsLine>
            <p>Contact</p>
        </NavLink></li>

    </>


    return (
        <div className={`fixed navbar2 z-10 w-full p-3 ${scrolling ? 'bg-gradient-to-b from-sky-300 to-blue-100' : ''}`}>
            <div className="navbar container mx-auto font-semibold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/' ><img className='w-[150px]' src="" alt="" /></Link>
                </div>
                <div className={`navbar-center hidden lg:flex ${scrolling ? 'text-black' : 'text-white'} `}>
                    <ul className="flex justify-center items-center gap-6 px-1">
                        {navLinks}
                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        user ?
                            <div className="dropdown dropdown-end ">
                                <div className="drawer">
                                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                                    <div className="drawer-content">
                                        <label htmlFor="my-drawer" tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-24 rounded-full">
                                                <img src={user ? user.photoURL : profile} />
                                            </div>
                                        </label>
                                    </div>
                                    <div className="drawer-side z-10" style={{
                                        fontFamily: 'Inter'
                                    }}>
                                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                        <div className="pt-4 w-80 min-h-full bg-base-200 text-base-content">
                                            <Link to='/' >
                                                <svg
                                                    id="图层_1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    x="0px"
                                                    y="0px"
                                                    viewBox="0 0 40 40"
                                                    xmlSpace="preserve"
                                                    role="img"
                                                >
                                                    <g id="logo" transform="translate(15.000000, 16.000000)">
                                                        <path
                                                            id="Fill-18"
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            fill="#FFB000"
                                                            d="M-1.021-0.867l-3.336,4.061l7.901,6.479c0.473,0.388,1.062,0.598,1.668,0.598 c0.091,0,0.182-0.005,0.273-0.014c0.699-0.073,1.34-0.422,1.778-0.971L21.436-8.41l-4.103-3.285L4.825,3.923L-1.021-0.867z"
                                                        ></path>
                                                        <path
                                                            id="Fill-19"
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            fill="#4772FA"
                                                            d="M5,19.5c-8.547,0-15.5-6.953-15.5-15.499S-3.547-11.5,5-11.5V-16C-6.028-16-15-7.028-15,3.999 S-6.028,24,5,24s20-8.972,20-19.999h-4.5C20.5,12.547,13.547,19.5,5,19.5"
                                                        ></path>
                                                    </g>
                                                </svg></Link>
                                            <div className="border mt-5 mx-4 rounded-lg py-5 bg-sky-100">
                                                <div className="flex flex-col items-center space-y-4">
                                                    <img className="rounded-full w-44 h-44 mx-auto" src={user ? user.photoURL : profile} />
                                                    <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
                                                    <div className="text-xl">{user?.email}</div>
                                                </div>
                                            </div>
                                            {/* <DrawerDashboard></DrawerDashboard> */}
                                            <div className="btn-epic mt-5 mx-auto shadow-md border shadow-sky-300" style={{ height: '50px', width: '70%' }}>
                                                <div>
                                                    <span style={{ left: '' }}>Log Out</span><span style={{ left: '' }}>Log Out</span>
                                                </div>
                                            </div></div>
                                    </div>
                                </div>
                            </div>
                            :
                            <>
                                {/* <div className="btn-epic shadow-md shadow-sky-300" onClick={() => document.getElementById('my_modal_5').showModal()}>
                                    <div>
                                        <span>Log in</span><span>Log in</span>
                                    </div>
                                </div>

                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <div className="shadow-2xl glass  px-20 card bg-[#EBF4F]">
                                        <Login></Login>
                                        <div className="modal-action">
                                            <form method="dialog" className="">
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog> */}
                            </>
                    }
                </div>
            </div>
        </div >
    );
};

export default Navbar;