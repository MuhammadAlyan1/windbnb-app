import React from "react";

// Hooks
import { useState, useEffect, useContext } from "react";
import { staysContext } from "../../App";

// css
import "./GuestsChoice.css";

const GuestsChoice = () => {
  const { dispatch } = useContext(staysContext);

  const [adultsAmount, setAdultsAmount] = useState(0);
  const [childrenAmount, setChildrenAmount] = useState(0);

  function increaseAdultsAmount() {
    setAdultsAmount(adultsAmount + 1);
  }

  function decreaseAdultsAmount() {
    if (adultsAmount < 1) return;
    setAdultsAmount(adultsAmount - 1);
  }

  function increaseChildrenAmount() {
    setChildrenAmount(childrenAmount + 1);
  }

  function decreaseChildrenAmount() {
    if (childrenAmount < 1) return;
    setChildrenAmount(childrenAmount - 1);
  }

  useEffect(() => {
    dispatch({ type: "SET_GUESTS", payload: adultsAmount + childrenAmount });
  }, [adultsAmount, childrenAmount]);

  return (
    <div className="guests-choice">
      <div className="adult-counter">
        <p className="adult-title">Adults</p>
        <p className="adult-description">Ages 13 or above</p>
        <div className="adult-counter-div">
          <button onClick={decreaseAdultsAmount}>-</button>
          <p>{adultsAmount}</p>
          <button onClick={increaseAdultsAmount}>+</button>
        </div>
      </div>

      <div className="children-counter">
        <p className="children-title">Children</p>
        <p className="children-description">Ages 2 - 12</p>
        <div className="children-counter-div">
          <button onClick={decreaseChildrenAmount}>-</button>
          <p>{childrenAmount}</p>
          <button onClick={increaseChildrenAmount}>+</button>
        </div>
      </div>
    </div>
  );
};

export default GuestsChoice;
