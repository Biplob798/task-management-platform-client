/* eslint-disable react/no-unescaped-entities */
import img1 from "../assets/dev.jpg";
import img2 from "../assets/copt.png";
import img3 from "../assets/coprt.jpg";
import img4 from "../assets/bnk.jpeg";
import img5 from "../assets/frlc.png";
import img6 from "../assets/st.jpg";
const ToDoCategory = () => {
  return (
    <div>
      <div className="my-6 text-center text-4xl font-bold bg-slate-300 p-12">
        <h2>Who Benefits from Task Tackler's Handbook?</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 shadow-lg my-6">
        <div className="card glass h-screen">
          <figure>
            <img src={img1} alt="developer!" />
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
        <div className="card glass  h-screen">
          <figure>
            <img src={img2} alt="Entrepreneurs!" />
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
        <div className="card glass  h-screen">
          <figure>
            <img src={img3} alt="Corporate!" />
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
        <div className="card glass  h-screen">
          <figure>
            <img src={img6} alt="Students !" />
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
        <div className="card glass  h-screen">
          <figure>
            <img src={img4} alt="Bankers !" />
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
        <div className="card glass  h-screen">
          <figure>
            <img src={img5} alt="Freelancers!" />
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
