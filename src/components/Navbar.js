import "../styles/styling.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navRef = useRef();

  const showNavbar =() => {
    navRef.current.classList.toggle("res")
  }

  return (
    <BrowserRouter>
      <nav>
        <div>
          <ul id="navbar" ref={navRef}>
            <li>
              <a className="active" href="index.html">
                Home
              </a>
            </li>
            <li><a href="#about">About</a></li>
            <li><a href="#port">Portfolio</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
            <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
            </div>

        <button
				className="burger"
				onClick={showNavbar}>
				<FaBars />
			</button>
      </nav>
    </BrowserRouter>
  );
}

export default Navbar;
