import React from 'react'


const styles = {
    card: {
      margin: 20,
      background: '#373238',
      color: 'white',
      borderRadius: '65% 155% 25% 50%',
    },
    heading: {
      background: '#c9ceac',
      minHeight: 50,
      lineHeight: 3.5,
      fontSize: '1.2rem',
      color: '#718232',
      padding: '20px',
      display: 'flex',
      alignSelf: 'center',
    },
    content: {
      padding: 20,
    },
  };

function Header() {
  return (
    <div style={styles.heading}>
      <h1 style={styles.card}> Hi, I'm Saraf!✋   
      </h1>
      <h2>
        I'm a Full Stack Developer.
      </h2>
    </div>
  )
}

export default Header;