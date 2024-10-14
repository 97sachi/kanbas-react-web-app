import React from "react";
import AssignmentControl from "./AssignmentControl";
import { BsGripVertical } from "react-icons/bs";
import { FaBook } from 'react-icons/fa';
import { GoTriangleDown } from "react-icons/go";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { useParams } from "react-router";
import * as db from "../../Database"; // assuming assignments are stored in db

export default function Assignments() {
    const { cid } = useParams(); // retrieve the course ID from the route
    const assignments = db.assignments.filter(assignment => assignment.course === cid); // filter assignments for this course

    return (
        <div>
            <AssignmentControl />
            <div className="wd-assignments-title p-3 ps-2 bg-secondary" style={{ color: 'black', border: '1px solid black' }}>
                <BsGripVertical className="me-2 fs-3" /> <GoTriangleDown />
                <strong>ASSIGNMENTS</strong><AssignmentControlButtons /></div>
            <ul className="wd-assignments-list list-group rounded-0">
                {assignments.map((assignment, index) => (
                    <li key={assignment._id} className="wd-assignment-list-item list-group-item d-flex align-items-center" style={{ border: '1px solid black', color: 'black' }}>
                        <BsGripVertical className="text-muted me-2 fs-5" />
                        <FaBook style={{ marginRight: 10, color: 'green' }} />
                        <div className="flex-grow-1">
                            <a href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="stretched-link" style={{ color: 'black' }}>
                                <strong>{assignment.title}</strong>
                            </a>
                            <div className="small">
                                <span style={{ color: 'red' }}>Multiple Modules</span> | <strong>Not available until</strong> {assignment.not_available_until}
                            </div>
                            <div className="small">
                                <strong>Due</strong> {assignment.due} | {assignment.points} pts
                            </div>
                        </div>
                        <LessonControlButtons />
                    </li>
                ))}
            </ul>
        </div>
    );
}