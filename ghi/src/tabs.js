import React, { useState } from "react";
import { Tab } from "react-bootstrap";
import { Tabs } from "react-bootstrap";
import { Restaurants } from "./ListRestaurants";
import { Attractions } from "./ListAttractions";
import { Events } from "./ListEvents";

function SearchTabs() {
  const [key, setKey] = useState("home");

  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Restaurants">
          <Restaurants />
        </Tab>
        <Tab eventKey="events" title="Events">
          <Events />
        </Tab>
        <Tab eventKey="attractions" title="Attractions">
          <Attractions />
        </Tab>
      </Tabs>
    </div>
  );
}

export default SearchTabs;
