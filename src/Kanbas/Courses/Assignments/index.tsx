import React from 'react';
import { IoEllipsisVertical } from "react-icons/io5";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { Button, FormControl } from 'react-bootstrap';
import { IoMdArrowDropdown } from "react-icons/io";
import { FaPlus, FaSearch, FaCheckCircle } from 'react-icons/fa';
import { GiNotebook } from "react-icons/gi";
export default function Assignments() {
    return (
      <div className="container mt-4">
      {/* Search and Buttons */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        {/* Search Bar */}
        <div className="d-flex w-50">
          {/* Search Icon inside input */}
          <div className="position-relative w-100">
            <span className="position-absolute top-50 translate-middle-y ms-2" style={{ pointerEvents: 'none' }}>
              <FaSearch />
            </span>
            <FormControl
              type="text"
              placeholder="Search..."
              className="ps-5" // Padding-left to leave space for the icon
            />
          </div>
        </div>

        {/* Group and Assignment Buttons */}
        <div>
          {/* Group Button: Gray background with black text */}
          <Button style={{ backgroundColor: 'lightgray', color: 'black' }} className="me-2">
            <FaPlus /> Group
          </Button>

          {/* Assignment Button: Red background with white text */}
          <Button style={{ backgroundColor: 'red', color: 'white' }}>
            <FaPlus /> Assignment
          </Button>
        </div>
      </div>

      {/* Assignment List */}
      <div>
        <ul id="wd-modules" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              <IoMdArrowDropdown className="me-2 fs-3" />
              ASSIGNMENTS
              <ModuleControlButtons /> 
             
            </div>

            <ul className="wd-lessons list-group rounded-0">
              {/* First Assignment */}
              <li className="wd-lesson list-group-item p-3 ps-1">
  {/* Notebook icon and assignment title (A1) beside each other */}
  <div className="d-flex align-items-center mb-1">
    <BsGripVertical className="me-2 fs-3 mt-3" />
    <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
      <GiNotebook className="me-2 mt-3" /> {/* Notebook icon */}
    </a>
    <div className="fs-4">A1</div> {/* Larger font size for A1 */}
  </div>
  
  {/* Subtext below A1 */}
  <div className="ms-5" style={{ fontSize: '0.875rem' }}> {/* Indented smaller text */}
    {/* Red for "Multiple Modules" */}
    <span className="text-danger">Multiple Modules</span> |
    <strong> Not available until</strong> May 6 at 12:00am |
    <br /> {/* Line break to start the next line */}
    <span>Due May 13 at 11:59pm | 100 pts</span>
    <LessonControlButtons /> <IoEllipsisVertical className="float-end fs-4 mt-2" />
  </div>

  {/* Optional control buttons or actions */}
  
</li>


              {/* Second Assignment */}
              <li className="wd-lesson list-group-item p-3 ps-1">
  {/* Notebook icon and assignment title (A1) beside each other */}
  <div className="d-flex align-items-center mb-1">
    <BsGripVertical className="me-2 fs-3 mt-3" />
    <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
      <GiNotebook className="me-2 mt-3" /> {/* Notebook icon */}
    </a>
    <div className="fs-4">A2</div> {/* Larger font size for A1 */}
  </div>
  
  {/* Subtext below A1 */}
  <div className="ms-5" style={{ fontSize: '0.875rem' }}> {/* Indented smaller text */}
    {/* Red for "Multiple Modules" */}
    <span className="text-danger">Multiple Modules</span> |
    <strong> Not available until</strong> May 13 at 12:00am |
    <br /> {/* Line break to start the next line */}
    <span>Due May 20 at 11:59pm | 100 pts</span>
    <LessonControlButtons />
  </div>

  {/* Optional control buttons or actions */}
  
</li>

              {/* Third Assignment */}
              <li className="wd-lesson list-group-item p-3 ps-1">
  {/* Notebook icon and assignment title (A1) beside each other */}
  <div className="d-flex align-items-center mb-1">
    <BsGripVertical className="me-2 fs-3 mt-3" />
    <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
      <GiNotebook className="me-2 mt-3" /> {/* Notebook icon */}
    </a>
    <div className="fs-4">A3</div> {/* Larger font size for A1 */}
  </div>
  
  {/* Subtext below A1 */}
  <div className="ms-5" style={{ fontSize: '0.875rem' }}> {/* Indented smaller text */}
    {/* Red for "Multiple Modules" */}
    <span className="text-danger">Multiple Modules</span> |
    <strong> Not available until</strong> May 20 at 12:00am |
    <br /> {/* Line break to start the next line */}
    <span>Due May 27 at 11:59pm | 100 pts</span>
    <LessonControlButtons />
  </div>

  {/* Optional control buttons or actions */}
  
</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

      );}
      
      