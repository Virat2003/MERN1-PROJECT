import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CreateListing from "./pages/CreateListing";
import SpaceDetails from "./pages/SpaceDetails";
import Bookinglist from "./pages/Bookinglist";
import PropertyList from "./pages/PropertyList";
import { Category } from "@mui/icons-material";
import Categorypage from "./pages/Categorypage";
import Searchpage from "./pages/Searchpage";

function App() {
  return (
    <div >
            <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/properties/:listingId" element={<SpaceDetails />} />
          <Route path="/properties/category/:category" element={<Categorypage />} />
          <Route path="/properties/search/:search" element={<Searchpage />} />
          <Route path="/users/:userId/bookings" element={<Bookinglist />} />
          <Route path="/users/:userId/properties" element={<PropertyList />} />


          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
