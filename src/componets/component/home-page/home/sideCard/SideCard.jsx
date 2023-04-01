import React from "react";
import "./SideCard.css";



const SideCard = ({ bookmarkedTitle, timing }) => {
  return (
    <div className="side-card  position-sticky">
      <div className="timing mb-5 card bg-secondary">
        <h2 className="text-start">
          <span className="text-light">Spend Time on Read </span> :{" "}
          <span className="text-danger">{timing}</span>{" "}
          <span className="text-info">Min</span>
        </h2>
      </div>
      <div className="bookmark-blog card bg-secondary mb-5">
        <h3>
          <span className="text-light fw-bold">Bookmark blogs</span>{" "}
          <span className="text-danger">:</span>{" "}
          <span className="text-warning">{bookmarkedTitle.length}</span>
        </h3>

        {bookmarkedTitle.map((bookMark) => (
          <div className="card mb-3">
            <p>
              {" "}
              <span className="fst-italic">{bookMark}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideCard;
