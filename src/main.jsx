import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App'
import About from './pages/AboutMePage'
import Contact from './pages/ContactMe'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Error from './pages/Error'


// Define all accessible routes as well is which component responds to which URL

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                path: '/About',
                element: <About />
            },
            {
                path: '/Contact',
                element: <Contact />
            },
            {
                path: '/Portfolio',
                element: <Portfolio />
            },
            {
                path: '/Resume',
                element: <Resume />
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);