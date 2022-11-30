import React from "react";
import { useSelector } from "react-redux";
import { useGetRestaurantsQuery } from "../../app/yelpApi";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-bootstrap";

export function ListRestaurants() {
  const search = useSelector((state) => state.search);
  const { data, error, isLoading } = useGetRestaurantsQuery(search);
  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  return (
    <div>
      {data.map((restaurant) => (
        <Card
          className="item-border"
          border="light"
          style={{ width: "50rem" }}
          key={restaurant.image_url}
        >
          <Container>
            <Row>
              <Col>
                <Card.Img className="card-image" src={restaurant.image_url} />
              </Col>
              <Col>
                <Card.Body>
                  <Row>
                    <Col sm={10}>
                      <Card.Title>{restaurant.name}</Card.Title>
                    </Col>
                    <Col sm={2}>
                      <NavLink style={{ textAlign: "right", color: "#FA7F08" }}>
                        &#10010;
                      </NavLink>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Card.Text>{restaurant.location}</Card.Text>
                    </Col>
                    <Col>
                      <Card.Text style={{ textAlign: "right" }}>
                        Rating: {restaurant.rating}
                      </Card.Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Card.Text className="text-muted">
                        {restaurant.description}
                      </Card.Text>
                    </Col>
                  </Row>
                  <Row>
                    <Card.Text as="small">{restaurant.address}</Card.Text>
                  </Row>
                </Card.Body>
              </Col>
            </Row>
          </Container>
        </Card>
      ))}
      ;
    </div>
  );
}

export default ListRestaurants;
