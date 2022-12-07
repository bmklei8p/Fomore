import { useGetItinerariesQuery } from "../../app/itineraryApi";
import { useGetEventsQuery } from "../../app/eventApi";
import ErrorNotification from "../../ErrorNotification";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import ItineraryList from "./ItineraryColumn";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-bootstrap";


function ItineraryDetail() {
  const { data, error, isLoading } = useGetEventsQuery();
  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }
  console.log({ data });

  return (
    <div>
      <ErrorNotification error={error} />
      {data.events.map((event) => {
        return (
          <Card
            className="item-border"
            border="light"
            style={{ width: "40rem" }}
            key={event.image_url}
          >
            <Container>
              <Form.Label>{event.itinerary_id}</Form.Label>
              <Row>
                <Col>
                  <Card.Img className="card-image" src={event.image_url} />
                </Col>
                <Col>
                  <Card.Body>
                    <Card.Title>{event.name}</Card.Title>
                    <Card.Text>{event.date}</Card.Text>
                    <Card.Text>{event.location}</Card.Text>
                    <Card.Text>{event.description}</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Container>
          </Card>
        );
      })}
    </div>
  );
}

export default ItineraryDetail;
