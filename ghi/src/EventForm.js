import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, Card } from "react-bootstrap";
import ItineraryList from "./Itinerary";
import { useGetItinerariesQuery } from "./app/itineraryApi";
import { useAddEventMutation } from "./app/eventApi";
import { useNavigate } from "react-router-dom";
import { preventDefault } from "./app/utils";

const CreateEvent = () => {
  const [addEvent, { data }] = useAddEventMutation();
  const navigate = useNavigate();

  if (data) {
    navigate("/");
  }
  const body = useGetItinerariesQuery();

  if (body.isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  const itineraries = body.data.itineraries;

  return (
    <div>
      <Form
        className="register-form"
        method="post"
        action="/"
        onSubmit={preventDefault(addEvent, (e) => e.target)}
      >
        <Container>
          <Row>
            <Col sm={8}>
              <Card
                className="item-border"
                border="light"
                style={{ width: "40rem" }}
              >
                <Card.Title className="centered">
                  Create a Custom Event
                </Card.Title>
                <Card.Body>
                  <Row>
                    <Col sm={4}>
                      <Form.Label>Select an Itinerary</Form.Label>
                    </Col>
                    <Col className="mb-3" sm={8}>
                      <Form.Select>
                        Itinerary
                        <option>itineraries</option>
                        {itineraries.map((itinerary) => {
                          return (
                            <option key={itinerary.id} value={itinerary.id}>
                              {itinerary.name}
                            </option>
                          );
                        })}
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>Event Name</Form.Label>
                    </Col>
                    <Col className="mb-3" sm={8}>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter event name"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>Location</Form.Label>
                    </Col>
                    <Col className="mb-3" sm={8}>
                      <Form.Control
                        type="text"
                        label="Location"
                        name="location"
                        placeholder="Location"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>Date</Form.Label>
                    </Col>
                    <Col className="mb-3" sm={8}>
                      <Form.Control
                        name="date"
                        type="date"
                        placeholder="Date"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>Description</Form.Label>
                    </Col>
                    <Col className="mb-3" sm={8}>
                      <Form.Control
                        name="description"
                        as="textarea"
                        label="Description"
                      />
                    </Col>
                  </Row>
                  <Button
                    onClick={() => navigate("/api/events")}
                    variant="outline-success"
                    type="submit"
                  >
                    Add to Itinerary
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <div className="section-border">
                <ItineraryList />
              </div>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
};

export default CreateEvent;
