import { createBrowserRouter } from "react-router";
import RootLayOut from "../layout/RootLayOut";
import Home from "../pages/Home";
import Register from "../pages/Register";

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

        }
    ]
}])