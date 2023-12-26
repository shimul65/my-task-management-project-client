import useAuth from "../../../Hooke/useAuth";
import { Link,} from "react-router-dom";
import useAxiosSecure from "../../../Hooke/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import moment from "moment/moment";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";

const MyTasks = () => {

    const { user } = useAuth();

    const axiosSecure = useAxiosSecure();
    const { data: myTasks, refetch } = useQuery({
        queryKey: [user?.email, 'tasks'],
        // enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/tasks?email=${user.email}`);
            return res.data;
        }
    })

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/tasks/${_id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Posted Job has been deleted.',
                                'success'
                            )
                            refetch();
                        }
                    })
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
                                            <div className="flex gap-6 justify-between items-center">
                                                <div className="text-2xl font-semibold text-[#484c7f]">
                                                    {task.title}
                                                </div>
                                                <div className="flex gap-2 items-center ">
                                                    <Link to={`/dashboard/updateTask/${task._id}`}>
                                                        <div className="text-3xl text-blue-500">
                                                            <CiEdit></CiEdit>
                                                        </div>
                                                    </Link>
                                                    <div onClick={() => handleDelete(task._id)} className="text-2xl text-red-500">
                                                        <RiDeleteBin6Line></RiDeleteBin6Line>
                                                    </div>
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