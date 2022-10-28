import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import CoursesCategory from "../../Pages/CoursesCategory/CoursesCategory";
import Error from "../../Pages/Error/Error";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import SignIn from "../../Pages/Join/LogIn/SignIn";
import Register from "../../Pages/Join/Register/Register";
import Profile from "../../Pages/Other/Profile/Profile";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader: () => fetch('https://cs-university-bd-server.vercel.app/courses')
                // loader: () => fetch('http://localhost:5000/courses-categories')
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                // loader: ({ params }) => fetch(`https://cs-university-bd-server.vercel.app/courses`)
                loader: () => fetch('https://cs-university-bd-server.vercel.app/courses')
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><CoursesCategory></CoursesCategory></PrivateRoute>,
                loader: ({ params }) => fetch(`https://dragon-news-server-seven.vercel.app/category/${params.id}`)
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <SignIn></SignIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])