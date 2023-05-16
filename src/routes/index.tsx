import React, { lazy } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import Feature from '../components/Feature';
import { CustomRouter } from '../interfaces/router.interface';

const Home = lazy(() => import('../pages/Home'))
const News = lazy(() => import('../pages/News'))
const Examples = lazy(() => import('../pages/Examples'))
const Documentation = lazy(() => import('../pages/Documentation'))
const Download = lazy(() => import('../pages/Download'))
const Buy = lazy(() => import('../pages/Buy'))
const Forum = lazy(() => import('../pages/Forum'))
const Contact = lazy(() => import('../pages/Contact'))

const WithLoadingComponent = (component: JSX.Element) => {
    return <React.Suspense fallback={<div>Loading</div>}>
        {component}
    </React.Suspense>
}

const Containers: CustomRouter.Route[] = [
    {
        key: 'root',
        path: '/',
        element: <Navigate to="/home" />,
    },
    {
        key: 'home',
        path: '/home',
        element: WithLoadingComponent(<Home />),
    },
    {
        key: 'news',
        path: '/news',
        element: WithLoadingComponent(<News />),
    },
    {
        key: 'examples',
        path: '/examples',
        element: WithLoadingComponent(<Examples />),
    },
    {
        key: 'documentation',
        path: '/documentation',
        element: WithLoadingComponent(<Documentation />),
    },
    {
        key: 'download',
        path: '/download',
        element: WithLoadingComponent(<Download />),
    },
    {
        key: 'buy',
        path: '/buy',
        element: WithLoadingComponent(<Buy />),
    },
    {
        key: 'forum',
        path: '/forum',
        element: WithLoadingComponent(<Forum />),
    },
    {
        key: 'contact',
        path: '/contact',
        element: WithLoadingComponent(<Contact />),
    }
]

const Routers = () => (
    <BrowserRouter>
        <Feature></Feature>
        <Routes>
            {Containers.map(container => (
                <Route {...container} />
            ))}
        </Routes>
    </BrowserRouter>
)

export default Routers;
