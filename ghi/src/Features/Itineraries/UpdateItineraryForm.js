import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  useUpdateItineraryMutation,
  useGetItinerariesQuery,
} from "../../app/itineraryApi";
import { preventDefault } from "../../app/utils";

const UpdateItineraryForm = () => {
  const [updateItinerary, { data }] = useUpdateItineraryMutation();

  const body = useGetItinerariesQuery();

  // this is a temporary placeholder for either a
  // redirect using useNavigate or a better looking success alert.
  if (data) {
    return (
      <div>
        <Alert key="success" variant="success">
          You have successfully updated an itinerary. Please visit your
          itineraries page if you would like to see the details.
        </Alert>
      </div>
    );
  }

  if (body.isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  const itineraries = body.data.itineraries;

  return (
    <div>
      <Form
        className="register-form"
        method="post"
        onSubmit={preventDefault(updateItinerary, (e) => e.target)}
      >
        <Container>
          <Row>
            <Col sm={8}>
              <Card
                className="item-border"
                border="light"
                style={{ width: "40rem" }}
              >
                <Card.Title className="centered">Update Itinerary</Card.Title>
                <Card.Body>
                  <Row>
                    <Col sm={4}>
                      <Form.Label>Select an Itinerary</Form.Label>
                    </Col>
                    <Col className="mb-3" sm={8}>
                      <Form.Select name="itinerary">
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
                      <Form.Label>Itinerary Name</Form.Label>
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
                      <Form.Label>Start Date</Form.Label>
                    </Col>
                    <Col className="mb-3" sm={8}>
                      <Form.Control
                        name="start_date"
                        type="date"
                        placeholder="Date"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>End Date</Form.Label>
                    </Col>
                    <Col className="mb-3" sm={8}>
                      <Form.Control
                        name="end_date"
                        type="date"
                        placeholder="Date"
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
                        name="location"
                        placeholder="Location"
                      />
                    </Col>
                  </Row>
                  <Button variant="outline-success" type="submit">
                    Update Itinerary
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
};

export default UpdateItineraryForm;
