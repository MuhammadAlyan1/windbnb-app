import React from "react";

// Hooks
import { useContext } from "react";
import { staysContext } from "../../App";
import { useNavigate } from "react-router-dom";

// components
import ClosedModal from "./ClosedModal";
import OpenedModal from "./OpenedModal";

// css
import "./SearchBar.css";

// images
import Logo from "../../assets/logo.svg";

const SearchBar = () => {
  const { state } = useContext(staysContext);
  const navigate = useNavigate();

  if (!state.isModalShowing) {
    return (
      <nav className="navbar">
        <div className="image-div">
          <img onClick={() => navigate("/windbnb-app")} src={Logo} alt="logo" />
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
