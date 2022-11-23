import React from "react";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class AttractionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attractions: [],
    };
  }
  async componentDidMount() {
    const url =
      "http://localhost:8000/api/attraction_search/?location=Seattle&date=2022-11-22T18%3A20%3A17.388Z&itinerary_id=12343a8014829a865bbf700d";
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        this.setState({ attractions: data });
      }
    } catch (e) {
      console.error(e);
    }
  }
  render() {
    return (
      <div>
        {this.state.attractions.map((attraction) => {
          return (
            <Card className="item-border" border="light" style={{ width: '40rem' }}>
              <Container>
                <Row>
                  <Col>
                    <Card.Img className="card-image" src={attraction.image_url}/>
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
}
export default AttractionList;
