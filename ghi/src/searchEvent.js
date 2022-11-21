import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/Button";


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
        console.log(data);
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
            <Card className="text-center" border="primary" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={restaurant.image_url} className="card-img-top"/>
              <Card.Body>
                <Card.Title>{restaurant.name}</Card.Title>
                <Card.Text>{restaurant.location}</Card.Text>
                <Card.Text>{restaurant.description}</Card.Text>
              </Card.Body>
              {/* <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup> */}
              <Card.Body>
                <Button variant="primary">Add to Itinerary</Button>
                {/* <Card.Link href="#">Another Link</Card.Link> */}
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}
export default RestaurantList;
