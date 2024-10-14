import { useState } from 'react';
import { FaChevronDown, FaTimes, FaCalendarAlt } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';
import * as db from "../../Database"; // Import the database that holds assignments data

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); // Retrieve course ID and assignment ID from the URL
  const [selectedAssignTo, setSelectedAssignTo] = useState('Everyone');
  const assignment = db.assignments.find(a => a._id === aid); // Find the assignment in the database
  const onlineEntryOptions = assignment?.online_entry_option || [];

  // Handle the case where assignment is not found (in case of invalid ID)
  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      {/* Assignment Name */}
      <div className="row mb-2">
        <div className="col">
          <label htmlFor="wd-name" className="form-label">Assignment Name</label>
          <input id="wd-name" value={assignment.title} className="form-control" readOnly />
        </div>
      </div>

      {/* Assignment Description */}
      <div className="row mb-3">
        <div className="col-md-12">
          <label htmlFor="wd-description" className="form-label">Description</label>
          <textarea
            cols={50}
            rows={10}
            id="wd-description"
            className="form-control"
            defaultValue={`
              ${assignment.description}
              Please submit your assignment as per the instructions.
              This assignment is worth ${assignment.points} points.
              Due date: ${assignment.due}.
              Available from: ${assignment.not_available_until}.
            `}
          />
        </div>
      </div>

      {/* Points */}
      <div className="row mb-2">
        <div className="col-md-3 d-flex align-items-center justify-content-end">
          <label htmlFor="wd-points" className="form-label">Points</label>
        </div>
        <div className="col-md-9">
          <input id="wd-points" value={assignment.points} className="form-control" readOnly />
        </div>
      </div>

      {/* Assignment Group */}
      <div className="row mb-2">
        <div className="col-md-3 d-flex align-items-center justify-content-end">
          <label htmlFor="wd-group" className="form-label">Assignment Group</label>
        </div>
        <div className="col-md-9">
          <div className="input-group">
            <select id="wd-group" className="form-control" defaultValue={assignment.assignment_group}>
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZ</option>
              <option value="PROJECT">PROJECT</option>
              <option value="EXAM">EXAM</option>
            </select>
            <span className="input-group-text">
              <FaChevronDown />
            </span>
          </div>
        </div>
      </div>

      {/* Display Grade As */}
      <div className="row mb-2">
        <div className="col-md-3 d-flex align-items-center justify-content-end">
          <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
        </div>
        <div className="col-md-9">
          <div className="input-group">
            <select id="wd-display-grade-as" className="form-control" defaultValue={assignment.display_grade_as}>
              <option value="PERCENTAGE">Percentage</option>
              <option value="GRADE">Grade</option>
              <option value="AS IT IS">As it is</option>
            </select>
            <span className="input-group-text">
              <FaChevronDown />
            </span>
          </div>
        </div>
      </div>

      {/* Submission Type */}
      <div className="row mb-2">
        <div className="col-md-3 d-flex align-items-center justify-content-end">
          <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
        </div>
        <div className="col-md-9">
          <div className="input-group">
            <select id="wd-submission-type" className="form-control" defaultValue={assignment.submission_type}>
              <option value="Online">Online</option>
              <option value="In-Person">In-Person</option>
              <option value="URL">Web URL</option>
            </select>
            <span className="input-group-text">
              <FaChevronDown />
            </span>
          </div>
        </div>
      </div>

      {/* Online Entry Options */}
      <div className="row mb-3">
        <div className="col-md-3">
          {/* Empty column for alignment */}
        </div>
        <div className="col-md-9">
          <div className="border p-3" style={{ marginTop: '-15px' }}>
            <label className="form-label">Online Entry Options</label>

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-text-entry"
                defaultChecked={onlineEntryOptions.includes("Text Entry")}
              />
              <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-website-url"
                defaultChecked={onlineEntryOptions.includes("Website URL")}
              />
              <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-media-recordings"
                defaultChecked={onlineEntryOptions.includes("Media Recordings")}
              />
              <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-student-annotation"
                defaultChecked={onlineEntryOptions.includes("Student Annotation")}
              />
              <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-file-upload"
                defaultChecked={onlineEntryOptions.includes("File Uploads")}
              />
              <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
            </div>
          </div>
        </div>
      </div>

      {/* Assign To, Due Date, and Availability */}
      <div className="row mb-3">
        <div className="col-md-3 d-flex  justify-content-end">
          <label className="form-label">Assign</label>
        </div>
        <div className="col-md-9">
          <div className="border p-3">
            <div className="mb-3">
              <label htmlFor="wd-assign-to" className="form-label font-weight-bold">Assign to</label>
              <div className="input-group">
                <input id="wd-assign-to" value={selectedAssignTo} className="form-control" />
                <span className="input-group-text">
                  <FaTimes />
                </span>
              </div>
            </div>

            {/* Due Date */}
            <div className="mb-3">
              <label htmlFor="wd-due-date" className="form-label font-weight-bold">Due</label>
              <div className="input-group">
                <input
                  id="wd-due-date"
                  type="datetime-local"
                  defaultValue={new Date(assignment.due).toISOString().slice(0, 16)}
                  className="form-control"
                />
                <span className="input-group-text">
                  <FaCalendarAlt />
                </span>
              </div>
            </div>

            {/* Available From */}
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="wd-available-from" className="form-label font-weight-bold">Available from</label>
                <div className="input-group">
                  <input
                    id="wd-available-from"
                    type="datetime-local"
                    defaultValue={new Date(assignment.not_available_until).toISOString().slice(0, 16)}
                    className="form-control"
                  />
                  <span className="input-group-text">
                    <FaCalendarAlt /> {/* Calendar icon */}
                  </span>
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="wd-available-until" className="form-label font-weight-bold">Until</label>
                <div className="input-group">
                  <input id="wd-available-until" type="datetime-local" className="form-control" />
                  <span className="input-group-text">
                    <FaCalendarAlt /> {/* Calendar icon */}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <hr />
      <div className="row">
        <div className="col text-end">
          <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
            <button className="btn btn-secondary me-2">Cancel</button>
          </Link>
          <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
            <button className="btn btn-danger">Save</button>
          </Link>
        </div>
      </div>
    </div>
  );
}