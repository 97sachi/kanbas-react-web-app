import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { fetchAllCourses } from "./Courses/client"; 
import { useSelector, useDispatch } from "react-redux";
import { toggleEnrollment, fetchEnrollments } from "./enrollmentActions";
import { getEnrolledCourses } from "./enrollmentclient"; 
export default function Dashboard(
  { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }:
  { courses: any[]; course: any; setCourse: (course: any) => void; addNewCourse: () => void; deleteCourse: (course: any) => void; updateCourse: () => void; })
{
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);
  const dispatch = useDispatch();

 

 

  useEffect(() => {
    const loadEnrolledCourses = async () => {
      try {
        const fetchedEnrolledCourses = await getEnrolledCourses(currentUser._id); // Fetch enrolled courses
        setEnrolledCourses(fetchedEnrolledCourses); // Store enrolled courses
      } catch (error) {
        console.error("Error fetching enrolled courses:", error);
      }
    };
    loadEnrolledCourses();
  }, [currentUser._id]);
  
 
  

  const handleEnrollmentToggle = async (courseId: string, isEnrolled: boolean) => {
    try {
      // Dispatch toggle action to update enrollment in the backend
      await dispatch(toggleEnrollment({ userId: currentUser._id, courseId, isEnrolled }) as any);
  
      // Fetch updated enrolled courses from the server
      const fetchedEnrolledCourses: any[] = await getEnrolledCourses(currentUser._id);
  
      // Sync enrolledCourses state with backend response
      setEnrolledCourses((prev) => {
        if (!isEnrolled) {
          // Add newly enrolled course if not already present in state
          const newlyEnrolledCourse = allCourses.find((course) => course._id === courseId);
          if (
            newlyEnrolledCourse &&
            !prev.some((course) => course._id === courseId)
          ) {
            return [...prev, newlyEnrolledCourse];
          }
          return prev;
        } else {
          // Remove unenrolled course locally for immediate UI update
          return prev.filter((course) => course._id !== courseId);
        }
      });
  
      // Update Redux state
      dispatch(fetchEnrollments(currentUser._id) as any);
    } catch (error) {
      console.error("Error toggling enrollment:", error);
    }
  };
  
  
  const handleDeleteCourse = async (courseId: string) => {
    try {
      await deleteCourse(courseId); // Call API to delete course
      setAllCourses((prev) => prev.filter(course => course._id !== courseId)); // Remove from allCourses
      setEnrolledCourses((prev) => prev.filter(course => course._id !== courseId)); // Remove from enrolledCourses
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  
  const handleShowAllCourses = async () => {
    if (!showAllCourses) {
      const fetchedCourses = await fetchAllCourses(); // Fetch all courses
      setAllCourses(fetchedCourses); // Store all courses
    }
    setShowAllCourses(!showAllCourses); // Toggle the view
  };

  const displayedCourses = showAllCourses ? allCourses : enrolledCourses;
  


  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

      {currentUser?.role === "FACULTY" && (
        <>
          <h5>New Course
            <button className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={addNewCourse}> Add </button>
            <button className="btn btn-warning float-end me-2"
                    onClick={updateCourse} id="wd-update-course-click">
              Update
            </button>
          </h5><br />
          <input value={course.name} className="form-control mb-2"
                 onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <textarea value={course.description} className="form-control"
                    onChange={(e) => setCourse({ ...course, description: e.target.value })} />
          <hr />
        </>
      )}

      {/* Enrollment Button for Students */}
      
      <button
        className="btn btn-info float-end"
        onClick={handleShowAllCourses}>
        {showAllCourses ? "My Enrollments" : "Enrollments"}
      </button>
      <h2>
        {showAllCourses ? "All Courses" : "My Enrollments"}
      </h2>
      <hr />

      <h2 id="wd-dashboard-published">Published Courses ({allCourses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
        {displayedCourses.map((course) => {
            const isEnrolled = enrollments.some(
              (enrollment: any) => enrollment.course === course._id
            );


            return (
              <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
                <div className="card rounded-3 overflow-hidden">
                  <img src={course.image} width="100%" height={160} alt="Course Thumbnail" />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name} </h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {course.description} </p>
                    
                    {/* Enroll and Unenroll buttons that do not navigate */}
                    {isEnrolled &&  (
                      <button className="btn btn-danger" onClick={() => handleEnrollmentToggle(course._id, true)}>
                        Unenroll
                      </button>
                    )}
                    {!isEnrolled && showAllCourses &&  (
                      <button className="btn btn-success" onClick={() => handleEnrollmentToggle(course._id, false)}>
                        Enroll
                      </button>
                    )}

                    {/* Only Go button wrapped in Link for navigation */}
                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>

                    {currentUser?.role === "FACULTY" && (
                      <>
                        <button id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2">Edit
                        </button>
                        
                        <button
  onClick={() => handleDeleteCourse(course._id)}
  className="btn btn-danger"
  id="wd-delete-course-click"
>
  Delete
</button>

                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}