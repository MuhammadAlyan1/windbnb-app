// components
import StaysList from "./components/StaysList";
import SearchBar from "./components/searchbar/SearchBar";

// Hooks
import { useReducer, createContext } from "react";
import { reducer } from "./reducer.js";

// data
import data from "./stays.json";

// css
import "./App.css";

export const staysContext = createContext(null);

function App() {
  const default_value = {
    stays: [...data],
    filteredStays: [...data.filter((stay) => stay.city === "Helsinki")],
    isModalShowing: false,
    guestsAmount: 0,
    location: "Helsinki",
    isLocationOpen: false,
    isGuestsOpen: false,
  };

  const [state, dispatch] = useReducer(reducer, default_value);

  return (
    <div className="App">
      <staysContext.Provider value={{ state, dispatch }}>
        <SearchBar />
        <StaysList />
      </staysContext.Provider>
    </div>
  );
}

export default App;
