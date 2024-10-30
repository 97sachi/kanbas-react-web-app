import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database"; 

const initialState = {
  assignments: assignments, // Initialize with assignments from the database
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    // Add a new assignment
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        _id: new Date().getTime().toString(), // Unique ID based on timestamp
        title: assignment.title,
        course: assignment.course,
        not_available_until: assignment.not_available_until,
        due: assignment.due,
        points: assignment.points,
        description: assignment.description,
        assignment_group: assignment.assignment_group,
        display_grade_as: assignment.display_grade_as,
        submission_type: assignment.submission_type,
        online_entry_option: assignment.online_entry_option,
      };
      state.assignments = [...state.assignments, newAssignment]; // Add to assignments list
    },

    // Delete an assignment by ID
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter((a) => a._id !== assignmentId);
    },

    // Update an existing assignment by matching its ID
    updateAssignment: (state, { payload: updatedAssignment }) => {
      const index = state.assignments.findIndex(
        (a) => a._id === updatedAssignment._id
      );
      if (index !== -1) {
        state.assignments[index] = updatedAssignment; // Update the assignment
      }
    },

    // Mark an assignment for editing
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === assignmentId ? { ...a, editing: true } : a
      );
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
