import { createBrowserRouter } from "react-router-dom"
import { Login } from "./pages/login"
import { DocsManagement } from "./pages/docs-management";
import { ErrorPage } from "./pages/error";

const router = createBrowserRouter([
  {
    path:'/',
    element: <Login />
  },
  {
    path: '/menu',
    element: <DocsManagement />
  },
  {
    path: '/docs-management',
    element: <DocsManagement />
  },
  {
    path: '/permissions',
    element: <DocsManagement />
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