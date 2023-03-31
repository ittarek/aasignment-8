import React from "react";
import "./SideCard.css";

import { useState, useEffect } from "react";

const SideCard = ({ bookmarkedTitle, timing}) => {
  return (
    <div className="side-card  position-sticky">
      <div className="timing mb-5 card bg-secondary">
        <h2 className="text-start ">Spend Time on Read :{timing} min</h2>
      </div>
      <div className="bookmark-blog card bg-secondary mb-5">
        <h3>Bookmark blog :</h3>
        {/* <h2>Bookmark blog : {bookmarkedTitle}</h2> */}
        {
          bookmarkedTitle.map(bookMark => <div className="card mb-3"><p>bookMark : {bookMark}</p></div>)
        }
      </div>
    </div>
  );
};

export default SideCard;
