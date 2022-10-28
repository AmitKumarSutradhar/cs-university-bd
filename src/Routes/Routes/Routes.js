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
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/category/:id',
                element: <CoursesCategory></CoursesCategory>,
                // loader: ({ params }) => fetch(`https://cs-university-bd-server.vercel.app/courses`)
                loader: ({ params }) => fetch(`http://localhost:5000/courses-categories/${params.id}`)
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
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])