import React from "react";

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
    margin: 20,
    background: "#373238",
    color: "white",
    borderRadius: "5% 5% 60% 10%",
  },
  heading: {
    background: "#2c5242",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
    borderRadius: "10% 5%",
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
        <ul>
          {" "}
          As a passionate developer I am always looking for ways to make things
          more efficient. I am an experienced Real Estate agent who loves to
          connect with people and network. I bring my work ethic and
          friendliness with me to complete projects and meet deadlines.
        </ul>
      </div>
    </div>
  );
}

export default Card;
