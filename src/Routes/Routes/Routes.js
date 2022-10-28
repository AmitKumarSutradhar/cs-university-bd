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
import SingleCourse from "../../Pages/SingleCourse/SingleCourse";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://cs-university-bd-server.vercel.app/courses')
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><CoursesCategory></CoursesCategory></PrivateRoute>,
                loader: ({ params }) => fetch(`https://cs-university-bd-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/courses/:_id',
                element: <PrivateRoute><SingleCourse></SingleCourse></PrivateRoute>,
                loader: ({ params }) => fetch(`https://cs-university-bd-server.vercel.app/courses/${params._id}`)
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