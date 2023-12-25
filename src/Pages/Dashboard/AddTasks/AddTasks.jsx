import { IoSearch } from "react-icons/io5";
import useAuth from "../../../Hooke/useAuth";
import { useForm } from "react-hook-form";
import auth from "../../../Firebase/firebase.config";
import Swal from "sweetalert2";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import profile from '../../../assets/profile.png'
import useAxiosSecure from "../../../Hooke/useAxiosSecure";

const AddTasks = () => {

    const { user, logOut } = useAuth();

    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();

    const [startDate, setStartDate] = useState(new Date());

    const onSubmit = async (data) => {

        const taskInfo = {
            email: user.email,
            title: data.title,
            description: data.description,
            priority: data.priority,
            deadline: startDate,
            status: 'todo'
        }
        axiosSecure.post('/tasks', taskInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: `Your Tasks Added Successfully`,
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    reset();
                }
            })

    }


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
                        <h2 className=' px-6 border-gray-300 py-5 text-3xl md:text-5xl font-extrabold text-[#484c7f] text-center'>&rdquo; Create Tasks &rdquo;</h2>
                        <p className="text-gray-500 mb-3">Add your daily tasks</p>
                    </div >
                </div>
                <div className="container mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-blue-800 text-base">Tasks Title*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Tasks Title"
                                    {...register('title', { required: true })}
                                    required
                                    className="input input-info" />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-blue-800 text-base">Tasks Priority*</span>
                                </label>
                                <select defaultValue="default" {...register('priority', { required: true })}
                                    className="select select-bordered border border-sky-400 w-full">
                                    <option disabled value="default">Pick Priority</option>
                                    <option value="Technology and Software">Low</option>
                                    <option value="Healthcare and Patient Satisfaction">Moderate</option>
                                    <option value="Education and Training">High</option>
                                </select>
                            </div>
                        </div>
                        <div className="">
                            <label className="label">
                                <span className="label-text text-blue-800 text-base">Survey Deadline*</span>
                            </label>
                            <DatePicker
                                className="border border-sky-400 w-full rounded-lg text-lg "
                                showIcon
                                dateFormat="dd/MM/yyyy"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-blue-800 text-base">Tasks Description</span>
                            </label>
                            <textarea {...register('description')} className="textarea textarea-bordered h-32 border-sky-400" placeholder="Tasks Description ... "></textarea>
                        </div>

                        <div className="form-control mx-auto w-full md:w-1/2 my-6 ">
                            <div className="form-control">
                                <button className="btn bg-gray-400 mx-auto btn-five btn-style1 bg-transparent">
                                    <span className='text-2xl'>Add Task</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTasks;