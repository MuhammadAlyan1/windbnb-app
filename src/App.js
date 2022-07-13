// components
import StaysList from "./components/StaysList";
import SearchBar from "./components/searchbar/SearchBar";
import DetailedSingleStay from "./components/DetailedSingleStay";

// Hooks
import { useReducer, createContext } from "react";
import { reducer } from "./reducer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// data
import data from "./stays.json";

// css
import "./App.css";

export const staysContext = createContext(null);

function App() {
  const default_value = {
    stays: [...data],
    filteredStays: [...data],
    isModalShowing: false,
    guestsAmount: 0,
    location: "Finland",
    isLocationOpen: false,
    isGuestsOpen: false,
  };

  const [state, dispatch] = useReducer(reducer, default_value);

  return (
    <Router>
      <staysContext.Provider value={{ state, dispatch }}>
        <SearchBar />
      </staysContext.Provider>
      <Routes>
        <Route
          path="/windbnb-app"
          element={
            <staysContext.Provider value={{ state, dispatch }}>
              <StaysList />
            </staysContext.Provider>
          }
        />
        <Route
          path="/:stayID"
          element={
            <staysContext.Provider value={{ state, dispatch }}>
              <DetailedSingleStay />
            </staysContext.Provider>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
