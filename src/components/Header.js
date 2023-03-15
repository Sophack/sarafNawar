import React from 'react'


const styles = {
    card: {
      margin: 20,
      color: 'white',
      },
    heading: {
      
      textShadow: "10px 10px 4px #ffffff",
      minHeight: 50,
      lineHeight: 3.5,
      fontSize: '1.2rem',
      color: '#718232',
      padding: '20px',
      display: 'flex',
      alignSelf: 'center',
      background: "#A3FFB9",
      background: "-moz-linear-gradient(left, #A3FFB9 0%, #D4D4D4 50%, #000000 100%)",
      background: "-webkit-linear-gradient(left, #A3FFB9 0%, #D4D4D4 50%, #000000 100%)",
      background: "linear-gradient(to right, #A3FFB9 0%, #D4D4D4 50%, #000000 100%)",
    },
    content: {
      padding: 20,
      
    },
  };

function Header() {
  return (
    <div style={styles.heading}>
      <h1> Hi, I'm Saraf!✋   
      </h1>
    </div>
  )
}

export default Header;