import React from 'react';
import { FaPlus } from "react-icons/fa6";

import { Button, FormControl } from 'react-bootstrap';

import { FaSearch} from 'react-icons/fa';


export default function AssignmentControl() {
    return (
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
    );
}

