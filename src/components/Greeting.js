// We have to first import `useState` with React in order to take advantage of the hook
import React, { useState } from 'react';

function Greeting() {
  // Declare a state variable `greeting` using `useState`
  const [greeting, setGreeting] = useState(
    'Im a Full Stack Developer'
  );
  // Convert `group` to a state variable using the `useState` hook.
  const [group, setGroup] = useState(['CSS', 'HTML', 'Javascript', 'React', 'Database handling with SQL & Mongo', "Bootstrap", 'Material UI']);

  const styles = {
    gStyle: {
      background: "#A3FFB9",
      background: "-moz-linear-gradient(left, #A3FFB9 0%, #D4D4D4 50%, #000000 100%)",
      background: "-webkit-linear-gradient(left, #A3FFB9 0%, #D4D4D4 50%, #000000 100%)",
      background: "linear-gradient(to right, #A3FFB9 0%, #D4D4D4 50%, #000000 100%)",
      
    },
    gStyle2: {
      color : "#00000",
      background: "#000000",
      background: "-moz-linear-gradient(left, #000000 0%, #D4D4D4 50%, #A3FFB9 100%)",
      background: "-webkit-linear-gradient(left, #000000 0%, #D4D4D4 50%, #A3FFB9 100%)",
      background: "linear-gradient(to right, #000000 0%, #D4D4D4 50%, #A3FFB9 100%)",
      borderRadius: "155px 60px 70px 0px",
      listStyle: "none",
    }
  }

  return (
    <div className="card text-center">
      <div className="card-body" style={styles.gStyle}>
        {/* Render the `greeting` state variable */}
       
        <ul style={styles.gStyle2}>
        <p className="card-text" >{greeting}</p>
          {/* Render each member from the `group` array */}
          {group.map((item, index) =>
          <li key={index}>{item}</li>
              )}
        </ul>
      </div>
    </div>
  );
}

export default Greeting;
