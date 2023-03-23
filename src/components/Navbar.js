import "../styles/styling.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  return (
    <BrowserRouter>
      <nav>
        <div>
          <ul id="navbar">
            <li>
              <a className="active" href="index.html">
                Home
              </a>
            </li>
            <Link to="#about">About</Link>
            <Link to="#port">Portfolio</Link>
            <Link to="#resume">Resume</Link>
            <Link to="#contact">Contact</Link>
          </ul>
        </div>
        <div class="burger">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </nav>
    </BrowserRouter>
  );
}

export default Navbar;
