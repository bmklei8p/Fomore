import React from "react";
import { useSelector } from "react-redux";
import { useGetAttractionsQuery } from "../../app/yelpApi";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-bootstrap";

export function ListAttractions() {
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
            style={{ width: "50rem" }}
            key={attraction.image_url}
          >
            <Container>
              <Row>
                <Col>
                  <Card.Img className="card-image" src={attraction.image_url} />
                </Col>
                <Col>
                  <Card.Body>
                    <Row>
                      <Col sm={10}>
                        <Card.Title>{attraction.name}</Card.Title>
                      </Col>
                      <Col sm={2}>
                        <button
                          type="submit"
                          className="add-btn"
                        >
                          &#10010;
                        </button>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Card.Text>{attraction.location}</Card.Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Card.Text className="text-muted">
                          {attraction.description}
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

export default ListAttractions;
