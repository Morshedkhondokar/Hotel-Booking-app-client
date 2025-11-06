import { createBrowserRouter } from "react-router";
import App from '../App'
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/error/ErrorPage";
import Rooms from "../pages/Rooms/Rooms";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";


const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                index:true,
                element:<Home/>              
            },
            {
                path:'/rooms',
                element:<Rooms/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
        ]
    }
])

export default router