/* eslint-disable react/no-unescaped-entities */
import img1 from "../assets/dev.jpg";
import img2 from "../assets/copt.png";
import img3 from "../assets/coprt.jpg";
import img4 from "../assets/bnk.jpeg";
import img5 from "../assets/frlc.png";
import img6 from "../assets/st.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const ToDoCategory = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div className="my-6 text-center text-4xl font-bold bg-slate-300 p-12">
        <h2>Who Benefits from Task Tackler's Handbook?</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 shadow-lg my-6">
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="card glass h-screen"
        >
          <figure>
            <img
              src={img1}
              alt="developer!"
              className="w-full h-96 shadow-lg"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">Developer</h2>
            <p>
              Streamline your coding projects and enhance productivity with
              practical task management strategies tailored to the dynamic
              demands of software development.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-top"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="card glass  h-screen"
        >
          <figure>
            <img
              src={img2}
              alt="Entrepreneurs!"
              className="w-full h-96 shadow-lg"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">Entrepreneurs</h2>
            <p>
              Juggle the diverse responsibilities of entrepreneurship
              effortlessly. Task Tackler's Handbook equips you with tools to
              efficiently manage your business ventures and boost overall
              productivity.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="card glass  h-screen"
        >
          <figure>
            <img
              src={img3}
              alt="Corporate!"
              className="w-full h-96 shadow-lg"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">Corporate</h2>
            <p>
              Navigate the corporate landscape with ease. From meeting deadlines
              to managing projects, this handbook provides valuable insights for
              professionals striving to excel in their careers.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="card glass  h-screen"
        >
          <figure>
            <img
              src={img6}
              alt="Students !"
              className="w-full h-96 shadow-lg"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">Students </h2>
            <p>
              Manage academic assignments, research projects, and deadlines
              efficiently. Task Tackler's Handbook provides students and
              academics with strategies to excel in their studies and research
              endeavors.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-bottom"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="card glass  h-screen"
        >
          <figure>
            <img src={img4} alt="Bankers !" className="w-full h-96 shadow-lg" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">Bankers </h2>
            <p>
              Effectively handle the intricacies of financial tasks and
              deadlines. This guide offers tailored approaches for bankers and
              finance professionals seeking order in their daily workflows.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="card glass  h-screen"
        >
          <figure>
            <img
              src={img5}
              alt="Freelancers!"
              className="w-full h-96 shadow-lg"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">Freelancers</h2>
            <p>
              Take control of your freelance projects and optimize your time.
              This handbook offers freelancers practical tips to enhance
              organization and productivity in their independent work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoCategory;
