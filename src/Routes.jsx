import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from './Components/PageLayout/Pagelayout';

import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Country } from './Pages/Country';
import { ErrorPage } from './Pages/Error';
import { CountryDetails } from './Pages/CountryDetails';


const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: < About />
            },
            {
                path: "/country",
                element: <Country />
            },
            {
                path: "/country/:name",
                element: <CountryDetails/>
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]

    },

])

export default router