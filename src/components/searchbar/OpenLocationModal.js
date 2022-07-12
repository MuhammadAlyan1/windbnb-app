// icons
import { MdLocationOn } from "react-icons/md";

// Hooks
import { useState, useContext } from "react";
import { staysContext } from "../../App";

import React from "react";

const OpenLocationModal = () => {
  const { state, dispatch } = useContext(staysContext);

  return (
    <div className="location-choice">
      <p
        onClick={() => dispatch({ type: "SET_LOCATION", payload: "Helsinki" })}
      >
        <MdLocationOn className="location-icon" /> Helsinki, Finland
      </p>
      <p onClick={() => dispatch({ type: "SET_LOCATION", payload: "Turku" })}>
        <MdLocationOn className="location-icon" /> Turku, Finland
      </p>
      <p onClick={() => dispatch({ type: "SET_LOCATION", payload: "Oulu" })}>
        <MdLocationOn className="location-icon" /> Oulu, Finland
      </p>
      <p onClick={() => dispatch({ type: "SET_LOCATION", payload: "Vaasa" })}>
        <MdLocationOn className="location-icon" /> Vaasa, Finland
      </p>
    </div>
  );
};

export default OpenLocationModal;
