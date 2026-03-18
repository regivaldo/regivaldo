import { createBrowserRouter } from "react-router";
import { publicRoutes } from "./modules/public/routes";
import { adminRoutes } from "./modules/admin/routes";
import { authRoutes } from "./modules/auth/routes";

const router = createBrowserRouter([publicRoutes, adminRoutes, authRoutes]);

export default router;