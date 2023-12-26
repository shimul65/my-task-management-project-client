import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import logo from '../../assets/logo2.svg'
import './Dashboard.css'
import { MdFormatListBulletedAdd } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import profile from '../../assets/profile.png'
import useAuth from "../../Hooke/useAuth";
import toast from "react-hot-toast";
import auth from "../../Firebase/firebase.config";
// import { FaHome, FaShoppingCart, FaCalendarAlt, } from "react-icons/fa";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const Dashboard = () => {

    const { user, logOut, } = useAuth();

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

    return (
        <div className="container  mx-auto flex">
            <div className="w-72  min-h-screen bg-[#4C3575] pt-14 font-semibold">
                <div className="sticky top-14">
                    <Link to='/' >
                        <div className='flex items-center lg:pl-3 gap-2'> <img className='w-12' src={logo} alt="" />
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
            <DndProvider backend={HTML5Backend}>
                <div className="flex-1 pt-16 bg-[#F6F6F6]">
                    <div className="mx-10">
                        <div className="flex justify-between items-center">
                            <div className="relative w-1/2">
                                <input type="text" placeholder="Type here" className="input input-bordered input-info w-full" />
                                <div className="absolute top-[10%] right-[3%]">
                                    <button className=" text-4xl text-gray-500 w-full"><IoSearch></IoSearch></button>
                                </div>
                            </div>
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
                        </div>
                        <Outlet></Outlet>
                    </div>
                </div>
            </DndProvider>
        </div>
    );
};

export default Dashboard;