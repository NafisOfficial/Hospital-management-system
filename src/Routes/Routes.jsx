import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Notice from "../Pages/Notice/Notice";


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
                    path:'/login',
                    element:<Login></Login>
                },
                {
                    path:'/notice',
                    element:<Notice></Notice>
                }
            ]
        }
    ]
)