// We have to first import `useState` with React in order to take advantage of the hook
import React, { useState } from 'react';

function Resume() {
  // Declare a state variable `greeting` using `useState`
  const [resume, setResume] = useState(
    'Im a Full Stack Developer'
  );
  // Convert `group` to a state variable using the `useState` hook.
  const [group, setGroup] = useState(['CSS', 'HTML', 'Javascript', 'React', 'Database handling with SQL & Mongo', "Bootstrap", 'Material UI']);

  

  return (
    <div className="card text-center">
      <div className="card-body">
        {/* Render the `resume` state variable */}
       
        <ul>
        <p className="card-text" >{resume}</p>
          {/* Render each member from the `group` array */}
          {group.map((item, index) =>
          <li key={index}>{item}</li>
              )}
        </ul>
      </div>
    </div>
  );
}

export default Resume;
