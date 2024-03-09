import React from 'react';
import './adminNav.css'
import { Link } from 'react-router-dom';

const AdminNav = () => {
    return (
        <div className='aside'>
            <Link className='active' to='/manage-patients'>Manage Patients</Link>
            <Link to='/manage-doctors'>Manage Doctors</Link>
            <Link to='/add-doctors'>Add Doctors</Link>
            <Link to='/'>Goto Home</Link>
        </div>
    );
};

export default AdminNav;