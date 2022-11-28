import React from "react";
import { useSelector } from "react-redux";
import { useGetAttractionsQuery } from "./app/yelpApi";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Attractions() {
  const search = useSelector((state) => state.search);
  const { data, error, isLoading } = useGetAttractionsQuery(search);
  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  return (
    <div>
      {data.map((attraction) => {
        return (
          <Card
            className="item-border"
            border="light"
            style={{ width: "40rem" }}
          >
            <Container>
              <Row>
                <Col>
                  <Card.Img className="card-image" src={attraction.image_url} />
                </Col>
                <Col>
                  <Card.Body>
                    <Card.Title>{attraction.name}</Card.Title>
                    <Card.Text>{attraction.location}</Card.Text>
                    <Card.Text>{attraction.description}</Card.Text>
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

export default Attractions;
