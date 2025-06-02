import { createBrowserRouter } from "react-router";
import RootLayOut from "../layout/RootLayOut";
import Home from "../pages/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import JobDetails from "../pages/JobDetails";
import JobApply from "../pages/JobApply";
import PrivateRoutes from "./PrivateRoutes";
import MyApplications from "../pages/MyApplications";

export const router = createBrowserRouter([{
    path: '/',
    element: <RootLayOut />,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: '/register',
            Component: Register
        },
        {
            path: '/about',
            element : <p>this is about page</p>
        },
        {
            path: '/res',
            element : <p>this is about res</p>
        },
        {
            path: '/signIn',
            element : <SignIn/>
        },
        {
            path: '/myApplications',
            element : <PrivateRoutes><MyApplications/></PrivateRoutes>
        },
        {
            path: '/jobApply/:id',
            element :<PrivateRoutes> <JobApply/></PrivateRoutes>
        },
        {
            path: '/jobs/:id',
            loader: ({params}) =>fetch(`http://localhost:5000/jobs/${params.id}`),
            element : <JobDetails/>
        },
    ]
}])