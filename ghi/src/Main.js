import SearchTabs from "./Features/Misc/tabs";
import ItineraryList from "./Features/Itineraries/Itinerary";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import SearchBar from "./Features/Misc/SearchBar";
import Welcome from "./Features/Misc/Welcome";
// import { useState } from "react";

function Main() {
  return (
    <Container>
      <Row>
        <Welcome />
      </Row>
      <Row style={{ display: "flex", flexDirection: "row-reverse" }}>
        <Col md={4}>
          <div className="section-border">
            <ItineraryList />
          </div>
        </Col>
        <Col md={8}>
          <SearchBar />
          <div className="section-border">
            <SearchTabs />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
