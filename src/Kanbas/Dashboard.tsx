import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
      <div className="row row-cols-1 row-cols-md-5 g-4">
        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
        <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.jpg" width="100%" height={160} />
                <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
              CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title card-text">
              Fall 2024 Semester Full Term Section: 1234_1
            </p>
            <button className="btn btn-primary"> Go </button>
            </div>
            </Link>
            </div>
          </div>


          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
        <div className="card rounded-3 overflow-hidden">
        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1200/Home">
          <img src="/images/java.jpg" width="100%" height={160} />
          <div className="card-body">
          <h5 className="wd-dashboard-course-title card-title">
              CS1200 Java
              </h5>
            <p className="wd-dashboard-course-title card-text">
            Summer 2024 Semester Full Term Section: 1200_1
            </p>
            <button className="btn btn-primary"> Go </button>
            </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
        <div className="card rounded-3 overflow-hidden">
        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1201/Home">
              <img src="/images/python.jpg" width="100%" height={160} />
              <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
              CS1201 Python
              </h5>
            
            <p className="wd-dashboard-course-title card-text">
            Fall 2024 Semester Full Term Section: 1201_2
            </p>
            <button className="btn btn-primary"> Go </button>
            </div>
            </Link>
        </div>
        </div>


        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
        <div className="card rounded-3 overflow-hidden">
        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1202/Home">
                <img src="/images/ai.jpg" width="100%" height={160} />
          <div className="card-body">
          <h5 className="wd-dashboard-course-title card-title">
              CS1202 AI
              </h5>
            <p className="wd-dashboard-course-title">
            Spring 2023 Semester Full Term Section: 1202_3
            </p>
            <button className="btn btn-primary"> Go </button>
            </div> </Link>
          </div>
        </div>


        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
        <div className="card rounded-3 overflow-hidden">
        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1203/Home">
                <img src="/images/ml.jpg" width="100%" height={160} />
          <div className="card-body">
          <h5 className="wd-dashboard-course-title card-title">
              CS1203 Machine Learning
              </h5>
            <p className="wd-dashboard-course-title">
            Summer 2024 Semester First Half Term Section: 1203_1
            </p>
            <button className="btn btn-primary"> Go </button>
            </div></Link>
          </div>
        </div>


        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
        <div className="card rounded-3 overflow-hidden">
        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1204/Home">
                 <img src="/images/dbms.jpg" width="100%" height={160} />
                 <div className="card-body">
                 <h5 className="wd-dashboard-course-title card-title">
              CS1204 DBMS </h5>
            <p className="wd-dashboard-course-title">
            Spring 2024 Semester Full Term Section: 1204_1
            </p>
            <button className="btn btn-primary"> Go </button>
            </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
        <div className="card rounded-3 overflow-hidden">
        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1205/Home">
                 <img src="/images/cc.jpg" width="100%" height={160} />
                 <div className="card-body">
                 <h5 className="wd-dashboard-course-title card-title">
                 CS1205 Cloud Computing
                 </h5>
            <p className="wd-dashboard-course-title">
            Spring 2023 Semester Full Term Section: 1205_1
            </p>
            <button className="btn btn-primary"> Go </button>
            </div>
           </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
        <div className="card rounded-3 overflow-hidden">
        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1206/Home">
                <img src="/images/c.jpg" width="100%" height={160} />
                <div className="card-body">
                 <h5 className="wd-dashboard-course-title card-title">
              CS1206 C language
              </h5>
            <p className="wd-dashboard-course-title">
            Fall 2023 Semester Full Term Section: 1206_1
            </p>
            <button className="btn btn-primary"> Go </button>
            </div>
           </Link>
          </div>
        </div>

        </div>

      </div>
    </div>
  );
}
