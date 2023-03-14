import React from 'react';

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
    margin: 20,
    background: '#373238',
    color: 'white',
  },
  heading: {
    background: '#2c5242',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  content: {
    padding: 20,
  },
};

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function Card() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>About Me</div>
      <div style={styles.content}>
           <ul> Experienced Real Estate Agent with a demonstrated history of working in the real estate industry. Full Stack Web Developer so I do create and edit most of my own posts & maintain my own website. </ul>
      </div>
    </div>
  );
}

export default Card;
