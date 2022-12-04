import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Nav from "./Nav";
import ItineraryForm from "./features/itineraries/ItineraryForm";
import EventForm from "./features/events/EventForm";
import Itineraries from "./features/itineraries/ListItinerary";
import Events from "./features/events/ListEvents_playaround";
import ItineraryDetail from "./features/itineraries/ItineraryDetail";
import UpdateEventForm from "./features/events/UpdateEventForm";
import UpdateItineraryForm from "./features/itineraries/UpdateItineraryForm";


function App() {
  return (
    <div className="bg-color">
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/deployment" element={<Main />} />
            <Route path="/ItineraryForm" element={<ItineraryForm />} />
            <Route path="/EventForm" element={<EventForm />} />
            <Route path="/UpdateEvent" element={<UpdateEventForm />} />
            <Route path="/Itineraries" element={<Itineraries />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/ItineraryDetail" element={<ItineraryDetail />} />
            <Route
              path="/UpdateItineraryForm"
              element={<UpdateItineraryForm />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
