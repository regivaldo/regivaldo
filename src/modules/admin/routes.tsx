import type { RouteObject } from "react-router";
import AdminTemplate from "./template/AdminTemplate";
import DashboardAdminPage from "./pages/DashboardAdminPage";

export const adminRoutes: RouteObject = {
    path: '/admin',
    element: <AdminTemplate />,
    children: [
        {
            index: true,
            element: <DashboardAdminPage />
        }
    ]
}