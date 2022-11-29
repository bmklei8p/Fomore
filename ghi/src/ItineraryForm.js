import React, { useState } from "react";
import { Card, Form, Container, Row, Col, Button} from 'react-bootstrap';
import ItineraryList from "./Itinerary";

function ItineraryForm() {
  const [values, setValues] = useState({
    name: [],
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleNameInputChange = (event) => {
    setValues({ ...values, name: event.target.value });
  };

  const handleStartDateInputChange = (event) => {
    setValues({ ...values, startDate: event.target.value });
  };

  const handleEndDateInputChange = (event) => {
    setValues({ ...values, endDate: event.target.value });
  };

  const handleLocationInputChange = (event) => {
    setValues({ ...values, location: event.target.value });
  };

  const handleDescriptionInputChange = (event) => {
    setValues({ ...values, description: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      values.name &&
      values.startDate &&
      values.endDate &&
      values.location &&
      values.description
    ) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <Form className="register-form" onSubmit={handleSubmit}>
      <Container>
        <Row>
            <Col sm={8}>
                <Card className="item-border" border="light" style={{ width: '40rem' }}>
                    <Card.Title className="centered">Create an Itinerary</Card.Title>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Form.Label>Itinerary Name</Form.Label>
                            </Col>
                            <Col className="mb-3" sm={8}>
                                <Form.Control type="text" placeholder="Enter itinerary name" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label>Location</Form.Label>
                            </Col>
                            <Col className="mb-3" sm={8}>
                                <Form.Control type="text" label="Location (optional)"
                                placeholder="Location"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label>Date</Form.Label>
                            </Col>
                            <Col className="mb-3" sm={8}>
                                <Form.Control type="date" placeholder="Date" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label>Description</Form.Label>
                            </Col>
                            <Col className="mb-3" sm={8}>
                                <Form.Control as="textarea" label="Description" />
                            </Col>
                        </Row>
                            <Button variant="outline-primary" type="submit">
                                Add to Itinerary
                            </Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={4}>
            <div className="section-border">
              <Form.Label className="text-center" as="h5"> My Itineraries</Form.Label>
              <ItineraryList/>
            </div>
            </Col>
        </Row>
      </Container>
    </Form>
  );
}

export default ItineraryForm;
