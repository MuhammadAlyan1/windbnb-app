import React from "react";

// Hooks
import { useContext } from "react";
import { staysContext } from "../../App";

// components
import ClosedModal from "./ClosedModal";
import OpenedModal from "./OpenedModal";

// css
import "./SearchBar.css";

// images
import Logo from "../../assets/logo.svg";

const SearchBar = () => {
  const { state } = useContext(staysContext);

  console.log("isModalShowing: ", state.isModalShowing);

  if (!state.isModalShowing) {
    return (
      <nav className="navbar">
        <div className="image-div">
          <img src={Logo} alt="logo" />
        </div>
        <ClosedModal />
      </nav>
    );
  }

  return (
    <section className="modal-container">
      <OpenedModal />
    </section>
  );
};

export default SearchBar;
