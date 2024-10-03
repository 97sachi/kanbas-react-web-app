import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
export default function Modules() {
    return (
      <div>
       
        <ModulesControls /><br /><br /><br /><br />
        <ul id="wd-modules" className="list-group rounded-0">
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary"> 
      <BsGripVertical className="me-2 fs-3" />
Week 1 

<ModuleControlButtons /> <div className="float-end"><GreenCheckmark /></div>
</div>
      <ul className="wd-lessons list-group rounded-0">
        <li className="wd-lesson list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
          LEARNING OBJECTIVES <LessonControlButtons /></li>
          
        <li className="wd-lesson list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
          Introduction to the course  <LessonControlButtons /></li>
        <li className="wd-lesson list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
          Learn what is Web Development <LessonControlButtons /></li>
          
        <li className="wd-lesson list-group-item p-3 ps-1"> 
        <BsGripVertical className="me-2 fs-3" />LESSON 1 <LessonControlButtons /></li>
        
        <li className="wd-lesson list-group-item p-3 ps-1"> 
        <BsGripVertical className="me-2 fs-3" />LESSON 2 <LessonControlButtons /></li>
      </ul>
    </li>
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
    
      <div className="wd-title p-3 ps-2 bg-secondary"> 
      <BsGripVertical className="me-2 fs-3" />Week 2 
      <ModuleControlButtons /> <div className="float-end"><GreenCheckmark /></div></div>
      <ul className="wd-lessons list-group rounded-0">
        <li className="wd-lesson list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
          LEARNING OBJECTIVES <LessonControlButtons /></li>
         
        <li className="wd-lesson list-group-item p-3 ps-1"> 
        <BsGripVertical className="me-2 fs-3" />LESSON 1 <LessonControlButtons /></li>
        
        <li className="wd-lesson list-group-item p-3 ps-1"> 
        <BsGripVertical className="me-2 fs-3" /><LessonControlButtons />
        LESSON 2 </li>
      </ul>
    </li>
  </ul> </div>

  );}

{/*
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
                
              </li>
              <li className="wd-lesson">
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction </li>
                  <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating Us</li>
                </ul>
                
              </li>
              <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to Web Developement </li>
                  <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                  <li className="wd-content-item">Creating a React Application</li>
                </ul>
                
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Learn how to create user interfaces with html</li>
                  <li className="wd-content-item">Deploy the assignment to Netlify</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to HTML and DOM </li>
                  <li className="wd-content-item">Formatting web content with headings</li>
                  <li className="wd-content-item">Formatting content with lists and tables</li>
                </ul>
                
              </li>
            </ul>
          </li>
        </ul>
      </div>
    */}

  
  