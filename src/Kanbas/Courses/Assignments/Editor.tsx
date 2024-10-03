import { useState } from 'react';
import { FaChevronDown, FaTimes, FaCalendarAlt } from 'react-icons/fa'; // Importing icons from react-icons

export default function AssignmentEditor() {
  const [selectedAssignTo, setSelectedAssignTo] = useState('Everyone');

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      {/* Assignment Name */}
      <div className="row mb-2"> {/* Reduced margin */}
        <div className="col">
          <label htmlFor="wd-name" className="form-label">Assignment Name</label>
          <input id="wd-name" value="A1" className="form-control" />
        </div>
      </div>

      {/* Assignment Description */}
      <div className="row mb-3">
        <div className="col-md-12">
          <label htmlFor="wd-description" className="form-label"></label>
          <textarea
            cols={50}
            rows={10}
            id="wd-description"
            className="form-control"
            defaultValue={`
              The assignment is available online.
              Submit a link to the landing page of your Web application running on Netlify.
              The landing page should include the following:
              - Your full name and section
              - Links to each of the lab assignments
              - Link to the Kanbas application
              - Links to all relevant source code repositories.
              The Kanbas application should include a link to navigate back to the landing page.
            `}
          />
        </div>
      </div>

      {/* Labels and Fields */}
      <div className="row mb-2"> {/* Reduced margin */}
        {/* Points */}
        <div className="col-md-3 d-flex align-items-center justify-content-end"> {/* Align label with input */}
          <label htmlFor="wd-points" className="form-label">Points</label>
        </div>
        <div className="col-md-9">
          <input id="wd-points" value={100} className="form-control" />
        </div>
      </div>

      <div className="row mb-2"> {/* Reduced margin */}
        {/* Assignment Group */}
        <div className="col-md-3 d-flex align-items-center justify-content-end">
          <label htmlFor="wd-group" className="form-label">Assignment Group</label>
        </div>
        <div className="col-md-9">
          <div className="input-group">
            <select id="wd-group" className="form-control">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZ</option>
              <option value="PROJECT">PROJECT</option>
              <option value="EXAM">EXAM</option>
            </select>
            <span className="input-group-text">
              <FaChevronDown /> {/* React Icon for dropdown arrow */}
            </span>
          </div>
        </div>
      </div>

      <div className="row mb-2"> {/* Reduced margin */}
        {/* Display Grade As */}
        <div className="col-md-3 d-flex align-items-center justify-content-end">
          <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
        </div>
        <div className="col-md-9">
          <div className="input-group">
            <select id="wd-display-grade-as" className="form-control">
              <option value="PERCENTAGE">Percentage</option>
              <option value="GRADE">Grade</option>
              <option value="AS IT IS">As it is</option>
            </select>
            <span className="input-group-text">
              <FaChevronDown /> {/* React Icon for dropdown arrow */}
            </span>
          </div>
        </div>
      </div>

      <div className="row mb-2"> {/* Reduced margin */}
        {/* Submission Type */}
        <div className="col-md-3 d-flex align-items-center justify-content-end">
          <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
        </div>
        <div className="col-md-9">
          <div className="input-group">
            <select id="wd-submission-type" className="form-control">
              <option value="Online">Online</option>
              <option value="In-Person">In-Person</option>
              <option value="URL">Web URL</option>
            </select>
            <span className="input-group-text">
              <FaChevronDown /> {/* React Icon for dropdown arrow */}
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
          <div className="border p-3" style={{ marginTop: '-15px' }}> {/* Adjusted margin to reduce gap */}
            <label className="form-label"><strong>Online Entry Options</strong></label> {/* Bold */}
            <div className="form-check mb-2"> {/* Added padding between options */}
              <input type="checkbox" className="form-check-input" id="wd-text-entry" />
              <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
            </div>
            <div className="form-check mb-2"> {/* Added padding between options */}
              <input type="checkbox" className="form-check-input" id="wd-website-url" defaultChecked />
              <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
            </div>
            <div className="form-check mb-2"> {/* Added padding between options */}
              <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
            </div>
            <div className="form-check mb-2"> {/* Added padding between options */}
              <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
            </div>
            <div className="form-check mb-2"> {/* Added padding between options */}
              <input type="checkbox" className="form-check-input" id="wd-file-upload" />
              <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
            </div>
          </div>
        </div>
      </div>

      {/* Assign To, Due Date, and Availability */}
      <div className="row mb-5">
        <div className="col-md-3 d-flex  justify-content-end">
          <label className="form-label">Assign</label> {/* Bold label */}
        </div>
        <div className="col-md-9">
          <div className="border p-3">
            <div className="mb-3">
              <label htmlFor="wd-assign-to" className="form-label font-weight-bold"><strong>Assign to</strong></label> {/* Bold label */}
              <div className="input-group">
                <input id="wd-assign-to" value={selectedAssignTo} className="form-control" />
                <span className="input-group-text">
                  <FaTimes /> {/* Cross icon */}
                </span>
              </div>
            </div>

            {/* Due Date */}
            <div className="mb-3">
              <label htmlFor="wd-due-date" className="form-label font-weight-bold"><strong>Due</strong></label> {/* Bold label */}
              <div className="input-group">
                <input id="wd-due-date" type="datetime-local" value="2024-05-13T23:59" className="form-control" />
                <span className="input-group-text">
                  <FaCalendarAlt /> {/* Calendar icon */}
                </span>
              </div>
            </div>

            {/* Available From and Until */}
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="wd-available-from" className="form-label font-weight-bold"><strong>Available from</strong></label> {/* Bold label */}
                <div className="input-group">
                  <input id="wd-available-from" type="datetime-local" value="2024-05-06T12:00" className="form-control" />
                  <span className="input-group-text">
                    <FaCalendarAlt /> {/* Calendar icon */}
                  </span>
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="wd-available-until" className="form-label font-weight-bold"><strong>Until</strong></label> {/* Bold label */}
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
          <button className="btn btn-secondary me-2">Cancel</button>
          <button className="btn btn-danger">Save</button>
        </div>
      </div>
    </div>
  );
}
