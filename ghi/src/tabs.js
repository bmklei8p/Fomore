import React, { useState } from 'react';
import { Tab } from 'react-bootstrap';
import { Tabs } from 'react-bootstrap';
import RestaurantList from './searchEvent';

function SearchTabs() {
    const [key, setKey] = useState('home');

  return (
    <div>
        <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        >
        <Tab eventKey="home" title="Restaurants">
            <RestaurantList/>
        </Tab>
        <Tab eventKey="profile" title="Events">
            <p>Profile page!</p>
        </Tab>
        <Tab eventKey="contact" title="Attractions">
            <p>Contact page!</p>
        </Tab>
        </Tabs>
    </div>
    );
};

export default SearchTabs;
