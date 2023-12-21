import { createBrowserRouter } from "react-router-dom";
import Root from "../layOut/Root";
import Error from "../pages/Error";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
export default router;
