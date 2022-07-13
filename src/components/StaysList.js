import React from "react";

// components
import SingleStay from "./SingleStay";

// css
import "./StaysList.css";

// data
import { staysContext } from "../App";

// Hooks
import { useContext } from "react";

const StaysList = () => {
  const { state } = useContext(staysContext);

  const { filteredStays } = state;

  return (
    <section className="stays-container">
      <div className="stays-location-amount">
        <h3 className="stays-in-location-heading">stays in {state.location}</h3>
        <p className="stays-amount-heading">{filteredStays.length} stays</p>
      </div>
      <section className="staysList">
        {filteredStays.map((stay, index) => {
          return <SingleStay key={index} {...stay} />;
        })}
      </section>
    </section>
  );
};

export default StaysList;
