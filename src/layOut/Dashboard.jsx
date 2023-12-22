import { FaHome } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";
import { FcTodoList } from "react-icons/fc";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/*dashboard sidebar  */}
      <div className="w-64 min-h-screen bg-gradient-to-b from-whit to-slate-700">
        <ul className="listing space-y-3 p-2">
          <li>
            <NavLink to="/dashboard/myToDo">
              <LuListTodo />
             My TODO
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/createToDo">
              <FcTodoList />
              Create TODO
            </NavLink>
          </li>
        </ul>
        <div className="divider"></div>
        <ul className="listing  space-y-3 p-2">
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard  */}
      <div className="flex-1 p-8 bg-gradient-to-b from-blue-600 to-blue-300">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
