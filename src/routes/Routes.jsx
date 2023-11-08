import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../mainLayout/mainLayout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import AddJobs from '../pages/AddJobs/AddJobs';
import MyPostedJobs from '../pages/MyPostedJobs/MyPostedJobs';
import PrivateRoutes from './PrivateRoutes';
import UpdateJob from '../pages/MyPostedJobs/UpdateJob';
import MyBids from '../pages/MyBids/MyBids';
import BidRequest from '../pages/BidRequest/BidRequest';
import Details from '../pages/Details/Details';


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,

            },

            {
                path: "/addjobs",
                element: <PrivateRoutes><AddJobs></AddJobs></PrivateRoutes>
            },
            {
                path: "/mypostedjob",
                element: <PrivateRoutes><MyPostedJobs></MyPostedJobs> </PrivateRoutes>
            },
            {
                path: "/updatejob/:id",
                element: <UpdateJob></UpdateJob>,
                loader: ({ params }) => fetch(`http://localhost:5000/api/v1/updatejob/${params.id}`)
            },
            {
                path: "/mybids",
                element: <PrivateRoutes><MyBids></MyBids></PrivateRoutes>
            },
            {
                path: "/bidrequest",
                element:<PrivateRoutes> <BidRequest></BidRequest></PrivateRoutes>
            },
            {
                path: "/details/:id",
                element: <Details></Details>
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
    }
])

export default Routes;