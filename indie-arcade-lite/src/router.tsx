import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Play from "./pages/Play";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "play", element: <Play /> },
      { path: "leaderboard", element: <Leaderboard /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}