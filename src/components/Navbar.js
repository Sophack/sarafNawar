import React from "react";

// declare object called styles for card and heading styles
const styles = {
  card: {
    margin: 20,
    background: "#718232",
    display: "flex",
    justifyContent: 'center',
    justifyContent: 'space-around',
  },
  heading: {
    borderRadius: '45% 155% 5% 65%',
    background: "#acd556",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
  },
};

function Navbar() {
  return (
    // assign a style from object

    <div style={styles.card}>
      <div style={styles.heading}>About</div>
      <div style={styles.heading}>Contact</div>
      <div style={styles.heading}>Resume</div>
    </div>
  );
}

export default Navbar;
