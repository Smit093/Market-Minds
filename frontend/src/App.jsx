import * as React from 'react';
import Books from './components/Pages/Book/Book';
import Videos from './components/Pages/Videos/Videos';
import Welcome from './components/Pages/Welcome/Welcome';
import Layout from './components/Pages/Layout/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Forms/Login';
import Signup from './components/Forms/Signup';
import LogOut from './components/Forms/LogOut';
import Courses from './components/Pages/Courses/Courses';
import Roadmap from './components/Pages/Roadmap/Roadmap';
import ReviewForm from './components/Forms/ReviewForm';
import MutualFunds from './components/Pages/Mutual Funds/MutualFunds';
import IPO from './components/Pages/IPO/IPO';
import Trading from './components/Pages/Trading/Trading';
import PaperTrading from './components/Pages/PaperTrading/PaperTrading';

const router = createBrowserRouter([
    {
        path: '',
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Welcome />
            }, {
                path: "/videos",
                element: <Videos />
            }, {
                path: "/books",
                element: <Books />
            }, {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <Signup />
            },{
                path: "/logout",
                element: <LogOut />
            },{
                path:'/courses',
                element:<Courses/>
            },{
                path:'/roadmap',
                element:<Roadmap/>
            },{
                path:'/reviews',
                element:<ReviewForm/>
            },{
                path:'/mutual-funds',
                element:<MutualFunds/>
            },{
                path:'/ipo',
                element:<IPO/>
            },{
                path:'/trading',
                element:<Trading/>
            },{
                path:'/paper-trading',
                element:<PaperTrading/>
            }
        ]
    }
])


function App() {
    return (
            <RouterProvider router={router} />
    );
}

export default App;
