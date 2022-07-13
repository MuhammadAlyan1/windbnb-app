import React from "react";

// Hooks
import { useContext } from "react";
import { staysContext } from "../../App";

// icons
import { ImSearch } from "react-icons/im";

// components
import OpenLocationModal from "./OpenLocationModal";
import GuestsChoice from "./GuestsChoice";

// css
import "./OpenedModal.css";

const OpenedModal = () => {
  const { state, dispatch } = useContext(staysContext);

  function search() {
    dispatch({ type: "CLOSE_MODAL" });
    dispatch({ type: "SEARCH" });
  }

  return (
    <div className="opened-modal-container">
      <div className="opened-searchBar">
        <div
          onClick={() => dispatch({ type: "OPEN_LOCATION" })}
          className="location-div"
        >
          <p className="location-placeholder">location</p>
          {state.location === "Finland" ? (
            <p className="location-name">Finland</p>
          ) : (
            <p className="location-name">{state.location}, Finland</p>
          )}
        </div>

        <div
          onClick={() => dispatch({ type: "OPEN_GUESTS" })}
          className="guests-div"
        >
          <p className="guests-placeholder">guests</p>
          <p className="guests-amount">
            {state.guestsAmount ? state.guestsAmount + " guests" : "add guests"}{" "}
          </p>
        </div>

        <div className="search">
          <button onClick={search}>
            <ImSearch /> Search
          </button>
        </div>
      </div>
      {state.isLocationOpen && <OpenLocationModal />}
      {state.isGuestsOpen && <GuestsChoice />}
    </div>
  );
};

export default OpenedModal;
