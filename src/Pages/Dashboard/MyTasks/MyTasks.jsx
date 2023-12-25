import { IoSearch } from "react-icons/io5";
import useAuth from "../../../Hooke/useAuth";
import auth from "../../../Firebase/firebase.config";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import profile from '../../../assets/profile.png'
import useAxiosSecure from "../../../Hooke/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import moment from "moment/moment";

const MyTasks = () => {

    const { user, logOut } = useAuth();

    const axiosSecure = useAxiosSecure();
    const { data: myTasks, } = useQuery({
        queryKey: [user?.email, 'tasks'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tasks?email=${user.email}`);
            return res.data;
        }
    })

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
        <div>
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

            <div className="pb-16">
                <div className="mb-12 pt-8">
                    <div className='flex border2 flex-col mx-auto text-center w-fit ' style={{
                        fontFamily: 'Inter'
                    }}>
                        <h2 className=' px-6 border-gray-300 py-5 text-3xl md:text-5xl font-extrabold text-[#484c7f] text-center'>&rdquo; All of your Tasks &rdquo;</h2>
                        <p className="text-gray-500 mb-3">You can rearrange</p>
                    </div >
                </div>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-14 mx-2">

                        <div className="flex flex-col gap-6">
                            <div className="flex bg-[#ffbc6b] p-5 border rounded-lg shadow-2xl flex-col items- justify-center animate__animated animate__fadeInDown ">
                                <div className="flex gap-5 justify-center items-center ">
                                    <div>
                                        <h2 className="text-2xl font-bold">To-Do Tasks</h2>
                                    </div>
                                </div>
                            </div>
                            {
                                myTasks?.map(task =>
                                    <div key={task._id} className="flex cursor-pointer bg-white p-8 border rounded-lg shadow-2xl flex-col items- justify-center animate__animated animate__fadeInDown ">
                                        <div className="">
                                            <div className="flex justify-between items-center">
                                                <div className="text-2xl font-semibold text-[#484c7f]">
                                                    {task.title}
                                                </div>
                                                <div className="flex items-center">

                                                </div>
                                            </div>
                                            <p className="my-3">{task.description}</p>
                                            <div>
                                                Deadline: {moment(task.deadline).format('LL')}
                                            </div>
                                            <div>
                                                Priority: {task.priority}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="flex bg-[#F1C8DB] p-5 border rounded-lg shadow-2xl flex-col items- justify-center animate__animated animate__fadeInDown ">
                                <div className="flex gap-5 justify-center items-center ">
                                    <div>
                                        <h2 className="text-2xl font-bold">Ongoing Tasks</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="flex bg-[#A0D9B4] p-5 border rounded-lg shadow-2xl flex-col items- justify-center animate__animated animate__fadeInDown ">
                                <div className="flex gap-5 justify-center items-center ">
                                    <div>
                                        <h2 className="text-2xl font-bold">Completed Tasks</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyTasks;