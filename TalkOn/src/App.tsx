import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/login";
import { DocsManagement } from "./pages/docs-management";
import { ErrorPage } from "./pages/error";
import { Menu } from "./pages/menu";
import { Permissions } from "./pages/permissions";
import { PendingRequests } from "./pages/pending-requests";
import { Training } from "./pages/training";
import { Chat } from "./pages/chat";
import Private from './routes/private';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/menu',
    element: (
      <Private>
       <Menu />
      </Private>
    ),
  },
  {
    path: '/docs-management',
    element: (
      <Private>
       <DocsManagement />
      </Private>
    ),
  },
  {
    path: '/permissions',
    element: (
      <Private>
       <Permissions />
      </Private>
    ),
  },
  {
    path: '/requests',
    element: (
      <Private>
       <PendingRequests />
      </Private>
    ),
  },
  {
    path: '/training',
    element: (
      <Private>
       <Training />
      </Private>
    ),
  },
  {
    path: '/chat',
    element:  <Chat />
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);

export const App = () => (
  <RouterProvider router={router} />
);
