import React from "react";
import AdminNav from "../AdminNav/AdminNav";
import "./adminhome.css";
import ManagePatient from "../ManagePatient/ManagePatient";

const AdminHome = () => {
  return (
    <div>
      <AdminNav />
      <div className="managepatient">
        <ManagePatient/>
      </div>
    </div>
  );
};

export default AdminHome;
