import courses from "./courses.json";
import modules from "./modules.json";
import users from "./users.json";
import assignments from "./assignments.json";
import enrollmentsData from "./enrollments.json";

// Make enrollments mutable to allow real-time updates
const enrollments = [...enrollmentsData];

// Enroll a user in a course
export const enrollUser = async (userId: string, courseId: string) => {
  const newEnrollment = { _id: `${Date.now()}`, user: userId, course: courseId };
  enrollments.push(newEnrollment);
  return newEnrollment;
};

// Unenroll a user from a course
export const unenrollUser = async (userId: string, courseId: string) => {
  const index = enrollments.findIndex(
    (enrollment) => enrollment.user === userId && enrollment.course === courseId
  );
  if (index > -1) {
    enrollments.splice(index, 1);
  }
  return { user: userId, course: courseId };
};

// Get all enrollments for a specific user
export const getUserEnrollments = async (userId: string) => {
  return enrollments.filter((enrollment) => enrollment.user === userId);
};

// Export the modules, courses, etc., along with enrollments
export { courses, modules, users, assignments, enrollments };
