import React from "react";
import { Card } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



class ItineraryList extends React.Component {
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
            <Navbar className="nav-color" variant="dark">
                <Nav className="me-auto centered">
                    <NavDropdown className="nav-text" title="Itineraries" id="basic-nave-dropdown">
                        <NavDropdown.Item>Itinerary 1</NavDropdown.Item>
                        <NavDropdown.Item>Itinerary 2</NavDropdown.Item>
                        <NavDropdown.Item>Itinerary 3</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
            <Card className="item-border" border="light" style={{ width: '20rem' }}>
              <Card.Body>
                <Card.Title>Event Name</Card.Title>
                <Card.Subtitle>Start Date - End Date</Card.Subtitle>
                <Card.Text>Description</Card.Text>
              </Card.Body>
            </Card>
        </div>
    );
  }
}
export default ItineraryList;
