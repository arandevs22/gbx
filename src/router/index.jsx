import { createBrowserRouter } from "react-router-dom";
import LayOutPublic from "../layout/LayOutPublic";
import Home from "../pages/Home";
import Games, { loaderMoviesGenre } from "../pages/Games";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayOutPublic />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/movies/:genre',
                element: <Games />,
                loader: loaderMoviesGenre
            }
        ]
    }
])
