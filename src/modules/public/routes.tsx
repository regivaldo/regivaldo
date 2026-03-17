import type { RouteObject } from "react-router";
import PublicTemplate from "./template/PublicTemplate";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import PortfolioPage from "./pages/PortfolioPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import ProductDetailPage from "./pages/ProductDetailPage";

export const publicRoutes: RouteObject = {
  path: "/",
  element: <PublicTemplate />,
  children: [
    { index: true, element: <HomePage /> },
    { path: "produtos", element: <ProductsPage /> },
    { path: "produtos/:slug", element: <ProductDetailPage /> },
    { path: "portfolio", element: <PortfolioPage /> },
    { path: "servicos", element: <ServicesPage /> },
    { path: "contato", element: <ContactPage /> },
  ],
};
