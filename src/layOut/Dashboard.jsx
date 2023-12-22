import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/*dashboard sidebar  */}
      <div className="w-64 min-h-screen bg-gradient-to-b from-black to-slate-700">
        <div className="divider"></div>
      </div>
      {/* dashboard  */}
      <div className="flex-1 p-8 bg-gradient-to-b from-blue-600 to-blue-300">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
