import { createBrowserRouter } from "react-router";
import { publicRoutes } from "./modules/public/routes";
import { adminRoutes } from "./modules/admin/routes";

const router = createBrowserRouter([publicRoutes, adminRoutes]);

export default router;