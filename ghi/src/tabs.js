import React, { useState } from 'react';
import { Tab } from 'react-bootstrap';
import { Tabs } from 'react-bootstrap';
import RestaurantList from './SearchRestaurant';
import EventList from './SearchEvent';
import AttractionList from './SearchAttraction';

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
            <EventList/>
        </Tab>
        <Tab eventKey="attractions" title="Attractions">
            <AttractionList/>
        </Tab>
        </Tabs>
    </div>
    );
};

export default SearchTabs;
