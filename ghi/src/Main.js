import SearchTabs from "./tabs";
import ItineraryList from "./Itinerary";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from "react-bootstrap";
import {Button} from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';

function Main() {
  return (
    <Container>
      <Row>
        <Col sm={8}>
            <Form className="d-flex top-margin">
              <Form.Control  size="sm" type="search" placeholder="Location"
                className="me-2" aria-label="Location"/>
              <InputGroup size="sm" className="me-2">
                <InputGroup.Text id="basic-addon3">
                  Dates
                </InputGroup.Text>
                <Form.Control type="date" placeholder="Start Date"
                className="me-0" aria-label="Start Date"/>
                <Form.Control type="date" placeholder="End Date"
                className="me-0" aria-label="End Date"/>
              </InputGroup>
              <Button variant="outline-light">Search</Button>
            </Form>
          <div className="section-border">
            <SearchTabs/>
          </div>
        </Col>
        <Col sm={4}>
          <div className="section-border">
            <ItineraryList/>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
