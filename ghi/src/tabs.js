import React, { useState } from 'react';
import { Tab } from 'react-bootstrap';
import { Tabs } from 'react-bootstrap';
import RestaurantList from './SearchRestaurant';

function SearchTabs() {
    const [key, setKey] = useState('home');

  return (
    <div>
        <Tabs id="controlled-tab-example" activeKey={key}
        onSelect={(k) => setKey(k)} className="mb-3">
        <Tab eventKey="home" title="Restaurants">
            <RestaurantList/>
        </Tab>
        <Tab eventKey="events" title="Events">
            <p> </p>
        </Tab>
        <Tab eventKey="attractions" title="Attractions">
            <p> </p>
        </Tab>
        </Tabs>
    </div>
    );
};

export default SearchTabs;
