import { createBrowserRouter } from "react-router-dom"
import { Login } from "./pages/login"
import { DocsManagement } from "./pages/docs-management";
import { ErrorPage } from "./pages/error";
import { Menu } from "./pages/menu";
import { Permissions } from "./pages/permissions";
import { PendingRequests } from "./pages/pending-requests";
import { Training } from "./pages/training";
import { Chat } from "./pages/chat";

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
    element: <PendingRequests />
  },
  {
    path: '/training',
    element: <Training />
  },
  {
    path: '/trainingAdm',
    element: <Chat />
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]) 

export { router };