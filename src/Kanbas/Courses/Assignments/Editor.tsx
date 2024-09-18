export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea  cols= {50} rows= {10} id="wd-description" > 
          The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section. Links to each of the Lab assignments link to the kanbas application Links to all relevant source code repositories The kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br /><br />
        <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} /><br/><br/>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
        <option value="QUIZZES">QUIZ</option>
        <option value="PROJECT">PROJECT</option>
        <option value="EXAM">EXAM</option>
      </select><br/><br/>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
        <option value="PERCENTAGE">Percentage</option>
        <option value="GRADE">Grade</option>
        <option value="AS IT IS">As it is</option>
      </select><br/><br/>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
        <option value="Online">Online</option>
        <option value="In-Person">In-Person</option>
        <option value="URL">Web URL</option>
      </select><br/><br/>
            
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
           
          </td>
          <td>
          <label htmlFor="wd-online-entry">Online Entry Options</label> <br></br>

            <input type="checkbox" name="check-entry" id="wd-text-entry"/>
<label htmlFor="wd-text-entry">Text Entry</label><br></br>

<input type="checkbox" name="check-url" id="wd-website-url"/>
<label htmlFor="wd-website-url">Website URL</label><br></br>

<input type="checkbox" name="check-recordings" id="wd-media-recordings"/>
<label htmlFor="wd-media-recordings">Media Recordings</label><br></br>

<input type="checkbox" name="check-student" id="wd-student-annotation"/>
<label htmlFor="wd-student-annotation">Student Annotation</label><br></br>

<input type="checkbox" name="check-file" id="wd-file-upload"/>
<label htmlFor="wd-file-upload">File Uploads</label><br></br><br></br>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
           
          </td>
          <td>
          <label htmlFor="wd-assign-to">Assign to</label> <br></br>
            <input id="wd-assign-to" value="Everyone" /> <br></br><br></br>
           
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
           
          </td>
          <td>
          <label htmlFor="wd-due-date">Due</label> <br></br>
          <input id="wd-due-date" value="2000-01-01" type="date" /><br/><br></br>
           
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
           
          </td>
          <td>
          <label htmlFor="wd-available-from">Available from</label> <br></br>
          <input id="wd-available-from" value="2000-01-01" type="date" /><br/><br></br>
           
          </td>
          <td>
          <label htmlFor="wd-available-until">Until</label> <br></br>
          <input id="wd-available-until" value="2000-01-01" type="date" /><br/>
           
          </td>
        </tr>
        
      </table>
      <hr />
      <table width = "100%">
        <tr>
          <td align = "right">
          <button id="wd-name">Cancel</button>
           <button id="wd-name">Save</button>
          </td>

        </tr>

      
      </table>
      
    </div>
);}
