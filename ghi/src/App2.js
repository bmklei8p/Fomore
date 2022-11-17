import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Main";
import Nav from "./Nav";
import SalesPersonForm from "./ItineraryForm";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ItineraryForm" element={<SalesPersonForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
