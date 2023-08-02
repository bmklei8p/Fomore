import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Nav from "./Features/Nav";
import ItineraryForm from "./Features/Itineraries/ItineraryForm";
import EventForm from "./Features/Events/EventForm";
import Itineraries from "./Features/Itineraries/ListItinerary";
import Events from "./Features/Events/ListEvents_playaround";
import ItineraryDetail from "./Features/Itineraries/ItineraryDetail";
import UpdateEventForm from "./Features/Events/UpdateEventForm";
import UpdateItineraryForm from "./Features/Itineraries/UpdateItineraryForm";
import LandingPage from "./Pages/LandingPage/SplashPage";

function App() {
  return (
    <div className="bg-color">
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/" element={<LandingPage />} />
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
