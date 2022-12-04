import SearchTabs from "./features/misc/tabs";
import ItineraryList from "./features/itineraries/Itinerary";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import SearchBar from "./features/misc/SearchBar";

function Main() {
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <SearchBar />
          <div className="section-border">
            <SearchTabs />
          </div>
        </Col>
        <Col sm={4}>
          <div className="section-border">
            <ItineraryList />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
