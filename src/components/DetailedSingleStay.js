import React from "react";

// Hooks
import { useParams } from "react-router-dom";
import { staysContext } from "../App";
import { useContext } from "react";

// Icons
import { AiFillStar } from "react-icons/ai";
import { IoIosBed } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";

// css
import "./DetailedSingleStay.css";

const DetailedSingleStay = () => {
  const { stayID } = useParams();

  const {
    state: { stays },
  } = useContext(staysContext);

  const selectedStay = stays.find((stay) => stay.id === stayID);

  const {
    city,
    country,
    superHost,
    title,
    rating,
    maxGuests,
    type,
    beds,
    photo,
  } = selectedStay;

  return (
    <section className="detailedSingleStay">
      <div className="image-div">
        <img src={photo} alt={title} />
      </div>
      <article className="content-div">
        <div className="about-stay-div">
          <h2 className="stay-title">{title}</h2>
          <p className="stay-location">
            {city}, {country}
          </p>
          <p className="stay-type">{type}</p>
          {superHost && <p className="stay-superhost">super host</p>}
        </div>
        <div className="stay-stats">
          <div className="stay-rating-div">
            <AiFillStar />
            <p>{rating}</p>
          </div>
          <div className="stay-guests-div">
            <BsFillPeopleFill />
            <p>{maxGuests}</p>
          </div>
          <div className="stay-bed-div">
            <IoIosBed />
            <p>{beds}</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default DetailedSingleStay;
