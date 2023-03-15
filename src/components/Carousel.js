import React from 'react'
import {  
	FaGithub, 
	FaHtml5, 
	FaCss3Alt, 
	FaJsSquare, 
	FaNode, FaReact, 
	FaNpm, 
} 
from "react-icons/fa";

import { Carousel } from "react-bootstrap"

export default function BootstrapCarousel() {
  return (
    <div>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100 carousel-fade" data-bs-interval="10000"
          src="https://cioafrica.co/wp-content/uploads/2022/05/Password-Policies.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p><FaHtml5/>HTML, <FaGithub/>Git, <FaNpm/>NPM, <FaReact/>React, <FaCss3Alt/>CSS, <FaJsSquare/>Javascript, <FaNode/>RESTful, Express.js, 
          
          lorem ipsum </p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

