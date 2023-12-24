import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";

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
        ]
    },
    // {
    //     path: "/dashboard",
    //     element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    //     errorElement: <ErrorPage></ErrorPage>,
    //     children: [
    //         {
    //             path: "/dashboard/userHome",
    //             element: <UserHome></UserHome>
    //         },
    //         {
    //             path: "/dashboard/cart",
    //             element: <Cart></Cart>
    //         },
    //         {
    //             path: "/dashboard/payment",
    //             element: <Payment></Payment>
    //         },
    //         {
    //             path: "/dashboard/paymentHistory",
    //             element: <PaymentHistory></PaymentHistory>
    //         },

    //         // admin routes
    //         {
    //             path: "/dashboard/adminHome",
    //             element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
    //         },
    //         {
    //             path: "/dashboard/users",
    //             element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
    //         },
    //         {
    //             path: "/dashboard/addItems",
    //             element: <AdminRoute><AddItems></AddItems></AdminRoute>
    //         },
    //         {
    //             path: "/dashboard/updateItem/:id",
    //             element: <AdminRoute><UpdateItems></UpdateItems></AdminRoute>,
    //             loader: ({ params }) => fetch(`https://bistro-boss-sever-cyan.vercel.app/menus/${params.id}`)
    //         },
    //         {
    //             path: "/dashboard/manageItems",
    //             element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
    //         },
    //     ]
    // },
]);

export default router;