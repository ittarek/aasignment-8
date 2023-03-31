import React from "react";
import "./SingleCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import SideCard from "../home/sideCard/SideCard";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const SingleCard = ({ programer, handleCard, handleMinutes }) => {
  const { authorName, id, Time, title, coverImage, authorImage, publishDate } =
    programer;
  

  return (
    <div className="programer-container card mb-5 p-4">
      <div className="programer-card h-100">
        <img
          className="card-img-top img-fluid w-100 h-50 rounded"
          src={coverImage}
          alt=""
        />
        <div className="card-body">
          <div className="programer-heading d-flex justify-content-between">
            <div className="author-details d-flex mt-3">
              <div className="author-image me-1">
                <img className="img-fluid" src={authorImage} alt="" />
              </div>
              <div className="nameAndDate">
                <p className="fw-bold">{authorName}</p>
                <p className="text-secondary">{publishDate}</p>
              </div>
            </div>
            <div className="read-time">
              {Time} <span className="me-1">min read</span>
              <button onClick={() => handleCard(title)}>
                {" "}
                <FontAwesomeIcon icon={faBookmark} />{" "}
                { <ToastContainer />}
              
              </button>
            </div>
          </div>
          <div className="title text-start">
            <p className="fw-bold fs-3">{title}</p>

            <button
              onClick={() => handleMinutes(Time)}
              className="btn text-secondary card-footer"
            >
              <u className="">Mark as Read</u>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
