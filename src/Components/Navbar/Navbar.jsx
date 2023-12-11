import React from 'react';
import logo from '../../assets/Photos/Logo/logo2.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='sticky top-0 z-10'>
            <div className="navbar bg-blue-500 text-white ">
                <div className="flex-1">
                    <img src={logo} alt="" className='h-10 w-14'/>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">MediCare</Link>
                </div>
                <div className='flex me-5 gap-5'>
                    <Link to='/find-a-doctor'>Find a doctors</Link>
                    <Link to='/departments'>Departments</Link>
                    <Link to='/notice'>Notice</Link>
                    <Link to='/login'>Login</Link>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;