import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Nav from "./Nav";
import ItineraryForm from "./ItineraryForm";
import RestaurantList from "./SearchRestaurant";
import CreateEvent from "./EventForm";

function App() {
  return (
    <div className="bg-color">
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/ItineraryForm" element={<ItineraryForm />} />
            <Route path="/searchEvent" element={<RestaurantList />} />
            <Route path="/EventForm" element={<CreateEvent/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
