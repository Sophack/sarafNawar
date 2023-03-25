import "../styles/styling.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  // toggle burger menu change
  const updateMenu = () => {
      if(!isMenuClicked) {
          setBurgerClass("burger-bar clicked")
          setMenuClass("menu visible")
      }
      else {
          setBurgerClass("burger-bar unclicked")
          setMenuClass("menu hidden")
      }
      setIsMenuClicked(!isMenuClicked)
  }

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
            <li><a href="#about">About</a></li>
            <li><a href="#port">Portfolio</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
            
            </div>
            <div>
                <div className="burger-menu hidden" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            <div className={menu_class}></div>
        </div>
      </nav>
    </BrowserRouter>
  );
}

export default Navbar;
