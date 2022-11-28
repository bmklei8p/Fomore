import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Nav from "./Nav";
import ItineraryForm from "./ItineraryForm";
import RestaurantList from "./SearchRestaurant";
import CreateEvent from "./EventForm";
import EventList from "./SearchEvent";
import AttractionList from "./SearchAttraction";
import TestItinerary from "./TestItinerary";
import Search from "./TestSearch";

function App() {
  return (
    <div className="bg-color">
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/ItineraryForm" element={<ItineraryForm />} />
            <Route path="/SearchRestaurant" element={<RestaurantList />} />
            <Route path="/EventForm" element={<CreateEvent/>} />
            <Route path="/SearchEvent" element={<EventList />} />
            <Route path="/SearchAttraction" element={<AttractionList />} />
            <Route path="/TestItinerary" element={<TestItinerary />} />
            <Route path="/Search" element={<Search />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
