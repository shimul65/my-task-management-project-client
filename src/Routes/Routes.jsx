import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import HelpCenter from "../Pages/HelpCenter/HelpCenter";
import AboutPage from "../Pages/AboutPage/AboutPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard/Dashboard";
import MyTasks from "../Pages/Dashboard/MyTasks/MyTasks";
import AddTasks from "../Pages/Dashboard/AddTasks/AddTasks";
import UpdateTask from "../Pages/Dashboard/UpdateTask/UpdateTask";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <AboutPage></AboutPage>
            },
            {
                path: "/helpCenter",
                element: <HelpCenter></HelpCenter>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/dashboard/myTasks",
                element: <PrivateRoutes><MyTasks></MyTasks></PrivateRoutes>
            },
            {
                path: "/dashboard/addTasks",
                element: <PrivateRoutes><AddTasks></AddTasks></PrivateRoutes>
            },
            {
                path: "/dashboard/updateTask/:id",
                element: <PrivateRoutes><UpdateTask></UpdateTask></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://my-task-management-project-server.vercel.app/tasks/${params?.id}`)
            },
        ]
    },
]);

export default router;