import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { addArticle } from './articleSlice';
import { updateSearch } from "./app/searchSlice";
import { useGetRestaurantsQuery } from "./app/yelpApi";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-bootstrap";

export function Restaurants() {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const search = useSelector((state) => state);
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetRestaurantsQuery(search.search);
  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }
  // function handleSubmit() {
  //   const action = updateSearch({ location: location, date: date });
  //   dispatch(action);
  //   setLocation("");
  //   setDate("");
  // }

  return (
    <div>
      {/* <div>
        <input value={location} onChange={(e) => setLocation(e.target.value)} />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={handleSubmit}>Add location and date to search</button>
      </div> */}
      <div>
        {data.map((restaurant) => (
          <Card
            className="item-border"
            border="light"
            style={{ width: "50rem" }}
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
                        <NavLink
                          style={{ "text-align": "right", color: "#FA7F08" }}
                        >
                          &#10010;
                        </NavLink>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Card.Text>{restaurant.location}</Card.Text>
                      </Col>
                      <Col>
                        <Card.Text style={{ "text-align": "right" }}>
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
    </div>
  );
}

export default Restaurants;
