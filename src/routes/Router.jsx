import { createBrowserRouter } from "react-router-dom";
import Root from "../layOut/Root";
import Error from "../pages/Error";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import Dashboard from "../layOut/Dashboard";
import Contact from "../pages/Contact";
import DashBoardHome from "../pages/dashBoard/DashBoardHome";
import MyToDo from "../pages/dashBoard/MyToDo";
import CreateToDo from "../pages/dashBoard/CreateToDo";

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
        path: "contact",
        element: <Contact />,
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
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        index: true,
        element: <DashBoardHome></DashBoardHome>,
      },
      {
        index: "myToDo",
        element: <MyToDo></MyToDo>,
      },
      {
        index: "createToDo",
        element: <CreateToDo></CreateToDo>,
      },
    ],
  },
]);
export default router;
