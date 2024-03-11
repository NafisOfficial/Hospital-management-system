import React from 'react';
import './adminNav.css'
import { Link } from 'react-router-dom';

const AdminNav = () => {
    return (
        <div className='aside'>
            <Link className='active' to='/users/admin'>Manage Patients</Link>
            <Link to='/users/admin/manage-doctors'>Manage Doctors</Link>
            <Link to='/users/admin/add-doctors'>Add Doctors</Link>
            <Link to='/'>Goto Home</Link>
        </div>
    );
};

export default AdminNav;