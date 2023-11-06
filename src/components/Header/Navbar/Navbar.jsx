import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOuT } = useContext(AuthContext)

    console.log(user);
    const handleLogOut = () => {
        logOuT()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }


    const navLinks = <>
        <li> <Link to="/">Home</Link></li>
        <li><Link to="addjobs">Add job</Link></li>
        <li><Link to="mypostedjobs">My posted jobs</Link></li>
        <li><Link to="mybids">My Bids</Link></li>
        <li><Link to="myreques">Bid Requests</Link></li>
        <li><Link to="/register">register</Link></li>


    </>
    return (
        <div>
            <div className="navbar bg-sky-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <span>{user.email}
                           
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.image}  />
                                </div>
                            </label>
                        </span> : ''
                    }
                    {
                        user ? <Link to="/login"><button onClick={handleLogOut} className="btn btn-sm btn-primary">LogOut</button></Link>
                            : <Link to="/login"><button className="btn btn-sm btn-primary">login</button></Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;