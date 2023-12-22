import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <div className="bg-gradient-to-b from-blue-700 to-blue-300">
      {noHeaderFooter || <NavBar></NavBar>}
      <Outlet />
      {noHeaderFooter || <Footer></Footer>}
      <div>
        <Toaster />
      </div>
    </div>
  );
};

export default Root;
