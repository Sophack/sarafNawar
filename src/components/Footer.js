import React from "react";
import { IconName } from "react-icons/bs";


const styles = {
    card: {
      margin: 20,
      background: '#373238',
      color: 'white',
      borderRadius: '65% 155% 25% 50%',
    },
    footer: {
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

export default function Footer() {
  return (
    <div style={styles.footer} className="footer">
      <footer style={styles.footer}>
        <a style={styles.footer}
          href="https://github.com/Sophack"
          target="blank"
          rel="noopener noreferrer"
        >
          <li  className="logo">Github</li>
        </a>
        <a
          href="https://www.linkedin.com/in/colin-nebula-07176022/"
          target="blank"
          rel="noopener noreferrer"
        >
          <li className="logo">LinkedIn</li>
        </a>
        <a
          href="https://www.youtube.com/"
          target="blank"
          rel="noopener noreferrer"
        >
          <li className="logo">logo3</li>
        </a>

        <div>
          <a href="#">
            <i class="fa fa-home fa-fw" aria-hidden="true"></i>&nbsp;Home
          </a>
          <br />
          &copy; 2022{" "}
          <a href="mailto:colinnebula@gmail.com">sarafnrealtor@gmail.com</a>
        </div>
      </footer>
    </div>
  );
}
