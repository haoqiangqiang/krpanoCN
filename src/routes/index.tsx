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

const Xml = lazy(() => import('../pages/Documentation/XML'))
const Embedding = lazy(() => import('../pages/Documentation/Embedding'))

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

let documentationContainers: CustomRouter.Route[] = [
    {
        key: 'documentation_root',
        path: '/documentation',
        element: <Navigate to="/documentation/xml" />,
    },
    {
        key: 'xml',
        path: '/documentation/xml',
        element: WithLoadingComponent(<Xml />)
    },
    {
        key: 'embedding',
        path: '/documentation/embedding',
        element: WithLoadingComponent(<Embedding />)
    }
]

const Routers = () => (
    <BrowserRouter>
        <Feature></Feature>
        <Routes>
            {Containers.map(container => (
                <Route {...container} />
            ))}
            <Route key='documentation' path='/documentation' element={WithLoadingComponent(<Documentation />)}>
                {documentationContainers.map(container => (
                    <Route {...container} />
                ))}
            </Route>
        </Routes>
    </BrowserRouter>
)

export default Routers;
