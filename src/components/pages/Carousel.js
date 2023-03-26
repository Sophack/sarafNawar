import React from 'react'
import {  
	FaGithub, 
	FaHtml5, 
	FaCss3Alt, 
	FaJsSquare, 
  FaNode, 
	FaNpm, 
} 
from "react-icons/fa";

import { Carousel } from "react-bootstrap"; 
import Recipe from "../../assets/recipe.jpg";
import Showboat from "../../assets/showBoat.png";
import FaThyme from "../../assets/familyThyme.png";



const styles ={
    carousel: {
      maxHeight: "400px",
      width: "400px"
    },
    fontstyle:{
      background:"white",
      color:"black",
      border: "none",
      borderRadius:"15px",
      padding: "2px",
      fontSize: "12px",
    },

    caption: {
      height: "600px",
      display: "tableCaption",
      padding: "50px",
      display: "flex",

    },
    title:{
      background:"transparent",
      color:"#1b5811",
      border: "none",
      fontSize: "22px",
      borderRadius: "40%",
      paddingTop: "30px",
    },


    
}

export default function BootstrapCarousel() {
  return (
    <div id="port">
      <h3 style={styles.title}>Portfolio</h3>
    <Carousel fade>
      <Carousel.Item>
        <img
          style={styles.caption} data-bs-interval="10000"
          src={Recipe}
          alt="First slide"
        />
        <Carousel.Caption style={styles.fontstyle}>
          <h3 style={styles.fontstyle}>Recipes App
          <br></br>
          Search recipes to make at home or try a random recipe!</h3>
          <p><FaHtml5/>HTML, <FaGithub/>Git, <FaCss3Alt/>CSS, <FaJsSquare/>Javascript, 
           </p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          style={styles.caption}
          src={Showboat}
          alt="Second slide"
        />
        <Carousel.Caption style={styles.fontstyle}>
          <h3 style={styles.fontstyle}>ShowBoat
          <br></br>
          Search & confirm which programs are on which streaming service, find out info about the title or just plan a movie night!</h3>
          <p> <FaHtml5/>HTML, <FaGithub/>Git, <FaCss3Alt/>CSS, <FaJsSquare/>Javascript,  </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={styles.caption} data-bs-interval="10000"
          src={FaThyme}
          alt="First slide"
        />
        <Carousel.Caption style={styles.fontstyle}>
          <h3 style={styles.fontstyle}>Family Thyme
          <br></br>
          Save your private or precious family secrets on a an encrypted app only accessible by your family members 
            </h3>
          <p><FaHtml5/>HTML, <FaGithub/>Git, <FaCss3Alt/>CSS, <FaJsSquare/>Javascript, 
          <br></br>
          <FaNode/>Node.js, <FaNpm/>MySQL, Handlebars, Express, Bcrypt, Dotenv
           </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

