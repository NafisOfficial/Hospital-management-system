import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Notice from "../Pages/Notice/Notice";
import Register from "../Pages/Register/Register";
import Appointment from "../Pages/Appointment/Appointment";
import PrivateRoute from "./PrivateRoute";
import AdminHome from "../Pages/Admin/AdminHome/AdminHome";
import MyAppointment from "../Pages/MyAppointment/MyAppointment";
import Profile from "../Pages/Profile/Profile";
import AllPatients from "../Pages/AllPatients/AllPatients";



export const router = createBrowserRouter(

    [
        {
            path:'/',
            element:<Main/>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'login',
                    element:<Login></Login>
                },
                {
                    path:'register',
                    element:<Register></Register>
                },
                {
                    path:'notice',
                    element:<Notice></Notice>
                },
                {
                    path:'appointment',
                    element:<PrivateRoute><Appointment></Appointment></PrivateRoute>
                },
                {
                    path:'profile',
                    element:<Profile/>
                },
                {
                    path:'my-appointment',
                    element:<MyAppointment/>
                },
                {
                    path:'patents/all',
                    element:<AllPatients/>
                }
            ]
        },
        {
            path:'/users/admin',
            element: <AdminHome/>,
            children:[
                {
                    
                }
            ]
        }
    ]
)