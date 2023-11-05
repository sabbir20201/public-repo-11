import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../mainLayout/mainLayout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children: [
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