import { createAsyncThunk } from "@reduxjs/toolkit";
import * as db from "./Database";

export const toggleEnrollment = createAsyncThunk(
  "enrollment/toggleEnrollment",
  async ({ userId, courseId, isEnrolled }: { userId: string; courseId: string; isEnrolled: boolean }) => {
    // Toggle enrollment based on current enrollment status
    if (isEnrolled) {
      await db.unenrollUser(userId, courseId); // Unenroll if currently enrolled
    } else {
      await db.enrollUser(userId, courseId); // Enroll if not currently enrolled
    }
    return { userId, courseId, isEnrolled: !isEnrolled };
  }
);

export const fetchEnrollments = createAsyncThunk(
  "enrollment/fetchEnrollments",
  async (userId: string) => {
    const enrollments = await db.getUserEnrollments(userId);
    return enrollments;
  }
);
