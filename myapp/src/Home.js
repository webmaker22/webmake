import React from 'react-bootstrap'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './App.css'


const App = () => {
  return ( <div
  className="bg-dark text-white vh-100 d-flex align-items-center justify-content-center"
  style={{
    backgroundImage:
      'url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    backgroundColor: 'ThreeDShadow'
  }}
>
    <Container fluid className="text-center" style={{ position: 'relative', zIndex: 1 }}>
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="display-4 fw-bold pb-4">IT INSTITUTE</h1>
          
          <div className="d-flex justify-content-center gap-5" style={{paddingTop:'20px'}}>
         
          <Button variant="outline-light" size="lg"><Link to="/allfront">Learn More</Link></Button>
       
          <Button variant="outline-light" size="lg"><Link to="/Pages/Signup">Join Us</Link></Button>
     
          </div>
        </Col>
      </Row>
    </Container>
    <div
      style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        color: 'white',
        textAlign: 'center',
        zIndex: 1,
      }}
    >
      
    </div>
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
        zIndex: 0,
      }}
    ></div>
  </div>
  )
}

export default App
