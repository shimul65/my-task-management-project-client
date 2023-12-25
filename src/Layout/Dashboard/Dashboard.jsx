import { Link, NavLink, Outlet } from "react-router-dom";
import logo from '../../assets/logo2.svg'
import './Dashboard.css'
import { MdFormatListBulletedAdd } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
// import { FaHome, FaShoppingCart, FaCalendarAlt, } from "react-icons/fa";

const Dashboard = () => {

    return (
        <div className="container  mx-auto flex">
            <div className="w-72  min-h-screen bg-[#4C3575] pt-14 font-semibold">
                <div className="sticky top-14">
                    <Link to='/' >
                        <div className='flex items-center lg:pl-8 gap-2 justify-center'> <img className='w-12' src={logo} alt="" />
                            <span className={` text-4xl font-bold text-white`}>My-Task</span>
                        </div>
                    </Link>
                    <ul className="mt-5 flex flex-col space-y-6 justify-center mx-auto ">
                        <li className="text-white  hover:text-[#05bcff]  p-3 hover:bg-[#41227b]">
                            <NavLink to='/dashboard/myTasks' className='flex gap-3 text-2xl items-center'>
                                <FaTasks></FaTasks>
                                <p>My Tasks</p></NavLink>
                        </li>
                        <li className="text-white  hover:text-[#05bcff]  p-3 hover:bg-[#41227b]">
                            <NavLink to='/dashboard/AddTasks' className='flex gap-3 text-2xl items-center'>
                                <MdFormatListBulletedAdd></MdFormatListBulletedAdd>
                                <p>Add Tasks</p></NavLink>
                        </li>

                        <li className="text-white  hover:text-[#05bcff]  p-3 hover:bg-[#41227b]">
                            <NavLink to='/' className='flex gap-3 text-2xl items-center'>
                                <IoHomeOutline></IoHomeOutline>
                                <p>Home</p></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex-1 pt-16 bg-[#F6F6F6]">
                <div className="mx-10">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;