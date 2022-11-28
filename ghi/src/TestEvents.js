import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetEventsQuery } from "./app/yelpApi";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Events() {
  const search = useSelector((state) => state);
  const { data, error, isLoading } = useGetEventsQuery(search.search);

  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  return (
    <div>
      {data.map((event) => {
        return (
          <Card
            className="item-border"
            border="light"
            style={{ width: "40rem" }}
          >
            <Container>
              <Row>
                <Col>
                  <Card.Img className="card-image" src={event.image_url} />
                </Col>
                <Col>
                  <Card.Body>
                    <Card.Title>{event.name}</Card.Title>
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

export default Events;
