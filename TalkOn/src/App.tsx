import { createBrowserRouter } from "react-router-dom"
import { Login } from "./pages/login"
import { DocsManagement } from "./pages/docs-management";

const router = createBrowserRouter([
  {
    path:'/',
    element: <Login />
  },
  {
    path: '/docs-management',
    element: <DocsManagement />
  }
]) 

export { router };