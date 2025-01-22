import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const ContactPage = () => {
  return (
    <Container
      className="p-4 my-5 shadow-lg rounded"
      style={{
        maxWidth: '600px',
        backgroundColor: '#f8f9fa',
        border: '1px solid #dee2e6',
      }}
    >
      <h2 className="text-center mb-4" style={{ fontFamily: 'serif' }}>
        Send Us a Message
      </h2>
      <Form>
        <Form.Group controlId="name" className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Your Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group controlId="message" className="mb-3">
          <Form.Label>Your Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Write your message here"
          />
        </Form.Group>
        <Row className="text-center">
          <Col>
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default ContactPage;
