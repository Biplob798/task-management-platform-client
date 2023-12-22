// SocialLogin.jsx
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/usePablic";

const SocialLogin = () => {
  const { googleLogin } = useAuth() || {};
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        toast.success("User logged in successfully");

        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate("/");
        });

        navigate("/dashboard");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div>
        <div
          onClick={handleGoogleSignIn}
          className="flex justify-between items-center mb-2 border p-2 cursor-pointer"
        >
          <FaGoogle />
          <h2>Google</h2>
        </div>
        <div className="flex justify-between items-center border p-2 cursor-pointer">
          <FaGithub />
          <h2>Github</h2>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
