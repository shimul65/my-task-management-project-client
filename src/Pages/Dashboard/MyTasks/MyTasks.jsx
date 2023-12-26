
import useAuth from "../../../Hooke/useAuth";
import { Link, } from "react-router-dom";
import useAxiosSecure from "../../../Hooke/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import moment from "moment/moment";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { useDrag, useDrop } from "react-dnd";

const MyTasks = () => {

    const { user } = useAuth();

    const axiosSecure = useAxiosSecure();
    const { data: myTasks = [], refetch } = useQuery({
        queryKey: [user?.email, 'tasks'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tasks?email=${user.email}`);
            return res.data;
        }
    })

    const fTodoTasks = myTasks?.filter(task => task.status === "todo");
    const fOngoingTasks = myTasks?.filter(task => task.status === "ongoing");
    const fCompletedTasks = myTasks?.filter(task => task.status === "completed");

    const statusLists = ['To-Do Tasks', 'Ongoing Tasks', 'Completed Tasks']

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

                        {
                            statusLists.map((statusList, index) => <Section
                                key={index}
                                statusList={statusList}
                                myTasks={myTasks}
                                refetch={refetch}
                                todoTasks={fTodoTasks}
                                ongoingTasks={fOngoingTasks}
                                completedTasks={fCompletedTasks}
                                handleDelete={handleDelete}
                            ></Section>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyTasks;

// task section todo, ongoing, and completed
const Section = ({
    statusList,
    todoTasks,
    ongoingTasks,
    completedTasks,
    refetch,
    handleDelete }) => {

    const axiosSecure = useAxiosSecure();

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'task',
        drop: (item) => addItemToSection(item.task),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    let text = "To-Do Tasks";
    let bgColor = "#ffbc6b";
    let tasksToMap = todoTasks;
    let status = "todo";

    if (statusList === 'Ongoing Tasks') {
        text = 'Ongoing Tasks';
        bgColor = "#F1C8DB";
        tasksToMap = ongoingTasks;
        status = "ongoing";
    }

    if (statusList === 'Completed Tasks') {
        text = 'Completed Tasks';
        bgColor = "#F1C8DB";
        tasksToMap = completedTasks;
        status = "completed"
    }

    const addItemToSection = (task) => {

        const updateTask = {
            title: task.title,
            description: task.description,
            priority: task.priority,
            deadline: task.deadline,
            status: status,
        }
        axiosSecure.patch(`/tasks/${task._id}`, updateTask)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: `Your Task Update Successfully`,
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    refetch();
                }
            })
    }

    return <>
        <div ref={drop} className={`flex flex-col p-1 gap-6 rounded-md ${isOver ? 'bg-slate-200' : ''}`}>

            <Header
                text={text} bgColor={bgColor} count={tasksToMap.length}>
            </Header>

            {
                tasksToMap.length > 0 && tasksToMap.map(task =>
                    <Task
                        key={task._id}
                        task={task}
                        handleDelete={handleDelete}
                    ></Task>
                )
            }

        </div>
    </>
}

// task section header (to-do, ongoing, completed)
const Header = ({ text, bgColor, count }) => {

    return (
        <div className={`flex bg-[${bgColor}] p-5 border rounded-lg shadow-2xl flex-col items- justify-center animate__animated animate__fadeInDown `}>
            <div className="flex gap-5 justify-center items-center ">
                <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold">{text}</h2>
                    <div className="text-2xl flex justify-center items-center font-semibold w-10 h-10 text-center bg-white rounded-full">{count}</div>
                </div>
            </div>
        </div>
    )
}

// single task by status
const Task = ({ task, handleDelete }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'task',
        item: { task: task },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    return (
        <div
            ref={drag}
            className={`flex cursor-pointer bg-white p-8 border rounded-lg shadow-2xl flex-col items- justify-center animate__animated animate__fadeInDown ${isDragging ? 'opacity-25' : 'opacity-100'
                }`}>
            <div className="">
                <div className="flex gap-6 justify-between items-center">
                    <div className="text-2xl font-semibold text-[#484c7f]">
                        {task.title}
                    </div>
                    <div className="flex gap-2 items-center ">
                        <Link to={`/dashboard/updateTask/${task._id} `}>
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