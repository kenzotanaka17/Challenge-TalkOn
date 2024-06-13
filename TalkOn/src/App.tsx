import { createBrowserRouter } from "react-router-dom"
import { Login } from "./pages/login"
import { DocsManagement } from "./pages/docs-management";
import { ErrorPage } from "./pages/error";
import { Menu } from "./pages/menu";
import { Permissions } from "./pages/permissions";

const router = createBrowserRouter([
  {
    path:'/',
    element: <Login />
  },
  {
    path: '/menu',
    element: <Menu />
  },
  {
    path: '/docs-management',
    element: <DocsManagement />
  },
  {
    path: '/permissions',
    element: <Permissions />
  },
  {
    path: '/requests',
    element: <DocsManagement />
  },
  {
    path: '/training',
    element: <DocsManagement />
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]) 

export { router };