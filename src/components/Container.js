import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputForm from "../components/pages/Form";
import Navbar from './Navbar';
import Footer from './Footer';
import About from './pages/About';
import Resume from './pages/Resume';
import Header from './Header';
import BootstrapCarousel from './pages/Carousel';
import Greeting from './pages/Greeting';

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
      <Greeting/>
      <Row>
        <Header/>
      <Navbar/>
        <Col>
        <About/>
        <BootstrapCarousel/>
        <Resume/>
        </Col>
        <InputForm/>
        </Row>
        <Footer/>
    </Container>
    
    </div>
  );
}