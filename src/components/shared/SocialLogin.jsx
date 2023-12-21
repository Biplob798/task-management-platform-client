import { FaGoogle } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import useAxiosPublic from "../../hooks/usePablic";
import useAuth from "../../hooks/useAuth";


const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      console.log(result);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <div>
      <div>
        <div
          onClick={handleGoogleSignIn}
          className="flex justify-between items-center mb-2 border p-2 hover:cursor-pointer"
        >
          <FaGoogle />
          <h2>Google</h2>
        </div>
        <div className="flex justify-between items-center  border p-2 hover:cursor-pointer ">
          <FaGithub></FaGithub>
          <h2>Github</h2>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
