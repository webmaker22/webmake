```jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div
      className="text-white vh-100 d-flex align-items-center justify-content-center"
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      {/* TEST IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80"
        alt="Computer lab"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

      {/* DARK OVERLAY */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      />

      {/* CONTENT */}
      <Container
        fluid
        className="text-center"
        style={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Row className="justify-content-center">
          <Col md={8}>

            <h1 className="display-4 fw-bold pb-4">
              IT INSTITUTE
            </h1>

            <div
              className="d-flex justify-content-center gap-5"
              style={{ paddingTop: '20px' }}
            >

              <Button variant="outline-light" size="lg">
                <Link
                  to="/allfront"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                  }}
                >
                  Learn More
                </Link>
              </Button>

              <Button variant="outline-light" size="lg">
                <Link
                  to="/Pages/Signup"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                  }}
                >
                  Join Us
                </Link>
              </Button>

            </div>

          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default App;
```
