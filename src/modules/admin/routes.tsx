import type { RouteObject } from "react-router";
import AdminTemplate from "./template/AdminTemplate";
import DashboardAdminPage from "./pages/DashboardAdminPage";
import ProductsAdminPage from "./pages/ProductsAdminPage";
import ProductFormAdminPage from "./pages/ProductFormAdminPage";
import PortfolioAdminPage from "./pages/PortfolioAdminPage";
import PortfolioFormAdminPage from "./pages/PortfolioFormAdminPage";
import ServicesAdminPage from "./pages/ServicesAdminPage";
import ServiceFormAdminPage from "./pages/ServiceFormAdminPage";
import SocialLinksAdminPage from "./pages/SocialLinksAdminPage";
import SocialLinkFormAdminPage from "./pages/SocialLinkFormAdminPage";

export const adminRoutes: RouteObject = {
  path: "/admin",
  element: <AdminTemplate />,
  children: [
    { index: true, element: <DashboardAdminPage /> },
    {
      path: "produtos",
      element: <ProductsAdminPage />,
      children: [{ path: ":id", element: <ProductFormAdminPage /> }],
    },
    {
      path: "portfolio",
      element: <PortfolioAdminPage />,
      children: [{ path: ":id", element: <PortfolioFormAdminPage /> }],
    },
    {
      path: "servicos",
      element: <ServicesAdminPage />,
      children: [{ path: ":id", element: <ServiceFormAdminPage /> }],
    },
    {
      path: "social",
      element: <SocialLinksAdminPage />,
      children: [{ path: ":id", element: <SocialLinkFormAdminPage /> }],
    },
  ],
};
