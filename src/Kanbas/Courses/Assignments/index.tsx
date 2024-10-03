import React from "react";
import AssignmentControl from "./AssignmentControl";
import { BsGripVertical } from "react-icons/bs";
import { FaBook } from 'react-icons/fa';
import { GoTriangleDown } from "react-icons/go";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
    return (
        <div>
            <AssignmentControl />

            <div className="wd-assignments-title p-3 ps-2 bg-secondary" style={{ color: 'black', border: '1px solid black', display: 'flex', alignItems: 'center' }}>
                <BsGripVertical className=" fs-3" />
                <GoTriangleDown className="ms-2 me-2" /> 
                <strong style={{ marginRight: 'auto' }}>ASSIGNMENTS</strong> {/* Space between ASSIGNMENTS and down arrow */}
                
                <AssignmentControlButtons />
            </div>

            <ul className="wd-assignments-list list-group rounded-0">
                {/* First Assignment */}
                <li className="wd-assignment-list-item list-group-item d-flex align-items-center" 
                    style={{ 
                        border: '1px solid black', 
                        color: 'black',
                        borderLeft: '5px solid green' // Adding the green vertical line
                    }}>
                    <BsGripVertical className="text-muted me-2 fs-5" /> 
                    <FaBook style={{ marginRight: 10, color: 'green' }} />
                    <div className="flex-grow-1">
                        <a href="#/Kanbas/Courses/1234/Assignments/1" className="stretched-link" style={{ color: 'black', textDecoration: 'none' }}>
                            <strong>A1</strong> {/* Remove underline */}
                        </a>
                        <div className="small">
                            <span style={{ color: 'red' }}>Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am
                        </div>
                        <div className="small">
                            <strong>Due</strong> May 13 at 11:59pm | 100 pts
                        </div>
                    </div>
                    <LessonControlButtons />
                </li>

                {/* Second Assignment */}
                <li className="wd-assignment-list-item list-group-item d-flex align-items-center" 
                    style={{ 
                        border: '1px solid black', 
                        color: 'black',
                        borderLeft: '5px solid green' // Adding the green vertical line
                    }}>
                    <BsGripVertical className="text-muted me-2 fs-5" /> 
                    <FaBook style={{ marginRight: 10, color: 'green' }} />
                    <div className="flex-grow-1">
                        <a href="#/Kanbas/Courses/1234/Assignments/1" className="stretched-link" style={{ color: 'black', textDecoration: 'none' }}>
                            <strong>A2</strong> {/* Remove underline */}
                        </a>
                        <div className="small">
                            <span style={{ color: 'red' }}>Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am
                        </div>
                        <div className="small">
                            <strong>Due</strong> May 20 at 11:59pm | 100 pts
                        </div>
                    </div>
                    <LessonControlButtons />
                </li>

                {/* Third Assignment */}
                <li className="wd-assignment-list-item list-group-item d-flex align-items-center" 
                    style={{ 
                        border: '1px solid black', 
                        color: 'black',
                        borderLeft: '5px solid green' // Adding the green vertical line
                    }}>
                    <BsGripVertical className="text-muted me-2 fs-5" /> 
                    <FaBook style={{ marginRight: 10, color: 'green' }} />
                    <div className="flex-grow-1">
                        <a href="#/Kanbas/Courses/1234/Assignments/1" className="stretched-link" style={{ color: 'black', textDecoration: 'none' }}>
                            <strong>A3</strong> {/* Remove underline */}
                        </a>
                        <div className="small">
                            <span style={{ color: 'red' }}>Multiple Modules</span> | <strong>Not available until</strong> May 20 at 12:00am
                        </div>
                        <div className="small">
                            <strong>Due</strong> May 27 at 11:59pm | 100 pts
                        </div>
                    </div>
                    <LessonControlButtons />
                </li>
            </ul>
        </div>
    );
}
