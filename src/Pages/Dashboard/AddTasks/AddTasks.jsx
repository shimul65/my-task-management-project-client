import useAuth from "../../../Hooke/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../../../Hooke/useAxiosSecure";

const AddTasks = () => {

    const { user } = useAuth();

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

    return (
        <div>
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
                                    <option value="Low">Low</option>
                                    <option value="Moderate">Moderate</option>
                                    <option value="High">High</option>
                                </select>
                            </div>
                        </div>
                        <div className="">
                            <label className="label">
                                <span className="label-text text-blue-800 text-base">Task Deadline*</span>
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

                        <div className="form-control   mx-auto w-full md:w-1/2 my-6 ">
                            <div className="form-control">
                                <button className="btn mx-auto btn-five btn-style1 bg-transparent" style={{ backgroundColor: 'rgb(156 163 175' }}>
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