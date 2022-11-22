import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
        {this.state.restaurants.map((restaurant) => {
          return (
            <Card className="item-border" border="light" style={{ width: '40rem' }}>
              <Container>
                <Row>
                  <Col>
                    <Card.Img className="card-image" src={restaurant.image_url} style={{"border-color": '#FA7F08'}} />
                  </Col>
                  <Col>
                    <Card.Body>
                      <Card.Title>{restaurant.name}</Card.Title>
                      <Card.Text>{restaurant.location}</Card.Text>
                      <Card.Text>{restaurant.description}</Card.Text>
                    </Card.Body>
                  </Col>
                  <Col>
                    <button>Test</button>
                  </Col>
                </Row>
              </Container>
            </Card>
          );
        })}
      </div>
    );
  }
}
export default RestaurantList;
