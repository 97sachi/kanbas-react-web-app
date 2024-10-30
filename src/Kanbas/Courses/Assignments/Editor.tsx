// src/Kanbas/Courses/Assignments/Editor.tsx
import { useState, useEffect } from "react";
import { FaChevronDown, FaTimes, FaCalendarAlt } from "react-icons/fa";
import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { Assignment } from "./types"; // Assuming types file for type definitions

interface AppState {
  assignmentsReducer: { assignments: Assignment[] };
}

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid?: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Retrieve assignment if editing
  const existingAssignment = useSelector((state: AppState) =>
    state.assignmentsReducer.assignments.find((a) => a._id === aid)
  );

  // Initialize state with assignment details or empty fields for a new assignment
  const [assignment, setAssignment] = useState<Assignment>({
    _id: aid || "",
    title: existingAssignment?.title || "",
    description: existingAssignment?.description || "",
    points: existingAssignment?.points || 0,
    due: existingAssignment?.due || "",
    not_available_until: existingAssignment?.not_available_until || "",
    available_until: existingAssignment?.available_until || "",
    course: cid!,
    assignment_group: existingAssignment?.assignment_group || "ASSIGNMENTS",
    display_grade_as: existingAssignment?.display_grade_as || "PERCENTAGE",
    submission_type: existingAssignment?.submission_type || "Online",
    online_entry_option: existingAssignment?.online_entry_option || [],
  });

  const [selectedAssignTo, setSelectedAssignTo] = useState('Everyone');


  const handleSave = () => {
    // Check for essential fields with defaults
    const newAssignment = {
      ...assignment,
      _id: aid || new Date().getTime().toString(),
      title: assignment.title || "Untitled Assignment",
      description: assignment.description || "No description provided.",
      points: assignment.points || 0,
      due: assignment.due || "", // You might need a default date if required
      not_available_until: assignment.not_available_until || "",
      available_until: assignment.available_until || "",
      assignment_group: assignment.assignment_group || "ASSIGNMENTS",
      display_grade_as: assignment.display_grade_as || "PERCENTAGE",
      submission_type: assignment.submission_type || "Online",
      online_entry_option: assignment.online_entry_option || [],
    };
  
    if (aid) {
      // Editing existing assignment
      dispatch(updateAssignment({ ...assignment, _id: aid }));
    } else {
      // Adding new assignment
      dispatch(addAssignment({ ...assignment, _id: new Date().getTime().toString() }));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`); // Redirect to the assignments list
  };
  

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="row mb-2">
        <div className="col">
          <label htmlFor="wd-name" className="form-label">Assignment Name</label>
          <input
            id="wd-name"
            value={assignment.title}
            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
            className="form-control"
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-12">
          <label htmlFor="wd-description" className="form-label">Description</label>
          <textarea
            id="wd-description"
            className="form-control"
            value={assignment.description}
            onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
          />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-md-3 d-flex align-items-center justify-content-end">
          <label htmlFor="wd-points" className="form-label">Points</label>
        </div>
        <div className="col-md-9">
          <input
            id="wd-points"
            type="number"
            value={assignment.points}
            onChange={(e) => setAssignment({ ...assignment, points: Number(e.target.value) })}
            className="form-control"
          />
        </div>
      </div>

      {/* Additional Fields as Dropdowns and Inputs */}
      <div className="row mb-2">
        <div className="col-md-3 d-flex align-items-center justify-content-end">
          <label htmlFor="wd-group" className="form-label">Assignment Group</label>
        </div>
        <div className="col-md-9">
          <div className="input-group">
            <select
              id="wd-group"
              className="form-control"
              value={assignment.assignment_group}
              onChange={(e) => setAssignment({ ...assignment, assignment_group: e.target.value })}
            >
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZ</option>
              <option value="PROJECT">PROJECT</option>
              <option value="EXAM">EXAM</option>
            </select>
            <span className="input-group-text"><FaChevronDown /></span>
          </div>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-md-3 d-flex align-items-center justify-content-end">
          <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
        </div>
        <div className="col-md-9">
          <div className="input-group">
            <select
              id="wd-display-grade-as"
              className="form-control"
              value={assignment.display_grade_as}
              onChange={(e) => setAssignment({ ...assignment, display_grade_as: e.target.value })}
            >
              <option value="PERCENTAGE">Percentage</option>
              <option value="GRADE">Grade</option>
              <option value="AS IT IS">As it is</option>
            </select>
            <span className="input-group-text"><FaChevronDown /></span>
          </div>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-md-3 d-flex align-items-center justify-content-end">
          <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
        </div>
        <div className="col-md-9">
          <div className="input-group">
            <select
              id="wd-submission-type"
              className="form-control"
              value={assignment.submission_type}
              onChange={(e) => setAssignment({ ...assignment, submission_type: e.target.value })}
            >
              <option value="Online">Online</option>
              <option value="In-Person">In-Person</option>
              <option value="URL">Web URL</option>
            </select>
            <span className="input-group-text"><FaChevronDown /></span>
          </div>
        </div>
      </div>

      {/* Online Entry Options */}
      
<div className="border p-3" style={{ marginTop: "-15px" }}>
  <label className="form-label">Online Entry Options</label>
  {["Text Entry", "Website URL", "Media Recordings", "Student Annotation", "File Uploads"].map(option => (
    <div key={option} className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id={`option-${option}`}
        checked={assignment.online_entry_option?.includes(option) || false}
        onChange={() => {
          setAssignment((prev) => ({
            ...prev,
            online_entry_option: prev.online_entry_option
              ? prev.online_entry_option.includes(option)
                ? prev.online_entry_option.filter(item => item !== option)
                : [...prev.online_entry_option, option]
              : [option], // initialize array if undefined
          }));
        }}
      />
      <label htmlFor={`option-${option}`} className="form-check-label">{option}</label>
    </div>
  ))}
</div>

<div className="row mb-3">
        <div className="col-md-3 d-flex  justify-content-end">
          <label className="form-label">Assign</label>
        </div>
        <div className="col-md-9">
          <div className="border p-3">
            <div className="mb-3">
              <label htmlFor="wd-assign-to" className="form-label font-weight-bold">Assign to</label>
              <div className="input-group">
              <input
                  id="wd-assign-to"
                  value={selectedAssignTo}
                  onChange={(e) => setSelectedAssignTo(e.target.value)}
                  className="form-control"
                />
                <span className="input-group-text">
                  <FaTimes />
                </span>
              </div>
            </div>

      {/* Due Date, Available From, and Available Until */}
      {/* Due Date */}
      <div className="row mb-3">
        <div className="col-md-3 d-flex justify-content-end">
          <label htmlFor="wd-due-date" className="form-label font-weight-bold">Due</label>
        </div>
        <div className="col-md-9">
          <div className="input-group">
            <input
              id="wd-due-date"
              type="datetime-local"
              value={assignment.due}
              onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
              className="form-control"
            />
            <span className="input-group-text">
              <FaCalendarAlt />
            </span>
          </div>
        </div>
      </div>

      {/* Available From */}
      <div className="row">
        <div className="col-md-3 d-flex justify-content-end">
          <label htmlFor="wd-available-from" className="form-label font-weight-bold">Available From</label>
        </div>
        <div className="col-md-9">
          <div className="input-group">
            <input
              id="wd-available-from"
              type="datetime-local"
              value={assignment.not_available_until}
              onChange={(e) => setAssignment({ ...assignment, not_available_until: e.target.value })}
              className="form-control"
            />
            <span className="input-group-text">
              <FaCalendarAlt />
            </span>
          </div>
        </div>
      </div>

      {/* Available Until */}
      <div className="row">
        <div className="col-md-3 d-flex justify-content-end">
          <label htmlFor="wd-available-until" className="form-label font-weight-bold">Available Until</label>
        </div>
        <div className="col-md-9">
          <div className="input-group">
            <input
              id="wd-available-until"
              type="datetime-local"
              value={assignment.available_until}
              onChange={(e) => setAssignment({ ...assignment, available_until: e.target.value })}
              className="form-control"
            />
            <span className="input-group-text">
              <FaCalendarAlt />
            </span>
          </div>
        </div>
      </div>
      </div>
        </div>
      </div>


      {/* Action Buttons */}
      <hr />
      <div className="text-end">
        <button onClick={handleCancel} className="btn btn-secondary me-2">
          Cancel
        </button>
        <button onClick={handleSave} className="btn btn-danger">
          Save
        </button>
      </div>
    </div>
  );
}