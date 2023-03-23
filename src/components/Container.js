import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import object from components folder 
import InputForm from "../components/pages/Form";
import Navbar from './Navbar';
import Footer from './Footer';
import About from './pages/About';
import Resume from './pages/Resume';
import Header from './Header';

import BootstrapCarousel from './pages/Carousel';

const styles={ 
    background: '#c9ceac',
      minHeight: 50,
      lineHeight: 1.5,
      fontSize: '1.2rem',
      color: '#718232',
}


export default function Contain() {

    return (
        <div> 
    <Container style={styles}>
      <Row>
        <Header/>
      <Navbar/>
        <Col><BootstrapCarousel/></Col>
        <About/>
      <Resume/>
      <InputForm/>
      </Row>
        <Footer/>
    </Container>
    
    </div>
  );
}