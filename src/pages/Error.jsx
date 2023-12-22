import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <Link to="/">
        <p className="p-4 text-black bg-slate-100">Back to home</p>
        <hr className="mb-4" />
      </Link>
      <div className=" max-w-4xl mx-auto flex justify-center items-center">
        <img
          src="https://i.ibb.co/gJHvHpL/best-404-pages-preview.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Error;
