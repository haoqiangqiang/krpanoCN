import React, { useEffect, useRef, Suspense, lazy, ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, redirect, useLocation, Navigate } from 'react-router-dom'
import FeatExample from '../components/featExample';


const News = lazy(() => import('../pages/News'))
const Examples = lazy(() => import('../pages/Examples'))
const Documentation = lazy(() => import('../pages/Documentation'))
const Download = lazy(() => import('../pages/Download'))
const Buy = lazy(() => import('../pages/Buy'))
const Forum = lazy(() => import('../pages/Forum'))
const Contact = lazy(() => import('../pages/Contact'))

const Containers: CustomRouter.Route[] = [
    {
        key: 'root',
        path: '/',
        element: <Navigate to="/news/"/>,
    },
    {
        key: 'news',
        path: '/news/',
        element: <News />,
    },
    {
        key: 'examples',
        path: '/examples/',
        element: <Examples />,
    },
    {
        key: 'documentation',
        path: '/documentation/',
        element: <Documentation />,
    },
    {
        key: 'download',
        path: '/download/',
        element: <Download />,
    },
    {
        key: 'buy',
        path: '/buy/',
        element: <Buy />,
    },
    {
        key: 'forum',
        path: '/forum/',
        element: <Forum />,
    },
    {
        key: 'contact',
        path: '/contact/',
        element: <Contact />,
    }
]

export default () => {
    return (
        <Router>
            <FeatExample></FeatExample>
            <Routes>
                {
                    Containers.map(container => (
                        <Route
                            {...container}
                        />
                    ))
                }
            </Routes>
        </Router>
    )
}
