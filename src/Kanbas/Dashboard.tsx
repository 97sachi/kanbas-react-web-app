import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { enroll, unenroll } from "./redux/enrollmentsReducer"; // Import enrollment actions

interface Course {
  _id?: string;
  name: string;
  description: string;
  image: string;
}

export default function Dashboard({
  courses: initialCourses, // Initial courses prop
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: Course[];
  addNewCourse: (newCourse: Course) => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: (updatedCourse: Course) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector((state: any) => state.enrollment.enrollments);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [courses, setCourses] = useState<Course[]>(initialCourses); // Local state for courses
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [currentCourse, setCurrentCourse] = useState<Course>({ name: "", description: "", image: "" });

  useEffect(() => {
    setCourses(initialCourses); // Sync initial courses prop with local state
  }, [initialCourses]);

  // Load enrollment state from localStorage on initial render
  useEffect(() => {
    const savedEnrollments = localStorage.getItem("enrollments");
    if (savedEnrollments) {
      JSON.parse(savedEnrollments).forEach((courseId: string) => dispatch(enroll(courseId)));
    }
  }, [dispatch]);

  // Persist enrollment state to localStorage on enrollment changes
  useEffect(() => {
    const enrolledCourseIds = Object.keys(enrollments).filter((courseId) => enrollments[courseId]);
    localStorage.setItem("enrollments", JSON.stringify(enrolledCourseIds));
  }, [enrollments]);

  // Toggle enrollment for a course
  const handleEnrollToggle = (courseId: string) => {
    if (enrollments[courseId]) {
      dispatch(unenroll(courseId));
    } else {
      dispatch(enroll(courseId));
    }
  };

  // Navigate to course page only if the user is enrolled
  const handleGoClick = (courseId: string) => {
    if (enrollments[courseId]) {
      navigate(`/Kanbas/Courses/${courseId}/Home`);
    }
  };

  // Handle adding a new course
  const handleAddCourse = () => {
    if (currentCourse.name && currentCourse.description) {
      const newCourse: Course = {
        _id: `${Date.now()}`, // Unique ID for the course
        name: currentCourse.name,
        description: currentCourse.description,
        image: "images/reactjs.jpg", // Default image for new courses
      };
      addNewCourse(newCourse);
      setCourses([...courses, newCourse]); // Update the courses list locally
      setCurrentCourse({ name: "", description: "", image: "" }); // Reset input fields
    }
  };

  // Handle updating an existing course
  const handleUpdateCourse = () => {
    if (currentCourse.name && currentCourse.description && currentCourse._id) {
      updateCourse(currentCourse);
      setCourses(courses.map((course) => (course._id === currentCourse._id ? currentCourse : course)));
      setCurrentCourse({ name: "", description: "", image: "" }); // Reset input fields
    }
  };

  // Populate the input fields with the course details for editing
  const handleEditCourse = (course: Course) => {
    setCurrentCourse(course);
  };

  // Determine which courses to display based on user role and toggle state
  // Determine which courses to display based on user role and toggle state
// Determine which courses to display based on user role and toggle state
// Determine which courses to display based on user role and enrollment
// Determine which courses to display based on enrollment status
const displayedCourses = showAllCourses && currentUser?.role === "STUDENT"
  ? courses // Students can toggle to see all courses
  : courses.filter((course) => enrollments[course._id ?? ""]); // Show only enrolled courses by default

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {/* Faculty Controls */}
      {currentUser?.role === "FACULTY" && (
        <>
          <h5>New Course</h5>
          <button className="btn btn-primary float-end" onClick={handleAddCourse}>Add</button>
          <button className="btn btn-warning float-end me-2" onClick={handleUpdateCourse}>Update</button>
          <input
            value={currentCourse.name}
            className="form-control mb-2"
            onChange={(e) => setCurrentCourse({ ...currentCourse, name: e.target.value })}
            placeholder="Course Name"
          />
          <textarea
            value={currentCourse.description}
            className="form-control"
            onChange={(e) => setCurrentCourse({ ...currentCourse, description: e.target.value })}
            placeholder="Course Description"
          />
          <hr />
        </>
      )}

      {/* Student Enrollments Toggle */}
      {currentUser?.role === "STUDENT" && (
        <button
          className="btn btn-primary float-end mb-3"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          Enrollments
        </button>
      )}

      <h2 id="wd-dashboard-published">Published Courses ({displayedCourses.length})</h2>
      <hr />

      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-5 g-4">
        {displayedCourses.map((course) => (
          <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <img src={course.image} width="100%" height={160} alt="Course" />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                  {course.description}
                </p>

                {/* Enroll/Unenroll and Go buttons for students */}
                {currentUser?.role === "STUDENT" && (
                  <>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        handleEnrollToggle(course._id ?? "");
                      }}
                      className={`btn float-end ${enrollments[course._id ?? ""] ? "btn-danger" : "btn-success"}`}
                    >
                      {enrollments[course._id ?? ""] ? "Unenroll" : "Enroll"}
                    </button>
                  </>
                )}

                {/* Go button for any enrolled user */}
                {enrollments[course._id ?? ""] && (
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => handleGoClick(course._id ?? "")}
                  >
                    Go
                  </button>
                )}

                {/* Faculty-specific controls for managing courses */}
                {currentUser?.role === "FACULTY" && (
                  <>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id ?? "");
                      }}
                      className="btn btn-danger float-end"
                    >
                      Delete
                    </button>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        handleEditCourse(course); // Load course data into inputs for editing
                      }}
                      className="btn btn-warning me-2 float-end"
                    >
                      Edit
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
