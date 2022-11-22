import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }
  async componentDidMount() {
    const url =
      "http://localhost:8000/api/event_search/?location=Seattle&date=2022-11-22T18%3A20%3A17.388Z&itinerary_id=12343a8014829a865bbf700d";
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        this.setState({ events: data });
      }
    } catch (e) {
      console.error(e);
    }
  }
  render() {
    return (
      <div>
        {this.state.events.map((event) => {
          return (
            <Card className="item-border" border="light" style={{ width: '40rem' }}>
              <Container>
                <Row>
                  <Col>
                    <Card.Img className="card-image" src={event.image_url}/>
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
}


export default EventList;
