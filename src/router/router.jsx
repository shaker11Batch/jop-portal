import { createBrowserRouter } from "react-router";
import RootLayOut from "../layout/RootLayOut";
import Home from "../pages/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";

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
    ]
}])