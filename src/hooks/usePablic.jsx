import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://task-management-platform-server-rust.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
