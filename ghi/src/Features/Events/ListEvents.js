import React from "react";
import { useSelector } from "react-redux";
import { useGetEventsQuery } from "../../app/yelpApi";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-bootstrap";

export function ListEvents() {
  const search = useSelector((state) => state);
  const { data, isLoading } = useGetEventsQuery(search.search);
  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }
  if (data.length === 0) {
    return (
      <p>
        No events to display for this time period. Please try another time or
        city.
      </p> //if you want to build something here to be pretty go ahead.
    );
  }
  return (
    <div>
      {data.map((event) => {
        return (
          <Card
            className="item-border"
            border="light"
            style={{ width: "50rem" }}
            key={event.image_url}
          >
            <Container>
              <Row>
                <Col>
                  <Card.Img className="card-image" src={event.image_url} />
                </Col>
                <Col>
                  <Card.Body>
                    <Row>
                      <Col sm={10}>
                        <Card.Title>{event.name}</Card.Title>
                      </Col>
                      <Col sm={2}>
                        <button className="add-btn">
                          &#10010;
                        </button>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Card.Text>{event.location}</Card.Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Card.Text className="text-muted">
                          {event.description}
                        </Card.Text>
                      </Col>
                    </Row>
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

export default ListEvents;
