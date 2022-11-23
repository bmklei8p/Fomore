import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import FomoreNav from "./Nav";
import ItineraryForm from "./ItineraryForm";
import RestaurantList from "./SearchRestaurant";
import CreateEvent from "./EventForm";
import EventList from "./SearchEvent";
import AttractionList from "./SearchAttraction";
import { useGetTokenQuery } from "./app/api";

function App() {
  // const { data: tokenData } = useGetTokenQuery();
  // const accountId = tokenData && tokenData.account && tokenData.account.id;
  return (
    <div className="bg-color">
      <BrowserRouter>
        <FomoreNav />
        <div className="container">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/ItineraryForm" element={<ItineraryForm />} />
            <Route path="/SearchRestaurant" element={<RestaurantList />} />
            <Route path="/EventForm" element={<CreateEvent />} />
            <Route path="/SearchEvent" element={<EventList />} />
            <Route path="/SearchAttraction" element={<AttractionList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
