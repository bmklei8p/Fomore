import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Nav from "./Nav";
import ItineraryForm from "./ItineraryForm";
import EventForm from "./EventForm";
import Itineraries from "./ListItinerary";

function App() {
  return (
    <div className="bg-color">
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/ItineraryForm" element={<ItineraryForm />} />
            <Route path="/EventForm" element={<EventForm />} />
            <Route path="/Itineraries" element={<Itineraries />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
