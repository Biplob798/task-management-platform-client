import { FaHome } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";
import { FcTodoList } from "react-icons/fc";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { GrLogout } from "react-icons/gr";

const Dashboard = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex">
      {/*dashboard sidebar  */}
      <div className="w-64 min-h-screen bg-gradient-to-b from-whit to-slate-700">
        <ul className="listing space-y-3 p-2">
          <li className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform">
            <NavLink to="/dashboard/myToDo">
              <LuListTodo />
              My TODO
            </NavLink>
          </li>
          <li className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform">
            <NavLink to="/dashboard/createToDo">
              <FcTodoList />
              Create TODO
            </NavLink>
          </li>
        </ul>
        <div className="divider"></div>
        <ul className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform">
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
        </ul>
        <div>
          <button className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform">
            <GrLogout className="w-5 h-5" />

            <span onClick={handleLogOut} className="mx-4 font-medium">
              Logout
            </span>
          </button>
        </div>
      </div>
      {/* dashboard  */}
      <div className="flex-1 p-8 bg-gradient-to-b from-blue-600 to-blue-300">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
