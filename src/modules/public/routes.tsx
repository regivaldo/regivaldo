import type { RouteObject } from "react-router";
import PublicTemplate from "./template/PublicTemplate";
import HomePage from "./pages/HomePage";

export const publicRoutes: RouteObject = {
    path: '/',
    element: <PublicTemplate />,
    children: [
        {
            index: true,
            element: <HomePage />
        }
    ]
}