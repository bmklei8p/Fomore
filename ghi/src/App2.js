import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Nav from "./Nav";
import ItineraryForm from "./ItineraryForm";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/app" element={<Main />} />
          <Route path="/ItineraryForm" element={<ItineraryForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
