import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import logo from '../../assets/logo.svg'
import logo2 from '../../assets/logo2.svg'
import { MdFormatListBulletedAdd, MdOutlineContacts } from "react-icons/md";
import { SiHelpscout } from "react-icons/si";
import profile from '../../assets/profile.png'
import './Navbar.css'
import useAuth from "../../Hooke/useAuth";
import toast from "react-hot-toast";
import auth from "../../Firebase/firebase.config";
import { FaTasks } from "react-icons/fa";


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
            user && <li className="py-1"><NavLink className={'flex gap-2 items-center hover:text-[#05bcff]'} to='/dashboard/myTasks'>
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
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost relative lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 absolute left-0 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/' >
                        <div className='-ml-[80%] md:-ml-0 flex min-w-[160px] items-center lg:pl-8 gap-2'>
                            {
                                scrolling ? <img className='w-12' src={logo} alt="" /> : <img className='w-12' src={logo2} alt="" />
                            }
                            <h1 className={` text-2xl lg:text-4xl font-bold ${scrolling ? 'text-[#484c7f]' : 'text-white'}`}>My-Task</h1>
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
                                    <div className="w-16 lg:w-20 rounded-full">
                                        <img src={user ? user.photoURL : profile} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 z-[1] py-5  shadow-2xl glass rounded-box w-fit">
                                    <div className="rounded-full pl-8 pr-16 flex gap-3 items-center">
                                        <img className="rounded-full w-16 h-16" src={user ? user.photoURL : profile} />
                                        <div className="text">
                                            <div className="text-lg text-black
                                        ">{user?.displayName}</div>
                                            <div className="text-lg text-black">{user?.email}</div>
                                        </div>
                                    </div>
                                    <div className="divider px-6">Task</div>
                                    <li className="text-black rounded-full   hover:text-[#05bcff]  p-2 hover:bg-[#41227b]">
                                        <NavLink to='/dashboard/myTasks' className='flex gap-2 text-base items-center'>
                                            <FaTasks></FaTasks>
                                            <p>My Tasks</p></NavLink>
                                    </li>
                                    <li className="text-black rounded-full   hover:text-[#05bcff]  p-2 hover:bg-[#41227b]">
                                        <NavLink to='/dashboard/AddTasks' className='flex gap-2 text-base items-center'>
                                            <MdFormatListBulletedAdd></MdFormatListBulletedAdd>
                                            <p>Add Tasks</p></NavLink>
                                    </li>
                                    <li>
                                        <button onClick={handleLogOut}
                                            className="customBtn flex items-center justify-center h-10 rounded-full text-center text-black py-0">LOG OUT</button>

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