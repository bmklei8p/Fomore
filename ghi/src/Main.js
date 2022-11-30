import SearchTabs from "./Features/Misc features/tabs";
import ItineraryList from "./Features/Itineraries/itinerary";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBar from "./Features/Misc features/SearchBar";

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
