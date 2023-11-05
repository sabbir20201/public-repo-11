import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../mainLayout/mainLayout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';

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
                element: <Login></Login>                                                
            },
        ]
    }
])

export default Routes;