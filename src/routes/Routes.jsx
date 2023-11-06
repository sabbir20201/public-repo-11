import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../mainLayout/mainLayout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import AddJobs from '../pages/AddJobs/AddJobs';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>                                                   
            },
            {
                path: "/addjobs",
                element:<AddJobs></AddJobs>                                                   
            },
            {
                path: "/",
                element: <Home></Home>                                                   
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