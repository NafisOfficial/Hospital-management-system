import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Notice from "../Pages/Notice/Notice";
import Register from "../Pages/Register/Register";
import Appointment from "../Pages/Appointment/Appointment";
import Emmergency from "../Pages/Emmergency/Emmergency";



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
                    element:<Appointment></Appointment>
                },
                {
                    path:'emmergency',
                    element:<Emmergency></Emmergency>
                }
            ]
        }
    ]
)