import React from "react";
import { useSelector } from "react-redux";
import { useGetRestaurantsQuery } from "../../app/yelpApi";
import { Card, Container, Row, Col, Form } from "react-bootstrap";
import { useAddEventMutation } from "../../app/eventApi";
import { preventDefault } from "../../app/utils";

import { EventInput } from "./EventInput";

export function ListRestaurants() {
  const search = useSelector((state) => state.search);
  const itineraryId = useSelector((state) => state.itinerary.itineraryId);
  const body = useGetRestaurantsQuery(search);
  const isLoading = body.isLoading;
  const [addEvent, { data }] = useAddEventMutation();

  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  return (
    <div>
      {body.data.map((restaurant) => (
        <Card
          className="item-border"
          border="light"
          style={{ width: "50rem" }}
          key={restaurant.image_url}
        >
          <Form
            className="register-form"
            method="post"
            onSubmit={preventDefault(addEvent, (e) => e.target)}
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
                        <button
                          type="submit"
                          style={{ textAlign: "right", color: "#FA7F08" }}
                        >
                          &#10010;
                        </button>
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
                    <input
                      name="name"
                      as="textarea"
                      value={restaurant.name}
                      style={{ display: "none" }}
                      readOnly
                    ></input>
                    <input
                      name="location"
                      as="textarea"
                      value={restaurant.location}
                      style={{ display: "none" }}
                      readOnly
                    ></input>
                    <input
                      name="date"
                      as="datetime"
                      value={restaurant.date}
                      style={{ display: "none" }}
                      readOnly
                    ></input>
                    <input
                      name="category"
                      as="textarea"
                      value={restaurant.category}
                      style={{ display: "none" }}
                      readOnly
                    ></input>
                    <input
                      name="rating"
                      as="textarea"
                      value={restaurant.rating}
                      style={{ display: "none" }}
                      readOnly
                    ></input>
                    <input
                      name="venue"
                      as="textarea"
                      value={restaurant.venue}
                      style={{ display: "none" }}
                      readOnly
                    ></input>
                    <input
                      name="address"
                      as="textarea"
                      value={restaurant.address}
                      style={{ display: "none" }}
                      readOnly
                    ></input>
                    <input
                      name="description"
                      as="textarea"
                      value={restaurant.description}
                      style={{ display: "none" }}
                      readOnly
                    ></input>
                    <input
                      name="image_url"
                      as="textarea"
                      value={restaurant.image_url}
                      style={{ display: "none" }}
                      readOnly
                    ></input>
                    <input
                      name="itineraryId"
                      as="textarea"
                      value={itineraryId}
                      style={{ display: "none" }}
                      readOnly
                    ></input>
                  </Card.Body>
                </Col>
              </Row>
            </Container>
          </Form>
        </Card>
      ))}
    </div>
  );
}

export default ListRestaurants;
