import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col, Card, InputGroup } from "react-bootstrap";
import ItineraryList from "./Itinerary";

function CreateEvent() {
  return (
    <div>
        <Container>
        <Row>
            <Col sm={8}>
                <Card className="item-border" border="light" style={{ width: '40rem' }}>
                    <Card.Title className="centered">Create a Custom Event</Card.Title>
                    <Card.Body>
                        <Row>
                            <Col sm={4}>
                                <Form.Label>Select an Itinerary</Form.Label>
                            </Col>
                            <Col className="mb-3" sm={8}>
                                <Form.Select>
                                    Itinerary
                                    <option>Itinerary 1</option>
                                    <option>Itinerary 2</option>
                                    <option>Itinerary 3</option>
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label>Event Name</Form.Label>
                            </Col>
                            <Col className="mb-3" sm={8}>
                                <Form.Control type="text" placeholder="Enter event name" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label>Location</Form.Label>
                            </Col>
                            <Col className="mb-3" sm={8}>
                                <Form.Control type="text" label="Location" 
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
                            <Button variant="outline-success" type="submit">
                                Add to Itinerary
                            </Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={4}>
            <div className="section-border">
                <ItineraryList/>
            </div>
            </Col>
        </Row>
        </Container>
    </div>
  );
}

export default CreateEvent;