// components
import StaysList from "./components/StaysList";
import SearchBar from "./components/searchbar/SearchBar";

// Hooks
import { useState, useReducer, createContext } from "react";

// data
import data from "./stays.json";

// css
import "./App.css";

export const staysContext = createContext(null);

export function reducer(state, action) {
  switch (action.type) {
    case "OPEN_LOCATION":
      return {
        ...state,
        isModalShowing: true,
        isLocationOpen: true,
        isGuestsOpen: false,
      };

    case "OPEN_GUESTS":
      return {
        ...state,
        isModalShowing: true,
        isLocationOpen: false,
        isGuestsOpen: true,
      };

    case "CLOSE_MODAL":
      return {
        ...state,
        isModalShowing: false,
        isLocationOpen: false,
        isGuestsOpen: false,
      };

    case "SET_LOCATION":
      return {
        ...state,
        location: action.payload,
      };

    case "SET_GUESTS":
      return {
        ...state,
        guestsAmount: action.payload,
      };

    case "SEARCH":
      const staysInCurrentLocation = state.stays.filter(
        (stay) => stay.city === state.location
      );

      console.log("staysInCurrentLocation: ", staysInCurrentLocation);

      if (state.guestsAmount > 0) {
        const staysInCurrentLocation_MaxGuests = staysInCurrentLocation.filter(
          (stay) => stay.maxGuests >= state.guestsAmount
        );
        console.log("maxGuests", staysInCurrentLocation_MaxGuests);
        return {
          ...state,
          filteredStays: [...staysInCurrentLocation_MaxGuests],
        };
      }

      return {
        ...state,
        filteredStays: [...staysInCurrentLocation],
      };

    default:
      return {
        ...state,
      };
  }
}

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

  console.log("default_value.filteredStays: ", default_value.filteredStays);

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
