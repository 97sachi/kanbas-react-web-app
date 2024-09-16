import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
  return (
    <><button id="wd-collapse-all">Collapse All</button>
    <button id="wd-view-progress">View Progress</button>
    <select id="wd-publish-all">
        <option value="ASSIGNMENTS">Publish All</option>
        <option value="QUIZZES">Publish Selected</option>
      </select>
    <button id="wd-view-progress">+ Module</button>
    <table id="wd-home">
      <tr>
        <td valign="top">
          <Modules />
        </td>
        <td valign="top">
          <CourseStatus />
        </td>
      </tr>
    </table></>
  );
}

