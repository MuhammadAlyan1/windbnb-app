import React from "react";

// Hooks
import { useContext } from "react";
import { staysContext } from "../../App";

// icons
import { ImSearch } from "react-icons/im";

// css
import "./ClosedModal.css";

const ClosedModal = () => {
  const { state, dispatch } = useContext(staysContext);

  function search() {
    dispatch({ type: "CLOSE_MODAL" });
    dispatch({ type: "SEARCH" });
  }

  return (
    <div className="closed-searchBar">
      <div
        onClick={() => dispatch({ type: "OPEN_LOCATION" })}
        className="location-div"
      >
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
        <p className="guests-amount">
          {state.guestsAmount ? state.guestsAmount + " guests" : "add guests"}
        </p>
      </div>
      <button onClick={search} className="search">
        <ImSearch />
      </button>
    </div>
  );
};

export default ClosedModal;
