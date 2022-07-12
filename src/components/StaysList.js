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
  const {
    state: { filteredStays },
  } = useContext(staysContext);

  return (
    <section className="staysList">
      {filteredStays.map((stay, index) => {
        return <SingleStay key={index} {...stay} />;
      })}
      <SingleStay />
    </section>
  );
};

export default StaysList;
