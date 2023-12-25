import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import logo from '../../assets/logo.svg'
import logo2 from '../../assets/logo2.svg'
import { MdOutlineContacts } from "react-icons/md";
import { SiHelpscout } from "react-icons/si";
import profile from '../../assets/profile.png'
import './Navbar.css'
import useAuth from "../../Hooke/useAuth";
import toast from "react-hot-toast";
import auth from "../../Firebase/firebase.config";


const Navbar = () => {

    const [scrolling, setScrolling] = useState(false);
    const { user, logOut } = useAuth();
    const navigate = useNavigate();

    const handleLogOut = () => {

        logOut(auth)
            .then(() => {
                navigate('/');
                toast.success('User Log Out Successfully')
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorCode, errorMessage);
            })
    }


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
        <li className="py-1"><NavLink className={'flex gap-2 items-center hover:text-[#05bcff]'} to='/'>
            <IoHomeOutline className="text-xl "></IoHomeOutline>
            <p>Home</p>
        </NavLink></li>
        {
            user && <li className="py-1"><NavLink className={'flex gap-2 items-center hover:text-[#05bcff]'} to='/dashboard'>
            <IoHomeOutline className="text-xl "></IoHomeOutline>
            <p>Dashboard</p>
        </NavLink></li>
        }
        <li className="py-1"><NavLink className={'flex gap-2 items-center hover:text-[#05bcff]'} to='/helpCenter'>
            <SiHelpscout className="text-xl "></SiHelpscout>
            <p>Help Center</p>
        </NavLink></li>
        <li className="py-1"><NavLink className={'flex gap-2 items-center hover:text-[#05bcff]'} to='/about'>
            <MdOutlineContacts className="text-xl "></MdOutlineContacts>
            <p>About US</p>
        </NavLink></li>

    </>


    return (
        <div className={`fixed navbar2 z-10 w-full p-2 ${scrolling ? 'bg-white' : ''}`}>
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
                    <Link to='/' > <div className='flex items-center lg:pl-8 gap-2'>
                        {
                            scrolling ? <img className='w-12' src={logo} alt="" /> : <img className='w-12' src={logo2} alt="" />
                        }
                        <span className={` text-4xl font-bold ${scrolling ? 'text-[#484c7f]' : 'text-white'}`}>My-Task</span>
                    </div></Link>
                </div>

                <div className="navbar-end">
                    <div className={`mr-5 hidden lg:flex ${scrolling ? 'text-black' : 'text-white'} `}>
                        <ul className="flex justify-center items-center gap-6 px-1">
                            {navLinks}
                        </ul>
                    </div>
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="cursor-pointer avatar">
                                    <div className="w-20 rounded-full">
                                        <img src={user ? user.photoURL : profile} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu border menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl glass rounded-box w-fit">
                                    <div className="flex flex-col items-center space-y-6">
                                        <div className="w-10 h-10 rounded-full">
                                            <img src={user ? user.photoURL : profile} />
                                        </div>
                                        <div className="text-center">
                                            <div className="text-lg">{user?.displayName}</div>
                                            <div className="text-lg">{user?.email}</div>
                                        </div>

                                    </div>
                                    <li>
                                        <button onClick={handleLogOut}
                                            className="customBtn flex items-center justify-center h-10 rounded-full text-center py-0">LOG OUT</button>

                                    </li>
                                </ul>
                            </div>
                            :
                            <>
                                <Link to='/login'> <p className="btn btn-five bg-transparent  text-xl" style={{ width: '156px', color: scrolling ? 'black' : '' }}>Login</p></Link>
                            </>
                    }
                </div>
            </div>
        </div >
    );
};

export default Navbar;