export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section. Links to each of the Lab assignments link to the kanbas application Links to all relevant source code repositories The kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br />
        <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <input id="wd-group" value={100} />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <input id="wd-display-grade-as" value={100} />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <input id="wd-submission-type" value={100} />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
           
          </td>
          <td>
          <label htmlFor="wd-online-entry">Online Entry Options</label> <br></br>
            <input id="wd-text-entry" value={100} /> <br></br>
            <input id="wd-website-url" value={100} /> <br></br>
            <input id="wd-media-recordings" value={100} /> <br></br>
            <input id="wd-student-annotation" value={100} /> <br></br>
            <input id="wd-file-upload" value={100} /> <br></br>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
           
          </td>
          <td>
          <label htmlFor="wd-assign-to">Assign to</label> <br></br>
            <input id="wd-assign-to" value="Everyone" /> <br></br>
           
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
           
          </td>
          <td>
          <label htmlFor="wd-due-date">Due</label> <br></br>
            <input id="wd-due-date" value="Everyone" />
           
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
           
          </td>
          <td>
          <label htmlFor="wd-available-from">Available from</label> <br></br>
            <input id="wd-available-from" value="Everyone" />
           
          </td>
          <td>
          <label htmlFor="wd-available-until">Until</label> <br></br>
            <input id="wd-available-until" value="Everyone" />
           
          </td>
        </tr>
        
      </table>
      <button id="wd-name">Cancel</button>
      <button id="wd-name">Save</button>
    </div>
);}
