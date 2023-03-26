// We have to first import `useState` with React in order to take advantage of the hook
import React, { useState } from 'react';
import "../../styles/styling.css";

function Resume() {
  // Declare a state variable 
  const [resume, setResume] = useState(
    'As a passionate developer, I am always looking for opportunities to finetune my skills. I am highly motivated, completing the web-development certificate as well as the full-stack course while working as a realtor. Having worked with a company from the ground-up (Amperslash) and working in real estate has given me a unique perspective. I know what it takes to build something from scratch & work hard until it is finished. This also made me perfect for high-performance fields such as real estate and full-stack development. '
  );
  // Convert `group` to a state variable using the `useState` hook.
  const [group, setGroup] = useState(['CSS', 'HTML', 'Javascript', 'React', 'Database handling with SQL & Mongo', "Bootstrap", 'Material UI']);

  

  return (
    <div className="card text-center" id="resume">
      <h3 className='title'>Resume</h3>
      <div className="card-body">
        {/* Render the `resume` state variable */}
       
        <ul>
        <p className="card-text" >{resume}</p>
          {/* Render each member from the `group` array */}
          {group.map((item, index) =>
          <li key={index}>{item}</li>
              )}
        </ul>
        <a href ="https://sophack.github.io/resume/" className='title'>Link to full Resume</a>
      </div>
    </div>
  );
}

export default Resume;
