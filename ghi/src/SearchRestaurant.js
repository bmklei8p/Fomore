import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-bootstrap";

class RestaurantList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  }
  async componentDidMount() {
    const url =
      "http://localhost:8000/api/restaurant_search/?location=Chicago&date=2022-11-18T18%3A43%3A56.706Z&itinerary_id=12343a8014829a865bbf700d";
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        this.setState({ restaurants: data });
      }
    } catch (e) {
      console.error(e);
    }
  }
  render() {
    return (
      <div>
        {this.state.restaurants.map((restaurant) => (
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
    );
  }
}
export default RestaurantList;
