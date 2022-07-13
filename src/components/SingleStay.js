import React from "react";

// Hooks
import { useNavigate } from "react-router-dom";

// icon
import { AiFillStar } from "react-icons/ai";

// css
import "./SingleStay.css";

const SingleStay = (props) => {
  const { id, superHost, title, rating, type, beds, photo } = props;
  const navigate = useNavigate();

  return (
    <article onClick={() => navigate(`/${id}`)} className="SingleStay">
      <div className="image-div">
        <img src={photo} alt={title} />
      </div>
      <div className="stay-header">
        {superHost && <p className="superhost">super host</p>}

        {type === "Entire apartment" && beds ? (
          <p className="stay-type">
            {type} <span className="stay-beds">. {beds} beds</span>
          </p>
        ) : (
          <p className="stay-type">{type}</p>
        )}

        <p className="stay-rating">
          <AiFillStar className="star-icon" /> {rating}
        </p>
      </div>
      <div className="title-div">
        <h2 className="stay-title">{title}</h2>
      </div>
    </article>
  );
};

export default SingleStay;
