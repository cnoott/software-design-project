import React from 'react';
import Header from './core/Header';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const ClientProfileManagment = () => {

    return (
        <>
        <Header/>
        <Container>
        <h2> Client Profile Managment:</h2>
        <Form>
  <Row>
    <Col xs="auto">
      <Form.Control required placeholder="First name" />
    </Col>
    <Col xs="auto">
      <Form.Control required placeholder="Last name" />
    </Col>
  </Row>
  
  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control required placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control required />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select required defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control required />
    </Form.Group>
  </Row>

 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container>
   
        </>
    );
};

export default ClientProfileManagment

