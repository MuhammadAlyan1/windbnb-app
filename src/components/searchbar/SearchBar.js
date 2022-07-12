import React from "react";

// icons
import { GoSearch } from "react-icons/go";
import { MdLocationOn } from "react-icons/md";

// Hooks
import { useState, useContext } from "react";
import { staysContext } from "../../App";

// components
import ClosedModal from "./ClosedModal";
import OpenedModal from "./OpenedModal";
import OpenLocationModal from "./OpenLocationModal";

// css
import "./SearchBar.css";
import GuestsChoice from "./GuestsChoice";

const SearchBar = () => {
  const { state, dispatch } = useContext(staysContext);

  if (!state.isModalShowing) {
    <ClosedModal />;
  }

  return (
    <section className="modal-container">
      <OpenedModal />

      {state.isLocationOpen && <OpenLocationModal />}

      {state.isGuestsOpen && <GuestsChoice />}
    </section>
  );
};

export default SearchBar;
