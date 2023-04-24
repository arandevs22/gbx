import { createBrowserRouter } from "react-router-dom";
import LayOutPublic from "../layout/LayOutPublic";
import Home from "../pages/Home";
import Games, { loaderGamesGenre } from "../pages/Games";

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
                path: '/games/:genre',
                element: <Games />,
                loader: loaderGamesGenre
            }
        ]
    }
])
