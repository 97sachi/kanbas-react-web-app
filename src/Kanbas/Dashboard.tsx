import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>


        <div className="wd-dashboard-course">
          <img src="/images/java.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1200/Home">
              CS1200 Java
            </Link>
            <p className="wd-dashboard-course-title">
              Learn JAVA and Object Oriented Programming
            </p>
            <Link to="/Kanbas/Courses/1200/Home"> Go </Link>
          </div>
        </div>


        <div className="wd-dashboard-course">
          <img src="/images/python.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1201/Home">
              CS1201 Python
            </Link>
            <p className="wd-dashboard-course-title">
              Learn Python and its Libraries 
            </p>
            <Link to="/Kanbas/Courses/1201/Home"> Go </Link>
          </div>
        </div>


        <div className="wd-dashboard-course">
          <img src="/images/ai.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1202/Home">
              CS1202 Artificial Intelligence
            </Link>
            <p className="wd-dashboard-course-title">
              Learn AI and some concepts of ML
            </p>
            <Link to="/Kanbas/Courses/1202/Home"> Go </Link>
          </div>
        </div>
        

        <div className="wd-dashboard-course">
          <img src="/images/ml.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1203/Home">
              CS1203 Machine Learning
            </Link>
            <p className="wd-dashboard-course-title">
              Learn Machine Learning algorithms 
            </p>
            <Link to="/Kanbas/Courses/1203/Home"> Go </Link>
          </div>
        </div>


        <div className="wd-dashboard-course">
          <img src="/images/dbms.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1204/Home">
              CS1204 Database Management System
            </Link>
            <p className="wd-dashboard-course-title">
              Learn DBMS, (NoSQL and other databases)
            </p>
            <Link to="/Kanbas/Courses/1204/Home"> Go </Link>
          </div>
        </div>


        <div className="wd-dashboard-course">
          <img src="/images/cc.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1205/Home">
              CS1205 Cloud Computing
            </Link>
            <p className="wd-dashboard-course-title">
              Learn Cloud Computing and AWS Practically
            </p>
            <Link to="/Kanbas/Courses/1205/Home"> Go </Link>
          </div>
        </div>


        <div className="wd-dashboard-course">
          <img src="/images/c.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1206/Home">
              CS1206 C language
            </Link>
            <p className="wd-dashboard-course-title">
              Learn C language and data structures
            </p>
            <Link to="/Kanbas/Courses/1206/Home"> Go </Link>
          </div>
        </div>


      </div>
    </div>
  );
}
