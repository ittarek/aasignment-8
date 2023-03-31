import React from "react";
import "./SingleCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import SideCard from "../home/sideCard/SideCard";

const SingleCard = ({ programer, handleBookMark }) => {
  const { authorName, id, Time, title, coverImage, authorImage, publishDate } =
    programer;

  return (
       <div className="programer-container card w-100 mb-5 p-4">
        <div className="programer-card">
          <img className="img-fluid w-100 rounded" src={coverImage} alt="" />
          <div className="programer-heading d-flex justify-content-between">
            <div className="author-details d-flex mt-3">
              <div className="author-image me-3">
                <img className="img-fluid" src={authorImage} alt="" />
              </div>
              <div className="nameAndDate">
                <p>{authorName}</p>
                <p>{publishDate}</p>
              </div>
            </div>
            <div className="read-time mt-3">
              {Time} min read
              <button onClick={()=>handleBookMark(title)}>
                {" "}
                <FontAwesomeIcon icon={faBookmark} />
              </button>
            </div>
          </div>
          <div className="title text-start">
            <p className="fw-bold fs-3">{title}</p>

            <button className="btn text-secondary">
              <u>Mark as Read</u>
            </button>
          </div>
        </div>
      </div>
   
  );
};

export default SingleCard;
